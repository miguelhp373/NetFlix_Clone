$(document).ready(function () {
    $('#submit-email-user').click(function(){
        if($('#email-input').val().length > 0){
            console.log('ok')//redireciona
        }else{
            $('#email-input').focus();
            $('#alert-msg-form').removeClass('hidden');//adiciona a classe que oculta o alerta de erro
            $('#lb-email-input').css({ 'margin-right': ' 590px', 'margin-top': '23px', 'font-size': '13px' });
            $('#email-input').css('border-bottom', '2.5px solid #ffa00a');
        }
    })
});