var abcd = false;


$(document).ready(function () {
    if (!abcd) {
        abcd = true;
        window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false);
        try {
            function hengshuping() {
                if (window.orientation == 90 || window.orientation == -90) {
                    window.location.reload();
                } else if (window.orientation == 0 || window.orientation == 180) {
                    window.location.reload();
                }
            }
        } catch (e) {}
        $('.list-page li').click(function () {
            $('.search').css('backgroundColor', '#26adc6');
            $('.cancel_icon').hide();
            $('.search_icon').css('backgroundColor', '#26adc6');
            if ($(this).index() == 0) {
                $('.classes_page').hide();
                $('.purpose_page').hide();
                $('.country_pages').hide();
                $('.exhibition_page').hide();
                $('.cancel').hide();
                $('.search_i').hide();
                $('.search_i1').show();
                $('.search_show').hide();
                $('.infor_lists').show();
                window.location = "https://zhangxiuqiang.github.io/xmcs/infor.html";
            } else if ($(this).index() == 1) {
                bindCollect();
                setTimeout(function () {
                    myScroll7.refresh();
                }, 300);
                isColl();
                window.location = "https://zhangxiuqiang.github.io/xmcs/favorite.html";
            } else if ($(this).index() == 2) {
                setTimeout(function () {
                    trend_1.refresh();
                    trend_2.refresh();
                }, 300);
                window.location = "https://zhangxiuqiang.github.io/xmcs/trend.html";
            } else if ($(this).index() == 3) {
                setTimeout(function () {
                    synt_1.refresh();
                    synt_2.refresh();
                }, 300);
                window.location = "https://zhangxiuqiang.github.io/xmcs/synthesis.html";
            } else if ($(this).index() == 4) {
                setTimeout(function () {
                    itiner_1.refresh();
                    itiner_2.refresh();
                }, 300);
                window.location = "https://zhangxiuqiang.github.io/xmcs/itinerary.html";
            } else if ($(this).index() == 5) {
                setTimeout(function () {
                    itiner_1.refresh();
                    itiner_2.refresh();
                }, 300);
                window.location = "https://zhangxiuqiang.github.io/xmcs/layout.html";
            } else if ($(this).index() == 7) {
                setTimeout(function () {
                    clip_1.refresh();
                    clip_2.refresh();
                }, 300);
                window.location = "https://zhangxiuqiang.github.io/xmcs/letter_clip.html";
            }

        });
        var str2 = "", isa, isb, isc, isd, flag = false, total = null, seaData = null, Sj;
        var val = null;
        var height = null;
        var liheight = null;
        var loc_history = [];
        var collectAry = [];
        var _Array = [];
        var arr_1 = [], arr_2 = [], arr_3 = [];
        var _arr = [];
        var is_ary = [];
        var flg = 1;
//创建假数据
        var data = [];
        var fg = true;
        function getData() {
            var xml = new XMLHttpRequest,
                xhr = new XMLHttpRequest();
            xml.open('get', 'json/data.txt?=' + Math.random(), false);
            xhr.open('get', 'json/search.txt?=' + Math.random(), false);
            xml.onreadystatechange = function () {
                if (xml.readyState === 4 && /^2\d{2}$/.test(xml.status)) {
                    Sj = JSON.parse(xml.responseText);
                    for (var i = 0; i < Sj.length; i++) {
                        for (var m in Sj[i]) {
                            var P = Sj[i][m];
                            for (var n = 0; n < P.length; n++) {
                                data.push(P[n]);
                            }
                        }
                    }
                }
            };
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
                    seaData = JSON.parse(xhr.responseText)
                }
            }
            xml.send()
            xhr.send()
        }

        getData();
        localStorage.setItem('infor', JSON.stringify(data));
        bindHTML(data);
