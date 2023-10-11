// pages/indexDetail/indexDetail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        obj:{},
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad:function(options) {
        var that=this;
        console.log(options);
        wx.showNavigationBarLoading();
        wx.request({
          url: 'http://iwenwiki.com:3002/api/indexlist/detail',
          data:{
              id:options.code
          },
          success:function(res){
              console.log(res.data);
              that.setData({
                  obj:res.data[0]
              })
              wx.hideNavigationBarLoading();
          }
        })
        
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})