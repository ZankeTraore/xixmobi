var c = console.log.bind(console);

(function() {
    $.fn.longTap = function(options) {
        
        options = $.extend({
            delay: 500,
            onRelease: null
        }, options);
        
        var eventType = {
            mousedown: 'ontouchstart' in window ? 'touchstart' : 'mousedown',
            mouseup: 'ontouchend' in window ? 'touchend' : 'mouseup'
        };
        
        return this.each(function() {
            $(this).on(eventType.mousedown + '.longtap', function() {
                $(this).data('touchstart', +new Date);
            })
            .on(eventType.mouseup + '.longtap', function(e) {
                var now = +new Date,
                    than = $(this).data('touchstart');
                now - than >= options.delay && options.onRelease && options.onRelease.call(this, e);
            });
        });
    };
})(jQuery);