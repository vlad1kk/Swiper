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
        }

});