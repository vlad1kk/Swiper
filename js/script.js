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
        clickable: true,
        // Щоб динамічно змінювались кружечки знизу:
        dynamicBullets: true,
        // Кастомний булет:
        renderBullet: function(index, className){
            return'<span class="' + className + '">' + (index + 1) +'</span>';
        },
    },
});