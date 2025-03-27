document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burger-menu"); // Кнопка відкриття меню
    const mobileMenu = document.querySelector(".mobile-menu"); // Мобільне меню
    const closeMenuBtn = document.querySelector(".mobile-menu-close"); // Кнопка закриття
    const menuLinks = document.querySelectorAll(".mobile-menu-navigation-li"); // Посилання в меню

    // Функція відкриття меню
    function openMenu() {
        mobileMenu.classList.add("is-open");
        document.body.style.overflow = "hidden"; // Вимикає прокрутку сторінки
    }

    // Функція закриття меню
    function closeMenu() {
        mobileMenu.classList.remove("is-open");
        document.body.style.overflow = ""; // Відновлює прокрутку сторінки
    }

    // Додаємо події на кнопки
    burgerMenu.addEventListener("click", openMenu);
    closeMenuBtn.addEventListener("click", closeMenu);

    // Закриваємо меню при кліку на посилання
    menuLinks.forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    // Закриваємо меню при кліку поза ним
    document.addEventListener("click", function (event) {
        if (!mobileMenu.contains(event.target) && !burgerMenu.contains(event.target)) {
            closeMenu();
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Отримуємо елементи
    const openModalBtn = document.querySelector(".one-button"); // Кнопка "Order Service"
    const modalOverlay = document.querySelector(".modal-overlay"); // Модальне вікно (оверлей)
    const closeModalBtn = document.querySelector(".modal-close"); // Кнопка закриття

    // Функція відкриття модального вікна
    function openModal() {
        modalOverlay.classList.add("is-open");
        document.body.style.overflow = "hidden"; // Блокуємо прокрутку сторінки
    }

    // Функція закриття модального вікна
    function closeModal() {
        modalOverlay.classList.remove("is-open");
        document.body.style.overflow = ""; // Відновлюємо прокрутку сторінки
    }

    // Відкриваємо модальне вікно при кліку на кнопку
    openModalBtn.addEventListener("click", openModal);

    // Закриваємо модальне вікно при кліку на кнопку закриття
    closeModalBtn.addEventListener("click", closeModal);

    // Закриваємо модальне вікно при кліку поза ним
    modalOverlay.addEventListener("click", function (event) {
        if (event.target === modalOverlay) {
            closeModal();
        }
    });

    // Закриваємо модальне вікно при натисканні на Esc
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && modalOverlay.classList.contains("is-open")) {
            closeModal();
        }
    });
});
