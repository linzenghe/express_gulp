/**
 * Created by Administrator on 2017/5/24.
 */
/* dialogModal */
(function($) {

    $.fn.dialogModal = function(method) {
        var elem = $(this),
            elemObj,
            elemContObj,
            elemClass = 'm-modal',
            _options,
            animTime;

        var methods = {
            init : function(params) {
                var _defaults = {
                    onOkBut: function() {return true;},
                    onCancelBut: function() {},
                    onLoad: function() {},
                    onClose: function() {},
                };
                _options = $.extend(_defaults, params);

                $('html.' + elemClass + 'Open').off('.' + elemClass + 'Event').removeClass(elemClass + 'Open');

                $('.' + elemClass).remove();

                var currentDialog = 0, maxDialog = elem.length - 1,
                dialogMain = $('<div class="' + elemClass + '"></div>'),
                dialogContainer = $('<div class="' + elemClass + '-box"></div>'),
                dialogCloseBut = $('<button type="button" class="close">&times;</button>'),
                dialogBody = $('<div class="' + elemClass + '_body"></div>');
                dialogMain.append(dialogContainer);
                dialogContainer.append(dialogCloseBut, dialogBody);
                dialogBody.append(elem[currentDialog].innerHTML);
                $('body').append(dialogMain);

                elemObj = $('.' + elemClass);
                elemContObj = $('.' + elemClass + '-box');
                getAnimTime();

                if (_options.onLoad && $.isFunction(_options.onLoad)) {
                    _options.onLoad();
                }

                elemObj.on('destroyed', function() {
                    if (_options.onClose && $.isFunction(_options.onClose)) {
                        _options.onClose();
                    }
                });

                centerDialog();

                function centerDialog() {
                    var dialogHeight = elemContObj.outerHeight(),
                        windowHeight = $(window).height();
                    if (windowHeight > dialogHeight + 80) {
                        elemContObj.css({
                            marginTop: ($(window).height() - dialogHeight) / 2 + 'px'
                        });
                    } else {
                        elemContObj.css({
                            marginTop: '60px'
                        });
                    }

                    $('body').addClass(elemClass + 'Open');
                    elemObj.addClass('open');

                    setTimeout(function() {
                        elemObj.addClass('open');
                        elemContObj.css({
                            marginTop: parseInt(elemContObj.css('marginTop')) + 'px'
                        });
                    }, animTime);

                    bindFooterButtons();
                }

                function bindFooterButtons() {
                    elemObj.find('[data-dialogModalBut="close"]').bind('click', function() {
                        dialogModalClose();
                    });

                    elemObj.find('[data-dialogModalBut="ok"]').bind('click', function(event) {
                        var ok;
                        if (_options.onOkBut && $.isFunction(_options.onOkBut)) {
                            ok = _options.onOkBut(event);
                        }
                        if (ok !== false) {
                            dialogModalClose();
                        }
                    });

                    elemObj.find('[data-dialogModalBut="cancel"]').bind('click', function() {
                        if (_options.onCancelBut && $.isFunction(_options.onCancelBut)) {
                            _options.onCancelBut();
                        }
                        dialogModalClose();
                    });
                }
                elemObj.find('.close').bind('click', function() {
                    dialogModalClose();
                });

                $('html').on('keydown.' + elemClass + 'Event', function(event) {
                    if (event.keyCode == 27) {
                        dialogModalClose();
                    }
                });

            },
            hide : function() {
                dialogModalClose();
            }

        };

        function dialogModalClose() {
            var elemObj = $('.' + elemClass);
            setTimeout(function() {
                elemObj.removeClass('open');
                setTimeout(function() {
                    elemObj.remove();
                    $('body').removeClass(elemClass + 'Open');
                    $('html.' + elemClass + 'Open').off('.' + elemClass + 'Event').removeClass(elemClass + 'Open');
                }, animTime);
            }, animTime);
        }

        function getAnimTime() {
            if (!animTime) {
                animTime = elemObj.css('transitionDuration');
                if (animTime !== undefined) {
                    animTime = animTime.replace('s', '') * 1000;
                } else {
                    animTime = 0;
                }
            }
        }

        if (methods[method]) {
            return methods[method].apply( this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || ! method) {
            return methods.init.apply( this, arguments );
        }

    };

    $('* [data-dialogModalBind]').bind('click', function() {
        var elemBind = $(this).attr('data-dialogModalBind');
        $(elemBind).dialogModal();
    });

    $.event.special.destroyed = {
        remove: function(o) {
            if (o.handler) {
                o.handler();
            }
        }
    };
})(jQuery);



