//index.js
//获取应用实例
var e = require('../../utils/config.js') 
var t = require('../../models/request.js')

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabbar: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //底部导航栏组件
    app.editTabbar();
    this.getCategory();
  
  },

  getCategory:function(){
    var that = this, i = {};
    t.wxPromise("post", e.getCategoryListUrl, i).then(function (e) {
      that.setData({
        videoList: e.data.data
      });
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})