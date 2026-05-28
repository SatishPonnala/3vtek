/* 3V TEK — Shared site data, navbar, footer, reveal, toast */

window.COMPANY = {
  name: "3V TEK",
  tagline: "Home Theaters · Acoustics · Automation",
  since: 2016,
  experience: 20,
  phone: "9700001617",
  phoneDisplay: "+91 97000 01617",
  emails: ["info@3vtek.com"],
  website: "https://3vtek.com/",
  address: "SS Plaza, 401, Rd Number 4, Banjara Hills, Hyderabad, Telangana 500034",
  mapUrl: "https://maps.app.goo.gl/NXw88sERJRh9C4dh9",
  mapEmbed: "https://www.google.com/maps?q=SS+Plaza+Road+Number+4+Banjara+Hills+Hyderabad&output=embed",
};

window.NAV_LINKS = [{
    href: "index.html",
    label: "Home",
    keys: ["index.html", ""]
  },
  {
    href: "services.html",
    label: "Services",
    keys: ["services.html"]
  },
  {
    href: "product_catagery.html",
    label: "Products",
    keys: "product_catagery.html"
  },
  {
    href: "brand-partners.html",
    label: "Brand Partners",
    keys: ["brand-partners.html"]
  },
  {
    href: "projects.html",
    label: "Projects",
    keys: ["projects.html"]
  },
  {
    href: "about.html",
    label: "About",
    keys: ["about.html"]
  },
  {
    href: "contact.html",
    label: "Contact",
    keys: ["contact.html"]
  },
];

window.BRANDS = {
  Subwoofers: ["TAGA HARMONY", "MISSION", "Q ACOUSTICS", "ELAC", "B&W", "MONITOR AUDIO", "STARK SOUND", "WHARFEDALE", "SVS", "REL ACOUSTICS", "SUNFIRE", "KEF", "POLK AUDIO", "KLIPSCH", "DEFINITIVE TECHNOLOGY", "PARADIGM", "JL AUDIO", "EARTHQUAKE SOUND", "SONODYNE", "DALI"],
  Speakers: ["BOSE", "Q ACOUSTICS", "MONITOR AUDIO", "MISSION", "TAGA HARMONY", "MAGNAT", "HECO", "BOWERS & WILKINS", "GOLDEN EAR", "FOCAL", "WHARFEDALE", "FYNE AUDIO", "PHASE TECHNOLOGY", "ELAC", "SONUS FABER", "DALI", "KEF", "KLIPSCH", "POLK AUDIO", "GENELEC"],
  Amplifiers: ["PIONEER", "TONE WINNER", "DENON", "MARANTZ", "YAMAHA", "ONKYO", "INTEGRA", "ANTHEM", "ARCAM", "NAD", "ROTEL", "CAMBRIDGE AUDIO", "MCINTOSH", "PARASOUND", "EMOTIVA", "HARMAN KARDON"],
  Projectors: ["SONY", "EPSON", "BENQ", "OPTOMA", "JVC", "BARCO", "PANASONIC", "LG", "VIEWSONIC", "ACER", "NEC", "CHRISTIE", "VIVITEK", "DIGITAL PROJECTION", "HISENSE", "XGIMI"],
  Screens: ["ELITE", "LIBERTY", "STEWART FILMSCREEN", "DA-LITE", "SCREEN INNOVATIONS", "SEVERTSON", "DRAPER", "GRANDVIEW", "VUTEC", "EPV SCREENS", "SI SCREENS", "LUMENE", "CELEXON", "OS SCREEN", "SAPPHIRE"],
};