// 绑定 infor页面数据
        function bindHTML(d) {
            var str = "";
            $('.infor_list').children('li').remove();
            for (var i = 0; i < d.length; i++) {
                var curDate = d[i];
                str += '<li class="exh_infor_li" infor="' + curDate["dataId"] + '">';
                str += '<p>' + curDate["name"] + '</p>';
                str += '<span class="country">' + curDate["country"] + '</span>';
                str += '<span class="location">' + curDate["stand"] + '</span>';
                str += '<i class="exh_infor_li_icon"></i>';
                str += '<div class="particular_infor clear">';
                str += '<div class="particular_infor_icon">';
                str += '<span style="background:url(' + curDate["Img"] + ') no-repeat"></span>';
                str += '</div>';
                str += '<ul class="particular_list clearfloat">';
                str += '<li class="clearfloat">';
                str += '<span> 产品类别 </span>';
                str += '<p class="category">' + curDate["species"] + '<i>' + '(' + curDate["avocation"] + ')' + '</i>' + '</p>';
                str += '</li>';
                str += '<li class="clearfloat">';
                str += '<span>地址</span>';
                str += '<p class="category">' + curDate["address"] + '</p>';
                str += '</li>';
                str += '<li class="clearfloat">';
                str += '<span>电话号码</span>';
                str += '<p class="category">' + curDate["tel"] + '</p>';
                str += '</li>';
                str += '<li class="clearfloat">';
                str += '<span>传真号码</span>';
                str += '<p class="category">' + curDate["facsimile"] + '</p>';
                str += '</li>';
                str += '<li class="clearfloat">';
                str += ' <span>邮件</span>';
                str += '<p class="category">' + curDate["Email"] + '</p>';
                str += '</li>';
                str += '<li class="clearfloat">';
                str += '<span> 网址 </span>';
                str += '<p class="category">' + curDate["webURL"] + '</p>';
                str += '</li>';
                str += '</ul>';
                str += '<div class="collect_oppen">';
                str += '<div class="collect">';
                str += '<div class="collect_icon"></div>';
                str += '<p>收藏</p>';
                str += '</div>';
                str += '<div class="oppen">';
                str += '<div class="oppen_icon"></div>';
                str += '<p>打开</p>';
                str += '</div>';
                str += '</div>';
                str += '<div class="color-block"></div>';
                str += '</div>';
                str += '</li>'
            }
            $('.infor_list').append(str);
            $('.exh_infor_li').find('.exh_infor_li_icon').addClass("chenge");
            $('.collect').find('.collect_icon').addClass('collChenge');
            $('.oppen').find('.oppen_icon').addClass('oppenChenge');
            _arr = [];
            $('.collect').on('click', function (event) {
                myScroll.refresh();
                var tmp = $(this).parent().parent().parent().attr("infor");
                setCollect(tmp);
                event.stopPropagation();
            });
            $('.lining_list').find('i').hide();
            $('.material').find('i').hide();
            $('.exhibition_lists').find('i').hide();
            $('.country_lists').find('i').hide();
            $('.purpose_list').find('i').hide();
            str = "";
            var list = $('.infor_list li');
            if (!list.length) {
                if($('.search_nav').is(':hidden')){
                    $('.empty').css('top',"0.88rem").show();
                }else {
                    $('.empty').css('top',"1.76rem").show();
                }
            } else {
                $('.empty').hide();
            }
        }

        $('.empty').on('click', function () {
            $('.empty').hide();
            bindHTML(data);
        })
        function bindCategory() {
            var _str = '';
            for (var key in seaData) {
                for (var _key in seaData[key]) {
                    _str += '<p class="hisp"><b>' + _key + '</b></p>'
                    for (var i = 0; i < seaData[key][_key].length; i++) {
                        _str += ' <li> ' + seaData[key][_key][i] + ' <i></i></li>'
                    }
                }

            }
            $('.lining_list').append(_str);
            _str = '';
        }

        function bindCount() {
            var Count = [];
            for (var i = 0; i < data.length; i++) {
                var curI = data[i];
                if (Count.indexOf(curI.country) === -1) {
                    Count.push(curI.country)
                }
            }
            var strB = '';
            for (var m = 0; m < Count.length; m++) {
                strB += '<li>' + Count[m] + '<i></i></li>';
            }
            $('.country_lists').append(strB);
            strB = ''
        }

        function bindGall() {
            var Gall = [], str_g = '';
            for (var p = 0; p < Sj.length; p++) {
                for (var o in Sj[p]) {
                    for (var m = 0; m < Sj[p][o].length; m++) {
                        var mat = Sj[p][o][m].stand.match(/^[0-9]\.[0-9][\u4E00-\u9FA5]+/);
                        if (Gall.indexOf(mat[0]) === -1) {
                            Gall.push(mat[0]);
                        }
                    }
                }
            }
            for (var i = 0; i < Gall.length; i++) {
                str_g += '<li>' + Gall[i] + '<i></i></li>'
            }
            $('.exhibition_lists').append(str_g);
            str_g = '';
        }

        bindGall();
        bindCount();
        bindCategory();
