var vue = new Vue({
  el: "#app",
  data: function() {
    return {
      visible: false,
      video: {
        //播放视频弹窗
        show: false,
        src: "",
      },
    };
  },
  methods: {
    // 播放视频
    playVideo() {},
    closeVideoDialog() {
      this.video.show = false;
    },
  },
});
// 设置所有图片不允许选中和复制
(function() {
  function none() {
    return false;
  }
  let imgs = document.querySelectorAll(".img-info");
  imgs.forEach(function(el) {
    el.oncontextmenu = none;
    el.ondragstart = none;
    el.onselectstart = none;
  });

  let container = document.querySelector(".container");
  let icon = document.querySelector(".web-logo");
  // 添加滚动条事件，设置头部背景和图标
  document.body.onscroll = function(event) {
    if (document.scrollingElement.scrollTop == 0) {
      container.classList.remove("move");
      icon.src = "/assets/img/fulgent_logo_02.png";
    } else {
      container.classList.add("move");
      icon.src = "/assets/img/fulgent_logo.png";
    }
  };
})();