window.BRAND_DOMAINS = {
  "SVS": "svsound.com",
  "REL ACOUSTICS": "rel.net",
  "SUNFIRE": "sunfire.com",
  "KEF": "kef.com",
  "POLK AUDIO": "polkaudio.com",
  "KLIPSCH": "klipsch.com",
  "DEFINITIVE TECHNOLOGY": "definitivetechnology.com",
  "PARADIGM": "paradigm.com",
  "JL AUDIO": "jlaudio.com",
  "EARTHQUAKE SOUND": "earthquakesound.com",
  "SONODYNE": "sonodyne.com",
  "DALI": "dali-speakers.com",
  "SONUS FABER": "sonusfaber.com",
  "GENELEC": "genelec.com",
  "YAMAHA": "yamaha.com",
  "ONKYO": "onkyo.com",
  "INTEGRA": "integrahometheater.com",
  "ANTHEM": "anthemav.com",
  "ARCAM": "arcam.co.uk",
  "NAD": "nadelectronics.com",
  "ROTEL": "rotel.com",
  "CAMBRIDGE AUDIO": "cambridgeaudio.com",
  "MCINTOSH": "mcintoshlabs.com",
  "PARASOUND": "parasound.com",
  "EMOTIVA": "emotiva.com",
  "HARMAN KARDON": "harmankardon.com",
  "BARCO": "barco.com",
  "PANASONIC": "panasonic.com",
  "LG": "lg.com",
  // "VIEWSONIC": "viewsonic.com",
  "ACER": "acer.com",
  "NEC": "nec-display.com",
  "CHRISTIE": "christiedigital.com",
  "VIVITEK": "vivitek.com",
  "DIGITAL PROJECTION": "digitalprojection.com",
  "HISENSE": "hisense.com",
  "XGIMI": "xgimi.com",
  "STEWART FILMSCREEN": "stewartfilmscreen.com",
  "DA-LITE": "da-lite.com",
  "SCREEN INNOVATIONS": "screeninnovations.com",
  "SEVERTSON": "severtsonscreens.com",
  "DRAPER": "draperinc.com",
  "GRANDVIEW": "grandviewscreen.com",
  "VUTEC": "vutec.com",
  "EPV SCREENS": "epvscreens.com",
  "SI SCREENS": "screeninnovations.com",
  "LUMENE": "lumene-screens.com",
  "CELEXON": "celexon.com",
  "OS SCREEN": "os-worldwide.com",
  "SAPPHIRE": "sapphireav.com",
  "TAGA HARMONY": "tagaharmony.com",
  "MISSION": "mission.co.uk",
  "Q ACOUSTICS": "qacoustics.com",
  "Q ACOUSTIC": "qacoustics.com",
  "ELAC": "elac.com",
  "B&W": "bowerswilkins.com",
  "BOWERS & WILKINS": "bowerswilkins.com",
  "MONITOR AUDIO": "monitoraudio.com",
  "STARK SOUND": "starksound.com",
  "WHARFEDALE": "wharfedale.co.uk",
  "BOSE": "bose.com",
  "MAGNAT": "magnat.de",
  "HECO": "heco-audio.de",
  "GOLDEN EAR": "goldenear.com",
  "FOCAL": "focal.com",
  "FYNE AUDIO": "fyneaudio.com",
  "PHASE TECHNOLOGY": "phasetech.com",
  "PIONEER": "pioneer-audiovisual.com",
  "TONE WINNER": "tonewinner.com",
  "DENON": "denon.com",
  "MARANTZ": "marantz.com",
  "SONY": "sony.com",
  "EPSON": "epson.com",
  "BENQ": "benq.com",
  "OPTOMA": "optoma.com",
  "JVC": "jvc.com",
  "ELITE": "elitescreens.com",
  "LIBERTY": "libertyonline.in"
};

