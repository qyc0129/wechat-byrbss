
// 引入coolsite360交互配置设定
require('coolsite.config.js');

// 获取全局应用程序实例对象
var app = getApp();
var inm=1;
var inn=1;
// 创建页面实例对象
Page({
  /**
   * 页面名称
   */
  name: "page1",
  /**
   * 页面的初始数据
   */

  data: {
    picker1Value: 0,
    picker1Range: [1,2,3,4,5,6,7,8,9],
    text2:null,
    text3:null,
    text4:null,
    text5:null,
    objectArray: [
      { id: 5, unique: 'unique_5' },
      { id: 4, unique: 'unique_4' },
      { id: 3, unique: 'unique_3' },
      { id: 2, unique: 'unique_2' },
      { id: 1, unique: 'unique_1' },
      { id: 0, unique: 'unique_0' },
    ], listData: [
      { "code": "01", "text": "text1", "type": "type1" },
      { "code": "02", "text": "text2", "type": "type2" },
      { "code": "03", "text": "text3", "type": "type3" },
      { "code": "04", "text": "text4", "type": "type4" },
      { "code": "05", "text": "text5", "type": "type5" },
      { "code": "06", "text": "text6", "type": "type6" },
      { "code": "07", "text": "text7", "type": "type7" }
    ],
    numberArray: [1, 2, 3, 4],
    scrollTop: 0,
    scrollHeight: 0
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
 
    // 注册coolsite360交互模块
    app.coolsite360.register(this);
    this.setData({
      text2: options.id
    })
    var ser=this.data.text2
    // app.stitle(ser)
    // console.log(app.data.Info)
    // console.log(this.data.Info)
    app.stitle(ser)
    var that=this
    
    app.getUserInfo(function(text3){
      var k=1;
      that.setData({
        text3:wx.getStorageSync('titles') || [],
        text4:wx.getStorageSync('le')
      })
    })
    that.data.listData.push({ "code": "09", "text": "text7", "type": "type7" })
    console.log(this.data.listData)
   var value=this.data.text4
   console.log(value)
   var ser3 = this.data.text2
   var ii=1;
   var ks=0;
   if(ks=0)
    {wx.setStorageSync('iii3',ii);
    ks=ks+1;}
   ii=wx.getStorageSync('iii3')
   console.log(ii+"llalaa")
   this.setData({
     text5: ser3,
     listData: [{ "code": ii, "text": wx.getStorageSync('utitles' + ii), "type": wx.getStorageSync('uurls' + ii) },
       { "code": ii + 1, "text": wx.getStorageSync('utitles' + (ii+1)), "type": wx.getStorageSync('uurls' + (ii+1)) },
       { "code": ii + 2, "text": wx.getStorageSync('utitles' + (ii + 2)), "type": wx.getStorageSync('uurls' + (ii + 2)) },
       { "code": ii + 3, "text": wx.getStorageSync('utitles' + (ii + 3)), "type": wx.getStorageSync('uurls' + (ii + 3)) },
       { "code": ii + 4, "text": wx.getStorageSync('utitles' + (ii + 4)), "type": wx.getStorageSync('uurls' + (ii + 4)) },
       { "code": ii + 5, "text": wx.getStorageSync('utitles' + (ii + 5)), "type": wx.getStorageSync('uurls' + (ii + 5)) },
       { "code": ii + 6, "text": wx.getStorageSync('utitles' + (ii + 6)), "type": wx.getStorageSync('uurls' + (ii + 6)) },
       { "code": ii + 7, "text": wx.getStorageSync('utitles' + (ii + 7)), "type": wx.getStorageSync('uurls' + (ii + 7)) },
       { "code": ii + 8, "text": wx.getStorageSync('utitles' + (ii + 8)), "type": wx.getStorageSync('uurls' + (ii + 8)) },
       { "code": ii + 9, "text": wx.getStorageSync('utitles' + (ii + 9)), "type": wx.getStorageSync('uurls' + (ii + 9)) },


 

     ]
   })
   for (var i = 0; i < value; i++) {
     this.data.listData[i] = { "code": "07", "text": "text7", "type": "type7"}
   }
   if(inn==1)
   {
     console.log(inn)
     inn = inn + 1;
     wx.navigateTo({
     url: '../../page/page1/page1?id=' + options.id,
   });
   
   }
   else
   {
     if(inn=2)
     {
       inn=1;
     }
   }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {
    setTimeout(function () {
    console.log("a");
    }, 20000);
    // 执行coolsite360交互组件展示
    // app.coolsite360.onShow(this);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {

  },
 
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {
    this.allRequest()
    this.ongoingRequest()
    this.endRequest()
    wx.showToast({
      title: 'loading...',
      icon: 'loading',
      mask: true
    })
    wx.stopPullDownRefresh()
  },
  normalPickerBindchange: function (e) {
    this.setData({
      picker1Value: e.detail.value
    })
  },
  ckck:function(event)
  {
    console.log(inm)
    var cs=inm+Number(this.data.picker1Value)
    console.log(cs)
    wx.navigateTo({
      url: '../../page/test/test?id='+cs,
      //接口调用成功的回调方法
   })
  },


  //以下为自定义点击事件
  detail: function (event) {
    console.log("koko")
  //   wx.navigateTo({
  //     url: '../../page/page1/text?id='+this.item.code,
  //     //接口调用成功的回调方法
  //     success: function () { },
  //  })
},
  nextp: function (event) {
    //触发coolsite360交互事件
    var ii=inm+10;
    inm=ii;
    this.setData({
      listData: [{ "code": ii, "text": wx.getStorageSync('utitles' + ii), "type": wx.getStorageSync('uurls' + ii) },
      { "code": ii + 1, "text": wx.getStorageSync('utitles' + (ii + 1)), "type": wx.getStorageSync('uurls' + (ii + 1)) },
      { "code": ii + 2, "text": wx.getStorageSync('utitles' + (ii + 2)), "type": wx.getStorageSync('uurls' + (ii + 2)) },
      { "code": ii + 3, "text": wx.getStorageSync('utitles' + (ii + 3)), "type": wx.getStorageSync('uurls' + (ii + 3)) },
      { "code": ii + 4, "text": wx.getStorageSync('utitles' + (ii + 4)), "type": wx.getStorageSync('uurls' + (ii + 4)) },
      { "code": ii + 5, "text": wx.getStorageSync('utitles' + (ii + 5)), "type": wx.getStorageSync('uurls' + (ii + 5)) },
      { "code": ii + 6, "text": wx.getStorageSync('utitles' + (ii + 6)), "type": wx.getStorageSync('uurls' + (ii + 6)) },
      { "code": ii + 7, "text": wx.getStorageSync('utitles' + (ii + 7)), "type": wx.getStorageSync('uurls' + (ii + 7)) },
      { "code": ii + 8, "text": wx.getStorageSync('utitles' + (ii + 8)), "type": wx.getStorageSync('uurls' + (ii + 8)) },
      { "code": ii + 9, "text": wx.getStorageSync('utitles' + (ii + 9)), "type": wx.getStorageSync('uurls' + (ii + 9)) },




      ]
    })
    
  },
  befp: function (event) {
    if(inm<10)
    {return}
    //触发coolsite360交互事件
    var ii = inm - 10;
    inm = ii;
    this.setData({
      listData: [{ "code": ii, "text": wx.getStorageSync('utitles' + ii), "type": wx.getStorageSync('uurls' + ii) },
      { "code": ii + 1, "text": wx.getStorageSync('utitles' + (ii + 1)), "type": wx.getStorageSync('uurls' + (ii + 1)) },
      { "code": ii + 2, "text": wx.getStorageSync('utitles' + (ii + 2)), "type": wx.getStorageSync('uurls' + (ii + 2)) },
      { "code": ii + 3, "text": wx.getStorageSync('utitles' + (ii + 3)), "type": wx.getStorageSync('uurls' + (ii + 3)) },
      { "code": ii + 4, "text": wx.getStorageSync('utitles' + (ii + 4)), "type": wx.getStorageSync('uurls' + (ii + 4)) },
      { "code": ii + 5, "text": wx.getStorageSync('utitles' + (ii + 5)), "type": wx.getStorageSync('uurls' + (ii + 5)) },
      { "code": ii + 6, "text": wx.getStorageSync('utitles' + (ii + 6)), "type": wx.getStorageSync('uurls' + (ii + 6)) },
      { "code": ii + 7, "text": wx.getStorageSync('utitles' + (ii + 7)), "type": wx.getStorageSync('uurls' + (ii + 7)) },
      { "code": ii + 8, "text": wx.getStorageSync('utitles' + (ii + 8)), "type": wx.getStorageSync('uurls' + (ii + 8)) },
      { "code": ii + 9, "text": wx.getStorageSync('utitles' + (ii + 9)), "type": wx.getStorageSync('uurls' + (ii + 9)) },




      ]
    })}
})

