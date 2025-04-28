// Dark Mode Toggle
const toggleBtn = document.getElementById('modeToggle');

// Check for saved user preference or use system preference
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
  document.body.classList.add('dark');
  toggleBtn.textContent = 'Light Mode';
} else {
  toggleBtn.textContent = 'Dark Mode';
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  toggleBtn.textContent = isDark ? 'Light Mode' : 'Dark Mode';
  
  // Save user preference
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Sidebar Toggle
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('closeSidebar');

// Open sidebar when clicking 3 dots
menuToggle.addEventListener('click', () => {
  sidebar.classList.add('active');
});

// Close sidebar when clicking X
closeSidebar.addEventListener('click', () => {
  sidebar.classList.remove('active');
});

// Header Scroll Behavior
let lastScroll = 0;
const header = document.getElementById('header');
const navScroll = document.querySelector('.nav-scroll');
const headerHeight = header.offsetHeight;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (window.innerWidth < 768) {
    if (currentScroll > lastScroll && currentScroll > headerHeight) {
      header.style.transform = `translateY(-${headerHeight}px)`;
    } else {
      header.style.transform = 'translateY(0)';
    }
  } else {
    if (currentScroll > lastScroll && currentScroll > 100) {
      navScroll.style.transform = 'translateY(-100%)';
    } else {
      navScroll.style.transform = 'translateY(0)';
    }
  }
  
  if (currentScroll > 10) {
    header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
  } else {
    header.style.boxShadow = 'none';
  }
  
  lastScroll = currentScroll;
});

// Reset header on window resize
window.addEventListener('resize', () => {
  header.style.transform = 'translateY(0)';
  navScroll.style.transform = 'translateY(0)';
});
