/**
 * Created by Administrator on 2017/5/27.
 */

require(['jquery','validate'], function ($,validate){
    $("#login").validate({
        debug:true,
        rules:{
            user_name:{
                required:true,
            },
            password:{
                required:true,
            },
            captcha:{
                required:true,
                minlength:4,
            }
        },
        messages:{
            user_name:{
                required:"请输入账号",
            },
            password:{
                required:"请输入密码",
            },
            captcha:{
                required:"请输入验证码",
                minlength:"至少输入4位验证码",
            }
        },
    });
});