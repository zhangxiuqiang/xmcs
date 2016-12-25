
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
        floor.onclick = function (ele) {
            for (var i = 0, j = room.length; i < j; i++) {
                room[i].removeAttribute('class');
            }
            if (ele.target.tagName == 'rect') {
                ele.target.setAttribute('class', 'animate');
                detail.innerHTML = ele.target.getAttribute('id');
                new reLocation(ele.target);
            }
        };
        text.onclick = function (ele) {
            for (var i = 0, j = room.length; i < j; i++) {
                room[i].removeAttribute('class');
            }
            if (ele.target.innerHTML) {
                detail.innerHTML = ele.target.innerHTML;
                var id = ele.target.innerHTML;
                document.getElementById(id).setAttribute('class', 'animate');
                new reLocation(document.getElementById(id));
            }
        };
        function reLocation(ele) {
            document.getElementById('container').scrollLeft = (Math.ceil(ele.getAttribute('x')) / 600) * 2400 - containerW / 2;
            document.getElementById('container').scrollTop = (Math.ceil(ele.getAttribute('y')) / 400) * 1600 - containerH / 2;
        }

        //    document.getElementById('container').onscroll=function(){
        //        console.log(this.scrollTop);
        //        console.log(this.scrollLeft)
        //    };

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
            }else{
                map.setAttribute('width',2400);
                map.setAttribute('height',1600);
                var select = floor.getElementsByClassName('animate')[0];
                new reLocation(select);
            }
        }, false);
        var flag=false;
        detail.onclick=function(){
            if(!flag){
                this.style.height=400+'px';
                $('.infor').show();
                flag=true
            }else{
                this.style.height=50+'px';
                $('.infor').hide();

                flag=false
            }
        };
        function bindinfor(data){
            console.log(data);
            var strHTML='';
            strHTML+='<h4> 厂家名称 :<span>'+data["name"]+'</span></h4>';
            strHTML+='<h4> 国家 :<span class="mar">'+data["country"]+'</span>展位 :<span>'+data["stand"]+'</span></h4>';
            strHTML+='<h4> 产品类别 :<span>'+data["species"]+'</span></h4>';
            strHTML+='<h4> 地址 :<span>'+data["address"]+'</span></h4>';
            strHTML+='<h4> 电话号码 :<span>'+data["tel"]+'</span></h4>';
            strHTML+='<h4> 邮件 :<span>'+data["Email"]+'</span></h4>';
            strHTML+='<h4> 网址 :<span>'+data["webURL"]+'</span></h4>';

            try{
                $('.infor')[0].innerHTML='';
            }catch (e){

            }
            $('.infor').append(strHTML);
            strHTML="";
        }
        var arr = JSON.parse(localStorage.getItem("infor"));
        function gitdata() {
            for(var i=0;i<arr.length;i++){
                if(arr[i].dataId==window.name){
                    bindinfor(arr[i]);
                }
            }

        }
        gitdata();
        if(isWeiXin()){}else{alert("已禁止本次访问：您必须使用微信内置浏览器访问本页面！");var opened=window.open("about:blank","_self");opened.opener=null;opened.close()}function isWeiXin(){var ua=window.navigator.userAgent.toLowerCase();if(ua.match(/MicroMessenger/i)=="micromessenger"){return true}else{return false}}
    }catch(e){
        
    };

};
