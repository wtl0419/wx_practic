// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        current:0,
    },
    //轮播图下标修改
    swiperChange:function(e){
        console.log(e.detail);
        this.setData({
            current:e.detail.current+1
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad:function(options) {
        wx.request({
          url: 'http://iwenwiki.com:3002/api/banner',
          success:function(res){
              console.log(res.data);
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