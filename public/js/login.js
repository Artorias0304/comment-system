$("#login_form").on("submit",function(e){
	e.preventDefault()
	var loginData = $(this).serialize()
	$.ajax({
		url:'/login',
		type:'post',
		data:loginData,
		dataType:'json',
		success:function(data){
			var code = data.err_code
			switch(code){
				case 0 : window.location.href='/'; break;
				case 1 : window.alert("username or password is invalid"); break;
				case 500 : window.alert("服务器繁忙"); break;
			}
		}
	})
})