// Local brand logos mapping — expose early so pages can read it synchronously
var LOCAL_BRAND_LOGOS = {
  "SONY": "assets/Brand-logos/Sony-Logo.webp",
  "JVC": "assets/Brand-logos/JVC.webp",
  "OPTOMA": "assets/Brand-logos/Optoma.webp",
  "BENQ": "assets/Brand-logos/Benq.webp",
  "DENON": "assets/Brand-logos/Denon.webp",
  "MARANTZ": "assets/Brand-logos/Marantz.webp",
  "TONE WINNER": "assets/Brand-logos/Tonewinner.webp",
  "ROTEL": "assets/Brand-logos/rotel.webp",
  "PARASOUND": "assets/Brand-logos/Parasound.webp",
  "EMOTIVA": "assets/Brand-logos/emotiva.webp",
  "BOWERS & WILKINS": "assets/Brand-logos/B&W Bowers Wilkins.webp",
  "BOSE": "assets/Brand-logos/Bose.webp",
  "MONITOR AUDIO": "assets/Brand-logos/monitor-audio.webp",
  "FOCAL": "assets/Brand-logos/Focal.webp",
  "GOLDEN EAR": "assets/Brand-logos/Golden ear.webp",
  "WHARFEDALE": "assets/Brand-logos/Wharfedale.webp",
  "ELAC": "assets/Brand-logos/Elac.webp",
  "KLIPSCH": "assets/Brand-logos/klipsch.webp",
  "FYNE AUDIO": "assets/Brand-logos/fyne.webp",
  "TOTEM": "assets/Brand-logos/totem.webp",
  "EPISODE": "assets/Brand-logos/Episode.webp",
  "TAGA HARMONY": "assets/Brand-logos/Taga.webp",
  "MISSION": "assets/Brand-logos/Mission.webp",
  "Q ACOUSTICS": "assets/Brand-logos/Q Acoustics.webp",
  "ELITE": "assets/Brand-logos/Elite.webp",
  "MONOPRICE": "assets/Brand-logos/Monoprice.webp",
  "KONIG": "assets/Brand-logos/Konig.webp",
  "BANDRIDGE": "assets/Brand-logos/bandridge.webp",
  "EARTHQUAKE SOUND": "assets/Brand-logos/Earthquake-Sound.webp",
  "ELIPSON": "assets/Brand-logos/Elipson.webp",
};
window.LOCAL_BRAND_LOGOS = LOCAL_BRAND_LOGOS;

var LOCAL_CLIENTELE_LOGOS = {
  "Aadhya Convention": "assets/Clientele Logos/Aadhya Convention.webp",
  "DGR Convention": "assets/Clientele Logos/DGR Convention.webp",
  "Lore Resorts": "assets/Clientele Logos/Lore resorts.webp",
  "Myhome Groups": "assets/Clientele Logos/Myhome Group.webp",
  "Pramida conventions": "assets/Clientele Logos/Pramida conventions.webp",
  "Primark": "assets/Clientele Logos/Primark.webp",
  "TV 9": "assets/Clientele Logos/TV 9.webp",
  "Vara Convention": "assets/Clientele Logos/Vara Convention.webp",
  "Veda Convention": "assets/Clientele Logos/Veda convention.webp",
}
window.LOCAL_CLIENTELE_LOGOS = LOCAL_CLIENTELE_LOGOS;

window.brandLogoUrl = function (name) {
  // use the pre-exposed mapping if available
  var localLogos = window.LOCAL_BRAND_LOGOS || {};
  if (localLogos[name.toUpperCase()]) {
    return localLogos[name.toUpperCase()];
  }

  var d = window.BRAND_DOMAINS[name.toUpperCase()] || window.BRAND_DOMAINS[name];
  return d ? "https://logo.clearbit.com/" + d : null;
};

/* Icons (inline SVG strings) */
window.ICON = {
  arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
  arrowUpRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>',
  arrowLeft: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><polygon points="5 3 19 12 5 21 5 3"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  sliders: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  chevLeft: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><polyline points="15 18 9 12 15 6"/></svg>',
  chevRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><polyline points="9 18 15 12 9 6"/></svg>',
  zoom: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.1A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.1 9.4.1 9.4.1s7.5 0 9.4-.1a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>',
  fb: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
  li: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
  compass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>',
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
  sparkles: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.4z"/></svg>',
  headphones: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>',
  speaker: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><circle cx="12" cy="14" r="4"/><line x1="12" y1="6" x2="12.01" y2="6"/></svg>',
  settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
};

