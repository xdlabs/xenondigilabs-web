/**
 *    ASSET-XSA224292767209366678225-xJS
 *    Author: Abhay Arora ( @abhayaurora )
 *    XenonStack LLP. ( http://xenonstack.com )
 *    Copyrights (c) 2015, XenonStack LLP. All rights reserved.
 */

if(!jQuery)
	console.error('ERROR: jQuery not found!');
else{
	_H = 0;
	_W = 0
	X = window.jQuery;
	responsiveStylesheet = function (){
		_H = window.document.documentElement.clientHeight;
		_W = window.document.documentElement.clientWidth;
		X('*').css({'padding':'0px','margin':'0px'});
		X('body').css({'font-family':"'Open Sans', sans-serif"});
		X('#loading-wrapper').css({'width':_W+'px','height':_H+'px','background':'#eee'});
		X('#loading-image').css({'width':parseInt(_H/2)+'px','height':parseInt(_H/2)+'px','position':'absolute','left':parseInt(_W/2-_H/4)+'px','top':parseInt(_H/2-_H/4-_H/15)+'px'});
		X('#loading-text').css({'font-size':parseInt(_H/32)+'px','line-height':parseInt(_H/32)+'px','position':'absolute','left':parseInt(_W/2-_H/9+_W/300)+'px','top':parseInt(_H/2-_H/32+_H/15)+'px'});
		X('#landing-page').css({'width':_W+'px','height':_H+'px'});
		X('#landing-page #particles-background').css({'position':'absolute','top':'0px','left':'0px','width':_W+'px','height':_H+'px'});
		particlesJS("particles-background", {
	      "particles": {
	        "number": {
	          "value": 100,
	          "density": {
	            "enable": true,
	            "value_area": 650
	          }
	        },
	        "color": {
	          "value": "#555"
	        },
	        "shape": {
	          "type": "polygon",
	          "stroke": {
	            "width": 0.5,
	            "color": "#bbb"
	          },
	          "polygon": {
	            "nb_sides": 4
	          }
	        },
	        "opacity": {
	          "value": 0.4,
	          "random": true,
	          "anim": {
	            "enable": true,
	            "speed": 1,
	            "opacity_min": 0.1,
	            "sync": false
	          }
	        },
	        "size": {
	          "value": 3,
	          "random": true,
	          "anim": {
	            "enable": false,
	            "speed": 40,
	            "size_min": 0.1,
	            "sync": false
	          }
	        },
	        "line_linked": {
	          "enable": true,
	          "distance": 150,
	          "color": "#aaa",
	          "opacity": 0.4,
	          "width": 1
	        },
	        "move": {
	          "enable": true,
	          "speed": 6,
	          "direction": "none",
	          "random": false,
	          "straight": false,
	          "out_mode": "out",
	          "bounce": false,
	          "attract": {
	            "enable": false,
	            "rotateX": 600,
	            "rotateY": 1200
	          }
	        }
	      },
	      "interactivity": {
	        "detect_on": "window",
	        "events": {
	          "onhover": {
	            "enable": true,
	            "mode": "grab"
	          },
	          "onclick": {
	            "enable": false,
	            "mode": "push"
	          },
	          "resize": true
	        },
	        "modes": {
	          "grab": {
	            "distance": 140,
	            "line_linked": {
	              "opacity": 1
	            }
	          },
	          "bubble": {
	            "distance": 400,
	            "size": 40,
	            "duration": 2,
	            "opacity": 8,
	            "speed": 3
	          },
	          "repulse": {
	            "distance": 200,
	            "duration": 0.4
	          },
	          "push": {
	            "particles_nb": 4
	          },
	          "remove": {
	            "particles_nb": 2
	          }
	        }
	      },
	      "retina_detect": true
	    });
		canvas = document.getElementsByClassName('particles-js-canvas-el')[0];
		canvas.setAttribute('height',_H);
		canvas.setAttribute('width',_W);
		X('.particles-js-canvas-el').css({'position':'absolute','top':'0px','left':'0px','height':_H+'px','width':_W+'px'});
		X('#landing-page #top-bar').css({'position':'fixed','top':'0px','left':'0px','width':_W+'px','height':parseInt(_H/15)-1+'px','background':"url('trans-fff.png')",'border-bottom':'1px #eee solid'});
		X('#landing-page #top-bar-logo').css({'position':'absolute','top':'1px','left':parseInt(_W/2-_H/15)+'px','height':parseInt(_H/15)-3+'px'});
		X('#landing-page #top-bar-links').css({'z-index':'10','position':'absolute','top':'1px','right':parseInt(_W/12)+'px','height':parseInt(_H/15)-3+'px','line-height':parseInt(_H/15)-3+'px','font-size':parseInt(_H/70)+'px'});
		X('#landing-page #top-bar-links a').css({'text-decoration':'none','color':'#000', 'cursor':'pointer'});
		X('#landing-page #sections').css({'position':'absolute','top':'0px','left':'0px','width':_W+'px','height':_H+'px'});
		X('#landing-page #sections-touch-sensor').css({'position':'absolute','top':'0px','left':'0px','width':_W+'px','height':_H+'px'});
		X('#landing-page #bottom-sliders').css({'position':'absolute','bottom':'0px','left':'0px','width':_W+'px'});
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			X('#landing-page #sections .section').css({'width':parseInt(_W)+'px'});
			X('#landing-page #sections #section-1').css({'position':'absolute', 'left':'0px', 'top':parseInt(1/4*(_H-_H/15)-(_H-_H/15)/4+_H/15)+'px'});
			X('#landing-page #sections #section-2').css({'position':'absolute', 'left':'0px', 'top':parseInt(2/4*(_H-_H/15)-(_H-_H/15)/4+_H/15)+'px'});
			X('#landing-page #sections #section-3').css({'position':'absolute', 'left':'0px', 'top':parseInt(3/4*(_H-_H/15)-(_H-_H/15)/4+_H/15)+'px'});
			X('#landing-page #sections #section-4').css({'position':'absolute', 'left':'0px', 'top':parseInt(4/4*(_H-_H/15)-(_H-_H/15)/4+_H/15)+'px'});
			X('#landing-page #sections-touch-sensor').css({'display':'none'});
			X('#landing-page #bottom-sliders').css({'display':'none'});
			X('#landing-page #branding-text-area').css({'position':'absolute','top':'9px','left':'30px','width':_W+'px','height':parseInt(_H/20)+'px','text-align':'left'});
			X('#landing-page #branding-text-area #brand-name').css({'color':'#000','font-size':parseInt(_H/45)+'px'});
			X('#landing-page #branding-text-area #brand-tagline').css({'color':'#555','font-size':parseInt(_H/90)+'px'});
		} else {
			X('#landing-page #sections-touch-sensor').css({'display':'block'});
			X('#landing-page #bottom-sliders').css({'display':'block'});
			X('#landing-page #sections .section').css({'width':parseInt(_W/4)+'px'});
			X('#landing-page #sections #section-1').css({'position':'absolute', 'left':parseInt(1/4*_W-_W/4)+'px', 'top':parseInt(_H/3)+'px'});
			X('#landing-page #sections #section-2').css({'position':'absolute', 'left':parseInt(2/4*_W-_W/4)+'px', 'top':parseInt(_H/3)+'px'});
			X('#landing-page #sections #section-3').css({'position':'absolute', 'left':parseInt(3/4*_W-_W/4)+'px', 'top':parseInt(_H/3)+'px'});
			X('#landing-page #sections #section-4').css({'position':'absolute', 'left':parseInt(4/4*_W-_W/4)+'px', 'top':parseInt(_H/3)+'px'});
			X('#landing-page #sections-touch-sensor #touch-1').css({'position':'absolute', 'left':parseInt(1/4*_W-_W/4)+'px', 'top':parseInt(_H/3)+'px','height':parseInt(_H-(_H/3))+'px','width':parseInt(_W/4)+'px','z-index':'9'});
			X('#landing-page #sections-touch-sensor #touch-2').css({'position':'absolute', 'left':parseInt(2/4*_W-_W/4)+'px','top':parseInt(_H/3)+'px','height':parseInt(_H-(_H/3))+'px','width':parseInt(_W/4)+'px','z-index':'9'});
			X('#landing-page #sections-touch-sensor #touch-3').css({'position':'absolute', 'left':parseInt(3/4*_W-_W/4)+'px', 'top':parseInt(_H/3)+'px','height':parseInt(_H-(_H/3))+'px','width':parseInt(_W/4)+'px','z-index':'9'});
			X('#landing-page #sections-touch-sensor #touch-4').css({'position':'absolute', 'left':parseInt(4/4*_W-_W/4)+'px', 'top':parseInt(_H/3)+'px','height':parseInt(_H-(_H/3))+'px','width':parseInt(_W/4)+'px','z-index':'9'});
			X('#landing-page #bottom-sliders #slider-1').css({'position':'absolute', 'left':parseInt(1/4*_W-_W/4)+'px', 'bottom':'8px','height':parseInt(_W/5)-4+'px','width':parseInt(_W/4-2)+'px'});
			X('#landing-page #bottom-sliders #slider-2').css({'position':'absolute', 'left':parseInt(2/4*_W-_W/4)+'px', 'bottom':'8px','height':parseInt(_W/5)-4+'px','width':parseInt(_W/4-2)+'px'});
			X('#landing-page #bottom-sliders #slider-3').css({'position':'absolute', 'left':parseInt(3/4*_W-_W/4)+'px', 'bottom':'8px','height':parseInt(_W/5)-4+'px','width':parseInt(_W/4-2)+'px'});
			X('#landing-page #bottom-sliders #slider-4').css({'position':'absolute', 'left':parseInt(4/4*_W-_W/4)+'px', 'bottom':'8px','height':parseInt(_W/5)-4+'px','width':parseInt(_W/4-2)+'px'});
			X('#landing-page #bottom-sliders .slider').css({'background':'#fff','border-left':'1px #eee solid', 'border-right':'1px #eee solid', 'border-top':'4px #eee solid'}).hide();

			X('#landing-page #sections-touch-sensor #touch-1').hover(function(){
				X('#landing-page #bottom-sliders #slider-1').stop().slideDown(999);
				X('#landing-page #sections #section-1 .line').stop().animate({'width':'80%'});
			}, function(){
				X('#landing-page #bottom-sliders #slider-1').stop().slideUp(333);
				X('#landing-page #sections #section-1 .line').stop().animate({'width':'100px'});
			});
			X('#landing-page #sections-touch-sensor #touch-2').hover(function(){
				X('#landing-page #bottom-sliders #slider-2').stop().slideDown(999);
				X('#branding-text-area').stop().animate({'opacity':'0.2'});
				X('#landing-page #sections #section-2 .line').stop().animate({'width':'80%'});
			}, function(){
				X('#landing-page #bottom-sliders #slider-2').stop().slideUp(333);
				X('#branding-text-area').stop().animate({'opacity':'1'});
				X('#landing-page #sections #section-2 .line').stop().animate({'width':'100px'});
			});
			X('#landing-page #sections-touch-sensor #touch-3').hover(function(){
				X('#landing-page #bottom-sliders #slider-3').stop().slideDown(999);
				X('#branding-text-area').stop().animate({'opacity':'0.2'});
				X('#landing-page #sections #section-3 .line').stop().animate({'width':'80%'});
			}, function(){
				X('#landing-page #bottom-sliders #slider-3').stop().slideUp(333);
				X('#branding-text-area').stop().animate({'opacity':'1'});
				X('#landing-page #sections #section-3 .line').stop().animate({'width':'100px'});
			});
			X('#landing-page #sections-touch-sensor #touch-4').hover(function(){
				X('#landing-page #bottom-sliders #slider-4').stop().slideDown(999);
				X('#landing-page #sections #section-4 .line').stop().animate({'width':'80%'});
			}, function(){
				X('#landing-page #bottom-sliders #slider-4').stop().slideUp(333);
				X('#landing-page #sections #section-4 .line').stop().animate({'width':'100px'});
			});

			X('#landing-page #bottom-sliders .slider .slider-section').css({'float':'left','width':'100%','height':parseInt((_W/5)/3)-1+'px', 'border-bottom':'1px #eee solid'});
			X('#landing-page #bottom-sliders .slider .slider-section .slider-section-image').css({'float':'left','margin-left':(_H/35)+'px','width':'25%','overflow':'hidden','transform':'skewX(-20deg)'});
			X('#landing-page #bottom-sliders .slider .slider-section .slider-section-image img').css({'height':parseInt((_W/5)/3)+'px','transform':'skewX(20deg)','margin-left':'-'+(_W/50)+'px'});
			X('#landing-page #bottom-sliders .slider .slider-section .slider-section-text').css({'float':'left','width':'50%','padding':'1% 5%'});
			X('#landing-page #bottom-sliders .slider .slider-section .slider-section-text b').css({'font-size':parseInt(_H/50)+'px','color':'#000', 'font-weight':'600'});
			X('#landing-page #bottom-sliders .slider .slider-section .slider-section-text p').css({'font-size':'10pt', 'font-weight':'400', 'color':'#888888', 'padding-top':'5px'});
			X('#landing-page #branding-text-area').css({'position':'absolute','top':parseInt(3/4*_H)+'px','left':'0px','width':_W+'px','height':parseInt(_H/4)+'px','text-align':'center'});
			X('#landing-page #branding-text-area #brand-name').css({'font-size':parseInt(_H/12-2)+'px', 'font-weight':'300', 'border-top':'1px #eee solid', 'border-bottom':'1px #eee solid', 'background':"url('trans-fff.png')", 'color':'#000'});
			X('#landing-page #branding-text-area #brand-tagline').css({'color':'#666','font-size':parseInt(_H/40)+'px', 'font-weight':'100'});
		}

		X('#landing-page #sections .section h2').css({'font-size':parseInt(_H/25)+'px', 'font-weight':'normal','font-style':'italic', 'padding':'10px'});
		X('#landing-page #sections .section p').css({'font-size':parseInt(_H/50)+'px', 'padding':'10px', 'text-align':'justify'});
		X('#landing-page #sections .section .line').css({'width':'100px', 'margin-left':'10px'});
		X('#landing-page #sections #section-1 .line').css({'border-bottom':'5px  #ff3d10 solid'});
		X('#landing-page #sections #section-2 .line').css({'border-bottom':'5px  #109eff solid'});
		X('#landing-page #sections #section-3 .line').css({'border-bottom':'5px  #ffbd11 solid'});
		X('#landing-page #sections #section-4 .line').css({'border-bottom':'5px  #7cbe12 solid'});
	};
	X(document).ready(function(){
		responsiveStylesheet();
		X(window).resize(function(){
			responsiveStylesheet();
		});
		X('#loading-wrapper').fadeOut(1000, function(){
			X('#content-wrapper').fadeIn(1000);
			particlesJS("particles-background", {
		      "particles": {
		        "number": {
		          "value": 100,
		          "density": {
		            "enable": true,
		            "value_area": 650
		          }
		        },
		        "color": {
		          "value": "#555"
		        },
		        "shape": {
		          "type": "polygon",
		          "stroke": {
		            "width": 0.5,
		            "color": "#bbb"
		          },
		          "polygon": {
		            "nb_sides": 4
		          }
		        },
		        "opacity": {
		          "value": 0.4,
		          "random": true,
		          "anim": {
		            "enable": true,
		            "speed": 1,
		            "opacity_min": 0.1,
		            "sync": false
		          }
		        },
		        "size": {
		          "value": 3,
		          "random": true,
		          "anim": {
		            "enable": false,
		            "speed": 40,
		            "size_min": 0.1,
		            "sync": false
		          }
		        },
		        "line_linked": {
		          "enable": true,
		          "distance": 150,
		          "color": "#aaa",
		          "opacity": 0.4,
		          "width": 1
		        },
		        "move": {
		          "enable": true,
		          "speed": 6,
		          "direction": "none",
		          "random": false,
		          "straight": false,
		          "out_mode": "out",
		          "bounce": false,
		          "attract": {
		            "enable": false,
		            "rotateX": 600,
		            "rotateY": 1200
		          }
		        }
		      },
		      "interactivity": {
		        "detect_on": "window",
		        "events": {
		          "onhover": {
		            "enable": true,
		            "mode": "grab"
		          },
		          "onclick": {
		            "enable": false,
		            "mode": "push"
		          },
		          "resize": true
		        },
		        "modes": {
		          "grab": {
		            "distance": 140,
		            "line_linked": {
		              "opacity": 1
		            }
		          },
		          "bubble": {
		            "distance": 400,
		            "size": 40,
		            "duration": 2,
		            "opacity": 8,
		            "speed": 3
		          },
		          "repulse": {
		            "distance": 200,
		            "duration": 0.4
		          },
		          "push": {
		            "particles_nb": 4
		          },
		          "remove": {
		            "particles_nb": 2
		          }
		        }
		      },
		      "retina_detect": true
		    });
			canvas = document.getElementsByClassName('particles-js-canvas-el')[0];
			canvas.setAttribute('height',_H);
			canvas.setAttribute('width',_W);
			X('.particles-js-canvas-el').css({'position':'absolute','top':'0px','left':'0px','height':_H+'px','width':_W+'px'});
			X('#landing-page #sections-touch-sensor').click(function(){
				window.location.replace('the-stack.html');
			});
		});
	});
}

/*    EOF    */