//搜素历史
        function hisStoshow() {
            if (localStorage.getItem('hisArr')) {
                loc_history = JSON.parse(localStorage.getItem('hisArr'));

            } else {
                localStorage.setItem('hisArr', JSON.stringify(loc_history));
                loc_history = JSON.parse(localStorage.getItem('hisArr'));
            }
            return loc_history
        }
        hisStoshow();
        function clearSpace(val) {
            total = val.replace(/(^\s+)|(\s+$)/g, "");
            return total
        }
        function sethisStos(a) {
            if (clearSpace(a)) {
                var search = hisStoshow();
                if (search.indexOf(a) === -1) {
                    search.push(a);
                    localStorage.setItem('hisArr', JSON.stringify(search));
                }
            }
        }
        function history() {
            var len = hisStoshow();
            for (var i = 0; i < len.length; i++) {
                str2 += '<li class="history_arr">' + len[i] + '</li>';
            }
            $('.history_list')[0].innerHTML = str2;
            str2 = "";
        }
// 设置隐藏页面
        $('.exhibition_page').hide();
        $('.country_pages').hide();
        $('.classes_page').hide();
        $('.purpose_page').hide();
// infor dom树发生改变后刷新页面
        function refresh() {
            setTimeout(function () {
                myScroll.refresh();
                myScroll2.refresh();
                myScroll3.refresh();
                myScroll4.refresh();
                myScroll5.refresh();
                myScroll6.refresh();
            }, 300);
        }
        $.fn.isHedde = function () {
            for (var i = 0; i < this.length; i++) {
                if (!$(this[i]).is(":hidden")) {
                    fg = false;
                }
            }
        }
        //  设置筛选界面
        Array.prototype.classPage = function () {
            var arr = JSON.parse(localStorage.getItem('infor'));
            var reg = /^[0-9]\.[0-9][\u4E00-\u9FA5]+/
            for (var n = 0; n < arr.length; n++) {
                var curD = arr[n];
                for (var i = 0; i < this.length; i++) {
                    if (clearSpace(curD.species).indexOf(clearSpace(this[i])) !== -1) {
                        _arr.push(curD);
                    } else if (clearSpace(curD.country) == clearSpace(this[i])) {
                        _arr.push(curD);
                    } else if (clearSpace(curD.stand).indexOf(clearSpace(this[i])) !== -1) {
                        _arr.push(curD);
                    } else if (clearSpace(curD.purpose).indexOf(clearSpace(this[i])) !== -1) {
                        _arr.push(curD);
                    }
                }
            }
            bindHTML(_arr);
        }
        //搜索后再次点击重新绑定
      try {
          if (_arr.length) {
              $('.search_icon')[0].innerHTML = '';
              $('.search_icon').html('确定');
          } else {
              $('.search_icon')[0].innerHTML = '';
              $('.search_icon').html('筛选');
          }
      }catch(e) {}
        function refreshInfor() {
            fg = true;
            var arrI = $('.lining_list').find('i');
            var arrI1 = $('.lining_list').find('i');
            var arrI2 = $('.lining_list').find('i');
            var arrI3 = $('.lining_list').find('i');
            arrI.isHedde();
            arrI1.isHedde();
            arrI2.isHedde();
            arrI3.isHedde();
            if (fg) {
                bindHTML(data)
            }
        }

