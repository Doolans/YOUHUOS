var cart = {


    api: 'http://127.0.0.1/',

    init: function () {
       this.close();
       this.cartData();
             
 
    },
    close:function(){
        $('.close').click(function(){
           $('.textTips').hide();
        })

    },
    cartData:function(){
        var sum=0;

      refresh();      
         function refresh(){
            var data =  $.cookie('productList') ? JSON.parse($.cookie('productList')):[]; 

           // console.log(data)

            if(data.length>0){
               
                for(var i=0;i<data.length;i++){
                  //  console.log(sum)
                    var obj = data[i];
                    sum+=obj.num*obj.price;

                //  console.log(data[i])
               
                var li = $(`<li class="clear li"></li>`).appendTo($('.cartList2'));
                var ol=$(`<ol class="ollist clear cartBox"></ol>`).appendTo(li);
                
                $( `<li>
                    <input type="checkbox"  class="shopChoice"><img src="${obj.img}">
                    <label class="shop"></label>
                </li>
                <li>
                        <a href="#" class="title">${obj.title}</a><br>
                        <span class="color">颜色：${obj.color}</span><span class="size"> 尺码：${obj.size}</span>
                </li>
                <li>
                        <span class="price">${obj.rmb}${obj.price}</span>
                </li>
                <li>
                        <span class="dels reduce">-</span>
                        <span class="count">${obj.num}</span>
                        <span class="adds pluss">+</span>
                </li>
                <li>
                        <span class="priceThis">${obj.rmb}${obj.num*obj.price}</span>
                </li>
                <li>
                        <span class="del delBtn">删除</span>
                </li>`).appendTo(ol);
  
                }
                $(`<span class="totle total_text">总价：${sum}元</span>`).appendTo($('.allPrice'));
                $(`<a href="" class="buy"><span>买 单</span></a>`).appendTo($('.allPrice'));


                
            }else{
                $('.cartBox1').show();
                $('.cartBox2').hide();

            }


                

        }

        //删除

        $(".cartList2").on("click", ".del", function () {
            
            var index = $(this).index(".cartList2 .del");
            var data = JSON.parse($.cookie("productList"));
            console.log(index)
            data.splice(index,1);
            $.cookie("productList",JSON.stringify(data),{expires:30});

        //  refresh();
            
        })
       




        //++
            $(".cartList2").on("click",".adds",function(){
               //console.log(11)
             
                var index = $(this).index(".cartList2 .adds");
             //  alert(index)
                
                var data = JSON.parse($.cookie('productList'));
          console.log(data[index].num)
            //   data[index].num++;
           $('.count').html(data[index].num++);
        
                $.cookie('productList',JSON.stringify(data),{expires:30});

                //刷新界面
            //  refresh();
            })






            //--
            $(".cartList2").on("click", ".dels", function () {
                //alert(888888)
                var index = $(this).index(".cartList2 .dels");
          //   alert(index)
                
                var data = JSON.parse($.cookie("productList"));
               console.log(data[index].num)
               //data[index].num--;
				 $('.count').html(data[index].num--);
				if(data[index].num <=1){
					data[index].num = 1;
				}
				
				$.cookie("productList",JSON.stringify(data),{expires:30});
				// refresh();			
			})
       
    }


}

