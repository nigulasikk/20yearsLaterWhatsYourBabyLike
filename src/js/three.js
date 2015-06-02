var bname = decodeURI(GetUrl()['name']);
var sharedText = "";

var hash = hashCode(decodeURI(bname)) % 5 + 1;
var sex = GetUrl()['sex'];
setImgAndText(sex, hash);


$("#share").click(function(event) {
    $("#share-mask").css("display", "block");
});
$("#share-mask").click(function(event) {
    /* Act on the event */
    $(this).css("display", "none");
});

$("#mk-book").click(function(event) {
    /* Act on the event */
    window.location = "http://www.whiletime.com/wxshu/wtMakeBookSteps.html";

});
var curl = window.location.href;

var url = "/wxpay/prepare";
$.ajax({
    type: "post",
    url: url,
    data: {
        "curl": curl
    },
    success: function(response) {
        wx.config({
            debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: response['appid'], // 必填，公众号的唯一标识
            timestamp: response['timestamp'], // 必填，生成签名的时间戳
            nonceStr: response['noncestr'], // 必填，生成签名的随机串
            signature: response['sign_result'], // 必填，签名，见附录1
            jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage']
        });
    },
    error: function(response) {
        console.log("ERROR:", response)
    }
});

wx.ready(function() {
    wx.onMenuShareTimeline({
        title: sharedText, // 分享标题

        link: 'www.whiletime.com/20yearsDist/one.html', // 分享链接
        imgUrl: 'https://mmbiz.qlogo.cn/mmbiz/ibGVPtYWkcu7ao55p0MvjLk8oZzPQVl0D65jodHcGno78kkW8vBEcJSNG1eEgczYkDmxWn8STZDMpe8G8PJuepA/0?wx_fmt=png', // 分享图标
        success: function() {
            // 用户确认分享后执行的回调函数
            $.get("/marketingactivity/ff8080814d9a78f7014d9a7a44c90000/addshare");
        },
        cancel: function() {
            // 用户取消分享后执行的回调函数
        }
    });

    wx.onMenuShareAppMessage({
        title:'测测你20年后的朋友圈在晒什么' , // 分享标题
        desc: sharedText, // 分享描述
         link: 'www.whiletime.com/20yearsDist/one.html',  // 分享链接
        imgUrl: 'https://mmbiz.qlogo.cn/mmbiz/ibGVPtYWkcu7ao55p0MvjLk8oZzPQVl0D65jodHcGno78kkW8vBEcJSNG1eEgczYkDmxWn8STZDMpe8G8PJuepA/0?wx_fmt=png', // 分享图标
        success: function() {
            // 用户确认分享后执行的回调函数
            $.get("/marketingactivity/ff8080814d9a78f7014d9a7a44c90000/addshare");
            
        },
        cancel: function() {
            // 用户取消分享后执行的回调函数
        }
    });

    // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
});



wx.error(function(res) {
    console.log(res);
});


function setImgAndText(ssex, hhash) {
    //男
    if (ssex == "gg") {
        if (hhash == 1) {
            $("#text-tip").text('哇塞，' + bname + '二十年后居然是个教授！');
            $("#result-img").attr("src", "img/son1.png");
            sharedText = "20年后我还是爱晒娃，看，我家儿子成了大学教授，不服你也来测测!";
        } else if (hhash == 2) {
            $("#text-tip").text('啊哦，' + bname + '二十年后居然是个律师！');
            $("#result-img").attr("src", "img/son2.png");
            sharedText = "20年后我还是爱晒娃，我家儿子成了大律师，不服你也来测测!";

        } else if (hhash == 3) {
            $("#text-tip").text('啊哦，' + bname + '二十年后在帝都扎根生长！');
            sharedText = "20年后我还是爱晒娃，我家儿子开上了大奔来接我，不服你也来测测!";

            $("#result-img").attr("src", "img/son3.png");
        } else if (hhash == 4) {
            $("#text-tip").text('嘿嘿，' + bname + '二十年后是个公司老总！');
            $("#result-img").attr("src", "img/son4.png");
            sharedText = "20年后我还是爱晒娃，看，这是我家儿子创办的企业，不服你也来测测！";

        } else if (hhash == 5) {
            $("#text-tip").text('嘻嘻，' + bname + '二十年后居然是个建筑师！');
            $("#result-img").attr("src", "img/son5.png");
            sharedText = "20年后我还是爱晒娃，看，这是我家儿子设计的建筑，不服你也来测测!";

        }
    } else {
        // 女
        if (hhash == 1) {
            $("#text-tip").text('嘿嘿，' + bname + '二十年后踏入了婚姻的殿堂！');
            $("#result-img").attr("src", "img/girl1.png");
            sharedText = "20年后我还是爱晒娃，我家女儿结婚了，幸福美满，不服你也来测测!";

        } else if (hhash == 2) {
            $("#text-tip").text('啊哦，' + bname + '二十年后居然是个明星！');
            $("#result-img").attr("src", "img/girl2.png");
            sharedText = "20年后我还是爱晒娃，我家女儿成了大明星，不服你也来测测!";

        } else if (hhash == 3) {
            $("#text-tip").text('啊哦，' + bname + '二十年后是那么的有情怀！');
            $("#result-img").attr("src", "img/girl3.png");
            sharedText = "20年后我还是爱晒娃，我家女儿还是那么贴心，不服你也来测测!";

        } else if (hhash == 4) {
            $("#text-tip").text('嘿嘿，' + bname + '二十年后是个建筑师！');
            $("#result-img").attr("src", "img/girl4.png");
            sharedText = "20年后我还是爱晒娃，看，这是我家女儿设计的建筑，不服你也来测测!";

        } else if (hhash == 5) {
            $("#text-tip").text('嘻嘻，' + bname + '二十年后居然是个钢琴老师！');
            $("#result-img").attr("src", "img/girl5.png");
            sharedText = "20年后我还是爱晒娃，听，这是我家钢琴师女儿谈的歌曲，不服你也来测测!";

        }
    }

}

function GetUrl() {
    var url = window.location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        var strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
        }
    }
    return theRequest;

}

function hashCode(str) {
    var h = 0,
        off = 0;
    var len = str.length;
    for (var i = 0; i < len; i++) {
        h = 31 * h + str.charCodeAt(off++);
    }
    var t = -2147483648 * 2;
    while (h > 2147483647) {
        h += t
    }
    return h;
}