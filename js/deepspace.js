

//Responsive parallax
 (function() {
function responsiveFn() {
     width = $( window ).width();

    if(width <= 1050){
        $('header').parallaxify({
          positionProperty: 'transform',
          responsive: true,
          motionType: 'natural',
          mouseMotionType: 'performance',
          motionAngleX: 65,
          motionAngleY: 65,
          alphaFilter: 0.5,
          adjustBasePosition: true,
          alphaPosition: 0.025,
        });

    }
 else {
      $('header').hover(
    function(){
        $(this).parallaxify({
          positionProperty: 'transform',
          responsive: true,
          motionType: 'natural',
          mouseMotionType: 'performance',
          motionAngleX: 5,
          motionAngleY: 5,
          alphaFilter: 0.5,
          adjustBasePosition: true,
          alphaPosition: 0.025,
        });
    },
    function(){
        $(this).parallaxify('destroy');
    }
);
    }
 }
// load() event and resize() event are combined
   $(window).ready(responsiveFn).resize(responsiveFn);
   })();


//Smooth anchor scrolling
$(function() {
    $('body').on('click', '.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});



// Closes the Menu on Menu Item Click
$('nav a.page-scroll').click(function() {
    $('#trigger-overlay').click();
});


// Fs Menu
(function() {
    var triggerBttn = document.getElementById( 'trigger-overlay' ),
        overlay = document.querySelector( 'div.overlay' );
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
            classie.add( overlay, 'close-menu' );
            var onEndTransitionFn = function( ev ) {
                if( support.transitions ) {
                    if( ev.propertyName !== 'visibility' ) return;
                    this.removeEventListener( transEndEventName, onEndTransitionFn );
                }
                classie.remove( overlay, 'close-menu' );
            };
            if( support.transitions ) {
                overlay.addEventListener( transEndEventName, onEndTransitionFn );
            }
            else {
                onEndTransitionFn();
            }
        }
        else if( !classie.has( overlay, 'close-menu' ) ) {
            classie.add( overlay, 'open' );
        }
    }

    triggerBttn.addEventListener( 'click', toggleOverlay );
})();

// Hamburger Icon
 (function() {

    "use strict";

    var toggles = document.querySelectorAll(".c-hamburger");

    for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
      toggle.addEventListener( "click", function(e) {
        e.preventDefault();
        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
      });
    }

  })();







// Particles
particlesJS("particles-js", {"particles":{"number":{"value":180,"density":{"enable":true,"value_area":800}},"color":{"value":"#00d1c5"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":2.5,"random":true,"anim":{"enable":false,"speed":6,"size_min":0.3,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":2,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});

particlesJS("particles-js-contact", {"particles":{"number":{"value":80,"density":{"enable":false,"value_area":0}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":3},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":2,"random":true,"anim":{"enable":true,"speed":12.636899747262001,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":165,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":2,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"bubble"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});

// Dynamic Text
$(document).ready(function() {
  var text1 = $('#text1');
  var text2 = $('#text2');
  var text3 = $('#text3');
  text2.hide();
  text3.hide();
  var settimer = 0;
  setInterval(function() {
    if (settimer === 1) {
      text3.fadeOut(450);
      text1.fadeIn(450);
      settimer = 0;
    } else if (settimer === 2) {
      text3.fadeIn(450);
      text2.fadeOut(450);
      settimer = 1;
    }
    else {
      text2.fadeIn(450);
      text1.fadeOut(450);
      settimer = 2;
    }
  }, 3000);
});


// On document ready:

$(function(){
    // Instantiate MixItUp:
    $('#filter-works').mixItUp();

    // Odd css for visible elements only
      // $('#filter-works').on('mixStart', function(e, state){
      // 	$('.grid .mix:visible:odd').css('margin', '60px 0 -30px');
      // });
});

// SVG Hovers
(function() {

    function init() {
        var speed = 250,
            easing = mina.easeinout;

        [].slice.call ( document.querySelectorAll( '.grid a' ) ).forEach( function( el ) {
            var s = Snap( el.querySelector( 'svg' ) ), path = s.select( 'path' ),
                pathConfig = {
                    from : path.attr( 'd' ),
                    to : el.getAttribute( 'data-path-hover' )
                };

            el.addEventListener( 'mouseenter', function() {
                path.animate( { 'path' : pathConfig.to }, speed, easing );
            } );

            el.addEventListener( 'mouseleave', function() {
                path.animate( { 'path' : pathConfig.from }, speed, easing );
            } );
        } );
    }

    init();

})();


// Detailed view animation
$(function() {
  $(".grid a").click(function() {
    $(".portfolio-modal img").addClass("animated fadeInLeft").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
    function() {
        $(this).removeClass('animated fadeInLeft')
    });
  });
   $(".grid a").click(function() {
    $(".portfolio-modal .inner").addClass("animated fadeInUp").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
    function() {
        $(this).removeClass('animated fadeInUp')
    });
  });

   // Forms Focus States
   $(".row.control-group").click(function() {
    $(this).addClass("animated pulse control-group-active").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
    function() {
        $(this).removeClass('animated pulse')
    });
  });
});
$('.row.control-group').click(function() {
      $(".row.control-group-active").removeClass("control-group-active");
      $(this).addClass('control-group-active');
});

$('.submit button').click(function() {
      $(".row.control-group-active").removeClass("control-group-active");
});



// add the animation to the modal

$( ".portfolio-modal.modal" ).each(function(index) {
   $(this).on('show.bs.modal', function (e) {
        $(this).addClass('zoomIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
    function() {
        $(this).removeClass('zoomIn')
    });
}).on('hide.bs.modal', function (e) {
        $(this).addClass('zoomOut');
}).on('hidden.bs.modal', function (e) {
        $(this).removeClass('zoomOut')
    });
});
console.log('Heeey! Stalking Again?');
