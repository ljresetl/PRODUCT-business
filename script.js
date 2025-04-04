const burgerBtn = document.querySelector('.burger-menu');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('closeMobileMenu');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

// Відкриття меню при натисканні на бургер
burgerBtn.addEventListener('click', () => {
  mobileMenu.classList.add('open');
  mobileMenuOverlay.style.display = 'block'; // Показуємо накладку
  document.body.style.overflow = 'hidden'; // Забороняємо скролінг основної сторінки
});

// Закриття меню при натисканні на кнопку закриття
closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  mobileMenuOverlay.style.display = 'none'; // Приховуємо накладку
  document.body.style.overflow = 'auto'; // Відновлюємо скролінг
});

// Закриття меню при натисканні на накладку
mobileMenuOverlay.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  mobileMenuOverlay.style.display = 'none';
  document.body.style.overflow = 'auto'; // Відновлюємо скролінг
});