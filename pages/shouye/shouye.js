//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    kuInd: 0,
    kuArray: ['AOPA题库', 'UTC', 'ASFC'],
    subKu: 0,
    subkuList: ['航拍技术', '植保技术', '巡航技术', '测绘技术'],
    showToast:false,
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
    wx.request({
      url: 'test.php', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
      }
    })
    
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
    var href =  event.currentTarget.dataset.href;
    wx.navigateTo({
      url: '../' + href + '/'+href
    })
    console.log(href)
  },
  selectSubKu(event){
    var that = this
    this.setData({
      subKu: event.currentTarget.dataset.subku,
      showToast: true
    })
    setTimeout(function(){
      that.setData({
        showToast: false
      })
    },1500)
  },
  bindTikuPickerChange: function(event){
    this.setData({
      kuInd: event.detail.value
    })
  }
})
