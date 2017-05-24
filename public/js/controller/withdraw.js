/**
 * Created by Administrator on 2017/5/24.
 */

require.config({
    paths: {
        "jquery": "/lib/jquery/dist/jquery.min",
        "modal":"/js/modal"
    },
    shim:{
        "modal":{
            deps:["jquery"]
        }
    }
});

require(['jquery','modal'], function ($){
    $("#openModal").bind("click",function () {
        $('.dialog_content').dialogModal({
            onOkBut: function() {},
            onCancelBut: function() {},
            onLoad: function() {},
            onClose: function() {},
        });
    });
});