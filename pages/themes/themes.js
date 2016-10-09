

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

            var arr = res.data;
            console.log( arr );

            // var arr = res.data;
            // var format = util.getFormatDate( arr.date );

            // // 格式化日期方便加载指定日期数据
            // // 格式化日期获取星期几方便显示
            // arr[ "dateDay" ] = format.dateDay;
            // // 获取当前现有数据进行保存
            // var list = that.data.datalist;

            // 重新写入数据
            that.setData( {
                dataList: arr,
            });
        });

    },
    onReady: function() {
        // 页面渲染完成
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