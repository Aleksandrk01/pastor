
    // Отримати елементи модального вікна та кнопки закриття
    document.addEventListener("DOMContentLoaded", function() {
        const modal = document.getElementById("contactModal");
        // Використовуємо querySelectorAll, щоб отримати всі кнопки з класом "openModal"
        const openModalBtns = document.querySelectorAll(".openModal");
        const closeModalBtn = modal.querySelector(".close-button");
      
        // Додаємо обробник подій для кожної кнопки
        openModalBtns.forEach(btn => {
          btn.addEventListener("click", function(event) {
            event.preventDefault();
            modal.style.display = "block";
          });
        });
      
        // Закриття модального вікна по кліку на кнопку закриття
        closeModalBtn.addEventListener("click", function() {
          modal.style.display = "none";
        });
      
        // Закриття модального вікна при кліку поза його вмістом
        window.addEventListener("click", function(event) {
          if (event.target === modal) {
            modal.style.display = "none";
          }
        });
      });
      

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

    // Добавляем обработчик события клика для 'yazik1'
document.querySelectorAll('.yazik1').forEach(item => {
    item.addEventListener('click', function () {
        const link = item.querySelector('a').getAttribute('href');
        window.location.href = link;
        alert('.yazik1');
    });
});

// Добавляем обработчик события клика для 'yazik2'
document.querySelectorAll('.yazik2').forEach(item => {
    item.addEventListener('click', function () {
        const link = item.querySelector('a').getAttribute('href');
        window.location.href = link;
        alert('.yazik2');
    });
});

// Обработчик аккордеона
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function () {
        // Удаляем класс rotated у всех .plus, кроме текущего
        document.querySelectorAll('.plus').forEach(plus => {
            if (plus !== this.querySelector('.plus')) {
                plus.classList.remove('rotated');
            }
        });

        const plusIcon = this.querySelector('.plus');
        plusIcon.classList.toggle('rotated');

        // Переключаем отображение контента
        const content = this.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            document.querySelectorAll('.accordion-content').forEach(c => c.style.display = 'none');
            content.style.display = 'block';
        }
    });
});


 // Отримуємо всі елементи, що містять клас "phone-contact"
const phoneContactButtons = document.querySelectorAll('.phone-contact');
// Отримуємо модальне вікно з телефонами
const phoneModal = document.getElementById('phoneModal');
// Отримуємо кнопку закриття всередині phoneModal
const modalCloseButtons = phoneModal.querySelectorAll('.close-button');

// Додаємо обробник подій для кожної кнопки "phone-contact"
phoneContactButtons.forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault(); // запобігаємо переходу за посиланням
    phoneModal.style.display = 'block';
  });
});

// Закриття модального вікна при кліку на кнопку закриття
modalCloseButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    phoneModal.style.display = 'none';
  });
});

// Закриття модального вікна при кліку поза його вмістом
window.addEventListener('click', function(e) {
  if (e.target === phoneModal) {
    phoneModal.style.display = 'none';
  }
});


  // Закриття модального вікна при кліку поза його вмістом
  window.addEventListener('click', function (e) {
    if (e.target.classList.contains('modal')) {
      e.target.style.display = 'none';
    }
  });

// Телефонный фикс модал
const telFix = document.querySelector('.tel_fix');
telFix.addEventListener('click', function () {
    const modal = document.querySelector('.modal-dialog1');
    modal.style.display = 'block';
    setTimeout(() => {
        modal.classList.add('animate_class');
        document.querySelector('.modal-content1').classList.add('animate_class');
    }, 100);

    document.addEventListener('click', function hideModal(e) {
        if (!e.target.closest('.modal-content1, .tel_fix')) {
            modal.style.display = 'none';
            modal.classList.remove('animate_class');
            document.querySelector('.modal-content1').classList.remove('animate_class');
            document.removeEventListener('click', hideModal);
        }
    });
});

// Модальные окна
const infoButton = document.querySelector('.info-modal-button');
infoButton.addEventListener('click', e => {
    e.preventDefault();
    document.body.classList.add('modal-open');
    document.querySelector('.consult-modal').classList.add('open');
});

const giftButton = document.querySelector('.gift-modal-button');
giftButton.addEventListener('click', e => {
    e.preventDefault();
    document.body.classList.add('modal-open');
    document.querySelector('.gift-modal').classList.add('open');
});

// Закрытие модалей
const overlay = document.querySelector('.modal-overlay');
overlay.addEventListener('click', () => {
    document.querySelectorAll('.modal').forEach(modal => modal.classList.remove('open'));
    document.body.classList.remove('modal-open');
});

document.querySelectorAll('.modal-close, .close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        document.querySelectorAll('.modal').forEach(modal => modal.classList.remove('open'));
        document.body.classList.remove('modal-open');
        document.querySelector('.modal-dialog1').style.display = 'none';
        document.querySelector('.modal-dialog1').classList.remove('animate_class');
        document.querySelector('.modal-content1').classList.remove('animate_class');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var url = window.location.href;

    if (url.includes("/#index")) {
        document.querySelector('.my_pop_up').style.display = 'block';

        setTimeout(function () {
            document.querySelector('.my_pop_up').style.display = 'none';
            // location.replace("https://prussakoff.dp.ua");
        }, 5000);
    }
});

