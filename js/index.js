

 var abcd=false;
$(document).ready(function () {
    if(!abcd){
        abcd=true;
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
                // bindCollect();
                setTimeout(function () {
                    myScroll7.refresh();
                }, 300);
                isColl();
                // window.location = "http://localhost:63342/.idea/xmcs/favorite.html";
                window.location = "https://zhangxiuqiang.github.io/xmcs/favorite.html";
            } else if ($(this).index() == 2) {
                setTimeout(function () {
                    trend_1.refresh();
                    trend_2.refresh();
                }, 300);
                // window.location = "http://localhost:63342/.idea/xmcs/trend.html";
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
            } else if ($(this).index() == 7) {
                setTimeout(function () {
                    clip_1.refresh();
                    clip_2.refresh();
                }, 300);
                window.location = "https://zhangxiuqiang.github.io/xmcs/letter_clip.html";
            }

        });
        var str2 = "", isa, isb, isc, isd, flag = false, total = null;
        var val = null;
        var height = null;
        var liheight = null;
        var loc_history = [];
        var collectAry = [];
//创建假数据
        var data = [];
        for (var i = 0; i < 30; i++) {
            var obj = {};
            obj["dataId"] = i;
            obj['name'] = "广州一卷纺织品有限公司";
            obj['stand'] = '8.1馆F56展位';
            obj['country'] = "中国";
            obj ['species'] = "麻纺";
            obj ['address'] = '中国广州珠海区景逸路珠江国际纺织城C区10591档';
            obj ['tel'] = "+86 020-8954565";
            obj ['facsimile'] = '+86 020-5564564';
            obj ['Email'] = 'yhfaskhfas@163.com';
            obj  ['webURL'] = 'www.skdasdsa.com';
            obj   ['Img'] = 'http://img2.imgtn.bdimg.com/it/u=912013669,733146085&fm=21&gp=0.jpg';
            data.push(obj);
        }
        localStorage.setItem('infor', JSON.stringify(data));
        var arr = JSON.parse(localStorage.getItem('infor'));


