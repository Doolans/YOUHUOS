var youhuo = {


    api: 'http://127.0.0.1',

    init: function () {

    
        this.getAjax();
        // this.lazyload();
        this.productAjax();
        this.topSlide();
        this.navHover();
        this.topQr();
        this.qrFixed();
        this.fixBox();
        this.qrBox();
        this.gotop();
        this.cartHover();
    },
    getAjax: function () {
        var api=this.api+'/YOUHUO/json/lunbo.json';
        
        $.get(api, function (data) {
            // console.log(data)
            var str1 = '';
            for (var i = 0; i < data.length; i++) {
                // console.log(i)
                str1 += '<li><img src="' + data[i].img + '"/></li>';
            }
            $('#list1').append(str1);
            //    $('#list2').append(str2);
            this.lunbo();
        }.bind(this))
    },

    lunbo: function () {

            var $list1 = $('#list1');
            var $lis1 = $('#list1 li');
            //   console.log($('#list1 li'));
            var size = $('#list1 li').length;
            // console.log(size2); 
            $('#list1 li').eq(0).fadeIn().siblings().fadeOut();
            var num = 0;
            var timer = setInterval(function () {
                num++;
                move();
            }, 3000)


            function move() {

                if (num == size) {
                    num = 1;

                    $list1.css({
                        left: 0
                    });
                }
               
                $('#list1 li').eq(num).fadeIn().siblings().fadeOut();
                //让下面的小图片一起跟着移动  加active事件
                $('#list2 li').eq(num).addClass('active').siblings().removeClass('active');

            }
              //鼠标划过index为对应的图片

            $('#list2 li').hover(function () {
                var index = $(this).index();
                num = index;
                move();
            })

            //清除定时器
            $('#box').mouseenter(function () {
                //   alert(1111)
                clearInterval(timer);
            })

            $('#box').mouseleave(function () {
                //再开定时器
                timer = setInterval(function () {
                    num++;
                    move();
                }, 3000)


            })

            //下一个

            $('#next').click(function () {

                num++;
                move();
            })
            //上一个
            $('#prev').click(function () {
                num--;
                move();
            })


            this.smallSlide();
   },
    
    //小轮播      
    smallSlide: function () {
        var that=this;
        var liWidth = $('#list3 li').width() * 3;
        // console.log(liWidth);

        $('#list3').append($('#list3 li').clone(true));
        var $list3 = $('#list3');
        var $lis = $('#list3 li');
        var size = $('#list3 li').length;
        //设置list的高度
        $list3.css({
            width: size * liWidth /*注意动态添加的节点的长度*/

        });

        var i = 0;
        var timer = setInterval(function () {
            i++;
            // if(i==$lis){
            //     i=liWidth;						
            //     $list3.css({						
            //         left:0
            //     })
            // }
            if (i == size) {
                i = 1;
                $list3.css({
                    left: 0
                })
            }
            $list3.animate({

                left: -i * liWidth
            })

        }, 3000);
        // console.log(i),	
        that.productAjax();

    },

    //商品图获取数据
    productAjax: function () {
        // alert(2222)
        var api=this.api+'/YOUHUO/json/product.json';
        $.get(api, function (data) {
            // console.log(data)
            var str = '';
            for (var i = 0; i < data.length; i++) {
                // console.log(i)

                str += '<li><a href="#"><img class="lazy" data-original="' + data[i].img + '"/>MYFUN HAVE FUN 圆领毛衣</a>¥269.00</li>'

            }
            //   console.log(str)
            $('.list4').html(str);

            this.headerClick();

            $("img.lazy").lazyload({effect: "fadeIn"});
            // this.lazyload();

        }.bind(this))
    },
    headerClick:function(){

        //导航点击事件

        $('.header-l li').click(function () {

            var that=this;
            // alert(1111)
            var index = $(this).index();
            var that = $(this);
        
            console.log(index)
            if (index == 0) {
                //  $('.header-l li' ).eq(index).addClass('active').siblings().removeClass('active');
                $('.header-l li').eq(index).css({
                    'background': '#3a3a3a',
                    'color': '#fff'
                }).siblings('li').css({
                    'background':'#fff',
                        
                })
                $('#nav-wrapper').css('background', '#3a3a3a')
                $('.header-r input').css('border', '1px solid #3a3a3a')
                $('.header-r button').css({
                    'border': '1px solid #3a3a3a',
                    'background': '#3a3a3a',
                })
                $('.header-r .cart').css('color', '#3a3a3a')
            }
        
            if (index == 1) {
                //  $('.header-l li' ).eq(index).addClass('active').siblings().removeClass('active');
                $('.header-l li').eq(index).css({
                    'background': '#ef7894',
                    'color': '#fff'
                }).siblings('li').css('background', '#000')
                $('#nav-wrapper').css('background', '#ef7894')
                $('.header-r input').css('border', '1px solid #ef7894')
                $('.header-r button').css({
                    'border': '1px solid #ef7894',
                    'background': '#ef7894',
                })
                $('.header-r .cart').css('color', '#ef7894')
            }
        
        
            if (index == 2) {
                $('.header-l li').eq(index).css({
                    'background': '#71e8fa',
                    'color': '#fff'
        
                }).siblings('li').css('background', '#000')
        
                $('#nav-wrapper').css('background', '#71e8fa')
                $('.header-r input').css('border', '1px solid #71e8fa')
                $('.header-r button').css({
                    'border': '1px solid #71e8fa',
                    'background': '#71e8fa',
                })
                $('.header-r .cart').css('color', '#71e8fa')
            }
            if (index == 3) {
                $('.header-l li').eq(index).css({
                    'background': '#167116',
                    'color': '#fff'
                }).siblings('li').css('background', '#000')
        
                $('#nav-wrapper').css('background', '#167116')
                $('.header-r input').css('border', '1px solid #167116')
                $('.header-r button').css({
                    'border': '1px solid #167116',
                    'background': '#167116',
                })
                $('.header-r .cart').css('color', '#167116')
            }

           
        })




    },
    navHover:function(){
        //导航hover事件下拉


        $('#nav li a').hover(function () {

            $('.nav_box1').show();


        })

        $('.nav_box1').hover(function () {
            $('.nav_box1').show();

        }, function () {
            $('.nav_box1').hide();
        })


    },

    topSlide:function(){

     //   console.log("执行了");
        //顶部下拉菜单 help
        $('.helping').hover(function () {
            $('.help').slideDown();
            
        })
        $('.help').hover(function () {
            $('.help').slideDown();
            
        }, function () {
            $('.help').slideUp();
    
        })




    },
    topQr:function(){
        //顶部二维码hover事件;
        $('.qr01').hover(function () {
            $('.qr1').slideDown();
        }, function () {
            $('.qr1').slideUp();
        })


        $('.qr02').hover(function () {
            
            $('.qr2').slideDown();

        }, function () {
            $('.qr2').slideUp();
        })




    },
    qrFixed:function(){
       $('.xon').click(function(){
        $('.qrWenLe').hide();
       })

    },
    fixBox:function(){
     //    console.log( $(document).scroll());
     $(document).scroll(function(){
        if($(this).scrollTop()>=400){
         //   console.log($(this).scrollTop());
       
            $('.fixbox').show();
        }else{
            $('.fixbox').hide();
        }
     })
         
     

        


    },
    qrBox:function(){
        $('.qr2').hover(function(){
            $('.qrbox').show();
        },function(){
            $('.qrbox').hide();
            
        })
    },
    gotop:function(){
        $('.gotop').click(function(){
            $(document).scrollTop(0);
        })
    },
    cartHover:function(){
        
        $('.cartBox').hover(function(){
            $('.cart_box').show();

        },function(){
            $('.cart_box').hide();
        })

    }


}


