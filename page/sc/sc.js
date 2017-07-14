// sc.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text1: '',
    text2: '',
    text3: '',
    text4: '',
     text5:'',
      text6:'',
      text7: '',
      text8:'',
      picker1Value: 1,
      picker1Range: [1, 2, 3, 4, 5, 6, 7, 8, 9],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
        text1: wx.getStorageSync('sctitles1'),
        text2: wx.getStorageSync('sctitles2'),
        text3: wx.getStorageSync('sctitles3'),
        text4: wx.getStorageSync('scpages1'),
        text5: wx.getStorageSync('scpages2'),
        text6: wx.getStorageSync('scpages3'),
    

      })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  normalPickerBindchange: function (e) {
    this.setData({
      picker1Value: e.detail.value
    })
  },
  ckck: function (event) {
    var cs = Number(this.data.picker1Value)
    console.log(cs)
    this.setData({
      text7: wx.getStorageSync('scpages'+cs)


    })
  },
})