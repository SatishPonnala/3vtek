window.initSite({
  dark: true
});

document.getElementById("hero-arr").innerHTML = window.ICON.arrowRight;
document.getElementById("hero-play").innerHTML = window.ICON.play;
document.getElementById("intro-arr").innerHTML = window.ICON.arrowUpRight;
document.getElementById("cta-arr").innerHTML = window.ICON.arrowRight;

// Services preview
var previewServices = [{
    title: "Audio-Visual Solutions",
    desc: "Cinematic home theatres, club-house mini theatres and seamless multi-room audio.",
    img: "assets/Project-images/audio-visual.webp",
    icon: window.ICON.headphones
  },
  {
    title: "Acoustic Services",
    desc: "Engineered acoustics for auditoriums, conference rooms, cinemas, convention halls & pubs.",
    img: "assets/Project-images/acoustic-services.webp",
    icon: window.ICON.speaker
  },
  {
    title: "Smart Automation",
    desc: "Lighting, climate, motorised screens and audio fully integrated under one touch.",
    img: "assets/Project-images/Smart-Automation.webp",
    icon: window.ICON.settings
  },
];
document.getElementById("services-grid").innerHTML = previewServices.map(function (s, i) {
  return '<div class="reveal is-visible" data-delay="' + (i * 100) + '"><a href="services.html" class="image-card">' +
    '<div class="ratio"><img src="' + s.img + '" alt="' + s.title + '" loading="lazy"></div>' +
    '<div class="overlay"></div>' +
    '<div class="body">' + s.icon +
    '<div><h3>' + s.title + '</h3><p>' + s.desc + '</p>' +
    '<span class="more">Discover ' + window.ICON.arrowUpRight + '</span></div>' +
    '</div></a></div>';
}).join("");

// Stats
var allBrands = Array.from(new Set(Object.values(window.BRANDS).flat()));
var stats = [{
    v: new Date().getFullYear() - window.COMPANY.since,
    suffix: "+",
    label: "Years of 3V TEK"
  },
  {
    v: window.COMPANY.experience,
    suffix: "+",
    label: "Years of expertise"
  },
  {
    v: 1000,
    suffix: "+",
    label: "Projects delivered"
  },
  {
    // v: allBrands.length,
    v: 50,
    suffix: "+",
    label: "Premium brands"
  },
];
document.getElementById("stats-grid").innerHTML = stats.map(function (s) {
  return '<div class="reveal is-visible"><div class="stat-num"><span class="counter" data-to="' + s.v + '" data-suffix="' + s.suffix + '">0' + s.suffix + '</span></div><div class="stat-label">' + s.label + '</div></div>';
}).join("");
window.initCounters();

// Marquee — use only local logos from LOCAL_BRAND_LOGOS in defined order
var localKeys = Object.keys(window.LOCAL_CLIENTELE_LOGOS || {});
var doubled = localKeys.concat(localKeys);
document.getElementById("marquee-track").innerHTML = doubled.map(function (k) {
  var logo = (window.LOCAL_CLIENTELE_LOGOS && window.LOCAL_CLIENTELE_LOGOS[k]) || window.brandLogoUrl(k);
  if (logo) return '<div class="marquee-item" title="' + k + '"><img src="' + logo + '" alt="' + k + ' logo" loading="lazy" decoding="async" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'inline-block\';"><span class="marquee-fallback" style="display:none;">' + k + '</span></div>';
  return '<div class="marquee-item"><span class="marquee-fallback">' + k + '</span></div>';
}).join("");

// Featured projects
var featured = [{
    title: "Private Cinema, Jubilee Hills",
    cat: "Home Theatre",
    img: "assets/Project-images/Home-Theatre.webp"
  },
  {
    title: "Club House Theatre",
    cat: "Mini Theatre",
    img: "assets/Project-images/ClubHouse-Theater.webp"
  },
  {
    title: "Boardroom Acoustics",
    cat: "Conference Room",
    img: "assets/Project-images/Boardroom-Acoustics.webp"
  },
];
document.getElementById("featured-projects").innerHTML = featured.map(function (p, i) {
  return '<div class="reveal" data-delay="' + (i * 100) + '"><a href="projects.html" class="image-card" style="display:block;">' +
    '<div class="ratio" style="aspect-ratio:4/5;"><img src="' + p.img + '" alt="' + p.title + '" loading="lazy" style="opacity:1;"></div>' +
    '<div class="overlay" style="background:rgba(10,10,10,0);transition:background .5s;"></div>' +
    '<div class="body" style="justify-content:flex-end;">' +
    '<div><span style="font-size:10px;text-transform:uppercase;letter-spacing:.22em;color:rgba(250,250,250,0.7);">' + p.cat + '</span>' +
    '<h3 style="font-size:1.25rem;margin-top:.25rem;">' + p.title + '</h3></div>' +
    '</div></a></div>';
}).join("");

window.initReveal();