//infor 部分
//click 事件区
        function bindPages(s) {
            var aryP = [];
            var regStr = eval("/" + s + "/");
            for (var m = 0; m < data.length; m++) {
                if (regStr.test(data[m].name) && aryP.indexOf(data[m]) === -1) {
                    aryP.push(data[m]);
                } else if (regStr.test(data[m].country) && aryP.indexOf(data[m]) === -1) {
                    aryP.push(data[m]);
                } else if (regStr.test(data[m].stand) && aryP.indexOf(data[m]) === -1) {
                    aryP.push(data[m]);
                } else if (regStr.test(data[m].species) && aryP.indexOf(data[m]) === -1) {
                    aryP.push(data[m]);
                } else if (regStr.test(data[m].avocation) && aryP.indexOf(data[m]) === -1) {
                    aryP.push(data[m]);
                }
            }
            bindHTML(aryP);
        }
        var flog;
        $.fn.screen = function () {
            if (this.length > 0) {
                for (var l = 0; l < this.length; l++) {
                    if (!($(this[l]).is(':hidden'))) {
                        if (_Array.indexOf(($(this[l]).parent().text())) === -1) {
                            _Array.push(($(this[l]).parent().text()));
                        }
                        flog = true;
                    }
                }
            }
        }
        $('.search_icon').on("click", function (event) {
            if($(this).text()=="确定"){
                $('.search_icon')[0].innerHTML='';
                $('.search_icon').html('筛选');
            }
            flog = false
            $('.search_nav li').removeClass('cgengebg');
            var lin = $('.lining_list').find('i');
            var mat = $('.material').find('i');
            var exh = $('.exhibition_lists').find('i');
            var cou = $('.country_lists').find('i');
            var pur = $('.purpose_list').find('i');
            lin.screen();
            mat.screen();
            pur.screen();
            exh.screen();
            cou.screen();
            refreshInfor();
            if (flog) {
                _Array.classPage();
                _Array = [];
                $('#wrapper').css('top', "1.76rem");
                $('.classes_page').hide();
                $('.purpose_page').hide();
                $('.country_pages').hide();
                $('.exhibition_page').hide();
                $('#wrapper').show();
                $('.use').find('span').removeClass('_chengeA').addClass('_chenge');
                $('.category_s').find('span').removeClass('_chengeA').addClass('_chenge');
                $('.gallery').find('span').removeClass('_chengeA').addClass('_chenge');
                $('.countrys').find('span').removeClass('_chengeA').addClass('_chenge');
            } else {
                $('#wrapper').css('top', "1.76rem");
                var sd = $('.search_inp').val();
                $('.search_inp')[0].value = "";
                $('.cancel').show();
                sethisStos(sd);
                if (!sd) {
                    $(".search_nav").toggle();
                    $('.classes_page').hide();
                    $('.purpose_page').hide();
                    $('.country_pages').hide();
                    $('.exhibition_page').hide();
                    $('#wrapper').show();
                    $(this).show().css('backgroundColor', '#26adc6;');
                    flag = $(".search_nav").is(":hidden") ? true : false;
                    if (flag) {
                        $('#wrapper').css('top', "0.88rem");
                        $('.use').find('span').removeClass('_chengeA').addClass('_chenge');
                        $('.category_s').find('span').removeClass('_chengeA').addClass('_chenge');
                        $('.gallery').find('span').removeClass('_chengeA').addClass('_chenge');
                        $('.countrys').find('span').removeClass('_chengeA').addClass('_chenge');
                    }
                    $('.cancel').hide();
                } else {
                    bindPages(sd);
                    $(".search_nav").hide();
                    $('.search_i').show();
                    $('.search_show').hide();
                    $('.infor_lists').show();
                    $('#wrapper').css('top', "0.88rem").show();
                    $(this).show().css('backgroundColor', '#26adc6');
                    $('.search').css('backgroundColor', '#26adc6');
                    $('.cancel').hide();
                    $('.search_icon').css('backgroundColor', '#26adc6');
                    refresh();
                }
                history();
                if (JSON.parse(localStorage.getItem('hisArr')).length > 0) {
                    $('.clear_history').show();
                }
                myScroll.refresh();
                myScroll2.refresh();
                event.stopPropagation();
            }
        });
        $('.search_inp').on('focus', function (event) {
            $('.empty').hide();
            $('#wrapper').css('top', "0.88rem").hide();
            $('#serhShow').show();
            history();
            setTimeout(function () {
                myScroll.refresh();
                myScroll2.refresh();
            }, 300);
            $('.classes_page').hide();
            $('.purpose_page').hide();
            $('.country_pages').hide();
            $('.exhibition_page').hide();
            $(this).attr('placeholder', '搜索');
            $('.search').css('backgroundColor', '#c9c8ce');
            $('.cancel').show();
            $('.cancel_icon').show();
            $('.search_show').show();
            $('.infor_lists').hide();
            $('.search_i').show();
            $('.search_i1').hide();
            $('.search_icon').css('backgroundColor', '#c9c8ce').show();
            $('.search_nav').hide();
            if (JSON.parse(localStorage.getItem('hisArr')).length > 0) {
                $('.clear_history').show();
            }
            var inpV = $(this).val();
            if (inpV) {
                $('.cancel').hide();
            }
            event.stopPropagation();
        });
        $('input[type=text]').on("input oninput", function () {
            $('.search').css('backgroundColor', '#c9c8ce');
            myScroll.refresh();
            myScroll2.refresh();
            var inpV = $(this).val();
            if (inpV) {
                $('.cancel').hide();
            }
        });
        $('.clear_history').on('click', function (event) {
            $('.onclear_show').show();
            event.stopPropagation();
        });
        $('.cancel_s').on('click', function () {
            $('.onclear_show').hide();

        });
        $('.ensure').on('click', function () {
            $('.history_list li').remove();
            $('.onclear_show').hide();
            $('.clear_history').hide();
            localStorage.setItem('hisArr', JSON.stringify([]));

        });
        $('.cancel').on('click', function (event) {
            $('#wrapper').css('top', "0.88rem").show();
            $('#serhShow').hide();
            refresh();
            $('.infor_list').css("height", '100%');
            $('.search_i').hide();
            $('.search_i1').show();
            $('.search_show').hide();
            $('.search_nav').hide();
            $(this).hide();
            $('.search_inp').attr('placeholder', '')[0].value = "";
            $('.infor_lists').show();
            $('.search_icon').css('backgroundColor', '#26adc6').show();
            $('.search').css('backgroundColor', '#26adc6');
            $('.cancel_icon').hide();
            bindHTML(data);
            event.stopPropagation();
        });
        $('.cancel_icon').on('click', function () {
            val = $('.search_inp').val();
            var tmp = clearSpace(val);
            if (tmp !== "") {
                $('.search_inp')[0].value = "";
                $('.cancel').show();
            }
        });

        $('#history_list').on('click', 'li', function () {
            $('.search_inp')[0].value = this.innerHTML;
            $(".cancel").hide();
        });
        $('.exh_infor_li').find('.exh_infor_li_icon').addClass("chenge");
        $('.infor_list').on('click', '.exh_infor_li', function (event) {
            $('.exh_infor_li .particular_infor').hide();
            $(this).children('.particular_infor').show();
            $(this).find('.exh_infor_li_icon').removeClass('chenge').addClass('chengeA');
            $(this).on('click', function (event) {
                $(this).children('.particular_infor').toggle();
                flg = $(this).children('.particular_infor').css('display')
                if (flg == "none") {
                    $('.exh_infor_li').find('.exh_infor_li_icon').addClass("chenge").removeClass('chengeA');
                } else {
                    $('.exh_infor_li').find('.exh_infor_li_icon').addClass("chenge");
                    $(this).find('.exh_infor_li_icon').removeClass('chenge').addClass('chengeA');
                }
                myScroll.refresh();
                event.stopPropagation();
                event.preventDefault();
            });

            refresh();
            event.stopPropagation();
            event.preventDefault();
        });
        $('.category_s').find('span').addClass('_chenge');
        $('.use').find('span').addClass('_chenge');
        $('.gallery').find('span').addClass('_chenge');
        $('.countrys').find('span').addClass('_chenge');
        $('.category_s').on('click', function () {
            isa = $('.classes_page').is(":hidden") ? true : false;
            $('.empty').hide();
            bindHTML(data);
            refresh();
            if (isa) {
                $('.classes_page').show();
                $('.purpose_page').hide();
                $('.country_pages').hide();
                $('.exhibition_page').hide();
                $('#wrapper').css('top', "0.88rem").hide();
                $(this).find('span').removeClass('_chenge').addClass('_chengeA');
                $('.use').find('span').removeClass('_chengeA').addClass('_chenge');
                $('.gallery').find('span').removeClass('_chengeA').addClass('_chenge');
                $('.countrys').find('span').removeClass('_chengeA').addClass('_chenge');
                $('.search_nav li').removeClass('cgengebg')
                $(this).addClass('cgengebg');
            } else {
                $('.classes_page').hide();
                $(this).find('span').removeClass('_chengeA').addClass('_chenge');
                $('#wrapper').css('top', "1.76rem").show();
                $('.search_nav li').removeClass('cgengebg');
            }
        });
        $('.use').on('click', function () {
            $('.empty').hide();
            bindHTML(data);
            isb = $('.purpose_page').is(":hidden") ? true : false;
            if (isb) {
                $('.classes_page').hide();
                $('.purpose_page').show();
                $('.country_pages').hide();
                $('.exhibition_page').hide();
                $('#wrapper').css('top', "0.88rem").hide();
                $(this).find('span').removeClass('_chenge').addClass('_chengeA');
                $('.category_s').find('span').removeClass('_chengeA').addClass('_chenge');
                $('.gallery').find('span').removeClass('_chengeA').addClass('_chenge');
                $('.countrys').find('span').removeClass('_chengeA').addClass('_chenge');
                $('.search_nav li').removeClass('cgengebg');
                $(this).addClass('cgengebg');
            } else {
                $('.purpose_page').hide();
                $('#wrapper').css('top', "1.76rem").show();
                $(this).find('span').removeClass('_chengeA').addClass('_chenge');
                $('.search_nav li').removeClass('cgengebg');
            }
            refresh();
        });
        $('.gallery').on('click', function () {
            $('.empty').hide();
            bindHTML(data);
            isc = $('.exhibition_page').is(":hidden") ? true : false;
            refresh();
            if (isc) {
                $('.exhibition_page').show();
                $('.classes_page').hide();
                $('.purpose_page').hide();
                $('.country_pages').hide();
                $('#wrapper').css('top', "0.88rem").hide();
                $(this).find('span').removeClass('_chenge').addClass('_chengeA');
                $('.category_s').find('span').removeClass('_chengeA').addClass('_chenge');
                $('.use').find('span').removeClass('_chengeA').addClass('_chenge');
                $('.countrys').find('span').removeClass('_chengeA').addClass('_chenge');
                $('.search_nav li').removeClass('cgengebg');
                $(this).addClass('cgengebg');
            } else {
                $('.exhibition_page').hide();
                $('#wrapper').css('top', "1.76rem").show();
                $(this).find('span').removeClass('_chengeA').addClass('_chenge');
                $('.search_nav li').removeClass('cgengebg');
            }
        });
        $('.countrys').on('click', function () {
            $('.empty').hide();
            bindHTML(data);
            isd = $('.country_pages').is(":hidden") ? true : false;
            refresh();
            if (isd) {
                $('.country_pages').show();
                $('.exhibition_page').hide();
                $('.classes_page').hide();
                $('.purpose_page').hide();
                $('#wrapper').css('top', "0.88rem").hide();
                $(this).find('span').removeClass('_chenge').addClass('_chengeA');
                $('.category_s').find('span').removeClass('_chengeA').addClass('_chenge');
                $('.use').find('span').removeClass('_chengeA').addClass('_chenge');
                $('.gallery').find('span').removeClass('_chengeA').addClass('_chenge');
                $('.search_nav li').removeClass('cgengebg')
                $(this).addClass('cgengebg');
            } else {
                $('.country_pages').hide();
                $('#wrapper').css('top', "1.76rem").show();
                $(this).find('span').removeClass('_chengeA').addClass('_chenge');
                $('.search_nav li').removeClass('cgengebg');
            }
        });
        $('.search_elect .checked_all').on('click', function () {
            $(this).addClass('sh_e');
            $('.remove_all').removeClass('sh_e')
            $('.material_list').find('i').show();
            $('.lining_list').find('i').show();
        });
        $('.search_elect .remove_all').on('click', function () {
            $(this).addClass('sh_e')
            $('.checked_all').removeClass('sh_e')
            $('.material_list').find('i').hide();
            $('.lining_list').find('i').hide();
        });
        $('.material_list li').on('click', function () {
            $(this).children("i").toggle();
        });
        $('.lining_list li').on('click', function () {
            $(this).children("i").toggle();
                if (is_ary.indexOf(clearSpace($(this).text())) == -1) {
                   is_ary.push(clearSpace($(this).text()));
            }else {
                 for (var i=0;i<is_ary.length;i++){
                     if(is_ary[i]== clearSpace($(this).text())){
                         is_ary.splice(i,1);
                     }
                 }

                }
            if(is_ary.length){
                $('.search_icon')[0].innerHTML='';
                $('.search_icon').html('确定');
            }else {
                $('.search_icon')[0].innerHTML='';
                $('.search_icon').html('筛选');
            }

        });
        $('.purpose_page .checked_all').on('click', function () {
            $('.purpose_list').find('i').show();
        });
        $('.purpose_page .remove_all').on('click', function () {
            $('.purpose_list').find('i').hide();
        });
        $('.purpose_list li').on('click', function () {
            $(this).children("i").toggle();
        });
        $('.country_pages .checked_all').on('click', function () {
            $('.country_lists').find('i').show();
        });
        $('.country_pages .remove_all').on('click', function () {
            $('.country_lists').find('i').hide();
        });
        $('.country_lists li').on('click', function () {
            $(this).children("i").toggle();
        });
        $('.search_infor_nav li').on('click', function () {
            $('.search_inp')[0].value = $(this).html();
            $('#wrapper').css('top', "0.88rem").show();
            $('.search_show').hide();
            $('.infor_lists').show();
        });
        $('.exhibition_page .checked_all').on('click', function () {
            $('.exhibition_lists').find('i').show();
        });
        $('.exhibition_page .remove_all').on('click', function () {
            $('.exhibition_lists').find('i').hide();
        });
        $('.exhibition_lists li').on('click', function () {
            $(this).children("i").toggle();
        });
