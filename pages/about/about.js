
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    provinceInd: 0,
    array: ['北京市', '天津市', '保定市'],
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
  toNext: function () {
    wx.navigateTo({
      url: '../shouye/shouye'
    })
  }
})
