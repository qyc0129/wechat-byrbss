var coolsite360 = require('./coolsite/index.js');
App({
  data: { info: {}},
  coolsite360: coolsite360,
  onLaunch: function () {
    //调用API从本地缓存中获取数据

  },

  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function (res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },
  stitle: function (title) {
    
 
    var that= this;
    wx.request({
      url: 'https://14421498.qcloud.la/',
      // url: 'http://localhost:5000/todo/api/v1.0/tasks',
      data: '{"query":{"bool":{"must":[],"must_not":[],"should":[{"query_string":{"default_field":"_all","query":"' + title + '"}}]}},"from":0,"size":30,"sort":[],"aggs":{}}',
      header: { 'content-type': 'application/x-www-form-urlencoded' },  
      method: 'POST',
      dataType: '',
      // success: function (res) { 
      //   console.log(res.data.tasks["0"].description);
      //   console.log(res.data.tasks["1"].description);},
     
      success: function (res) {
        
    
          
          
        // wx.setStorageSync('key', res)
        console.log(res)
        const title = new Array();
        const urls=new Array();
        const content=new Array();
        var length = res.data.hits.hits.length;
        console.log(length)
        for (var i = 0; i < length; i++) {
          console.log(res.data.hits.hits[i]._source.title)
          //title[i]=(res.data.hits.hits[i]._source.title);
          title.push(res.data.hits.hits[i]._source.title);
          wx.setStorageSync('utitles' + i, title[i]);
        }
        for (var i = 0; i < length; i++) {
          console.log(res.data.hits.hits[i]._source.url)
          //title[i]=(res.data.hits.hits[i]._source.title);
          urls.push(res.data.hits.hits[i]._source.url);
          wx.setStorageSync('uurls' + i, urls[i]);
        }
        for (var i = 0; i < length; i++) {
          console.log(res.data.hits.hits["0"]._source.page)
          //title[i]=(res.data.hits.hits[i]._source.title);
          content.push(res.data.hits.hits[i]._source.page);
          wx.setStorageSync('contents' + i, content[i]);
        }
        var that=this;
        
        console.log(title);
        var k=1
        try {
          wx.setStorageSync('le', length)
          wx.setStorageSync('le1', length)
          wx.setStorageSync('titles', title)
          //wx.setStorageSync('jonNumsed'+k, title[3]);
        } catch (e) {
        }
       
      },
      fail: function (res) { },
      complete: function (res) {
         wx.setStorage({key:"key223",data:res.data})
        },
      
    })
 
  },
  globalData: {
    userInfo: null,
    lj:null,
  }
})