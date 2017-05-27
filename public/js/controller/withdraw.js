/**
 * Created by Administrator on 2017/5/24.
 */



require(['jquery','modal'], function ($){
    $("#openModal").bind("click",function () {
        $('.dialog_content').dialogModal({
            /*关闭按钮*/
            onClose: function(){},
        });
    });
});