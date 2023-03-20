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
        slidesPerView: 3,

        //Відключення функціоналу якщослайдів менше ніж потрібно
        watchOverflow: true,

        //Відступ між слайдами:
        spaceBetween: 15,

        //Кількість слайдів які перелистуються:
        slidesPerGroup: 1,

        //Активний слайд по центру. Якщо потрібно щоб слайди показувались з права на ліво(для арабів) то в html то головного блоку слайдеру дописати після div та перед class - dir="rtl" та відключитив js -> centeredSlides:true,:
        // centeredSlides:true,

        //Стартовий слайд:
        initialSlide: 0,

});