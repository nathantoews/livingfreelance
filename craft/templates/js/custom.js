$(document).ready(function () {
    $('#workFilter').on('change', function () {
        if (this.value == 'all') {
            $('.job').show();
        }else{
            var elems = $('.job[data-category="'+this.value+'"]');
            $('.job').not(elems).hide();
            elems.show();
        }
    });
});


$(function() {
      console.log('test');
  $('.main-nav li a[href^="/' + location.pathname.split("/")[1] + '"]').parent().addClass('activeNav');
});


$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 600);
        return false;
      }
    }
  });
});


// INPUT HIGHLIGHTING  ///////////////////////////////////////////////////////////////////////////////

(function() {
        // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
        if (!String.prototype.trim) {
          (function() {
            // Make sure we trim BOM and NBSP
            var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            String.prototype.trim = function() {
              return this.replace(rtrim, '');
            };
          })();
        }
        [].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
          // in case the input is already filled..
          if( inputEl.value.trim() !== '' ) {
            classie.add( inputEl.parentNode, 'input--filled' );
          }
          // events:
          inputEl.addEventListener( 'focus', onInputFocus );
          inputEl.addEventListener( 'blur', onInputBlur );
        } );
        function onInputFocus( ev ) {
          classie.add( ev.target.parentNode, 'input--filled' );
        }
        function onInputBlur( ev ) {
          if( ev.target.value.trim() === '' ) {
            classie.remove( ev.target.parentNode, 'input--filled' );
          }
        }
      })();

//// MENU ANIMATE STYLES //////////////////////////////////////////////////

var tl = new TimelineMax({paused:true}),
    forward = false;

var right = "m13.44,7.35 l 20.56,18.65";
var left = "m13.44,1.35 l 20.56,-18.65";
var middle = "m8.5,14l25,0";

  tl.to('#Line3', 0.25, {
    x:0,
    y:0,
    stroke:'#ccc',
    attr: {
    d:middle,
    },
    ease: Power1.easeIn,
  },0),

  tl.to('.goose', 0.15, {
    fill:'#1dbbbd',
    height:'90%',
    ease: Power1.easeInOut,
  },0),

  tl.to('#logo', 0.15, {
    fill:'#1dbbbd',
    ease: Power1.easeInOut,
  },0),

  tl.to('.name', 0.15, {
    ease: Power1.easeInOut,
  },0),

  tl.to('#Line3', 0.25, {
    x:-3.03,
    y:-1.94,
    attr: {
    d:right,
    },
    ease: Power1.easeOut,
  },0.5),

  tl.to('#Line', 0.25, {
    x:0,
    y:0,
    attr: {
      d:middle,
    },
    ease: Power1.easeIn,
  },0),

  tl.to('#Line', 0.25, {
    stroke:'#ccc',
    x:-3.03,
    y:22.72,
    attr: {
      d:left,
    },
    ease: Power1.easeOut,
  },0.5),

  tl.to('#Line2', 0.5, {
    opacity:0,
    ease: Power1.easeIn,
  },0);

(function() {
	var triggerBttn = document.getElementById( 'trigger-overlay' ),
		overlay = document.querySelector( 'div.overlay' ),
		closeBttn = overlay.querySelector( 'button.overlay-close' );
		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		support = { transitions : Modernizr.csstransitions };

	function toggleOverlay() {
		if( classie.has( overlay, 'open' ) ) {
      classie.remove( overlay, 'open' );
			classie.add( overlay, 'close' );
			openSvg();
		}
		else if( !classie.has( overlay, 'close' ) ) {
			openSvg();
			classie.add( overlay, 'open' );
		}
    else if( classie.has( overlay, 'close' ) ) {
      openSvg();
      classie.remove( overlay, 'close' );
      classie.add( overlay, 'open' );
    }
	}
	triggerBttn.addEventListener( 'click', toggleOverlay );
})();


function openSvg() {
	if(forward)//timeline is going forward so we should reverse it
  {
    tl.reverse();
  }
  else//timeline is going backwards, so we should make it go forward
  {
    tl.play();
  }
  //this toggles the boolean on each click event
  forward = forward  ? false : true;
};

