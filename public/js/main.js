/**
 * Created by Administrator on 2017/5/16.
 */
require.config({
    paths: {
        "jquery": "../lib/jquery/dist/jquery.min"
    }
});

require(['jquery'], function ($){
    $("h1").css({"color":'red'})
});