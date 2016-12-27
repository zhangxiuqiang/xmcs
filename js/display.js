
//    var myScroll = new IScroll('#wrapper', {
//        scrollbars: 'custom'
////        indicators: {
////            el: document.getElementById('container'),
////            fade: false,
////            ignoreBoundaries: true,
////            interactive: false,
////            listenX: true,
////            listenY: true,
////            resize: true,
////            shrink: false,
////            speedRatioX: 0,
////            speedRatioY: 0
////        }
////        mouseWheel: true,
//    });
window.onload=function () {
    try {
        mui.init({
            gestureConfig: {
                tap: true, //默认为true
                doubletap: true //默认为false
            }
        });

        var map = document.getElementById('map');
        map.setAttribute('viewBox', '0 0 600 400');
        var floor = document.getElementById('floor');
        var room = floor.getElementsByTagName('rect');
        var text = document.getElementById('text');
        var info = document.getElementById('info');
        var detail = document.getElementById('detail');
        var container = document.getElementById('container');
        var select = floor.getElementsByClassName('animate')[0];
        var containerH, containerW;
      var curID='E50';
        var companyO={
            'E50':'孟加拉捷克有限公司',
            'E52':'拉捷克有限公司',
            'E54':'孟捷克有限公司',
            'E56':'北京有限公司',
            'E58':'上海有限公司',
            'E60':'谭晶有限公司',
            'E62':'天津有限公司',
            'E64':'广东有限公司',
            'F49':'湖北有限公司',
            'F51':'大庆有限公司',
            'F53':'哈尔滨有限公司',
            'F55':'太阳岛有限公司',
            'F57':'日本限公司',
            'F59':'俄罗斯有限公司',
            'F61':'武汉有限公司',
            'F63':'杭州有限公司'
        };
        function bindinfor(data){
           var strHTML='';
            strHTML+='<h4> 厂家名称 :<span>'+companyO[curID]+'</span></h4>';
            strHTML+='<h4> 国家 :<span class="mar">'+data["country"]+'</span>展位 :<span>'+curID+'</span></h4>';
            strHTML+='<h4> 产品类别 :<span>'+data["species"]+'</span></h4>';
            strHTML+='<h4> 地址 :<span>'+data["address"]+'</span></h4>';
            strHTML+='<h4> 电话号码 :<span>'+data["tel"]+'</span></h4>';
            strHTML+='<h4> 邮件 :<span>'+data["Email"]+'</span></h4>';
            strHTML+='<h4> 网址 :<span>'+data["webURL"]+'</span></h4>';
            try{
                $('.infor')[0].innerHTML='';
                $('.infor').append(strHTML);
            }catch (e){

            }
            return strHTML
        }
        var arr = JSON.parse(localStorage.getItem("infor"));
        for(var m=0;m<16;m++){
            arr[m].index=49+m;
        }
        function gitdata() {
            for(var i=0;i<arr.length;i++){
                if(arr[i].dataId==window.name){
                    return  bindinfor(arr[i]);
                }
            }
        }
        setTimeout(function () {
            gitdata();
        },2000);
        gitdata();
        $("#map").on('doubletap',function(e){
            e.stopPropagation();
            e.preventDefault();
            window.location = "./infor.html";
        });
        function reSize(){
            containerH = document.body.offsetHeight - detail.scrollHeight;
            containerW = container.offsetWidth;
            container.style.height = containerH + 'px';
        }
        reSize();
        new reLocation(select);
//    document.getElementById('container').scrollLeft = (Math.ceil(select.getAttribute('x')) / 600) * 2400 - containerW / 2;
//    document.getElementById('container').scrollTop = (Math.ceil(select.getAttribute('y')) / 400) * 1600 - containerH / 2;
        detail.innerHTML = "<span class='shad'>"+companyO[curID]+"</span><p class='shad'>展位:6.1号馆"+curID+"展位</p><p class='shad'>类别:正装、童装</p><div class='infor'>"+gitdata()+"</div>";
        floor.onclick = function (ele) {
            for (var i = 0, j = room.length; i < j; i++) {
                room[i].removeAttribute('class');
            }
            if (ele.target.tagName == 'rect') {
                curID=ele.target.getAttribute('id');
                ele.target.setAttribute('class', 'animate');
                 detail.innerHTML = "<span class='shad'>"+companyO[ele.target.getAttribute('id')]+"</span><p class='shad'>展位:6.1号馆"+ele.target.getAttribute('id')+"展位</p><p class='shad'>类别:正装、童装</p><div class='infor'>"+gitdata()+"</div>";
                $('#detail').css('height',"10%");
                // detail.innerHTML = ele.target.getAttribute('id');
                new reLocation(ele.target);
            }
        };
        text.onclick = function (ele) {
            for (var i = 0, j = room.length; i < j; i++) {
                room[i].removeAttribute('class');
            }
            if (ele.target.innerHTML) {
                curID=ele.target.innerHTML;
                console.log(ele.target.innerHTML);
                    detail.innerHTML =    detail.innerHTML = "<span class='shad'>"+companyO[clearSpace(ele.target.innerHTML)]+"</span><p class='shad'>展位:6.1号馆"+ele.target.innerHTML+"展位</p><p class='shad'>类别:正装、童装</p><div class='infor'>"+gitdata()+"</div>";
                $('#detail').css('height',"10%");
                var id =  clearSpace(ele.target.innerHTML);
                document.getElementById(id).setAttribute('class', 'animate');
                new reLocation(document.getElementById(id));
            }
        };
        function clearSpace(val) {
            total = val.replace(/(^\s+)|(\s+$)/g, "");
            return total
        }
        function reLocation(ele) {
            document.getElementById('container').scrollLeft = (Math.ceil(ele.getAttribute('x')) / 600) * 2400 - containerW / 2;
            document.getElementById('container').scrollTop = (Math.ceil(ele.getAttribute('y')) / 400) * 1600 - containerH / 2;
        }


        window.addEventListener("resize", function () {
            // 得到屏幕尺寸 (内部/外部宽度，内部/外部高度)
            new reSize();
//        detail.innerHTML = window.innerHeight + ',' + window.innerWidth
            var select = floor.getElementsByClassName('animate')[0];
            new reLocation(select)

        }, false);
        window.addEventListener("orientationchange", function () {
            // 宣布新方向的数值
            new reSize();
            if (window.orientation == 90 || window.orientation == -90) {
//            detail.innerHTML = window.orientation;
                map.setAttribute('width',600);
                map.setAttribute('height',400);
              document.getElementsByName('viewport')[0].setAttribute('content','width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0');
                $('#detail').hide();
            }else{
                document.getElementsByName('viewport')[0].setAttribute('content','width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0');
                map.setAttribute('width',2400);
                map.setAttribute('height',1600);
                var select = floor.getElementsByClassName('animate')[0];
                new reLocation(select);
                $('#detail').show();
                console.log(  $('#detail'))
            }
        }, false);
        var flag=false;
        console.log(  $('#detail'))
        detail.onclick=function(){
            if(!flag){
                this.style.height=400+'px';
                $('.infor').show();
                $('.shad').hide();
                flag=true
            }else{
                this.style.height='10%';
                $('.infor').hide();
                $('.shad').show();
                flag=false
            }
        };
        // if(isWeiXin()){}else{alert("已禁止本次访问：您必须使用微信内置浏览器访问本页面！");var opened=window.open("about:blank","_self");opened.opener=null;opened.close()}function isWeiXin(){var ua=window.navigator.userAgent.toLowerCase();if(ua.match(/MicroMessenger/i)=="micromessenger"){return true}else{return false}}
    }catch(e){

    };

};
