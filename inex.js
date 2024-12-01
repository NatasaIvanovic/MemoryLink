const video = document.getElementById('video-background');
video.play();
function toggleMap() {
    var map = document.querySelector('.mapa');
    if (map.style.display === 'none') {
      map.style.display = 'block';  
    } else {
      map.style.display = 'none';  
    }
  }
  const modal = document.getElementById("modal");
  const otvoriModal = document.getElementById("otvoriModal");
  const zatvoriModal = document.getElementById("zatvoriModal");

  otvoriModal.onclick = function() {
    modal.style.display = "flex"; 
  }

 
  zatvoriModal.onclick = function() {
    modal.style.display = "none"; 
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none"; 
    }
  }
  document.getElementById("yt_pjesma").addEventListener("click", function() {
    window.open("https://www.youtube.com/watch?v=450p7goxZqg", "_blank");
});

const modall = document.getElementById("modall");
const otvoriSliku = document.getElementById("otvoriSliku");
const zatvoriSliku = document.getElementById("zatvoriSliku");

otvoriSliku.onclick = function() {
  modall.style.display = "flex"; 
}


zatvoriSliku.onclick = function() {
  modall.style.display = "none"; 
}

var galleryModal = document.getElementById("galleryModal");
var galleryBtn = document.getElementById("galleryBtn");
var closeGallery = document.getElementById("closeGallery");

galleryBtn.onclick = function() {
    galleryModal.style.display = "block";
}

closeGallery.onclick = function() {
    galleryModal.style.display = "none";
}

// Close modals when clicking outside of them
window.onclick = function(event) {
    if (event.target == galleryModal) {
        galleryModal.style.display = "none";
    }
}

const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");

// Postavljanje veličine canvasa da pokrije ceo ekran
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Kreiranje slike srca
const heartImage = new Image();
heartImage.src = "srce kisa.png";

// Skladište za srca
const hearts = [];

// Funkcija za kreiranje srca
function createHeart() {
  const x = Math.random() * canvas.width;
  const y = -50; 
  const size = Math.random() * 30 + 20; 
  const speed = Math.random() * 3 + 1; 
  hearts.push({ x, y, size, speed });
}

// Funkcija za ažuriranje i crtanje srca
function updateHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Čisti canvas za sledeći frejm

  hearts.forEach((heart, index) => {
    heart.y += heart.speed; // Srca se pomeraju na dole

    // Uklanja srca koja su izašla iz ekrana
    if (heart.y > canvas.height) {
      hearts.splice(index, 1);
    }

    ctx.drawImage(heartImage, heart.x, heart.y, heart.size, heart.size);
  });

  requestAnimationFrame(updateHearts); // Pokreće sledeći frejm animacije
}

// Povezivanje dugmeta sa pokretanjem animacije
let isAnimating = false;
document.getElementById("startButton").addEventListener("click", () => {
  if (isAnimating) return; // Sprečava ponovno pokretanje animacije

  isAnimating = true;
  let heartInterval = setInterval(createHeart, 200); // Dodaje srca svakih 200ms

  updateHearts(); // Pokreće animaciju

  // Zaustavlja stvaranje srca i animaciju nakon 10 sekundi
  setTimeout(() => {
    clearInterval(heartInterval); // Prekida dodavanje novih srca
    isAnimating = false; // Zaustavlja animaciju
  }, 10000); // Animacija traje 10 sekundi
});

document.addEventListener("DOMContentLoaded", () => {
  const videoDivs = document.querySelectorAll(".video");
  const videoModal = document.getElementById("videoModal");
  const videoPlayer = document.getElementById("videoPlayer");
  const closeBtn = document.getElementById("closeBtn");

  // Otvori modal i postavi odgovarajući video
  videoDivs.forEach(div => {
      div.addEventListener("click", () => {
          const videoSrc = div.getAttribute("data-video");
          videoPlayer.src = videoSrc;
          videoModal.style.display = "flex";
          videoPlayer.play();
      });
  });

  // Zatvori modal
  closeBtn.addEventListener("click", () => {
      videoModal.style.display = "none";
      videoPlayer.pause();
      videoPlayer.src = ""; // Resetuj video
  });

  // Zatvori modal klikom van njega
  videoModal.addEventListener("click", (e) => {
      if (e.target === videoModal) {
          videoModal.style.display = "none";
          videoPlayer.pause();
          videoPlayer.src = ""; // Resetuj video
      }
  });
});