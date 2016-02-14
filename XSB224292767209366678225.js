/**
 *    ASSET-XSB224292767209366678225-xJS
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
		X('#content-page').css({'background':"url('trans-fff.png')", 'position':'absolute', 'left':'0px', 'top':'0px', 'width':_W+'px', 'height':_H+'px'});
		X('#content-page #left-pane').css({'position':'fixed', 'left':'0px', 'top':'0px', 'height':_H+'px', 'width':parseInt(_H/14)+'px', 'background':"#000", 'background-position':'center center', 'color':'#fff', 'overflow':'hidden'});
		X('#content-page #data-area').css({'position':'absolute', 'left':parseInt(_H/14)+'px', 'top':'0px', 'height':_H+'px', 'width':parseInt(_W - _H/14)+'px'});
		X('#content-page #left-pane #touch-sensor').css({'position':'absolute', 'top':'0px', 'left': '0px', 'width':parseInt(_H/3)+'px', 'height':_H+'px'});
		X('#content-page #left-pane a').css({'text-decoration':'none'});
		X('#content-page #left-pane #branding').css({'width':parseInt(_H/3)+'px', 'padding':parseInt(_W/40)+'px 0px', 'border-bottom':'1px  #111 solid', 'overflow':'hidden'});
		X('#content-page #left-pane #branding #brand-logo').css({'float':'left', 'width':parseInt(_H/14)+'px'});
		X('#content-page #left-pane #branding #brand-logo img').css({'width':parseInt(_H/14)-(_H/50)+'px', 'padding':(_H/50)+'px '+(_H/140)+'px'});
		X('#content-page #left-pane #branding #brand-name').css({'float':'left', 'width':parseInt(_H/3-_H/14)-(_H/50)+'px', 'padding':(_H/100)+'px 0px'});
		X('#content-page #left-pane #branding #brand-name h1').css({'font-size':parseInt(_H/32)+'px', 'font-weight':'100'});
		X('#content-page #left-pane #branding #brand-name h3').css({'font-size':parseInt(_H/55)+'px', 'color':'#ccc', 'font-weight':'300'});
		X('#content-page #left-pane #navigation').css({'width':parseInt(_H/3)+'px', 'padding':parseInt(_W/50)+'px 0px'});
		X('#content-page #left-pane #navigation ul#left-pane-nav').css({'list-style':'none', 'padding':'0px', 'margin':'0px'});
		X('#content-page #left-pane #navigation ul#left-pane-nav li').css({'padding':parseInt(_H/80)+'px '+parseInt(_H/60)+'px', 'border-bottom':'1px #111 solid', 'line-height':parseInt(_H/30)+'px'});
		X('#content-page #left-pane #navigation ul#left-pane-nav a').css({'font-size':parseInt(_H/50)+'px', 'font-weight':'300'});
		X('#content-page #left-pane #navigation ul#left-pane-nav a li span').css({'font-size':parseInt(_H/30)+'px', 'margin-right':parseInt(_H/60)+'px','padding-left':(_H/150)+'px'});
		X('#content-page #left-pane #navigation ul#left-pane-nav li.separator').css({'border-bottom':'none','height':parseInt(_H/30)+'px'});
		X('#footer').css({'float':'left','width':'100%', 'padding':'30px 0px', 'text-align':'center', 'margin-top':'40px', 'border-top':'1px #f7f7f7 solid', 'font-size':'9pt', 'color':'#888'});
		X('#footer a').css({'color':'#1982D1', 'text-decoration':'none'});
	};

	repeatResponsiveStylesheet = function(){
		_H = window.document.documentElement.clientHeight;
		_W = window.document.documentElement.clientWidth;
		X('.page-wrapper').css({'width':parseInt(_W - _W/2.5)+'px', 'margin':parseInt(_H/7)+'px auto'});
		X('.page-wrapper .page').css({'float':'left','width':'73%', 'padding':'1%', 'font-size':parseInt(_H/50)+'px'});
		X('.page-wrapper .pageLinks').css({'position':'fixed', 'left':'75%', 'width':'23%', 'padding':'1%'});
		X('.page-wrapper .pageLinks ul').css({'list-style':'none', 'padding':'0px', 'margin':'0px'});
		X('.page-wrapper .pageLinks li').css({'margin':parseInt(_H/45)+'px 0px', 'font-size':parseInt(_H/50)+'px', 'font-weight':'300','color':'#109eff', 'cursor':'pointer'});
		X('.page-wrapper .pageLinks li a').css({'color':'#109eff', 'text-decoration':'none'});

		X('.page .page-section').css({'padding':parseInt(_W/90)+'px 0px', 'margin-bottom':parseInt(_W/30)+'px'});
		X('.page .page-section-separator').css({'margin-bottom':parseInt(_W/30)+'px', 'width':'100%'});
		X('.page .page-section h1').css({'text-transform':'uppercase', 'font-weight':'100', 'color':'#000'});
		X('.page .page-section h1.quote').css({'text-align':'justify'});
		X('.page .page-section p').css({'color':'#555', 'text-align':'justify', 'line-height':'40px', 'padding':'35px 0px;'});
		X('.page .page-section h1').css({'font-size':'36pt'});
		X('.page .page-section h1.quote').css({'font-size':'30pt'});
		X('.page .page-section p').css({'font-size':'14pt'});
		X('.team-members').css({'float':'left','width':'100%'});
		X('.team-members .team-member p').css({'font-size':'10pt'});
		X('.team-members .team-member .member-image').css({'width':'100%'});
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			X('.team-members .team-member').css({'width':'92%', 'margin':'5% 4%', 'float':'left'});
		} else {
			X('.team-members .team-member').css({'width':'22%', 'margin':'5% 5.5%', 'float':'left'});
		}
	}

	X(document).ready(function(){
		responsiveStylesheet();
		repeatResponsiveStylesheet();
		X(window).resize(function(){
			responsiveStylesheet();
			repeatResponsiveStylesheet();
		});
		X('#loading-wrapper').fadeOut(1000, function(){
			X('#content-wrapper').fadeIn(1000);
		});
		X('#content-page #left-pane #touch-sensor').hover(function(){
			X('#content-page #left-pane').stop().animate({'width':parseInt(_H/3)+'px'});
			X('#content-page #data-area').stop().animate({'width':parseInt(_W-_H/3)+'px','left':parseInt(_H/3)+'px'});
		}, function(){
			X('#content-page #left-pane').stop().animate({'width':parseInt(_H/14)+'px'});
			X('#content-page #data-area').stop().animate({'width':parseInt(_W-_H/14)+'px','left':parseInt(_H/14)+'px'});
		});
		X('#content-page #left-pane #navigation ul#left-pane-nav li').click(function(){
			X('#content-page #left-pane #navigation ul#left-pane-nav li').removeClass('active');
			this.setAttribute('class','active');
		});
	});
}

stack = angular.module('the-stack', ['ngRoute']);

stack.config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/about-xenonstack', {
			templateUrl : 'about-xenonstack.html',
			controller  : 'aboutStack'
		}).when('/xenonify', {
			templateUrl : 'xenonify.html',
			controller  : 'xenonThingStack'
		}).when('/akira-stack', {
			templateUrl : 'akira-stack.html',
			controller  : 'akiraStack'
		}).when('/raycare', {
			templateUrl : 'raycare.html',
			controller  : 'etlStack'
		}).when('/xenon-stack', {
			templateUrl : 'xenon-stack.html',
			controller  : 'monitorStack'
		}).when('/dev-ops-stack', {
			templateUrl : 'dev-ops-stack.html',
			controller  : 'devopsStack'
		}).when('/cloud-factory', {
			templateUrl : 'cloud-factory.html',
			controller  : 'cloudStack'
		}).when('/portfolio', {
			templateUrl : 'portfolio.html',
			controller  : 'portfolioStack'
		}).when('/blog', {
			templateUrl : 'blog.html',
			controller  : 'blogStack'
		}).when('/contact-us', {
			templateUrl : 'contact-us.html',
			controller  : 'contactStack'
		}).when('/products', {
			templateUrl : 'products.html',
			controller  : 'contactStack'
		}).when('/solutions', {
			templateUrl : 'solutions.html',
			controller  : 'contactStack'
		}).when('/education', {
			templateUrl : 'education.html',
			controller  : 'contactStack'
		}).when('/research', {
			templateUrl : 'research.html',
			controller  : 'contactStack'
		}).otherwise({
			redirectTo : '/about-xenonstack'
		});
});

stack.controller('aboutStack', function($scope){
	document.getElementsByTagName('li')[0].setAttribute('class', 'active');
	repeatResponsiveStylesheet();
});

stack.controller('xenonThingStack', function($scope){
	repeatResponsiveStylesheet();
});

stack.controller('akiraStack', function($scope){
	repeatResponsiveStylesheet();
});

stack.controller('etlStack', function($scope){
	repeatResponsiveStylesheet();
});

stack.controller('monitorStack', function($scope){
	repeatResponsiveStylesheet();
});

stack.controller('devopsStack', function($scope){
	repeatResponsiveStylesheet();
});

stack.controller('cloudStack', function($scope){
	repeatResponsiveStylesheet();
});

stack.controller('portfolioStack', function($scope){
	repeatResponsiveStylesheet();
});

stack.controller('blogStack', function($scope){
	repeatResponsiveStylesheet();
});

stack.controller('contactStack', function($scope){
	repeatResponsiveStylesheet();
});

/*    EOF    */
