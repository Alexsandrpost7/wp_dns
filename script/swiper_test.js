
var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  // direction: 'vertical',
  direction: 'horizontal',
  loop: true,
//     autoplay: {
//     delay:2000,
// },
  // Эффекты переключения слайдов
  // Переворот
// effect: 'flip',
// // Дополнения к flip
// flipEffect: {
//     // Тень
//     slideShadows: true,
//     // Показ только активного слайда
//     limitRotation: true,
// },



keyboard: {
  enabled: true,

},

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  //   Для перехода по булитам
    clickable: true,
    dynamicBullets: true,
    progressbarOpposite: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    
  },
})

//   Если внутри flex? то min-width: 0!!