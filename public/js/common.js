/**
 * Created by Administrator on 2017/5/16.
 */
define('require',function (require,exports,module) {
    return {
        toggleFlex:function () {
            
        }
    };
});

/*
$(function(){
    $(".left-side").niceScroll({styler:"fb",cursorcolor:"#3475cf", cursorwidth: '3', cursorborderradius: '0px', background: '#3475cf', spacebarenabled:false, cursorborder: '0'});
    $(".left-side").getNiceScroll();
    if ($('body').hasClass('left-side-collapsed')) {
        $(".left-side").getNiceScroll().hide();
    }
    //sideNavIco按钮点击事件
    jQuery('.sideNavIco').click(function(){
        $(".left-side").getNiceScroll().hide();
        if ($('body').hasClass('left-side-collapsed')) {
            $(".left-side").getNiceScroll().hide();
        }
        var body=jQuery('body');
        var bodyposition=body.css('position');
        if(bodyposition!='relative'){
            if(!body.hasClass('left-side-collapsed')){
                body.addClass('left-side-collapsed');
                jQuery('.nav-stacked ul').attr('style','');
                jQuery(this).addClass('menu-collapsed');
            }else{
                body.removeClass('left-side-collapsed');
                jQuery('.nav-stacked li.active ul').css({display:'block'});
                jQuery(this).removeClass('menu-collapsed');
            }
        }else {
            if(body.hasClass('left-side-show'))
                body.removeClass('left-side-show');
            else
                body.addClass('left-side-show');
        }
    });
    //移动到图标出现导航栏
    jQuery('.nav-stacked > li').hover(function(){
        jQuery(this).addClass('nav-hover');
    }, function(){
        jQuery(this).removeClass('nav-hover');
    });

    //左侧导航点击效果
    jQuery('.menu-list > a').click(function() {
        var parent = jQuery(this).parent();
        var sub = parent.find('> ul');
        if(!jQuery('body').hasClass('left-side-collapsed')) {
            if (sub.is(':visible')) {
                sub.slideUp(200, function () {
                    parent.removeClass('nav-active');
                    jQuery('.main-content').css({height: ''});

                });
            } else {
                visibleSubMenuClose();
                parent.addClass('nav-active');
                sub.slideDown(200, function () {

                });
            }
        }
    });

    function visibleSubMenuClose() {
        jQuery('.menu-list').each(function() {
            var t = jQuery(this);
            if(t.hasClass('nav-active')) {
                t.find('> ul').slideUp(200, function(){
                    t.removeClass('nav-active');
                });
            }
        });
    }

    //下拉框取值
    $(".item .dropdown-menu li").bind("click",function(){
        var text=$(this).html();
        $(this).parents(".s").find(".inputSpec").val(text);
    })

    //发送验证码   移动  成js的function
})*/
