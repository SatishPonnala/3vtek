/* Products data + CSV merge for static site */

window.PRODUCT_CATEGORIES = ["Speakers", "Subwoofers", "AV Receivers", "Projectors", "Acoustic", "Home Automation", "Cables"];
window.SPEAKER_SUBCATEGORIES = ["Floorstanding", "Bookshelf", "Center", "Atmos"];

window.slugify = function (s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
};

function p(brand, name, category, subcategory, badges) {
  return {
    id: window.slugify(brand + "-" + name),
    brand: brand,
    name: name,
    category: category,
    subcategory: subcategory,
    badges: badges
  };
}

window.BASE_PRODUCTS = [
  p("Q Acoustics", "2050i", "Speakers", "Floorstanding"),
  p("Q Acoustics", "3050i", "Speakers", "Floorstanding", ["Featured"]),
  p("Mission", "LX-5", "Speakers", "Floorstanding"),
  p("Mission", "LX-3", "Speakers", "Floorstanding"),
  p("Focal", "Aria 926", "Speakers", "Floorstanding", ["Hi-End"]),
  p("Q Acoustics", "3020i", "Speakers", "Bookshelf", ["Best Seller"]),
  p("Mission", "LX-2", "Speakers", "Bookshelf"),
  p("ELAC", "Debut B5.2", "Speakers", "Bookshelf"),
  p("ELAC", "Debut B6.2", "Speakers", "Bookshelf"),
  p("Q Acoustics", "3090Ci", "Speakers", "Center"),
  p("Mission", "LX-C", "Speakers", "Center"),
  p("Q Acoustics", "3010i Atmos", "Speakers", "Atmos"),
  p("ELAC", "Atmos Module A4.2", "Speakers", "Atmos"),
  p("TAGA Harmony", "TSW-90", "Subwoofers"),
  p("TAGA Harmony", "TSW-120", "Subwoofers"),
  p("ELAC", "SUB3010", "Subwoofers"),
  p("B&W", "ASW610", "Subwoofers"),
  p("B&W", "DB4S", "Subwoofers", undefined, ["Hi-End"]),
  p("Q Acoustics", "3060S", "Subwoofers"),
  p("Wharfedale", "SW-12", "Subwoofers"),
  p("Denon", "AVR-X1700H", "AV Receivers"),
  p("Denon", "AVR-X2700H", "AV Receivers", undefined, ["Featured"]),
  p("Denon", "AVR-X3700H", "AV Receivers"),
  p("Denon", "AVR-X4700H", "AV Receivers"),
  p("Marantz", "NR1711", "AV Receivers", undefined, ["Slimline"]),
  p("Marantz", "SR6015", "AV Receivers"),
  p("Marantz", "SR8015", "AV Receivers", undefined, ["Reference"]),
  p("Epson", "EH-TW7000", "Projectors"),
  p("Epson", "EH-TW7100", "Projectors"),
  p("Epson", "EH-TW9400", "Projectors", undefined, ["4K HDR"]),
  p("Epson", "EH-LS12000", "Projectors", undefined, ["Laser", "Hi-End"]),
  p("3V TEK", "Acoustic Wall Panel", "Acoustic"),
  p("3V TEK", "Bass Trap (Corner)", "Acoustic"),
  p("3V TEK", "Quadratic Diffuser", "Acoustic"),
  p("3V TEK", "Soundproof Board", "Acoustic"),
  p("3V TEK", 'Fixed Frame Screen 120"', "Acoustic"),
  p("3V TEK", 'Motorized Screen 120"', "Acoustic"),
  p("3V TEK", "Smart Lighting Controller", "Home Automation"),
  p("3V TEK", "Home Automation Hub", "Home Automation"),
  p("3V TEK", "Smart Switch (4-Gang)", "Home Automation"),
  p("3V TEK", "HDMI 2.1 Cable", "Cables"),
  p("3V TEK", "Speaker Cable (per metre)", "Cables"),
  p("3V TEK", "Audio Interconnect (RCA)", "Cables"),
];

/* CSV parsing */
function splitCsvLine(line) {
  var out = [],
    cur = "",
    inQ = false;
  for (var i = 0; i < line.length; i++) {
    var ch = line[i];
    if (inQ) {
      if (ch === '"' && line[i + 1] === '"') {
        cur += '"';
        i++;
      } else if (ch === '"') {
        inQ = false;
      } else cur += ch;
    } else if (ch === '"') {
      inQ = true;
    } else if (ch === ',') {
      out.push(cur);
      cur = "";
    } else cur += ch;
  }
  out.push(cur);
  return out.map(function (s) {
    return s.trim();
  });
}

function parseList(s) {
  if (!s) return undefined;
  var a = s.split("|").map(function (x) {
    return x.trim();
  }).filter(Boolean);
  return a.length ? a : undefined;
}

function parseSpecs(s) {
  if (!s) return undefined;
  var o = {};
  s.split("|").forEach(function (pair) {
    var i = pair.indexOf(":");
    if (i === -1) return;
    var k = pair.slice(0, i).trim();
    var v = pair.slice(i + 1).trim();
    if (k) o[k] = v;
  });
  return Object.keys(o).length ? o : undefined;
}

