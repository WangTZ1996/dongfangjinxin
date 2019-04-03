let mySwiper = new Swiper ('.swiper-container', {
  autoplay: {
    stopOnLastSlide: false,
  },
  loop: true,
  on: {
    slideChange: function () {
      getDataNumeber(this.slides[this.activeIndex]);
    },
  },

  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
    bulletElement: 'li',
    bulletClass : 'pagination',
    bulletActiveClass: 'paginationActive',
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


function getDataNumeber(slide) {
  const span = slide.querySelector('span');
  span.textContent = span.dataset.number;
  let count = span.dataset.number;
  roll(this.activeIndex,count,span);
}



function roll(index, count, span) {
  // let number = document.getElementsByClassName('number')[index];
  let num = {
    value: 0
  }

  function animate(time) {
    TWEEN.update(time);
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);

  var tween = new TWEEN.Tween(num);

  tween.to({ value: count }, 1500);
  tween.easing(TWEEN.Easing.Quadratic.Out);
  tween.onUpdate(function () {
    span.textContent = Math.round(num.value);
  });
  tween.start();
}