//收藏页 设置本地存储
        function getcollStor() {
            if (localStorage.getItem('collage')) {
                collectAry = JSON.parse(localStorage.getItem('collage'));
            } else {
                localStorage.setItem('collage', JSON.stringify(collectAry));
                collectAry = JSON.parse(localStorage.getItem('collage'));
            }
            return collectAry;
        }
        getcollStor();
        function setCollect(e) {
            var inforAry = JSON.parse(localStorage.getItem('infor'));
            var collArr = getcollStor();
            if (inforAry.length > 0) {
                var bgm = false;
                for (var key in collArr) {
                    if (collArr[key].dataId == e) {
                        bgm = true;
                    }
                }
                if (bgm) {
                    for (var n = 0; n < collArr.length; n++) {
                        if (collArr[n].dataId == e) {
                            collArr.splice(n, 1);
                            localStorage.setItem('collage', JSON.stringify(collArr));
                            break
                        }
                    }
                } else {
                    for (var p = 0; p < inforAry.length; p++) {
                        if (inforAry[p].dataId == e) {
                            collArr.push(inforAry[p]);
                            localStorage.setItem('collage', JSON.stringify(collArr));
                        }
                    }
                }
            } else {
                for (var m = 0; m < inforAry.length; m++) {
                    if (inforAry[m].dataId == e) {
                        collArr.push(inforAry[m]);
                        localStorage.setItem('collage', JSON.stringify(collArr));
                    }
                }
            }
            getColl();
        }
