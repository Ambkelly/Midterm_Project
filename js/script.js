// Get all the elements with the class 'count'
const counters = document.querySelectorAll('.count');

function animateCount(counter) {
const targetNumber = parseInt(counter.textContent.replace(/,/g, ''));

// Set the starting number
let start = 1;

const duration = 5000;

let startTime = null;

function animate(timestamp) {
if (startTime === null) {
startTime = timestamp;
}

const elapsed = timestamp - startTime;

const current = Math.floor(start + (targetNumber - start) * elapsed / duration);

const formattedCurrent = current.toLocaleString();

counter.textContent = formattedCurrent;

if (elapsed < duration) {
 requestAnimationFrame(animate);
} else {
counter.textContent = targetNumber.toLocaleString();
}
}

function isCounterInView() {
const rect = counter.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function startAnimation() {
if (isCounterInView()) {
  requestAnimationFrame(animate);
  } else {
  window.addEventListener('scroll', startAnimation);
  }
}
function startAnimation() {
if (isCounterInView()) {
  setTimeout(() => {
   requestAnimationFrame(animate);
  }, 500);
  } else {
  window.addEventListener('scroll', startAnimation);
  }
}
startAnimation();
}
counters.forEach(animateCount);

document.getElementById('search-icon').addEventListener('click', function() {
  var searchOverlay = document.getElementById('search-overlay');
  searchOverlay.style.display = 'flex'; // Show the overlay as a flex container
});

document.getElementById('remove-search').addEventListener('click', function() {
  var searchOverlay = document.getElementById('search-overlay');
  searchOverlay.style.display = 'none'; // Hide the overlay
});


document.addEventListener('scroll', function() {
  var topIcon = document.querySelector('.top a');
  var scrollPosition = window.scrollY || window.pageYOffset;

  // Adjust this value to set the scroll point at which the icon appears
  var threshold = 1200; 

  if (scrollPosition > threshold) {
    topIcon.classList.add('visible');
  } else {
    topIcon.classList.remove('visible');
  }
});
