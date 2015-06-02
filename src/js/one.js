$(".test-btn").click(function() {
	var babyName=$("#name").val();
    if(babyName==""){
        alert('请输入测试者名字哦！');
    }else{
    window.location.href = "two.html?name="+ encodeURI(babyName)+"&sex="+$("#sex").val();
        
    }
});

$.get("/marketingactivity/ff8080814d9a78f7014d9a7a44c90000/addclick");