/* Helpers */
window.qs = function (s, r) {
  return (r || document).querySelector(s);
};
window.qsa = function (s, r) {
  return Array.prototype.slice.call((r || document).querySelectorAll(s));
};
window.escapeHtml = function (s) {
  return String(s).replace(/[&<>"']/g, function (c) {
    return ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    } [c]);
  });
};
window.currentPage = function () {
  var p = location.pathname.split("/").pop() || "index.html";
  return p;
};

/* Navbar render */
window.renderNavbar = function (opts) {
  opts = opts || {};
  var page = window.currentPage();
  var darkClass = opts.dark ? " on-dark" : "";
  var nav = window.NAV_LINKS.map(function (l) {
    var active = l.keys.indexOf(page) !== -1 ? " active" : "";
    return '<a href="' + l.href + '" class="' + active + '">' + l.label + '</a>';
  }).join("");
  var navMobile = window.NAV_LINKS.map(function (l) {
    var active = l.keys.indexOf(page) !== -1 ? " active" : "";
    return '<a href="' + l.href + '" class="' + active + '">' + l.label + '</a>';
  }).join("");

  document.body.insertAdjacentHTML("afterbegin",
    '<header class="navbar' + darkClass + '" id="site-navbar">' +
    '<div class="container-3v nav-row">' +
    '<a href="index.html" class="brand" aria-label="3V TEK home">' +
    '<img src="assets/Logo.webp" alt="3V TEK" class="brand-logo">' +
    '</a>' +
    '<nav class="nav-links">' + nav + '</nav>' +
    '<a href="contact.html" class="btn btn-ink nav-cta">Book a Demo</a>' +
    '<button class="nav-toggle" id="nav-toggle" aria-label="Open menu">' + window.ICON.menu + '</button>' +
    '</div>' +
    '</header>' +
    '<div class="mobile-menu" id="mobile-menu">' +
    '<div class="container-3v" style="height:100%;display:flex;flex-direction:column;justify-content:space-between;">' +
    '<nav>' + navMobile + '</nav>' +
    '<div class="mobile-meta">' +
    '<p>' + window.COMPANY.phoneDisplay + '</p>' +
    '<p>' + window.COMPANY.emails[0] + '</p>' +
    '<p class="small">' + window.COMPANY.address + '</p>' +
    '</div>' +
    '</div>' +
    '</div>'
  );

  var navbar = document.getElementById("site-navbar");
  var menu = document.getElementById("mobile-menu");
  var toggle = document.getElementById("nav-toggle");

  function setOpen(o) {
    menu.classList.toggle("open", o);
    toggle.innerHTML = o ? window.ICON.close : window.ICON.menu;
    document.body.style.overflow = o ? "hidden" : "";
  }
  toggle.addEventListener("click", function () {
    setOpen(!menu.classList.contains("open"));
  });

  function onScroll() {
    navbar.classList.toggle("scrolled", window.scrollY > 24);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, {
    passive: true
  });
};

