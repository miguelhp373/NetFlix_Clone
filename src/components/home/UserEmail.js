$(document).ready(function () {
    $('#email-input').focus(function(){
    $('#email-input').css('border', '1px solid #0071eb');
      $('#lb-email-input').css({ 'margin-right': ' 590px', 'margin-top': '23px', 'font-size': '13px' }); 
    })

    $('#email-input').focusout(function(){
        $('#email-input').css('border', 'none');
        if($('#email-input').val().length > 0){
            console.log('email ok')
            $('#alert-msg-form').addClass('hidden');//adiciona a classe que oculta o alerta de erro
            $('#lb-email-input').css({ 'margin-right': ' 590px', 'margin-top': '23px', 'font-size': '13px' });

        }else{
            console.log('email required')
            $('#alert-msg-form').removeClass('hidden');//adiciona a classe que oculta o alerta de erro
            $('#lb-email-input').css({ 'margin-right': ' 583px', 'margin-top': '35px' });
            $('#email-input').css('border-bottom', '2.5px solid #ffa00a');
        }
    })

})
