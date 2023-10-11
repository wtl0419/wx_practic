// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        current:0,
        bannerArr:[],
        listArr:[],
    },
    //轮播图下标修改
    swiperChange:function(e){
        this.setData({
            current:e.detail.current+1
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad:function(options) {
        wx.showLoading({
          title: 'data loading',
        })
        var that=this;
        wx.request({
          url: 'http://iwenwiki.com:3002/api/banner',
          success:function(res){
              if(res.data.status == 200)
              {
                  wx.showToast({
                    title: 'geted data',
                  })
                  console.log(res.data.data);
                  console.log('请求成功');
                  that.setData({
                      bannerArr:res.data.data
                  })
              }
              else
              {
                    console.log('请求失败');
              }
          },
          complete:function(){
              wx.hideLoading();
          }
        })
        //获取首页数据
        wx.request({
          url: 'http://iwenwiki.com:3002/api/indexlist',
          success:function(res){
              //get list data
              if(res.data.status == 200){
                wx.showToast({
                    title: 'geted data',
                  })
                console.log(res.data);
                that.setData({
                    listArr:res.data.data
                })
              }
          },
          complete:function(){
              wx.hideLoading();
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