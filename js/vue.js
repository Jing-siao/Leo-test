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
      speed: 300,
      autoplaySpeed: 3000,
      autoplay: true,
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
          breakpoint: 576,
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
          <h5>{{item.giftTitle}}</h5>
        </div>

      </div>
  `,
});
Vue.component('point', {
  props: ['item'],
  template: `
      <a :href="item.link" class="col-md card">
        <div class="imgWrap col-sm-12">
          <img :src="item.src" alt="">
        </div>
        <div class="wrap">
            <h5>{{item.title}}</h5>
            <p>剩餘數量:{{item.total}}</p>
            <p>兌換上限:{{item.limit}}</p>
            <p>point:{{item.point}}點</p>
        </div>

      </a>
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
    data:

    {
      footer:
        [

          {
            title: '活動辦法',
            link: 'javascript:;',
          },
          {
            title: '兌換專區',
            link: 'javascript:;',
          },
          {
            title: '常見問題',
            link: 'javascript:;',
          },
          {
            title: '會員專區',
            link: 'javascript:;',
          },
          {
            title: '卡友專區',
            link: 'javascript:;',
          },
          {
            title: '交通優惠',
            link: 'javascript:;',
          },
        ],
      copyright: 'All Rights Reserved.',
      company: '國眾國際商業銀行',
      companyEn: 'LEO International Bank.',
      year: '©' + new Date().getFullYear(),


    },
  });
})()