//收藏页 数据绑定
        bindCollect();
        function bindCollect(data) {
            var coarr = getcollStor();
            var strc = '';
            for (var m = 0; m < coarr.length; m++) {
                var ect = coarr[m];
                strc += '<li class="favorite_list" crmId="' + ect["dataId"] + '">';
                strc += '<p class="color_block"></p>';
                strc += '<div class="merchant_infor pad">';
                strc += '<h2 class="merchant ">' + ect["name"] + '</h2>';
                strc += '<span class="fa_country">' + ect["country"] + '</span>';
                strc += '<span class="fa_location">' + ect["stand"] + '</span>';
                strc += '<i class="delete_c"></i>';
                strc += '</div>';
                strc += '<ul class="fa_infor_list">';
                strc += '<li class="pad">产品类别';
                strc += '<span>' + ect["species"] + '</span>';
                strc += '</li>';
                strc += '<li class="pad">地址 ';
                strc += '<span>' + ect["address"] + '</span>';
                strc += '</li>';
                strc += '<li class="pad">电话号码 ';
                strc += '<span>' + ect["tel"] + '</span> ';
                strc += '</li>';
                strc += '<li class="pad">传真号码  ';
                strc += '<span>' + ect["facsimile"] + '</span>';
                strc += '</li>';
                strc += '<li class="pad">邮件';
                strc += '<span>' + ect["Email"] + '</span>';
                strc += '</li>';
                strc += '<li class="pad">网址 ';
                strc += '<span>' + ect["webURL"] + '</span>';
                strc += '</li>';
                strc += '</ul>';
                strc += '</li>';
            }
            $('.favorite_lists').append(strc);
            strc = ''
            return;
        }

