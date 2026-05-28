/* Products page logic */
window.initSite();
document.getElementById("brand-ico").innerHTML = window.ICON.sliders;
document.getElementById("x-ico").innerHTML = window.ICON.x;
document.querySelector(".search-wrap span").innerHTML = window.ICON.search;

var PAGE_SIZE = 12;
var state = { category:"All", subcat:"All", brands:[], query:"", sort:"featured", visible: PAGE_SIZE };
var products = [];
var allBrands = [];

window.loadProducts().then(function(p){
  products = p;
  allBrands = Array.from(new Set(products.map(function(x){ return x.brand; }))).sort();
  renderCats();
  renderSubs();
  renderBrandPanel();
  render();
});

function renderCats(){
  var cats = ["All"].concat(window.PRODUCT_CATEGORIES);
  document.getElementById("cat-chips").innerHTML = cats.map(function(t){
    return '<button class="chip'+(state.category===t?' active':'')+'" data-cat="'+t+'">'+t+'</button>';
  }).join("");
  window.qsa("#cat-chips .chip").forEach(function(b){
    b.addEventListener("click", function(){
      state.category = b.getAttribute("data-cat");
      if (state.category !== "Speakers") state.subcat = "All";
      state.visible = PAGE_SIZE;
      renderCats(); renderSubs(); render();
    });
  });
}
function renderSubs(){
  var row = document.getElementById("sub-row");
  if (state.category !== "Speakers"){ row.classList.add("hidden"); return; }
  row.classList.remove("hidden");
  var subs = ["All"].concat(window.SPEAKER_SUBCATEGORIES);
  document.getElementById("sub-chips").innerHTML =
    '<span style="padding:0 .5rem;font-size:10px;text-transform:uppercase;letter-spacing:0.22em;color:var(--muted-foreground);">Type:</span>' +
    subs.map(function(s){
      return '<button class="chip chip-sm'+(state.subcat===s?' active':'')+'" data-sub="'+s+'">'+s+'</button>';
    }).join("");
  window.qsa("#sub-chips .chip").forEach(function(b){
    b.addEventListener("click", function(){ state.subcat = b.getAttribute("data-sub"); state.visible = PAGE_SIZE; renderSubs(); render(); });
  });
}
function renderBrandPanel(){
  var html = allBrands.map(function(b){
    var checked = state.brands.indexOf(b) !== -1;
    return '<label><input type="checkbox" data-brand="'+window.escapeHtml(b)+'" '+(checked?'checked':'')+'/><span'+(checked?' style="font-weight:600;"':'')+'>'+window.escapeHtml(b)+'</span></label>';
  }).join("");
  if (state.brands.length) html += '<button class="clear" id="clear-brands">Clear brands</button>';
  document.getElementById("brand-panel").innerHTML = html;
  window.qsa("#brand-panel input").forEach(function(c){
    c.addEventListener("change", function(){
      var b = c.getAttribute("data-brand");
      if (c.checked) { if(state.brands.indexOf(b)===-1) state.brands.push(b); }
      else state.brands = state.brands.filter(function(x){ return x !== b; });
      state.visible = PAGE_SIZE;
      renderBrandPanel(); render();
    });
  });
  var cb = document.getElementById("clear-brands");
  if (cb) cb.addEventListener("click", function(){ state.brands = []; renderBrandPanel(); render(); });
  var badge = document.getElementById("brand-badge");
  if (state.brands.length){ badge.classList.remove("hidden"); badge.textContent = state.brands.length; }
  else badge.classList.add("hidden");
}

// Brand dropdown toggle
var dd = document.getElementById("brand-dd");
document.getElementById("brand-btn").addEventListener("click", function(e){ e.stopPropagation(); dd.classList.toggle("open"); });
document.addEventListener("click", function(e){ if (!dd.contains(e.target)) dd.classList.remove("open"); });

// Search debounce
var qEl = document.getElementById("q");
var t = null;
qEl.addEventListener("input", function(){ clearTimeout(t); t = setTimeout(function(){ state.query = qEl.value.trim().toLowerCase(); state.visible = PAGE_SIZE; render(); }, 180); });