// 绑定 infor页面数据
        function bindHTML() {
            var str = "";
            for (var i = 0; i < arr.length; i++) {
                var curDate = arr[i];
                str += '<li class="exh_infor_li" infor="' + curDate["dataId"] + '">';
                str += '<p>' + curDate["name"] + '</p>';
                str += '<span class="country">' + curDate["country"] + '</span>';
                str += '<span class="location">' + curDate["stand"] + '</span>';
                str += '<i class="exh_infor_li_icon"></i>';
                str += '<div class="particular_infor clear">';
                str += '<div class="particular_infor_icon">';
                str += '<span style="background:url(' + curDate["Img"] + ')"></span>';
                str += '</div>';
                str += '<ul class="particular_list">';
                str += '<li class="particular_country">' + curDate["country"] + '</li>';
                str += '<li>';
                str += '<span> 产品类别 </span>';
                str += '<p class="category">' + curDate["species"] + '</p>';
                str += '</li>';
                str += '<li>';
                str += '<span>地址</span>';
                str += '<p class="category">' + curDate["address"] + '</p>';
                str += '</li>';
                str += '<li>';
                str += '<span>电话号码</span>';
                str += '<p class="category">' + curDate["tel"] + '</p>';
                str += '</li>';
                str += '<li>';
                str += '<span>传真号码</span>';
                str += '<p class="category">' + curDate["facsimile"] + '</p>';
                str += '</li>';
                str += '<li>';
                str += ' <span>邮件</span>';
                str += '<p class="category">' + curDate["Email"] + '</p>';
                str += '</li>';
                str += '<li>';
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
            str = "";
        }
        bindHTML();

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
            $('.history_list')[0].innerHTML=str2;
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

//infor 部分
//click 事件区

        $('.search_icon').on("click", function (event) {
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
                }
                $('.cancel').hide();
            } else {
                $(".search_nav").hide();
                $('.search_i').show();
            }
            history();
            if (JSON.parse(localStorage.getItem('hisArr')).length > 0) {
                $('.clear_history').show();
            }
            myScroll.refresh();
            myScroll2.refresh();
            event.stopPropagation();
        });
        $('.search_inp').on('focus', function (event) {
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
        var flg=1;
        $('#history_list').on('click', 'li', function () {
            $('.search_inp')[0].value = this.innerHTML;
            $(".cancel").hide();
        });

        $('.exh_infor_li').find('.exh_infor_li_icon').addClass("chenge");
        $('.exh_infor_li').on('click', function (event) {
            $('.exh_infor_li .particular_infor').hide();
            $(this).children('.particular_infor').show();
            $(this).find('.exh_infor_li_icon').removeClass('chenge').addClass('chengeA');

            $(this).on('click', function (event) {
                $(this).children('.particular_infor').toggle();
                flg =  $(this).children('.particular_infor').css('display')
                if(flg=="none"){
                    $('.exh_infor_li').find('.exh_infor_li_icon').addClass("chenge").removeClass('chengeA');
                }else {
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
            refresh();
            if (isa) {
                $('.classes_page').show();
                $('.purpose_page').hide();
                $('.country_pages').hide();
                $('.exhibition_page').hide();
                $('#wrapper').css('top', "0.88rem").hide();
                $(this).find('span').removeClass('_chenge').addClass('_chengeA');
                $('.use').find('span').removeClass('_chengeA').addClass('_chenge');
                $('.gallery').find('span').removeClass('_chengeA').addClass('_chenge');;
                $('.countrys').find('span').removeClass('_chengeA').addClass('_chenge');;
            } else {
                $('.classes_page').hide();
                $(this).find('span').removeClass('_chengeA').addClass('_chenge');
                $('#wrapper').css('top', "1.76rem").show();
            }
        });

        $('.use').on('click', function () {
            isb = $('.purpose_page').is(":hidden") ? true : false;
            if (isb) {
                $('.classes_page').hide();
                $('.purpose_page').show();
                $('.country_pages').hide();
                $('.exhibition_page').hide();
                $('#wrapper').css('top', "0.88rem").hide();
                $(this).find('span').removeClass('_chenge').addClass('_chengeA');
                $('.category_s').find('span').removeClass('_chengeA').addClass('_chenge');
                $('.gallery').find('span').removeClass('_chengeA').addClass('_chenge');;
                $('.countrys').find('span').removeClass('_chengeA').addClass('_chenge');;
            } else {
                $('.purpose_page').hide();
                $('#wrapper').css('top', "1.76rem").show();
                $(this).find('span').removeClass('_chengeA').addClass('_chenge');
            }
            refresh();
        });

        $('.gallery').on('click', function () {
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
                $('.use').find('span').removeClass('_chengeA').addClass('_chenge');;
                $('.countrys').find('span').removeClass('_chengeA').addClass('_chenge');;
            } else {
                $('.exhibition_page').hide();
                $('#wrapper').css('top', "1.76rem").show();
                $(this).find('span').removeClass('_chengeA').addClass('_chenge');
            }
        });

        $('.countrys').on('click', function () {
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
                $('.use').find('span').removeClass('_chengeA').addClass('_chenge');;
                $('.gallery').find('span').removeClass('_chengeA').addClass('_chenge');;
            } else {
                $('.country_pages').hide();
                $('#wrapper').css('top', "1.76rem").show();
                $(this).find('span').removeClass('_chengeA').addClass('_chenge');
            }
        });

        $('.classes_page .checked_all').on('click', function () {
            $('.material_list').find('i').show();
            $('.lining_list').find('i').show();
        });

        $('.classes_page .remove_all').on('click', function () {
            $('.material_list').find('i').hide();
            $('.lining_list').find('i').hide();
        });

        $('.material_list li').on('click', function () {
            $(this).children("i").toggle();
        });

        $('.lining_list li').on('click', function () {
            $(this).children("i").toggle();
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
        }
        $('.collect').find('.collect_icon').addClass('collChenge');
        $('.oppen').find('.oppen_icon').addClass('oppenChenge');
        $('.collect').on('click', function (event) {
            myScroll.refresh();
            event.stopPropagation();
            var tmp = $(this).parent().parent().parent().attr("infor");
            setCollect(tmp);
        });
//收藏页 数据绑定
        bindCollect()
        function bindCollect() {
            var coarr = getcollStor();
            var strc = '';
            for (var m = 0; m < coarr.length; m++) {
                var ect = coarr[m];
                strc += '<li class="favorite_list" crmId="' + ect["dataId"] + '">';
                strc += '<p class="color_block"></p>';
                strc += '<div class="merchant_infor pad">';
                strc += '<h2 class="merchant ">' + ect["name"] + '</h2>';
                strc += '<span class="fa_country">' + ect["country"] + '</span>';
                strc += ' <span class="fa_location">' + ect["stand"] + '</span>';
                strc += ' <i class="delete_c"></i>';
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
            console.log(strc)
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
                    return;
                    event.stopPropagation();
                }
            }

        });
        function isColl() {
            if($('.favorite_lists').children('li')[0]==undefined){

                $('.no_collection').show();
            }else {
                $('.no_collection').hide();
            }

        }
    }

})
//点击切换分页

















