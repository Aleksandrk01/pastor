
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