// Sort
document.getElementById("sort").addEventListener("change", function(e){ state.sort = e.target.value; state.visible = PAGE_SIZE; render(); });

// Clear all
document.getElementById("clear-all").addEventListener("click", function(){
  state = { category:"All", subcat:"All", brands:[], query:"", sort:"featured", visible: PAGE_SIZE };
  qEl.value = ""; document.getElementById("sort").value = "featured";
  renderCats(); renderSubs(); renderBrandPanel(); render();
});

// Load more
document.getElementById("load-more").addEventListener("click", function(){ state.visible += PAGE_SIZE; render(); });

function filtered(){
  var list = products.slice();
  if (state.category !== "All") list = list.filter(function(p){ return p.category === state.category; });
  if (state.category === "Speakers" && state.subcat !== "All") list = list.filter(function(p){ return p.subcategory === state.subcat; });
  if (state.brands.length) list = list.filter(function(p){ return state.brands.indexOf(p.brand) !== -1; });
  if (state.query){
    list = list.filter(function(p){ return p.name.toLowerCase().indexOf(state.query) !== -1 || p.brand.toLowerCase().indexOf(state.query) !== -1; });
  }
  switch (state.sort){
    case "name-asc": list.sort(function(a,b){ return a.name.localeCompare(b.name); }); break;
    case "name-desc": list.sort(function(a,b){ return b.name.localeCompare(a.name); }); break;
    case "brand-asc": list.sort(function(a,b){ return a.brand.localeCompare(b.brand) || a.name.localeCompare(b.name); }); break;
    default:
      list.sort(function(a,b){
        var af = (a.badges && a.badges.length) ? 0 : 1;
        var bf = (b.badges && b.badges.length) ? 0 : 1;
        if (af !== bf) return af - bf;
        return a.name.localeCompare(b.name);
      });
  }
  return list;
}

function hasFilters(){ return state.category!=="All"||state.subcat!=="All"||state.brands.length||state.query||state.sort!=="featured"; }

function render(){
  var f = filtered();
  var shown = f.slice(0, state.visible);
  var wrap = document.getElementById("grid-wrap");

  document.getElementById("results-count").innerHTML =
    'Showing <strong>'+shown.length+'</strong> of <strong>'+f.length+'</strong>';
  document.getElementById("clear-all").classList.toggle("hidden", !hasFilters());

  if (f.length === 0){
    wrap.innerHTML = '<div class="empty-state"><h3>No matches.</h3><p>Try removing a filter or searching by brand name.</p><button class="btn btn-ink" id="reset" style="margin-top:1.5rem;">Reset filters</button></div>';
    document.getElementById("reset").addEventListener("click", function(){ document.getElementById("clear-all").click(); });
    document.getElementById("load-more-wrap").classList.add("hidden");
    return;
  }

  wrap.innerHTML = '<div class="products-grid animate-fade-in" id="grid"></div>';
  var grid = document.getElementById("grid");
  grid.innerHTML = shown.map(function(p){
    var img = window.productImage(p);
    var badges = p.badges && p.badges.length ? '<div class="badges">'+p.badges.map(function(b){return '<span>'+window.escapeHtml(b)+'</span>';}).join("")+'</div>' : '';
    var sub = p.subcategory ? (window.escapeHtml(p.category)+' · '+window.escapeHtml(p.subcategory)) : window.escapeHtml(p.category);
    return '<a href="product.html?id='+encodeURIComponent(p.id)+'" class="product-card">' +
      '<div class="img-wrap"><img src="'+img+'" alt="'+window.escapeHtml(p.brand+' '+p.name)+'" loading="lazy" />' + badges +
      '<div class="view">View Details →</div></div>' +
      '<div class="body"><span class="cat">'+sub+'</span><div><h3>'+window.escapeHtml(p.name)+'</h3><p class="brand-name">'+window.escapeHtml(p.brand)+'</p></div></div>' +
    '</a>';
  }).join("");

  var lmw = document.getElementById("load-more-wrap");
  if (state.visible < f.length){
    lmw.classList.remove("hidden");
    document.getElementById("load-more").textContent = "Load more (" + (f.length - state.visible) + " remaining)";
  } else lmw.classList.add("hidden");
}
