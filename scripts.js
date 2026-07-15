// get the theme toggle checkbox
const themeToggle = document.getElementById('theme-toggle');

// function to toggle theme
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
}

// check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
  themeToggle.checked = true;
} else {
  document.documentElement.setAttribute('data-theme', 'light');
  themeToggle.checked = false;
}

// add event listener to the toggle button
themeToggle.addEventListener('change', toggleTheme);

// Gallery Arrow Functionality
const galleryScroll = document.querySelector('.gallery-scroll');
const arrowLeft = document.querySelector('.gallery-arrow-left');
const arrowRight = document.querySelector('.gallery-arrow-right');

const scrollAmount = 300; // pixels to scroll

if (arrowLeft && arrowRight && galleryScroll) {
  arrowLeft.addEventListener('click', () => {
    galleryScroll.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });

  arrowRight.addEventListener('click', () => {
    galleryScroll.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });
}


// ===== Fade-in Animation on Scroll for Certifications =====
document.addEventListener('DOMContentLoaded', function() {
  // Create Intersection Observer for fade-in animation
  const observerOptions = {
    root: null, // viewport
    rootMargin: '0px',
    threshold: 0.15 // Trigger when 15% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add staggered delay for each card
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 100); // 100ms delay between each card
        // Stop observing once visible
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Target all certification cards with fade-in class
  const certCards = document.querySelectorAll('.fade-in');
  certCards.forEach(card => {
    observer.observe(card);
  });

  // ===== Certificate Modal Functionality =====
  const certModalOverlay = document.getElementById('certModalOverlay');
  const certModalClose = document.getElementById('certModalClose');
  const certButtons = document.querySelectorAll('.cert-btn');
  const certImage = document.getElementById('certImage');

  // Certificate data - replace with actual certificate image URLs
  const certificateImages = {
    cert1: 'certificates/html fundamentals.png',
    cert2: 'certificates/Linux Fundamentals.jpg',
    cert3: 'certificates/Open ran.jpg',
    cert4: 'certificates/Tech Quest.jpg',
    cert5: 'certificates/Webinar.jpg',
    cert6: 'certificates/Webinar to intoduction angular.jpg',
    cert7: 'certificates/HTMLFundamentals_certificate.pdf',
    cert8: 'certificates/html fundamentals.png',
    cert9: 'certificates/Linux Fundamentals.jpg',
    cert10: 'certificates/Webinar to intoduction angular.jpg',
    cert11: 'certificates/Tech Quest.jpg',
    cert12: 'certificates/Webinar.jpg'
  };

  // Open modal when clicking "View Certificate" button
  certButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const certId = this.getAttribute('data-cert');
      
      // Update certificate image based on which certificate was clicked
      if (certificateImages[certId]) {
        certImage.src = certificateImages[certId];
      }
      
      // Show modal with fade-in effect
      certModalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent scrolling background
    });
  });

  // Close modal when clicking close button
  certModalClose.addEventListener('click', function() {
    certModalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restore scrolling
  });

  // Close modal when clicking outside the modal content
  certModalOverlay.addEventListener('click', function(e) {
    if (e.target === certModalOverlay) {
      certModalOverlay.classList.remove('active');
      document.body.style.overflow = 'auto'; // Restore scrolling
    }
  });

  // Close modal when pressing Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && certModalOverlay.classList.contains('active')) {
      certModalOverlay.classList.remove('active');
      document.body.style.overflow = 'auto'; // Restore scrolling
    }
  });

  // ===== View All Certificates Modal Functionality =====
  const viewAllCertsBtn = document.getElementById('viewAllCerts');
  const allCertsModalOverlay = document.getElementById('allCertsModalOverlay');
  const allCertsModalClose = document.getElementById('allCertsModalClose');

  // Open "View All" modal when clicking "View All" button
  if (viewAllCertsBtn) {
    viewAllCertsBtn.addEventListener('click', function() {
      allCertsModalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent scrolling background
    });
  }

  // Open "View All" modal from div4 (Recent Projects section)
  const viewAllCertsFromProjectsBtn = document.getElementById('viewAllCertsFromProjects');
  if (viewAllCertsFromProjectsBtn) {
    viewAllCertsFromProjectsBtn.addEventListener('click', function() {
      allCertsModalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent scrolling background
    });
  }

  // ===== All Projects Modal Functionality =====
  const viewAllProjectsBtn = document.getElementById('viewAllProjects');
  const viewAllProjectsFromCertsBtn = document.getElementById('viewAllProjectsFromCerts');
  const allProjectsModalOverlay = document.getElementById('allProjectsModalOverlay');
  const allProjectsModalClose = document.getElementById('allProjectsModalClose');

  // Open "All Projects" modal from div4
  if (viewAllProjectsBtn) {
    viewAllProjectsBtn.addEventListener('click', function() {
      allProjectsModalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent scrolling background
    });
  }

  // Open "All Projects" modal from div5 (certifications section)
  if (viewAllProjectsFromCertsBtn) {
    viewAllProjectsFromCertsBtn.addEventListener('click', function() {
      allProjectsModalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent scrolling background
    });
  }

  // Close "All Projects" modal when clicking close button
  if (allProjectsModalClose) {
    allProjectsModalClose.addEventListener('click', function() {
      allProjectsModalOverlay.classList.remove('active');
      document.body.style.overflow = 'auto'; // Restore scrolling
    });
  }

  // Close "All Projects" modal when clicking outside the modal content
  if (allProjectsModalOverlay) {
    allProjectsModalOverlay.addEventListener('click', function(e) {
      if (e.target === allProjectsModalOverlay) {
        allProjectsModalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore scrolling
      }
    });
  }

  // Close "All Projects" modal when pressing Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && allProjectsModalOverlay.classList.contains('active')) {
      allProjectsModalOverlay.classList.remove('active');
      document.body.style.overflow = 'auto'; // Restore scrolling
    }
  });

  // Close "View All" modal when clicking close button
  if (allCertsModalClose) {
    allCertsModalClose.addEventListener('click', function() {
      allCertsModalOverlay.classList.remove('active');
      document.body.style.overflow = 'auto'; // Restore scrolling
    });
  }

  // Close "View All" modal when clicking outside the modal content
  if (allCertsModalOverlay) {
    allCertsModalOverlay.addEventListener('click', function(e) {
      if (e.target === allCertsModalOverlay) {
        allCertsModalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore scrolling
      }
    });
  }

  // Close "View All" modal when pressing Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && allCertsModalOverlay.classList.contains('active')) {
      allCertsModalOverlay.classList.remove('active');
      document.body.style.overflow = 'auto'; // Restore scrolling
    }
  });
});

//===== Profile section hover effect =====//
const profile = document.querySelector(".profile-image");

let current = 1;

profile.addEventListener("click", () => {

    if(current === 1){
        profile.src = "images/profile6.png";
        current = 2;
    }else{
        profile.src = "images/profile.jpg";
        current = 1;
    }

});