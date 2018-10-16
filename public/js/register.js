$('#register_form').on('submit',function(e){
	e.preventDefault()
	var formData = $(this).serialize()
	$.ajax({
		url:'/register',
		type:'post',
		data:formData,
		dataType:'json',
		success:function(data){
			var code = data.err_code
			switch(code){
				case 0 : window.location.href='/'; break;
				case 1 : window.alert("邮箱或用户名已存在"); break;
				case 500 : window.alert("服务器繁忙"); break;
			}
		}
	})
})
