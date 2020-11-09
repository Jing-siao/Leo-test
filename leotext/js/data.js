let data = {
  menu: [
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
  ]
};

let vm = new Vue({
  el: '#app',
  data: data,
  methods: {
    active() {

      $("button.hamburger").toggleClass("is-active");
      // $(".menu").show();
      // $(".menu").slideToggle(1000, easing);
      $(".menu").slideToggle();

    },
  },
  mounted() {
    // rwd
    // 一進來先判斷
    if ($(window).width() <= 1140) {

      $('.member span p').hide();
    } else {
      $('.member span p').show();
    };
    // resize再判斷一次
    $(window).resize(function () {
      if ($(window).width() <= 1140) {
        $('.member span p').hide();
      } else {
        $('.member span p').show();
      };

    });

    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      }
    });
  },
});