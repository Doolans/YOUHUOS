
var pro_details = {
    api: 'http://127.0.0.1/',
    init : function(){
        
        this.getPar();
        this.getData();
        this.productCookie();
       this.flyCart();
   
        
    },
     
    productCookie:function(){
    
    var arr =  $.cookie('productList') ? JSON.parse($.cookie('productList')):[]; 
//    alert(arr)
          $('#cartss').click(function(){
              
         //   alert('购物车没有东西~~')
            var img =$('.box1 img').get(0).src;
          //  console.log(img)
            var title = $('.product_right h2').html()
         //   console.log(title)
            var rmb = $('.cur').html();
            var price = $('.prices').html()-0;
            var color = $('.bf').html();
            var size = $('.sizes').html();
        //     console.log(size)

        //  alert(price);
            //循环一遍数组 看看里面有没有相同的内容  有数量就++  没有就定义一个商品列表

          var b = true;
               for(var k=0;k<arr.length;k++){

                    if(arr[k].title==title){
                        arr[k].num++;
                        b=false;
                        break;
                    }
                }

            if (b) {
                var products = {
                    title,
                    price,
                    img,
                    color,
                    rmb,
                    size,
                    num: 1,

                }
                arr.push(products)

            }
            
         //  console.log(products)

            $.cookie('productList',JSON.stringify(arr),10000)

           // console.log($.cookie('productList'))

            
            //  alert('加入购物车成功')

            
          })
  
      },
    getData: function(){
          //ajax 获取json数据渲染页面
          $.ajax({
            url: this.api+'YOUHUO/json/goodslist.json',
            success : function(data){
               this.refreshHtml(data)
            }.bind(this)
        })
    },
    //获取参数的函数
    getPar:function(){
            //获取参数的函数
        function getParam(str, name) {
            str = str.substring(1);
            var arr = str.split("&");
            for (var i = 0; i < arr.length; i++) {
                var str1 = arr[i];
                var arr1 = str1.split("=");
                if (arr1[0] == name) {
                    return arr1[1];
                }
            }
            return "";
        }
        return getParam;
    },
    refreshHtml : function(data){
        var str = location.search;
        var id = this.getPar()(str,'id');

        for(var i=0;i<data.length;i++){
            if(data[i].id == id){
                //获取到点击的ID 数据 
                //渲染页面
                var obj = data[i];
                // 标题栏
                $(`<li><a href="#">${obj.text}</a></li>`).appendTo($('.m_back'));
                // 大图片
                $("#small_area").before($(`<img src="${obj.img}" />`));
                // 小图片$
                obj['s-img'].map(function(item){
                   $(`<div class="box1"> <img src="${item}" /></div>`).appendTo($(".simg-wrap"))
                })
                
                // 标题
                $('.title1').html(obj.text)
                //吊牌价
                $('.deco').html(obj.dpj);
                //促销价
                $('.cur').html(obj.priceinfo.rmb)
                $('.prices').html(obj.priceinfo.price)
                //颜色小图片
                $('.small').attr('src',obj.colorimg);
                $('.bf').html(obj.color)
                //尺码
                obj['size'].map(function(item){
                   
                   $('.title-wrap').after($(`<span class="sizes" a="false" >${item}</span>`))

                })
                //放大镜的图
                $('#big_img').attr('src',obj.img);

                //切换点击小图大图还有放大镜的大图
                $('.simg-wrap').on('click','img',function(){
                    var index = $(this).index(".simg-wrap img");
                        
                })

                     //选择数量
                var num = $(".sizesl").html();
                $(".s").click(function(){
                //  alert(num)
                    $(".sizesl").html(++num);
                })
                $(".p").click(function(){
                    if(num<=1){
                        num = 1;
                    }
                    else{
                    $(".sizesl").html(--num);
                    } 
                })
            //     var num = $(".sizesl").html()-0;
            //    var arr =  $.cookie('productList') ? JSON.parse($.cookie('productList')):[]; 
                

            }
        }
        
        
    },
  
    flyCart:function(){
       
        $('#cartss').on('click', function () {
            var cart = $('.cart');
            var imgtodrag = $('.box1').find('img').eq(0);
            if (imgtodrag) {
                var imgclone = imgtodrag.clone().offset({
                    top: imgtodrag.offset().top,
                    left: imgtodrag.offset().left
                }).css({
                    'opacity': '0.5',
                    'position': 'absolute',
                    'height': '150px',
                    'width': '150px',
                    'z-index': '100'
                }).appendTo($('body')).animate({
                    'top': cart.offset().top + 10,
                    'left': cart.offset().left + 10,
                    'width': 75,
                    'height': 75
                }, 1000, 'easeInOutExpo');
                setTimeout(function () {
                    cart.effect('shake', { times: 2 }, 200);
                }, 1500);
                imgclone.animate({
                    'width': 0,
                    'height': 0
                }, function () {
                    $(this).detach();
                });
            }
        });
    }
}
  