/* Footer render */
window.renderFooter = function () {
  var c = window.COMPANY;
  var explore = window.NAV_LINKS
    .map(function (l) {
      return '<li><a href="' + l.href + '" class="link-underline">' + l.label + '</a></li>';
    }).join("");
  var emails = c.emails.map(function (e) {
    return '<a href="mailto:' + e + '">' + e + '</a>';
  }).join(" | ");
  var html =
    '<footer class="footer">' +
    '<div class="container-3v footer-wrap">' +
    '<div class="footer-grid">' +
    '<div>' +
    '<div class="brand footer-brand"><img src="assets/Logo.webp" alt="3V TEK" class="brand-logo"></div>' +
    '<p class="meta">Bespoke home theaters, acoustic engineering and smart automation. Crafted in Hyderabad since ' + c.since + '.</p>' +
    '<div class="socials">' +
    '<a href="https://www.instagram.com/3vtekllp/" aria-label="Instagram" target="_blank" rel="noreferrer">' + window.ICON.ig + '</a>' +
    '<a href="https://www.facebook.com/share/1FXLkiHAzW/" aria-label="Facebook" target="_blank" rel="noreferrer">' + window.ICON.fb + '</a>' +
    '<a href="https://www.linkedin.com/in/3v-tek-llp-78b420234/" aria-label="LinkedIn" target="_blank" rel="noreferrer">' + window.ICON.li + '</a>' +
    '<a href="https://www.youtube.com/@3vtekllp" aria-label="YouTube" target="_blank" rel="noreferrer">' + window.ICON.youtube + '</a>' +
    '</div>' +
    '</div>' +
    '<div><h4>Explore</h4><ul>' + explore + '</ul></div>' +
    '<div><h4>Services</h4><ul><li>Home Theatres</li><li>Multi-Room Audio</li><li>Acoustic Engineering</li><li>Conference Rooms</li><li>Auditoriums &amp; Cinemas</li><li>Smart Automation</li></ul></div>' +
    '<div><h4>Get in touch</h4><ul>' +
    '<li>' + window.ICON.phone + '<a href="tel:' + c.phone + '">' + c.phoneDisplay + '</a></li>' +
    '<li>' + window.ICON.mail + '<div>' + emails + '</div></li>' +
    '<li>' + window.ICON.globe + '<a href="' + c.website + '">3vtek.com</a></li>' +
    '<li>' + window.ICON.pin + '<a href="' + c.mapUrl + '" target="_blank" rel="noreferrer">' + c.address + '</a></li>' +
    '</ul></div>' +
    '</div>' +
    '<div class="footer-bottom"><p>© ' + (new Date().getFullYear()) + ' ' + c.name + '. All rights reserved.</p><p class="it">Finding creative solutions and flawlessly executing them.</p></div>' +
    '</div>' +
    '</footer>';
  document.body.insertAdjacentHTML("beforeend", html);
};

/* Reveal observer */
window.initReveal = function () {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        var d = e.target.getAttribute("data-delay");
        if (d) e.target.style.transitionDelay = d + "ms";
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -60px 0px"
  });
  window.qsa(".reveal").forEach(function (el) {
    io.observe(el);
  });
};

/* Toast */
window.toast = function (title, desc, type) {
  var root = document.getElementById("toast-root");
  if (!root) {
    root = document.createElement("div");
    root.id = "toast-root";
    root.className = "toast-root";
    document.body.appendChild(root);
  }
  var t = document.createElement("div");
  t.className = "toast" + (type === "error" ? " error" : "");
  t.innerHTML = '<div class="t-title">' + window.escapeHtml(title) + '</div>' + (desc ? '<div class="t-desc">' + window.escapeHtml(desc) + '</div>' : '');
  root.appendChild(t);
  requestAnimationFrame(function () {
    t.classList.add("show");
  });
  setTimeout(function () {
    t.classList.remove("show");
    setTimeout(function () {
      t.remove();
    }, 400);
  }, 3800);
};

/* Counter (number count-up on enter) */
window.initCounters = function () {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target;
      var to = parseFloat(el.getAttribute("data-to"));
      var suffix = el.getAttribute("data-suffix") || "";
      var dur = 1400;
      var start = performance.now();

      function step(ts) {
        var p = Math.min(1, (ts - start) / dur);
        var v = Math.round(to * (1 - Math.pow(1 - p, 3)));
        el.textContent = v + suffix;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
      io.unobserve(el);
    });
  }, {
    threshold: 0.4
  });
  window.qsa(".counter").forEach(function (el) {
    io.observe(el);
  });
};

/* Init helper */
window.initSite = function (opts) {
  window.renderNavbar(opts || {});
  window.renderFooter();
  window.initReveal();
  window.initCounters();
  window.scrollTo({
    top: 0
  });
};