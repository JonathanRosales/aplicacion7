// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.7
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery.extend(jQuery.easing,{easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a}});function ws_turn(d,a,b){var f=jQuery;var h=f(this);var c=f("li",b);var e=f(".ws_list",b);var g=f("<div>").addClass("ws_effect ws_turn").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",perspective:500}).appendTo(b);this.go=function(q,l){var s=b.height();var j=b.width();var k={left:["0% 50%",{rotateY:90,translate:[0,0,0.1]},{left:-j}],right:["100% 50%",{rotateY:-90,translate:[0,0,0.1]},{left:j}],up:["50% 0%",{rotateX:-90,translate:[0,0,0.1]},{top:-s}],down:["50% 100%",{rotateX:90,translate:[0,0,0.1]},{top:s}]}[d.direction||["left","right","down","up"][Math.floor(Math.random()*4)]];var i=f("<div>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%",overflow:"hidden",transformOrigin:k[0],transformStyle:"preserve-3d",outline:"1px solid transparent",zIndex:5}).append(f(a.get(q)).clone()),r=f("<div>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%",overflow:"hidden",background:"#000",zIndex:4}).append(f(a.get(l)).clone());g.css({perspectiveOrigin:k[0]});if(d.responsive<3){i.find("img").css("width","100%");r.find("img").css("width","100%")}r.appendTo(g);i.appendTo(g);e.stop(true,true).hide().css({left:-q+"00%"});var p=k[2];var o={top:0,left:0};var n={opacity:1};var m={opacity:0.2};if(d.support.transform){p=k[1];o={rotateX:0,rotateY:0,translate:[0,0,0]}}wowAnimate(i,p,o,d.duration,"easeInOutQuart",function(){h.trigger("effectEnd");i.remove();r.remove()});wowAnimate(r.find("img"),n,m,d.duration,"easeInOutQuart")}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.7
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery.extend(jQuery.easing,{easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a}});function ws_cube_over(m,k,b){var e=jQuery,j=e(this),a=/WOW Slider/g.test(navigator.userAgent),g=e(".ws_list",b),c=m.perspective||/MSIE|Trident/g.test(navigator.userAgent)?1000:2000,d={position:"absolute",backgroundSize:"cover",left:0,top:0,width:"100%",height:"100%",backfaceVisibility:"hidden"};var l=/AppleWebKit/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent);var i=e("<div>").css(d).css({transformStyle:"preserve-3d",perspective:(l&&!a?"none":c),zIndex:8});e("<div>").addClass("ws_effect ws_cube_over").css(d).append(i).appendTo(b);if(!m.support.transform&&m.fallback){return new m.fallback(m,k,b)}var h;this.go=function(y,u){var q=e(k[u]);q={width:q.width(),height:q.height(),marginTop:parseFloat(q.css("marginTop")),marginLeft:parseFloat(q.css("marginLeft"))};function p(C,G,F,H){C.parent().css("perspective",c);var D=C.width(),E=C.height();wowAnimate(C,{scale:1,translate:[0,0,(l&&!a)?F:0]},{scale:0.85,translate:[0,0,(l&&!a)?F:0]},m.duration*0.4,"easeInOutBack",function(){wowAnimate(C,{scale:0.85,translate:[0,0,(l&&!a)?F:0]},{scale:1,translate:[0,0,(l&&!a)?F:0]},m.duration*0.4,m.duration-m.duration*0.8,"easeInOutBack",H)});wowAnimate(G.front.item,{rotateY:0,rotateX:0},{rotateY:G.front.rotateY,rotateX:G.front.rotateX},m.duration,"easeInOutBack");wowAnimate(G.back.item,{rotateY:G.back.rotateY,rotateX:G.back.rotateX},{rotateY:0,rotateX:0},m.duration,"easeInOutBack");wowAnimate(G.side.item,{rotateY:G.side.rotateY,rotateX:G.side.rotateX},{rotateY:-G.side.rotateY,rotateX:-G.side.rotateX},m.duration,"easeInOutBack")}if(m.support.transform&&m.support.perspective){if(h){h.stop()}var A=b.width(),v=b.height();var t={left:[A/2,0,0,180,0,-180],right:[A/2,0,0,-180,0,180],down:[v/2,-v/2,180,0,-180,0],up:[v/2,v/2,-180,0,180,0]}[m.direction||["left","right","down","up"][Math.floor(Math.random()*4)]];var B=e("<img>").css(q),s=e("<img>").css(q).attr("src",k.get(y).src);var n=e("<div>").css({overflow:"hidden",transformOrigin:"50% 50% -"+t[0]+"px"}).css(d).append(B).appendTo(i);var o=e("<div>").css({overflow:"hidden",transformOrigin:"50% 50% -"+t[0]+"px"}).css(d).append(s).appendTo(i);var z=e('<div class="ws_cube_side">').css({transformOrigin:"50% 50% -"+t[0]+"px",background:m.staticColor?"":f(s[0],{exclude:["0,0,0","255,255,255"]})}).css(d).appendTo(i);B.on("load",function(){g.hide()});B.attr("src",k.get(u).src).load();i.parent().show();h=new p(i,{front:{item:n,rotateY:t[5],rotateX:t[4]},back:{item:o,rotateY:t[3],rotateX:t[2]},side:{item:z,rotateY:t[3]/2,rotateX:t[2]/2}},-t[0],function(){j.trigger("effectEnd");i.empty().parent().hide();h=0})}else{i.css({position:"absolute",display:"none",zIndex:2,width:"100%",height:"100%"});i.stop(1,1);var r=(!!((y-u+1)%k.length)^m.revers?"left":"right");var n=e("<div>").css({position:"absolute",left:"0%",right:"auto",top:0,width:"100%",height:"100%"}).css(r,0).append(e(k[u]).clone().css({width:100*q.width/b.width()+"%",height:100*q.height/b.height()+"%",marginLeft:100*q.marginLeft/b.width()+"%"})).appendTo(i);var x=e("<div>").css({position:"absolute",left:"100%",right:"auto",top:0,width:"0%",height:"100%"}).append(e(k[y]).clone().css({width:100*q.width/b.width()+"%",height:100*q.height/b.height()+"%",marginLeft:100*q.marginLeft/b.width()+"%"})).appendTo(i);i.css({left:"auto",right:"auto",top:0}).css(r,0).show();i.show();g.hide();x.animate({width:"100%",left:0},m.duration,"easeInOutExpo",function(){e(this).remove()});n.animate({width:0},m.duration,"easeInOutExpo",function(){j.trigger("effectEnd");i.empty().hide()})}};function f(x,o){o=o||{};var z=1,r=o.exclude||[],w;var t=document.createElement("canvas"),q=t.getContext("2d"),p=t.width=x.naturalWidth,D=t.height=x.naturalHeight;q.drawImage(x,0,0,x.naturalWidth,x.naturalHeight);try{w=q.getImageData(o.x?o.x:0,o.y?o.y:0,o.w?o.w:x.width,o.h?o.h:x.height)["data"]}catch(y){console.log("error:unable to access image data: "+y);return"#ccc"}var s=(o.w?o.w:x.width*o.h?o.h:x.height)||w.length,u={},B="",A=[],n={dominant:{name:"",count:0}};var v=0;while(v<s){A[0]=w[v];A[1]=w[v+1];A[2]=w[v+2];B=A.join(",");if(B in u){u[B]=u[B]+1}else{u[B]=1}if(r.indexOf(["rgb(",B,")"].join(""))===-1){var C=u[B];if(C>n.dominant.count){n.dominant.name=B;n.dominant.count=C}}v+=z*4}return["rgb(",n.dominant.name,")"].join("")}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.7
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery.extend(jQuery.easing,{easeOutBack2:function(f,g,e,j,i){var h=(g/=i)*g;var a=h*g;return e+j*(5*a*h+-15*h*h+19*a+-14*h+6*g)},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a}});function ws_tv(m,i,b){var d=jQuery;var g=d(this);var k=m.noCanvas||!document.createElement("canvas").getContext;var j=m.width,e=m.height;var f=d("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).addClass("ws_effect ws_tv").appendTo(b);if(!k){var c=d("<canvas>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%"}).appendTo(f);var l=c.get(0).getContext("2d")}function a(n,h,o){return n+(h-n)*o}this.go=function(h,o){if(k){b.find(".ws_list").css("transform","translate3d(0,0,0)").stop(true).animate({left:(h?-h+"00%":(/Safari/.test(navigator.userAgent)?"0%":0))},m.duration,"easeInOutExpo",function(){g.trigger("effectEnd")})}else{j=b.width();e=b.height();c.attr({width:j,height:e});var n=d(i.get(h)).clone().css({opacity:0,zIndex:2,maxHeight:"none"}).appendTo(f);wowAnimate(function(p){l.clearRect(0,0,j,e);var r=j;if(p>=0.95){r*=1-(p-0.95)/(1-0.95)}l.fillStyle="#111";l.fillRect(0,0,j,e);var q=l.createLinearGradient(0,p*e/2,0,e-p*e/2);q.addColorStop(0,"#111");q.addColorStop(a(0,0.5,p),"#fff");q.addColorStop(0.5,"#fff");q.addColorStop(a(1,0.5,p),"#fff");q.addColorStop(1,"#111");l.fillStyle=q;l.fillRect((j-r)/2,p*e/2,r,e*(1-p))},0,1,m.duration*0.3,"easeOutCubic",function(){wowAnimate(n,{scale:[0.9,0],opacity:0.5},{scale:[1,1],opacity:1},m.duration*0.3,m.duration*0.4,"easeOutBack2",function(){b.find(".ws_list").css({left:(h?-h+"00%":(/Safari/.test(navigator.userAgent)?"0%":0))});g.trigger("effectEnd");setTimeout(function(){l.fillStyle="#111";l.clearRect(0,0,j,e);n.remove()},1)})})}}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.7
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery.extend(jQuery.easing,{easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeOutBackCubic:function(e,f,a,j,i,g){var h=(f/=i)*f;return a+j*(-1.5*h*f*h+2*h*h+4*h*f+-9*h+5.5*f)},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a}});function ws_lines(d,l,m){var e=jQuery;var f=e(this);var i=d.noCanvas||!document.createElement("canvas").getContext;var k=d.width,r=d.height;var g=e("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).addClass("ws_effect ws_lines").appendTo(m);if(!i){var b=e("<canvas>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%"}).appendTo(g);var o=b.get(0).getContext("2d")}var s=[["rgb(187,187,187)",0.1,0.3],["rgb(179,179,179)",0.9,0.8],["rgb(182,182,182)",0.68,0.4],["rgb(185,185,185)",0.25,0.4],["rgb(204,204,204)",0.11,0.7],["rgb(195,195,195)",0.18,0.1],["rgb(198,198,198)",0.4,0.2],["rgb(201,201,201)",0.55,-0.04],["rgb(211,211,211)",0,0.95],["rgb(214,214,214)",0.5,0.8],["rgb(217,217,217)",0.9,0.1]];var a=[[0.5,0.4,0.3,0.2,0.1,0,0.1,0.2,0.3,0.4,0.5],[0,0.1,0.2,0.3,0.4,0.5,0.4,0.3,0.2,0.1,0],[0,0.05,0.1,0.15,0.2,0.25,0.3,0.35,0.4,0.45,0.5],[0.5,0.45,0.4,0.35,0.3,0.25,0.2,0.15,0.1,0.05,0],[0.7,0.3,0,0.1,0.5,0.3,0.4,0.1,0.6,0.2,0],];var q=["from-top","from-bottom","width-from-center","height-from-center","fill-half-fill-full"];var j=["easeOutExpo","easeOutCubic","easeOutBackCubic","easeOutBack"];var p=[45,-45,0,180,90,-90];function n(h){h.save();h.setTransform(1,0,0,1,0,0);h.clearRect(0,0,k,r);h.restore()}function c(G,D,I,w,C,y,z){var u=k;var E=r;if(z==45||z==-45){u=E=Math.sqrt(k*k+r*r)}if(z==90||z==-90){u=r;E=k}var B=(u-k)/2;var v=(E-r)/2;n(G);for(var x=0,A=I.length;x<A;x++){var F=I[x]*(1-D);var h=Math.max(0,Math.min(1,D-F));G.beginPath();G.fillStyle=s[x][0];if(w){G.fillStyle=s[x][0].replace(/rgb/g,"rgba").replace(/\)/g,","+Math.min(D+0.1,1)+")")}var H={x:0,y:0,w:0,h:0};switch(C){case"from-top":if(y&&e.easing[y]){h=e.easing[y](1,h,0,1,1,1)}H.w=Math.ceil(0.5+u/A);H.h=E;H.x=(A-x-1)*u/A-B;H.y=-1.5*E*(1-h)-v;break;case"from-bottom":if(y&&e.easing[y]){h=e.easing[y](1,h,0,1,1,1)}H.w=Math.ceil(0.5+u/A);H.h=E;H.x=(A-x-1)*u/A-B;H.y=1.5*E*(1-h)-v;break;case"width-from-center":if(y&&e.easing[y]){h=e.easing[y](1,h,0,1,1,1)}H.w=Math.ceil(0.5+u/A)*h;H.h=E;H.x=(A-x-1)*u/A+(1-h)*u/A/2-B;H.y=-v;break;case"height-from-center":if(y&&e.easing[y]){h=e.easing[y](1,h,0,1,1,1)}H.w=Math.ceil(0.5+u/A);H.h=E*h;H.x=(A-x-1)*u/A-B;H.y=(1-h)*E/2-v;break;case"fill-half-fill-full":if(h<0.5){if(y&&e.easing[y]){h=e.easing[y](0.5,h,0,0.5,0.5,0.5)}}H.w=Math.ceil(0.5+u/A);H.h=E*h;H.x=(A-x-1)*u/A-B;H.y=(1-h)*E/2-v;break}G.fillRect(H.x,H.y,H.w,H.h)}}this.go=function(C,x){if(i){m.find(".ws_list").css("transform","translate3d(0,0,0)").stop(true).animate({left:(C?-C+"00%":(/Safari/.test(navigator.userAgent)?"0%":0))},d.duration,"easeInOutExpo",function(){f.trigger("effectEnd")})}else{k=m.width();r=m.height();var w=a[Math.floor(Math.random()*(a.length))];var E=a[Math.floor(Math.random()*(a.length))];b.attr({width:k,height:r});var A=l.get(x);for(var y=0,B=s.length;y<B;y++){var v=Math.abs(s[y][1]),h=Math.abs(s[y][2]);s[y][0]=t(A,{x:v*k,y:h*r,w:2,h:2})||s[y][0]}var D=q[Math.floor(Math.random()*(q.length))];var z=j[Math.floor(Math.random()*(j.length))];var u=p[Math.floor(Math.random()*(p.length))];o.translate(k/2,r/2);o.rotate(u*Math.PI/180);o.translate(-k/2,-r/2);wowAnimate(function(F){c(o,F,w,true,D,z,u)},0,1,d.duration/2,function(){m.find(".ws_list").css({left:(C?-C+"00%":(/Safari/.test(navigator.userAgent)?"0%":0))});D=q[Math.floor(Math.random()*(q.length))];z=j[Math.floor(Math.random()*(j.length))];wowAnimate(function(F){c(o,1-F,E,false,D,z,u)},0,1,d.duration/2,d.duration*0.15,function(){n(o);f.trigger("effectEnd")})})}};function t(D,u){u=u||{};var F=1,x=u.exclude||[],C;var z=document.createElement("canvas"),w=z.getContext("2d"),v=z.width=D.naturalWidth,J=z.height=D.naturalHeight;w.drawImage(D,0,0,D.naturalWidth,D.naturalHeight);try{C=w.getImageData(u.x?u.x:0,u.y?u.y:0,u.w?u.w:D.width,u.h?u.h:D.height)["data"]}catch(E){return false}var y=(u.w?u.w:D.width*u.h?u.h:D.height)||C.length,A={},H="",G=[],h={dominant:{name:"",count:0}};var B=0;while(B<y){G[0]=C[B];G[1]=C[B+1];G[2]=C[B+2];H=G.join(",");if(H in A){A[H]=A[H]+1}else{A[H]=1}if(x.indexOf(["rgb(",H,")"].join(""))===-1){var I=A[H];if(I>h.dominant.count){h.dominant.name=H;h.dominant.count=I}}B+=F*4}return["rgb(",h.dominant.name,")"].join("")}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.7
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_parallax(k,g,a){var c=jQuery;var f=c(this);var d=a.find(".ws_list");var b=k.parallax||0.25;var e=c("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).addClass("ws_effect ws_parallax").appendTo(a);function j(l){return Math.round(l*1000)/1000}var i=c("<div>").css({position:"absolute",left:0,top:0,overflow:"hidden",width:"100%",height:"100%",transform:"translate3d(0,0,0)"}).appendTo(e);var h=i.clone().appendTo(e);this.go=function(l,r,p){var s=c(g.get(r));s={width:s.width(),height:s.height(),marginTop:s.css("marginTop"),marginLeft:s.css("marginLeft")};p=p?1:-1;var n=c(g.get(r)).clone().css(s).appendTo(i);var o=c(g.get(l)).clone().css(s).appendTo(h);var m=a.width()||k.width;var q=a.height()||k.height;d.hide();wowAnimate(function(v){v=c.easing.swing(v);var x=j(p*v*m),u=j(p*(-m+v*m)),t=j(-p*m*b*v),w=j(p*m*b*(1-v));if(k.support.transform){i.css("transform","translate3d("+x+"px,0,0)");n.css("transform","translate3d("+t+"px,0,0)");h.css("transform","translate3d("+u+"px,0,0)");o.css("transform","translate3d("+w+"px,0,0)")}else{i.css("left",x);n.css("margin-left",t);h.css("left",u);o.css("margin-left",w)}},0,1,k.duration,function(){e.hide();n.remove();o.remove();f.trigger("effectEnd")})}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.7
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({effect:"turn,cube_over,tv,lines,parallax",prev:"",next:"",duration:20*100,delay:20*100,width:800,height:600,autoPlay:true,autoPlayVideo:false,playPause:true,stopOnHover:false,loop:false,bullets:1,caption:true,captionEffect:"parallax",controls:true,controlsThumb:false,responsive:2,fullScreen:false,gestures:2,onBeforeStep:0,images:0});