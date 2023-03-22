new Swiper('.swiper', {
    //Підключення стрілок вліво/вправо:
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
   //Підключення пагінації:
    pagination: {
        el: '.swiper-pagination',
        // Булети. При кліку на кружечки гортає зображення:
        // clickable: true,
        // Щоб динамічно змінювались кружечки знизу:
        // dynamicBullets: true,
        // Кастомний булет:
        // renderBullet: function(index, className){
        //     return'<span class="' + className + '">' + (index + 1) +'</span>';
        // },

        // Фракції:
        // type: 'fraction' - для відображення не булетами(кружечками), а на якому конкретному елементі знаходжусь і через скісну риску з скількох елементів
        type: 'fraction',
        //Кастомний вивід фракції:
        renderFraction: function(currentClass, totalClass){
            return ' Photo <span class="' + currentClass + '"></span>' + 
            ' with ' +
            '<span class="' + totalClass + '"></span>';
            },
        
        //Прогресбар - лінія зверху
        // type:'progressbar'
    },
        // Скрол:
        scrollbar: {
            el: '.swiper-scrollbar',
            //Можливість перетаскувати скрол
            draggable: true,
        },

        //simulateTouch - Відключити можливість перетягування тримаючись за зображення(false):
        // simulateTouch: false,

        //touchRatio: - властивість яка відповідає за чутливість свайпу(за зумовчуванням 1), чим більше значення тим менше зусиль потрібно щоб свайпнути:
        // touchRatio: 1,

        //Кут спрацювання свайпу/перетягування:
        // touchAngle: 45,

        //grabCursor:true - робить щоб при наведення на зображення зʼявллась рука і коли перетягую рука ніби зажимається
        // grabCursor:true,

        // slideToClickedSlide - переключає на вибраний слайд по кліку:
        // slideToClickedSlide: true,

        //Навігація по хешу(в html має бути добавлений атрибут data-hash="") при гортанні в пошуковому рядку зʼявиться назва хеш і можна буде по цьому адресу переходити в іншій вкладці:
        // hashNavigation: {
        //     watchState: true,
        // },

        // Керування клавіатурою:
        keyboard: {
            //Вмикає або вимикає можливість переключати зображення стрілками
            anabled:true,
            //включити або виключити коли слайдер в межах вʼюпорта(а не завжди):
            // onlyInViewport: true,
            //включити або виключити можливість керування стрілками вверх/вниз:
            // pageUpDown: true,
        },

        //Керування колесом мишки:
        mousewheel: {
            //Чутливість колеса мишки:
            sensitivity: 1,
        },

        //autoHeight - властивість за допомогою якої можна налаштувати щоб scrollbar автоматично підлаштовувалась під висоту зображення:
        // autoHeight: true,

        //Кількість слайдів для показу(можна вказати auto тоді в css потрібно вказати .swiper-slide{width:auto} - тоді кількість показу слайдів буде автоматична):
        slidesPerView: 2.7,

        //Відключення функціоналу якщослайдів менше ніж потрібно
        watchOverflow: true,

        //Відступ між слайдами:
        spaceBetween: 15,

        //Кількість слайдів які перелистуються:
        slidesPerGroup: 1,

        //Активний слайд по центру. Якщо потрібно щоб слайди показувались з права на ліво(для арабів) то в html то головного блоку слайдеру дописати після div та перед class - dir="rtl" та відключитив js -> centeredSlides:true,:
        // centeredSlides:true,

        //Стартовий слайд:
        // initialSlide: 0,

        //Нескінченний сладер(якщо у slidesPerView стоїть auto то потрібно вручну у властивості loopedSlides вказати скільки слайдів потрібно дублювати):
        loop: true,

        //Кількість дублюючих слайдів
        loopedSlides: 3,

        //Вільний режим тобто можна гортати без фіксації на кокретному зображенні(для підключення цієї властивості потрібо відключити "loop:" - тобто зробити її значення false):
        freeMode:true,

        //Автопрокрутка:
        autoplay: {
            //Пауза між прокруткою
            delay:1000,
            //Закінчити на крайньому слайді(true - тобто запинеться, але для цього потрібно відключити нескінченність)
            stopOnLastSlide:false,
            //Відключити після ручного переключення:
            disableOnInteraction:false,

        },

        //Швидкість переключення слайдів(за замовчуванням 300):
        speed:800,

        // Вертикальний слайдер(для цього потрібно в css для блока swiper-wrapper вказати висоту, наприклад 1000px). За замовчуванням значення 'horizontal':
        // direction:'vertical',

        //Ефекти переключення слайдів:
        //За замовчуванням effect: 'slide'
        
        //Плавно зникає і плавно зʼявляється новий слайд
        // effect: 'fade',
        //Доповненння до fade:
        // fadeEffect:{
            // Паралельна зміна прозорості(цей варіант підійде для 1 зображення):
        //     crossFade: true
        // },

        //Буде ніби перегортатись
        // effect:'flip',
        //Доповненння до flip:
        // flipEffect:{
            //Тінь
            // slideShadows:true,
            //Показ тільки активного слайду
        //     limitRotation: true,
        // }

        //Буде перегортатись ніби всі слайди в квадраті
        // effect:'cube',
        //Доповненння до cube:
        // cubeEffect:{
            //Налаштування тіні
        //     slideShadows:true,
        //     shadow:true,
        //     shadowOffset: 20,
        //     shadowScale: 0.94,
        // }

        //
        // effect:'coverflow',
        // Доповненння до coverflow:
        // coverflowEffect:{
        // кут:
            // rotate: 20,
        // Накладення:
            // stretch:50,
        // Тінь
            // slideShadows: false,
        // },

        //Брейк поінт(адаптив), реалізувається при ефекті переключення слайдів effect: 'slide'
        //Ширина екрана
        effect: 'slide',
        breakpoints:{
            320:{
                slidesPerView:1,
            },
            480:{
                slidesPerView:2,
            },
            992:{
                slidesPerView:3,
            },

        }




});