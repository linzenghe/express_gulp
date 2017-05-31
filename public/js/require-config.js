/**
 * Created by Administrator on 2017/5/27.
 */
require.config({
    paths: {
        "jquery": "/js/lib/jquery/dist/jquery.min",
        "modal":"/js/plugin/modal",       //弹框
        "validate":"/js/lib/jquery-validation/dist/jquery.validate.min"   //验证
    },
    shim:{
        "modal":{
            deps:["jquery"]
        },
        "validate":{
            deps:["jquery"]
        }
    }
});