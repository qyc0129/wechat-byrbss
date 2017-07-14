var sc=1;
var ss=1;
Page({
  data:{
    text3:null,
    text4:null,
    text5:null
  },
  onLoad: function (option) {
    console.log(option.id)
    ss=option.id
    
    var that=this
    that.setData({
      text3: option.id,
      text4: wx.getStorageSync('utitles' + option.id),
      text5: wx.getStorageSync('contents' + option.id)
    })
  },
  cscs:function(event)
  {
    wx.showToast({
      title: '收藏成功',
      icon: 'success',
      duration: 2000
    });
    var ii3=sc;
    sc=Number(sc+Number(1));
    console.log(sc)
    wx.setStorageSync('sctitles' + sc, wx.getStorageSync('utitles' + ss));
    wx.setStorageSync('scpages' + sc, wx.getStorageSync('contents' + ss));
    console.log(wx.getStorageSync('sctitles' + sc))
    console.log(wx.getStorageSync('scpages' + sc))
  }
})