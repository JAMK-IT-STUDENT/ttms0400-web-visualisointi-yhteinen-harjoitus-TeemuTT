
document.addEventListener('DOMContentLoaded', function() {
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
