//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 定义图片数组
    imgs:[
                {url:'../../images/1/1.jpg'},
                {url:'../../images/1/2.jpg'},
                {url:'../../images/1/3.jpg'},
                {url:'../../images/1/4.jpg'},
                {url:'../../images/1/5.jpg'},
                {url:'../../images/1/6.jpg'},
                {url:'../../images/1/7.jpg'},
                {url:'../../images/1/8.jpg'},
                {url:'../../images/1/9.jpg'}
              ]
  },

  onLoad: function () {
    var arr = [
                {url:'../../images/1/1.jpg'},
                {url:'../../images/1/2.jpg'},
                {url:'../../images/1/3.jpg'},
                {url:'../../images/1/4.jpg'},
                {url:'../../images/1/5.jpg'},
                {url:'../../images/1/6.jpg'},
                {url:'../../images/1/7.jpg'},
                {url:'../../images/1/8.jpg'},
                {url:'../../images/1/9.jpg'}
              ];
    wx.setStorageSync('switch',{});
    wx.setStorageSync('array',arr);
  },
  //事件处理函数
/*  bindViewTap: function (e) {
    this.setData({ src: "../../images/1/6.jpg" })
  },*/
  //事件处理函数
  bindViewTap: function(event) {
    var arr = wx.getStorageSync('array');
    var storge = wx.getStorageSync("switch");
    console.log(storge)
    if(storge.src == null){
      wx.setStorageSync('switch',{'index':event.currentTarget.dataset.index,'src':event.currentTarget.dataset.src})
    } else {
      console.log('进来了')
      // 从缓存中获取上一次点击事件的相关值
      var storgeIndex = wx.getStorageSync("switch").index;
      var storgeSrc = wx.getStorageSync("switch").src;
      // 获取最新一次点击事件的相关值
      var index = event.currentTarget.dataset.index;
      var src = event.currentTarget.dataset.src;
      arr[storgeIndex].url = src;
      arr[index].url = storgeSrc;
      // 删除缓存
      wx.removeStorageSync('switch');

      wx.setStorageSync('array',arr);
    // 重新刷新视图
    this.setData({imgs:arr})
    }
    
  },
 
})
