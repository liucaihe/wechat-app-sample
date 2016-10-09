

const util = require( '../../utils/util.js' );

Page( {
    data: {
        dataList : []
    },
    onLoad: function( options ) {
        // 页面初始化 options为页面跳转所带来的参数
        var that = this, id = options.id;

        // 请求精选数据
        util.AJAX( "theme/" + id, function( res ) {

            // 重新写入数据
            that.setData( {
                dataList: res.data,
            });
        });

    },
    onReady: function() {
        // 页面渲染完成
        wx.setNavigationBarTitle( {
            title: this.data.dataList.name
        })
    },
    onShow: function() {
        // 页面显示
    },
    onHide: function() {
        // 页面隐藏
    },
    onUnload: function() {
        // 页面关闭
    }
})