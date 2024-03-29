//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    sex:0,
    mudi:0,
    provinceInd: 0,
    array: ['北京市', '天津市','保定市'],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.getProvince();

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  toNext: function(){
    wx.navigateTo({
      url: '../shouye/shouye'
    })
  },
  selectSex(event){
    this.setData({
      sex: event.currentTarget.dataset.sex
    })
  },
  selectMudi(event) {
    this.setData({
      mudi: event.currentTarget.dataset.mudi
    })
  },
  getProvince: function(){
    wx.request({
      url: 'https://api.feikebaodian.com/feike/api/question/questionTypeList', //仅为示例，并非真实的接口地址
      data: {
        pid: 0
      },
      success(res) {
        console.log(res.data)
      }
    })
  }
})
