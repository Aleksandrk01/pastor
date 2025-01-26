
    // Отримати елементи модального вікна та кнопки закриття
    const modal = document.getElementById("contactModal");
    const openModalBtn = document.getElementById("openModal");
    const closeModalBtn = document.querySelector(".close-button");

    // Функція відкриття модального вікна
    openModalBtn.onclick = function(event) {
        event.preventDefault();
        modal.style.display = "block";
    }

    // Функція закриття модального вікна при натисканні на кнопку закриття
    closeModalBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Функція закриття модального вікна при натисканні поза його межами
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    let currentIndex = 0;
    const images = [
        "./img/coment1.jpg",
        "./img/coment2.jpg",
        "./img/coment3.jpg",
        "./img/coment4.jpg",
        "./img/coment5.jpg"
    ];
    
    function openModal(index) {
        currentIndex = index;
        const modal = document.getElementById("myModal");
        const modalImg = document.getElementById("modalImg");
        modal.style.display = "block";
        modalImg.src = images[currentIndex];
    }
    
    function closeModal() {
        const modal = document.getElementById("myModal");
        modal.style.display = "none";
    }
    
    function changeImage(step) {
        currentIndex += step;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        } else if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
        const modalImg = document.getElementById("modalImg");
        modalImg.src = images[currentIndex];
    }
    
    // Закрытие модального окна при клике вне изображения
    window.onclick = function(event) {
        const modal = document.getElementById("myModal");
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };


    var customModal = document.getElementById("customPhoneModal");
    var customBtn = document.getElementById("customOpenPhoneModal");
    var customSpan = document.getElementsByClassName("custom-close-button")[0];

    // Функция для открытия модального окна
    function openCustomModal() {
        customModal.style.display = "block";
        // Перемещаем фокус на модальное окно для доступности
        customModal.setAttribute('tabindex', '-1');
        customModal.focus();
    }

    // Функция для закрытия модального окна
    function closeCustomModal() {
        customModal.style.display = "none";
        // Возвращаем фокус на кнопку открытия
        customBtn.focus();
    }

    // Когда пользователь нажимает на кнопку, открываем модальное окно
    customBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращаем переход по ссылке
        openCustomModal();
    });

    // Когда пользователь нажимает на <span> (x), закрываем модальное окно
    customSpan.addEventListener('click', function() {
        closeCustomModal();
    });

    // Когда пользователь нажимает клавишу "Escape", закрываем модальное окно
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape" && customModal.style.display === "block") {
            closeCustomModal();
        }
    });

    // Когда пользователь кликает вне модального окна, закрываем его
    window.addEventListener('click', function(event) {
        if (event.target == customModal) {
            closeCustomModal();
        }
    });