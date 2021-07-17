$(document).ready(function () {

    $("#showInput").click(function() { 
        $('#search_field_area').removeClass('hidden');
        $('#showInput').addClass('hidden');

        $('#options_items').css({'margin-right':'-624px'});
        $('#account_contant').css({'margin-left':'0px','margin-top':'3px'})

        $('#search_input').focus()

        if($('#search_input_2').length){
            $('#search_input_2').focus()
        }

        if($('#search_input_03').length){
            $('#search_input_03').focus()
        }

    });

    
    $('#search_input').keypress(function(event){
        var query = $('#search_input').val()
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            window.location.href= 'Pages/Browser/index.html?query=' + query +'&page=browser'

            const urlParams = new URLSearchParams(window.location.search);
            const page = urlParams.get('page');

            if(page != null){
                window.location.href= 'index.html?query=' + query +'&page=browser'
            }

        }
    });


    $('#search_input_2').keypress(function(event){
        var query = $('#search_input_2').val()
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            window.location.href= '../../Pages/Browser/index.html?query=' + query +'&page=browser'
        }
    });

    $('#search_input_03').keypress(function(event){
        var query = $('#search_input_03').val()
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            window.location.href= '../Browser/index.html?query=' + query +'&page=browser'
        }
    })

});



