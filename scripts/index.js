
document.addEventListener('DOMContentLoaded', function() {

  // Hamburger menu.
  var burger = document.querySelector('.navbar-burger');
  burger.addEventListener('click', function() {
    var menuId = burger.dataset.target;
    var menu = document.getElementById(menuId);
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  });

  // Show notification when adding product to basket.
  var purchaseButtons = document.querySelectorAll('.purchase-button');
  purchaseButtons.forEach(function (button) {
    button.addEventListener('click', function() {
      var notificationBar = document.getElementById('notification-bar');
      notificationBar.classList.add('is-active');
      
      // Hide after one second.
      setTimeout(function() {
        notificationBar.classList.remove('is-active');
      }, 2000);
    });
  });
});
