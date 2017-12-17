
document.addEventListener('DOMContentLoaded', function() {
  var checkoutButton = document.querySelector('.checkout-button');
  checkoutButton.addEventListener('click', function() {
    checkoutButton.classList.toggle('is-loading');
    setTimeout(function() {
      checkoutButton.classList.toggle('is-loading');
    }, 1000);
  });
});
