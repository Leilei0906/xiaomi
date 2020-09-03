/*
 * 作者：张佳鹏
 * 审：李昊枕
 * 时间：2020-09-03
 */
//注册ajax提交
$('#submit').click(function(){
    var naDuser = $('#naDuser').val(); //用户名
    var naDpass = $('#naDpass').val(); //密码
    var naDpassin = $('#naDpassin').val(); //确认密码
    var naDtel = $('#naDtel').val(); //电话号码
    var vicode = $('#vicode').val(); //验证码
    var userp = /^(\w){6,18}$/; //匹配字母，数字，下划线，长度6-18 （用户名）
    var hoadp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W_]).{8,18}$/;    //匹配字母，数字，下划线，长度6-18 （密码）
    var myreg = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[012345678]|9[89])\d{8}$/; //匹配手机号


    
    function fuant(ters,tan){
        $(ters).css({'color':tan});
    }

    if( naDuser == '' ){
        $(".zhang").text("账号不能为空!");
        fuant('.zhang','red');
        return false;
    }else if(!userp.test(naDuser)){
        $(".zhang").text("用户名格式不正确!");
        fuant('.zhang','red');
        return false;
    }else{
        $(".zhang").text("");
        $('.tp').css({'display':'block'});
    }

    if( naDpass == '' ){
        $(".mi").text("密码不能为空!");
        fuant('.mi','red');
        return false;
    }else if(!hoadp.test(naDpass)){
        $(".mi").text("密码格式不正确!");
        fuant('.mi','red');
        return false;
    } else{
        $(".mi").text("");
        $('.tp1').css({'display':'block'});
    }

    if( naDpassin == '' ){
        $(".liang").text('确认密码不能为空!');
        fuant('.liang','red');
        return false;
    }
    if(naDpass != naDpassin){
        $(".liang").text('两次密码不一致请从新输入');
        fuant('.liang','red');
        return false;
    }else{
        $(".liang").text('');
        $('.tp2').css({'display':'block'});
    }
    
    if( naDtel == '' ){
        $(".shou").text('手机号不能为空');
        fuant('.shou','red');
        return false;
    }else if(!myreg.test(naDtel)){
        $(".shou").text('手机号格式不正确');
        fuant('.shou','red');
        return false;
    }else{
        $(".shou").text('');
        $('.tp3').css({'display':'block'});
    }
    
    
    if( vicode == '' ){
        alert('验证码不能为空');
        fuant('.yanzhengma','red');
        return false;
    }
    
    $.ajax({
        type:'post',
        url:'/index/index/note',
        data:{naDuser:naDuser,naDpass:naDpass,naDtel:naDtel,vicode:vicode},
        dataType:'json',
        success:function(tesr){
            if(tesr.code == -3){
                alert(tesr.data);
                $('.tinVso').click();
                $('#vicode').val('');
                
            }else if(tesr.code == -1){
            	alert(tesr.data);
            	document.location.reload();
            }else if(tesr.code == 1) {
                alert(tesr.data); 
                setTimeout(function () {
                	window.location.href = "/index/index/deng";
            	}, 1000)
            }else if(tesr.code == -2){
            	alert(tesr.data);
            }
        }
    });
    
 });