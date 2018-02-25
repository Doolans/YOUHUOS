var goodslist = {


    api: 'http://127.0.0.1/',

    init: function () {
        //获取list数据
        this.getListData();  
           
 
    },
    getListData : function(){
        
        //ajax 获取json数据渲染页面
        $.ajax({
            url: this.api+'YOUHUO/json/goodslist.json',
            success : function(data){
               this.refresh(data)
            }.bind(this)
        })
        
    },
    refresh : function(data){
            var goodslist = $('.g-list');
            // 循环数据 凑够20
            // for(var i=0;i<5;i++){
                data.map(function(item){
                    var li = $('<li></li>').appendTo(goodslist);
                    $(`<img src="${item.img}" >`).appendTo(li);
                    $(` <p>${item.text}</p>`).appendTo(li);
                    $(` <span>${item.title}</span>`).appendTo(li);
                    $(` <p>${item.dpj}</p>`).appendTo(li);
            })
        // }
        $('.g-list li').click(function(){
            var index = $(this).index();
            var id = data[index].id;
            location.href = "pro_details.html?id="+id
        })
    }

    


}