var youhuo={api:"http://127.0.0.1",init:function(){this.getAjax(),this.productAjax(),this.topSlide(),this.navHover(),this.topQr(),this.qrFixed(),this.fixBox(),this.qrBox(),this.gotop(),this.cartHover()},getAjax:function(){var i=this.api+"/YOUHUO/json/lunbo.json";$.get(i,function(i){for(var o="",n=0;n<i.length;n++)o+='<li><img src="'+i[n].img+'"/></li>';$("#list1").append(o),this.lunbo()}.bind(this))},lunbo:function(){var i=$("#list1"),o=($("#list1 li"),$("#list1 li").length);$("#list1 li").eq(0).fadeIn().siblings().fadeOut();var n=0,e=setInterval(function(){n++,r()},3e3);function r(){n==o&&(n=1,i.css({left:0})),$("#list1 li").eq(n).fadeIn().siblings().fadeOut(),$("#list2 li").eq(n).addClass("active").siblings().removeClass("active")}$("#list2 li").hover(function(){var i=$(this).index();n=i,r()}),$("#box").mouseenter(function(){clearInterval(e)}),$("#box").mouseleave(function(){e=setInterval(function(){n++,r()},3e3)}),$("#next").click(function(){n++,r()}),$("#prev").click(function(){n--,r()}),this.smallSlide()},smallSlide:function(){var i=3*$("#list3 li").width();$("#list3").append($("#list3 li").clone(!0));var o=$("#list3"),n=($("#list3 li"),$("#list3 li").length);o.css({width:n*i});var e=0;setInterval(function(){++e==n&&(e=1,o.css({left:0})),o.animate({left:-e*i})},3e3);this.productAjax()},productAjax:function(){var i=this.api+"/YOUHUO/json/product.json";$.get(i,function(i){for(var o="",n=0;n<i.length;n++)o+='<li><a href="#"><img class="lazy" data-original="'+i[n].img+'"/>MYFUN HAVE FUN 圆领毛衣</a>¥269.00</li>';$(".list4").html(o),this.headerClick(),$("img.lazy").lazyload({effect:"fadeIn"})}.bind(this))},headerClick:function(){$(".header-l li").click(function(){var i=$(this).index();$(this);console.log(i),0==i&&($(".header-l li").eq(i).css({background:"#3a3a3a",color:"#fff"}).siblings("li").css({background:"#fff"}),$("#nav-wrapper").css("background","#3a3a3a"),$(".header-r input").css("border","1px solid #3a3a3a"),$(".header-r button").css({border:"1px solid #3a3a3a",background:"#3a3a3a"}),$(".header-r .cart").css("color","#3a3a3a")),1==i&&($(".header-l li").eq(i).css({background:"#ef7894",color:"#fff"}).siblings("li").css("background","#000"),$("#nav-wrapper").css("background","#ef7894"),$(".header-r input").css("border","1px solid #ef7894"),$(".header-r button").css({border:"1px solid #ef7894",background:"#ef7894"}),$(".header-r .cart").css("color","#ef7894")),2==i&&($(".header-l li").eq(i).css({background:"#71e8fa",color:"#fff"}).siblings("li").css("background","#000"),$("#nav-wrapper").css("background","#71e8fa"),$(".header-r input").css("border","1px solid #71e8fa"),$(".header-r button").css({border:"1px solid #71e8fa",background:"#71e8fa"}),$(".header-r .cart").css("color","#71e8fa")),3==i&&($(".header-l li").eq(i).css({background:"#167116",color:"#fff"}).siblings("li").css("background","#000"),$("#nav-wrapper").css("background","#167116"),$(".header-r input").css("border","1px solid #167116"),$(".header-r button").css({border:"1px solid #167116",background:"#167116"}),$(".header-r .cart").css("color","#167116"))})},navHover:function(){$("#nav li a").hover(function(){$(".nav_box1").show()}),$(".nav_box1").hover(function(){$(".nav_box1").show()},function(){$(".nav_box1").hide()})},topSlide:function(){$(".helping").hover(function(){$(".help").slideDown()}),$(".help").hover(function(){$(".help").slideDown()},function(){$(".help").slideUp()})},topQr:function(){$(".qr01").hover(function(){$(".qr1").slideDown()},function(){$(".qr1").slideUp()}),$(".qr02").hover(function(){$(".qr2").slideDown()},function(){$(".qr2").slideUp()})},qrFixed:function(){$(".xon").click(function(){$(".qrWenLe").hide()})},fixBox:function(){$(document).scroll(function(){$(this).scrollTop()>=400?$(".fixbox").show():$(".fixbox").hide()})},qrBox:function(){$(".qr2").hover(function(){$(".qrbox").show()},function(){$(".qrbox").hide()})},gotop:function(){$(".gotop").click(function(){$(document).scrollTop(0)})},cartHover:function(){$(".cartBox").hover(function(){$(".cart_box").show()},function(){$(".cart_box").hide()})}};