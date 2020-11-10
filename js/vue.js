let header = new Vue({
  el: '#app',
  data: data,
  methods: {
    active() {

      $("button.hamburger").toggleClass("is-active");
      $(".menu").slideToggle();

    },
  },
  mounted() {
    // rwd
    // 一進來先判斷
    if ($(window).width() < 720) {

      $('.member span p').hide();
    } else {
      $('.member span p').show();
    };
    // resize再判斷一次
    $(window).resize(function () {
      if ($(window).width() < 720) {
        $('.member span p').hide();
      } else {
        $('.member span p').show();
      };

    });
  },
});

let banner = new Vue({
  el: '#banner',
  data: data,
  computed: {
    bannerIndex() {
      return this.banner[this.index]
    },
    total() {
      return this.banner.length
    }
  },
  methods: {
    changeIndex(change) {
      let length = this.banner.length;
      this.index = (this.index + change + length) % length;
    }
  },
  mounted() {
    //輪播
    $('.slider').slick({
      dots: true,
      infinite: true,
      arrows: true,
      // speed: 300,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        // {
        //   breakpoint: 1024,
        //   settings: {
        //     slidesToShow: 3,
        //     slidesToScroll: 1,
        //   }
        // },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        },
      ]
    });

  },
});
Vue.component('card', {
  props: ['item'],
  template: `
        <div class="col-sm card">
        <div class="imgWrap col-sm-12">
          <img :src="item.src" alt="">
        </div>
        <div class="wrap">
          <div class="circle">
            <i class="fas fa-gift"></i>
          </div>
          <p>{{item.title}}</p>
        </div>

      </div>
  `,
});
let main = new Vue({
  el: '#main',
  data: data,
});

let toTop = new Vue({
  el: '#go_top',
  methods: {
    toTop(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 400);
    }

  },
});
; (function () {
  new Vue({
    el: "#footer",
    data: {
      copyright: 'All Rights Reserved.',
      company: '台新國際商業銀行',
      companyEn: 'Taishin International Bank.',
      year: '©' + new Date().getFullYear(),


    },
  });
})()