let mySwiper = new Swiper ('.swiper-container', {
     autoplay: {
         stopOnLastSlide: false,
     },
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable: false,
      type: 'bullets',
      bulletElement: 'li',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })        