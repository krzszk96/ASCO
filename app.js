let verticalMenu = document.querySelector('.navbar-nav'),
items = verticalMenu.querySelectorAll('.nav-link');

verticalMenu.onclick = function(e) {
  for (let i = 0; i < items.length; i++) {
    items[i].classList.remove('active');
  }
  e.target.classList.add('active');
}