const app = getApp()

Page({
  data: {
    bannerimg:'http://mobiccdai.ppdaicdn.com/source/report/image/banner3.png',
    btnimg:"http://mobiccdai.ppdaicdn.com/source/report/image/cel2.png",
    banimg:"http://mobiccdai.ppdaicdn.com/source/report/image/ban2.png",
  },
  onLoad() {

  },
  expRead: function () {
    console.log("111");
    wx.switchTab({
      url: "/pages/index/index"
    })
  }
})