
var login = {


    api: 'http://127.0.0.1',

    init: function () {

       
        this.topSlide2();  //顶部下拉
        this.choseTel();   //选择地区号码下拉
        this.CheckMessPhone();  //获取短信验证码
        this.tabBox();
        this.checkedName();
        this.getCountryTel();
        this.zoom();
        this.afterSale();
        this.salingDown();
        this.slideTogglePro();
        this.moreStyle();
        
        
 
    },
    topSlide2:function(){

        //   console.log("执行了");
           //顶部下拉菜单 
   
           $('.helping2').hover(function () {
              
               $('.help2').slideDown();
               
           })
           $('.help2').hover(function () {
               $('.help2').slideDown();
               
           }, function () {
               $('.help2').slideUp();
       
           })
   
    },
    choseTel:function(){

        $('.tel').click(function(){

            $('.telbox').slideDown();

        })

        $('.tellist li').click(function(){
            // var index=$(this).index();
            // console.log(index);
            $('.tel').html($(this).html())
            $('.telbox').slideUp();

        })
      


    },
    CheckMessPhone:function(){

         $("#btnSendCode").click(function(){

            var InterValObj; //timer变量，控制时间
            var count = 60; //间隔函数，1秒执行
            var curCount;//当前剩余秒数
            var code = ""; //验证码
            var codeLength = 6;//验证码长度

            sendMessage();

             function sendMessage() {
                    curCount = count;
                    var dealType; //验证方式
                    var uid=$("#uid").val();//用户uid
                    if ($("#phone").attr("checked") == true) {
                        dealType = "phone";
                    }
                    else {
                        dealType = "email";
                    }
                    //产生验证码
                    for (var i = 0; i < codeLength; i++) {
                        code += parseInt(Math.random() * 9).toString();
                    }
                    //设置button效果，开始计时
                        $("#btnSendCode").attr("disabled", "true");
                        $("#btnSendCode").val( + curCount + "秒再获取");
                        InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
                    //向后台发送处理数据
                        $.ajax({
                            type: "POST", //用POST方式传输
                            dataType: "text", //数据格式:JSON
                            url: 'Login.ashx', //目标地址
                            data: "dealType=" + dealType +"&uid=" + uid + "&code=" + code,
                            error: function (XMLHttpRequest, textStatus, errorThrown) { },
                            success: function (msg){ }
                        });
                    }
                    //timer处理函数
                    function SetRemainTime() {
                        if (curCount == 0) {                
                            window.clearInterval(InterValObj);//停止计时器
                            $("#btnSendCode").removeAttr("disabled");//启用按钮
                            $("#btnSendCode").val("重新发送验证码");
                            code = ""; //清除验证码。如果不清除，过时间后，输入收到的验证码依然有效    
                        }
                        else {
                            curCount--;
                            $("#btnSendCode").val( + curCount + "秒再获取");
                        }
                    }

         })
           
    },
    tabBox:function(){ //登陆页面的盒子切换

        $('.qrQ').click(function(){

            $('.box2').hide()
            $('.two').show()
        //    this.checkedName();

        })
       

      
        $('.prev').click(function(){
            console.log(11)
            $(this).addClass('active').siblings().removeClass('active');
            $('.two').show();
            $('.box3').hide();
            
        })
        $('.next').click(function(){
            console.log(22)
            $(this).addClass('active').siblings().removeClass('active');
            $('.two').hide()
            $('.box3').show()
            
        
        })
        $('.box3 .quick').click(function(){
            $('.box4').show();
            $('.box3').hide()
    
        })
        $('.two .quick').click(function(){
            $('.box4').show();
            $('.two').hide()
    
        })
        $('.quickly').click(function(){
            $('.box2').css('z-index',50);
            $('.box4').hide()
    
        })
    },
    
    getCountryTel:function(){

        var api=this.api+'/YOUHUO/json/tel.json';
       $.get(api, function (data) {
            
            var str_p='';
            for(var i=0;i<data.length;i++){

                str_p+='<option value="'+i+'">'+data[i].country+'</option>'
            }

            $('#country').append(str_p);


            //监听country改变事件
 
 
            $('#country').change(function(){
                console.log($(this).val())
                var index=$(this).val();
              //  alert(index)
              // var str_c='';
                // for(var i=0;i<json[index].list.length;i++){

                //    str_c+='<option value="'+json[index].list[i]+'">'+json[index].list[i]+'</option>'
               
                $('#area').html(data[index].list);
            
           // }
      
              
              })
             

         }.bind(this))


    },

    zoom:function(){  //商品详情放大镜
        var $smallProduct=$('#small_product');
        var $smallArea=$('#small_area');			
        var $bigProduct=$('#big_product');			
        var $bigImg=$('#big_img');			
        
        var scale=$bigImg.width()/$smallProduct.width();
        
        //设置小区域的宽度高度
        $smallArea.css({				
            width:$smallProduct.width()*$bigProduct.width()/$bigImg.width(),
            height:$smallProduct.height()*$bigProduct.height()/$bigImg.height(),
        })			
        //鼠标移入			
        $smallProduct.mouseover(function(){	
            $smallArea.show();
            $bigProduct.show();
        })	
        //鼠标移动			
        $smallProduct.mousemove(function(e){
            
            //获取small_area    left  top			
            
            var left=e.pageX -$(this).offset().left-$smallArea.width()/2;
            var top=e.pageY-$(this).offset().top-$smallArea.height()/2;
            
            //判断边界
            
            if(left<0){
                left=0;
            }
            if(top<0){
                top=0;
            }
            if(left>($smallProduct.width()-$smallArea.width())){
                
                left=$smallProduct.width()-$smallArea.width();
            }
            if(top>($smallProduct.height()-$smallArea.height())){
                
                top=$smallProduct.height()-$smallArea.height();
            }
            
            $smallArea.css({					
                'left':left,
                'top':top
            })
            
            $bigImg.css({					
                'left':-left*scale,
                'top':-top*scale
            })
            
            
        })
        
        //鼠标离开
        
        $smallProduct.mouseleave(function(){				
            
            $smallArea.hide();
            $bigProduct.hide();
            

        })


    },
    afterSale:function(){  //商品详情 售后点击下拉
        $('.servers').click(function(){
           
            $('.after_hidden').slideToggle();
        })
    },
    salingDown:function(){
        $('.slider').click(function(){
            $('.saling').slideToggle();
            
        })
    },
    slideTogglePro:function(){ //商品列表左侧下拉菜单

        $('.slideBox>ul>li>a').click(function(){
			
//		$(this).next('ol').slideToggle();
        $(this).parent().children('ol').slideToggle();
         })
    },
    moreStyle:function(){
        $('.down').hover(function(){
            $('.style').slideDown();
        })
        $('.style').hover(function(){
            $('.style').slideDown();
        },function(){
            $('.style').slideUp();
        })


        $('.acc').hover(function(){
            $('.style2').slideDown();
        })
        $('.style2').hover(function(){
            $('.style').slideDown();
        },function(){
            $('.style2').slideUp();
        })
    },
    checkedName:function(){
        // alert(1111111)
        var userFlag = false;
        var passFlag = false;
        var rpassFlag = false;
        //用户名要求
        //手机正则
        var phoneReg = /^1[3|4|5|7|8]\d{9}$/;
        var passReg = /^.{6,16}$/;

        $('#username').keyup(function () {
            var val = $(this).val();
            console.log(val)

            if (phoneReg.test(val)) {
                $(".usertips").html('用户名合法');
                userFlag = true;
            } else {
                $(".usertips").html('用户名不合法');
                userFlag = false;
            }

            if (!val) {
                $(".usertips").html('用户名不能为空')
                userFlag = false;
            }
        });

        $("#password").keyup( function () {
            var val = $(this).val();
            if (passReg.test(val)) {
                $(".passtips").html('密码合法');
                passFlag = true;
            } else {
                $(".passtips").html('密码不合法');
                passFlag = false
            }


            if (!val) {
                $(".passtips").html('密码不能为空');
                passFlag = false
            }

        })


    }



           

}