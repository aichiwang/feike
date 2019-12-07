
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    kuInd: 0,
    kuArray: ['AOPA理论题库', 'UTC', 'ASFC'],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {

  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  hrefTo: function (event) {
    var href = event.currentTarget.dataset.href;
    wx.navigateTo({
      url: '../' + href + '/' + href
    })
  },
  bindPickerChange: function (event) {
    // var href = event.currentTarget.dataset.href;
    wx.navigateTo({
      url: '../shouye/shouye'
    })
  }
})
