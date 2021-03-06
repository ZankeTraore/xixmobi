var _temp_sec=0;
		
function hasAttr(o, attr) {
    return $(o).attr(attr) != undefined;
}


(function ( $ ) {
    $.fn.rooster = function(action, options) {
	
        /****************************************
         * Jquery Rooster!
         * A simple countdown timer.
         *
         * Currently does not accept date time formats
         *
         *****************************************/

        var INTERVAL = 100;

        var el = $(this);

        var defaults = {
            seconds: $('.timer').attr("data-rooster-seconds") || 0,
            onComplete: el.data('rooster-oncomplete') || null,
            onStart: el.data('rooster-onstart') || null,
            onStop: el.data('rooster-onstop') || null,
            includeMinutes: hasAttr(el, 'data-rooster-includeminutes') ? el.data('rooster-includeminutes') : true,

            state: el.data('state') || 'idle',
        };

        var opts = $.extend({}, defaults, options);

        var milliseconds = opts.seconds * 1000 + INTERVAL;
		

        function updateTimer() {

            var displayTime;
            var seconds;

            if (opts.includeMinutes) {
                var minutes = Math.floor((milliseconds / 1000) / 60);
                minutes = minutes.toString();
                while (minutes.length < 2) minutes = '0' + minutes;

                seconds = Math.floor(milliseconds / 1000) % 60;
                seconds = seconds.toString();
                while (seconds.length < 2) seconds = '0' + seconds;

                displayTime = minutes + ':' + seconds;
            } else {
                seconds = Math.floor(milliseconds / 1000);
                seconds = seconds.toString();

                displayTime = seconds;
            }
			
			total_seconds=(parseInt(minutes)*60)+parseInt(seconds);
			
			if(_temp_sec==0 || _temp_sec!=total_seconds){
				
				_temp_sec=total_seconds;
			
			if(total_seconds==0)
			{
				$("#idstar1").attr("src","img/star.png");
				$("#idstar2").attr("src","img/star.png");
				$("#idstar3").attr("src","img/star.png");
				$("#idstar4").attr("src","img/star.png");
				$("#idstar5").attr("src","img/star.png");
				
				$("#starContainer").data("stars",5);
			}
			
			
			else if(_star1==total_seconds)
			{
				$("#idstar1").attr("src","img/emtlystar.png");
				$("#idstar2").attr("src","img/emtlystar.png");
				$("#idstar3").attr("src","img/emtlystar.png");
				$("#idstar4").attr("src","img/emtlystar.png");
				$("#idstar5").attr("src","img/emtlystar.png");
				
				$("#starContainer").data("stars",0);
			}
			else if(_star2==total_seconds)
			{
				$("#idstar1").attr("src","img/star.png");
				$("#idstar2").attr("src","img/emtlystar.png");
				$("#idstar3").attr("src","img/emtlystar.png");
				$("#idstar4").attr("src","img/emtlystar.png");
				$("#idstar5").attr("src","img/emtlystar.png");
				
				$("#starContainer").data("stars",1);
				
			}
			else if(_star3==total_seconds)
			{
				$("#idstar1").attr("src","img/star.png");
				$("#idstar2").attr("src","img/star.png");
				$("#idstar3").attr("src","img/emtlystar.png");
				$("#idstar4").attr("src","img/emtlystar.png");
				$("#idstar5").attr("src","img/emtlystar.png");
				
				$("#starContainer").data("stars",2);
				
			}
			else if(_star4==total_seconds)
			{
				$("#idstar1").attr("src","img/star.png");
				$("#idstar2").attr("src","img/star.png");
				$("#idstar3").attr("src","img/star.png");
				$("#idstar4").attr("src","img/emtlystar.png");
				$("#idstar5").attr("src","img/emtlystar.png");
				
				$("#starContainer").data("stars",3);
				
			}			
			
			else if(_star5==total_seconds)
			{
				$("#idstar1").attr("src","img/star.png");
				$("#idstar2").attr("src","img/star.png");
				$("#idstar3").attr("src","img/star.png");
				$("#idstar4").attr("src","img/star.png");
				$("#idstar5").attr("src","img/emtlystar.png");
				
				$("#starContainer").data("stars",4);
			}
            el.html(displayTime);
			
			}
			
        }
		
		

        function clearRoosterTimer() {
			_temp_sec=0;
            clearInterval(el.data('countdown'));
            el.data('countdown', null);
			el.attr("data-rooster-seconds",0);
        }

		
		

        function pauseRoosterTimer() {
			
            clearInterval(el.data('countdown'));
            el.data('countdown', null);
			el.attr("data-rooster-seconds",_temp_sec);
        }		
		
        function onInterval() {
			

			
            milliseconds += INTERVAL;
            updateTimer();
            if (milliseconds > 0) {
                return;
            }
            clearRoosterTimer();
            if (opts.onComplete) {
                if (typeof(opts.onComplete) == 'string') {
                    eval(opts.onComplete);
                } else if (typeof(opts.onComplete) == 'function') {
                    opts.onComplete();
                }
            }
        }

        switch (action) {
            case 'start':
                // Start the Timer
                el.data('state', 'active');
                el.data('countdown', setInterval(onInterval, INTERVAL));
                return this;
            case 'stop':
                el.data('state', 'idle');
                clearRoosterTimer();
                return this;
				
				
            case 'pause':
                el.data('state', 'idle');
                pauseRoosterTimer();
                return this;				
				
            case 'resume':
                // Start the Timer
                el.data('state', 'active');
                el.data('countdown', setInterval(onInterval, INTERVAL));
                return this;		
			
			
            default:
                // Initialize
                updateTimer();
                return this;
        }
    };

}( jQuery ));