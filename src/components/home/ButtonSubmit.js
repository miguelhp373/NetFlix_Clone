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


    $('#submit-email-help').click(function(){
        if($('#email-input-02').val().length > 0){
            console.log('ok')//redireciona
        }else{
            $('#email-input-02').focus();
            $('#alert-msg-form-02').removeClass('hidden');//adiciona a classe que oculta o alerta de erro
            $('#lb-email-input-02').css({ 'margin-right': ' 590px', 'margin-top': '23px', 'font-size': '13px' });
            $('#email-input-02').css('border-bottom', '2.5px solid #ffa00a');
        }
    })
});