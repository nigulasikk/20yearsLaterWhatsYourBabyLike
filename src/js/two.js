var x=0;
setInterval(function(){
	x+=1;
	$(".bg-2").css("background-position-y",100-x+"%");
	//页面跳转
	if(x==100)window.location.href="three.html?name="+GetUrl()['name']+"&sex="+GetUrl()['sex'];
},35);
function GetUrl(){
	var url = window.location.search; //获取url中"?"符后的字串
	var theRequest = new Object();
	if (url.indexOf("?") != -1) {
		var str = url.substr(1);
		var strs = str.split("&");
		for(var i = 0; i < strs.length; i ++) {
			theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
		}
	}
	return theRequest;
	
}