function parseCsv(text) {
  var rows = [],
    cur = "",
    inQ = false;
  for (var i = 0; i < text.length; i++) {
    var ch = text[i];
    if (ch === '"' && text[i - 1] !== "\\") inQ = !inQ;
    if ((ch === "\n" || ch === "\r") && !inQ) {
      if (cur.length) rows.push(cur);
      cur = "";
      if (ch === "\r" && text[i + 1] === "\n") i++;
    } else cur += ch;
  }
  if (cur.length) rows.push(cur);
  if (!rows.length) return [];
  var header = splitCsvLine(rows[0]).map(function (h) {
    return h.toLowerCase();
  });
  var idx = function (k) {
    return header.indexOf(k);
  };
  var colSlug = idx("slug");
  if (colSlug === -1) return [];
  return rows.slice(1).map(function (line) {
    var cells = splitCsvLine(line);
    var get = function (k) {
      var i = idx(k);
      return i >= 0 ? cells[i] : undefined;
    };
    var slug = get("slug");
    if (!slug) return {};
    return {
      id: slug,
      name: get("name") || undefined,
      brand: get("brand") || undefined,
      category: get("category") || undefined,
      subcategory: get("subcategory") || undefined,
      badges: parseList(get("badges")),
      shortDescription: get("short_description") || undefined,
      description: get("description") || undefined,
      features: parseList(get("features")),
      specs: parseSpecs(get("specs")),
      images: parseList(get("image_files")),
    };
  });
}

window.loadProducts = function () {
  return fetch("assets/products.csv", {
    cache: "no-cache"
  }).then(function (r) {
    if (!r.ok) return window.BASE_PRODUCTS.slice();
    return r.text().then(function (text) {
      var overrides = parseCsv(text);
      var map = {};
      window.BASE_PRODUCTS.forEach(function (b) {
        map[b.id] = Object.assign({}, b);
      });
      overrides.forEach(function (row) {
        if (!row.id) return;
        var ex = map[row.id];
        if (ex) {
          Object.keys(row).forEach(function (k) {
            if (row[k] !== undefined) ex[k] = row[k];
          });
          map[row.id] = ex;
        } else if (row.name && row.brand && row.category) {
          map[row.id] = row;
        }
      });
      return Object.keys(map).map(function (k) {
        return map[k];
      });
    });
  }).catch(function () {
    return window.BASE_PRODUCTS.slice();
  });
};

/* Image helpers */
window.productPlaceholder = function (product) {
  var brand = window.escapeHtml(product.brand.toUpperCase());
  var name = window.escapeHtml(product.name);
  var cat = window.escapeHtml((product.subcategory || product.category).toUpperCase());
  var svg = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600' preserveAspectRatio='xMidYMid slice'>" +
    "<defs><linearGradient id='bg' x1='0' y1='0' x2='1' y2='1'><stop offset='0%' stop-color='hsl(0,0%,100%)'/><stop offset='100%' stop-color='hsl(0,0%,93%)'/></linearGradient>" +
    "<filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.06 0'/></filter></defs>" +
    "<rect width='600' height='600' fill='url(#bg)'/><rect width='600' height='600' filter='url(#n)' opacity='0.9'/>" +
    "<rect x='0.5' y='0.5' width='599' height='599' fill='none' stroke='hsl(0,0%,82%)' stroke-width='1'/>" +
    "<g font-family='Poppins, system-ui, sans-serif' fill='hsl(0,0%,8%)'>" +
    "<text x='40' y='62' font-size='12' letter-spacing='3' font-weight='600' fill='hsl(0,0%,42%)'>" + cat + "</text>" +
    "<line x1='40' y1='80' x2='100' y2='80' stroke='hsl(0,0%,30%)' stroke-width='1'/>" +
    "<text x='40' y='340' font-size='44' font-weight='800' letter-spacing='-1.6'>" + brand + "</text>" +
    "<text x='40' y='388' font-size='22' font-weight='400' fill='hsl(0,0%,28%)'>" + name + "</text>" +
    "<line x1='40' y1='540' x2='560' y2='540' stroke='hsl(0,0%,82%)' stroke-width='1'/>" +
    "<text x='40' y='568' font-size='10' letter-spacing='2.5' font-weight='600' fill='hsl(0,0%,38%)'>3V TEK · IN-STORE DEMO</text>" +
    "<text x='560' y='568' font-size='10' letter-spacing='2.5' font-weight='600' text-anchor='end' fill='hsl(0,0%,38%)'>BANJARA HILLS</text>" +
    "</g></svg>";
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
};
window.productImages = function (product) {
  if (product.images && product.images.length) {
    return product.images.map(function (f) {
      if (f.indexOf("http") == 0 || f.indexOf("/") == 0) return f;

      // Handle file:// protocol
      if (window.location.protocol === 'file:') {
        return window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/')) + '/products/' + f;
      }
      return "products/" + f;
    });
  }
  return [window.productPlaceholder(product)];
};
window.productImage = function (p) {
  return window.productImages(p)[0];
};