//点击删除收藏
        $('.favorite_lists').on('click', '.delete_c', function (event) {
            myScroll7.refresh();
            var curId = $(this).parent().parent().attr('crmId');
            var deleArr = getcollStor();
            for (var t = 0; t < deleArr.length; t++) {
                if (deleArr[t].dataId == curId) {
                    deleArr.splice(t, 1);
                    localStorage.setItem('collage', JSON.stringify(deleArr));
                    $('.favorite_lists')[0].innerHTML = "";
                    bindCollect();
                    $(this).parent().parent().remove();
                    isColl();
                    getColl();
                    event.stopPropagation();
                    return;
                }
            }
        });
        function isColl() {
            if ($('.favorite_lists').children('li')[0] == undefined) {

                $('.no_collection').show();
            } else {
                $('.no_collection').hide();
            }

        }

        function getColl() {
            var _arr = getcollStor();
            var idArr = [];
            for (var i = 0; i < _arr.length; i++) {
                var daId = _arr[i].dataId;
                idArr.push(daId);
            }
            var list = $('.infor_list').children('li');
            if (idArr.length >= 1) {
                for (var n = 0; n < idArr.length; n++) {
                    for (var m = 0; m < list.length; m++) {
                        if (idArr[n] == list[m].getAttribute('infor')) {
                            $(list[m]).find('.collect_icon').removeClass('collChenge').addClass('collCheng');
                        } else {
                            $(list[m]).find('.collect_icon').removeClass('collCheng').addClass('collChenge');
                        }
                    }

                }
            } else {
                $('.infor_list').find('.collect_icon').removeClass('collCheng').addClass('collChenge');
            }
        }

        getColl();
        //layout页面；
        $('.p_5').on('tap',function () {
            $('.P5map').show();
            $('.p5_rotL').show();
            $('.box_img').hide();
            layout.refresh();
            $('.p5_rotL').css({'width':"100%","height":"100%"})
        })

        $(".p5_rot img").on('doubletap',function(){
            $('.P5map').hide();
            $('.p5_rot').hide();
            $('.box_img').show();
        })



















    }

});

















