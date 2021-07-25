$(document).ready(function () {

    var EmailValid;
    var PassValid;

    $('#email-login-user-form').focusout(function () {
        if ($('#email-login-user-form').val().length == 0) {
            $('.warning-email-error').removeClass('hidden');
            $('.warning-pass-error ').css({'margin-top':'80px'})
            $('#email-login-user-form').css({ 'border-bottom': '2.5px solid #ffa00a' });
            $('#pass-login-user-form').css({ 'margin-top': '35px' });
            $('.lb-email').css({ 'margin-top': '-170px' });
            $('.lb-pass').css({ 'margin-top': '0px' })
            EmailValid = false;
        } else {
            $('.lb-email').css({ 'margin-top': '-190px', 'margin-right': '-590px','font-size':'12px' });
            $('#email-login-user-form').css({ 'border': 'none'});
            $('.warning-email-error').addClass('hidden');
            EmailValid = true; 
        }
    })

    $('#email-login-user-form').focus(function () {
        if (EmailValid == false) {
            $('.lb-email').css({ 'margin-top': '-190px', 'margin-right': '-590px' });
        } else {
            $('.lb-email').css({ 'margin-top': '-190px', 'margin-right': '-590px','font-size':'12px' });
            $('#email-login-user-form').css({ 'border': 'none'});
            $('.warning-email-error').addClass('hidden');


            EmailValid = true; 
        }
    })


    //pass
    $('#pass-login-user-form').focusout(function () {
        if (($('#pass-login-user-form').val().length == 0) || ($('#pass-login-user-form').val().length < 4) || ($('#pass-login-user-form').val().length > 60)) {
            $('.warning-pass-error').removeClass('hidden');
            $('#pass-login-user-form').css({ 'border-bottom': '2.5px solid #ffa00a' });
            $('.lb-pass').css({ 'margin-top': '-20px', 'margin-right': '-590px' });
            PassValid = false;
        }else{
            $('.lb-pass').css({ 'margin-top': '-10px', 'margin-right': '-590px','font-size':'12px' });
            $('#pass-login-user-form').css({ 'border': 'none'});
            $('.warning-pass-error').addClass('hidden');
            PassValid = true
        }
    })

    $('#pass-login-user-form').focus(function () {
        if(PassValid == false){
            $('.lb-pass').css({ 'margin-top': '-40px', 'margin-right': '-590px' });
        }else{
            $('.lb-pass').css({ 'margin-top': '-20px', 'margin-right': '-590px','font-size':'12px'});
            $('#pass-login-user-form').css({ 'border': 'none'});
            $('.warning-pass-error').addClass('hidden');
            PassValid = true
        }
    })


    

    $('#submit-button-login').click(function(){
        if((EmailValid == true)&&(PassValid == true)){
            location.href = '../Dashboard/index.html';
        }else{
            $('.warning-email-error').removeClass('hidden');
            $('.warning-pass-error ').css({'margin-top':'80px'})
            $('#email-login-user-form').css({ 'border-bottom': '2.5px solid #ffa00a' });
            $('#pass-login-user-form').css({ 'margin-top': '35px' });
            $('.lb-email').css({ 'margin-top': '-170px' });
            $('.lb-pass').css({ 'margin-top': '0px' })
            

            $('.warning-pass-error').removeClass('hidden');
            $('#pass-login-user-form').css({ 'border-bottom': '2.5px solid #ffa00a' });
            $('.lb-pass').css({ 'margin-top': '-20px', 'margin-right': '-590px' });
        }
    })

    
})    