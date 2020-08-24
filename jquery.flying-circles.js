var Dots = (function() {
	var options = {
		selector: '.moving-circles',	
		accurancy: 0,
		color: 'red',
		size: 20,
		speed: 20000,
		width: '100%',
		height: '100%',
		randomOpacity: false,
		randomSize: false,
		randomColor: false
	};

    var generate = function ( params ) {

    	params = params || {};

    	options = $.extend(options, params);

    	options.selector = (typeof options.selector === "string") ? options.selector : '.moving-circles';
    	options.color = (typeof options.color === "string") ? options.color : 'red';

    	if (typeof options.width === "string") {
    		options.width = ($(window).width() * parseInt(options.width)) / 100; 
    	} else if (typeof options.width !== "number" && typeof options.width !== "string") {
    		options.width = 500;
    	}

    	if (typeof options.height === "string") {
    		options.height = ($(window).height() * parseInt(options.height)) / 100; 
    	} else if (typeof options.height !== "number" && typeof options.height !== "string") {
    		options.height = 500;
    	}	
    	options.accurancy = (typeof options.accurancy === "number") ? options.accurancy : 100;
    	options.size = (typeof options.accurancy === "number") ? options.size : 20;
    	options.speed = (typeof options.speed === "number") ? options.speed : 20000;
    	options.randomOpacity = (typeof options.randomOpacity === "boolean") ? options.randomOpacity : true;
    	options.randomSize = (typeof options.randomSize === "boolean") ? options.randomSize : true;
    	options.randomColor = (typeof options.randomColor === "boolean") ? options.randomColor : true;

    	var opts = options;
    	var move_speed, 
    	top_destination, 
    	left_destination;
  

		var elem;    	

    	$(opts.selector).css({'width': opts.width,'height': opts.height,'overflow':'hidden'});

    	var floatWidth = 300;
    	var floatHeight = 150;

    	if (window.innerWidth > 1920){
    		floatWidth = 500;
    		floatHeight = 200;
    	}
    	var styles = {
    		'width': floatWidth + 'px',
    		'height': floatHeight + 'px', 
    		'position': 'absolute'
    	}

    	for (i = 0; i <= opts.accurancy; i++) {

			elem = $('<div/>', {
						class: 'circle',
						style: 'top:'+randomize(opts.height, 0)+'px;left:'+randomize(opts.width, 0)+'px;'
				   });
			elem2 = $('<video />', {
			    id: 'video_wrapper2',
			    src: 'https://lapses.s3.ap-northeast-2.amazonaws.com/prism/comingsoon_s.mp4',
			    type: 'video/mp4',
			    controls: false
			}).prop({
				playsinline: true,
			    muted: true,
			    autoplay: true,
			    loop: true,
			});;
			$('#video_wrapper2').attr('playsinline','');
			elem2.attr('playsinline',''); 
    		$(opts.selector).append(elem);
    		elem.append(elem2);
    		// $(opts.selector).append(video);
    		$('.' + elem[0].className).css(styles);
    		anim( elem );

    	}
  
    };

    var anim = function( item ){

	    	move_speed = (options.speed <= 0) ? parseInt(options.speed) : randomize(options.speed, Math.floor(options.speed / 5));
	    	top_destination = (options.height <= 0) ? parseInt(options.height) : randomize(options.height, 1);
	    	left_destination = (options.width <= 0) ? parseInt(options.width) : randomize(options.width, 1);


	        $(item).css("background-color", 'transparent').animate({
	        	backgroundColor: '#000000',
	        	top: top_destination,
	        	left: left_destination,
	        },move_speed, function(){
	    		return anim( item );
	        });
    };

    var randomize = function( max, min ) {
    	return Math.random() * (max - min) + min;
    };


    return {
    	generate : generate	
    }

})();