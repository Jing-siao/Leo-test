let data = {
  index: 0,
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
  ],
  banner: [
    {
      title: '活動一',
      src: 'https://picsum.photos/seed/picsum/600/300',
      link: 'javascript:;',
    },
    {
      title: '活動二',
      src: "http://fakeimg.pl/600x300/282828/ccc/",
      link: 'javascript:;',

    },
    {
      title: '活動三',
      src: "http://fakeimg.pl/600x300/aaa/ccc/",
      link: 'javascript:;',

    },
    {
      title: '活動四',
      src: "http://fakeimg.pl/600x300/282828/ccc/",
      link: 'javascript:;',

    },
    {
      title: '活動五',
      src: "http://fakeimg.pl/600x300/bbb/ccc/",
      link: 'javascript:;',

    },

  ],
};

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
  }
});