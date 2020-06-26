// pages/content/content.js

var url = '';

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options){
      url = 'https://www.codeboy.me/wechat/content/' + options.path;
      wx.setNavigationBarTitle({
        title: options.title
      })
    }
    var that = this;
    wx.showLoading({
      mask: true,
      title: '加载中'
    })
    wx.request({
      url: url,
      success: function (res) {
        var content = res.data.replace(/\/img\//g, 'https://www.codeboy.me/img/');
        content = content.replace(/<img /g, "<img class=\"content-img\" ").trim();
        content = content.replace(/<pre>/g, '').replace(/<\/pre>/g, '');
        that.setData({
          content: content
        });
        wx.hideLoading();
      },
      fail: function (res) {
        wx.hideLoading();
        wx.showToast({
          title: '加载失败',
          icon: 'failed',
          duration: 2000,
          mask: true
        });
      }
    })
  },
  onPullDownRefresh: function () {
    this.onLoad();
    wx.stopPullDownRefresh();
  },
})