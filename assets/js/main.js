/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  strings: ["Full Stack Web Developer", "UI/UX Designer", "?"],
  loop: true,
  typeSpeed: 10,
  backSpeed: 80,
  backDelay: 2000,
});

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/* -- HOME -- */
sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });

/* -- PROJECT BOX -- */
sr.reveal(".project-box", { interval: 200 });

/* -- HEADINGS -- */
sr.reveal(".top-header", {});

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".skills-box", { delay: 100 });
srRight.reveal(".form-control", { delay: 100 });

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

//JS Tutorials
// Riwayat Kode
let contentCodeHistory = [];
// Fungsi untuk menjalankan kode konten
function runContentCode() {
  const code = document.getElementById("contentCode").value;
  document.getElementById("previewContent").innerHTML = code;
  contentCodeHistory.push(code);
}

// Fungsi untuk mengembalikan kode sebelumnya
function undoContentCode() {
  if (contentCodeHistory.length > 1) {
    contentCodeHistory.pop(); // Hapus entri terakhir
    const previousCode = contentCodeHistory[contentCodeHistory.length - 1];
    document.getElementById("contentCode").value = previousCode;
    document.getElementById("previewContent").innerHTML = previousCode; // Perbarui preview
  } else {
    document.getElementById("previewContent").innerHTML = ""; // Hapus hasil jika tidak ada riwayat
    document.getElementById("contentCode").value = ""; // Hapus input juga
  }
}

//fungsi tabel
// Riwayat Kode untuk Tabel
let tableCodeHistory = [];

// Fungsi untuk menjalankan kode konten tabel
function runTableCode() {
  const code = document.getElementById("tableCode").value;
  document.getElementById("previewTable").innerHTML = code;
  tableCodeHistory.push(code);
}

// Fungsi untuk mengembalikan kode tabel sebelumnya
function undoTableCode() {
  if (tableCodeHistory.length > 1) {
    tableCodeHistory.pop(); // Hapus entri terakhir
    const previousCode = tableCodeHistory[tableCodeHistory.length - 1];
    document.getElementById("tableCode").value = previousCode;
    document.getElementById("previewTable").innerHTML = previousCode; // Perbarui preview
  } else {
    document.getElementById("previewTable").innerHTML = ""; // Hapus hasil jika tidak ada riwayat
    document.getElementById("tableCode").value = ""; // Hapus input juga
  }
}

//fungsi form
// Riwayat Kode untuk Form
let formCodeHistory = [];

// Fungsi untuk menjalankan kode konten form
function runFormCode() {
  const code = document.getElementById("formCode").value;
  document.getElementById("previewForm").innerHTML = code;
  formCodeHistory.push(code);
}

// Fungsi untuk mengembalikan kode form sebelumnya
function undoFormCode() {
  if (formCodeHistory.length > 1) {
    formCodeHistory.pop(); // Hapus entri terakhir
    const previousCode = formCodeHistory[formCodeHistory.length - 1];
    document.getElementById("formCode").value = previousCode;
    document.getElementById("previewForm").innerHTML = previousCode; // Perbarui preview
  } else {
    document.getElementById("previewForm").innerHTML = ""; // Hapus hasil jika tidak ada riwayat
    document.getElementById("formCode").value = ""; // Hapus input juga
  }
}

//fungsi lokasi
// Riwayat Kode untuk Form
let locCodeHistory = [];

// Fungsi untuk menjalankan kode konten form
function runLocCode() {
  const code = document.getElementById("locCode").value;
  document.getElementById("previewLoc").innerHTML = code;
  locCodeHistory.push(code);
}

// Fungsi untuk mengembalikan kode form sebelumnya
function undoLocCode() {
  if (LocCodeHistory.length > 1) {
    locCodeHistory.pop(); // Hapus entri terakhir
    const previousCode = locCodeHistory[locCodeHistory.length - 1];
    document.getElementById("locCode").value = previousCode;
    document.getElementById("previewLoc").innerHTML = previousCode; // Perbarui preview
  } else {
    document.getElementById("previewLoc").innerHTML = ""; // Hapus hasil jika tidak ada riwayat
    document.getElementById("locCode").value = ""; // Hapus input juga
  }
}

// Function to get user location
function getLocation() {
  const locationBox = document.getElementById("location");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    alert("Geolocation is not supported by this browser.");
  }

  // Add loading effect to the button
  const button = document.querySelector("butto");
  button.innerHTML = "Getting Location...";
  button.disabled = true;
  button.style.backgroundColor = "#ccc";
}

// Function to display position
function showPosition(position) {
  document.getElementById("latitude").innerHTML = position.coords.latitude;
  document.getElementById("longitude").innerHTML = position.coords.longitude;
  document.getElementById("accuracy").innerHTML =
    position.coords.accuracy + " meters";

  // Show the location div
  const locationBox = document.getElementById("location");
  locationBox.style.display = "block";

  // Revert button state
  const button = document.querySelector("butto");
  button.innerHTML = "Get Location";
  button.disabled = false;
  button.style.backgroundColor = "#007bff";
}

// Function to handle errors
function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      alert("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      alert("An unknown error occurred.");
      break;
  }

  // Revert button state even in case of an error
  const button = document.querySelector("butto");
  button.innerHTML = "Get Location";
  button.disabled = false;
  button.style.backgroundColor = "#007bff";
}
