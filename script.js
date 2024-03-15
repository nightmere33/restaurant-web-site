const sections = document.querySelectorAll('.sec1, .sec2, .sec3, .sec4, .sec5');

const buyE = document.getElementById('order');
document.addEventListener('DOMContentLoaded', () => {
  const orderButtons = document.querySelectorAll('.order');

  orderButtons.forEach(button => {
    button.addEventListener('click', () => {
      alert(`Order received successfully`);
    });
  });
});
