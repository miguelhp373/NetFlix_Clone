$(document).ready(function () {
 
    $('#show_field_search').click(function () { 

        $('#search_input').removeClass('hidden');
        $('.search_icon').addClass('hidden');


        $('#search_input').focus()
    });

    
    $('#search_input').keypress(function(event){
        var query = $('#search_input').val()
        var keycode = (event.keyCode ? event.keyCode : event.which)

        if(keycode == '13'){

            const urlParams = new URLSearchParams(window.location.search);
            const page = urlParams.get('page');

            if(page != null){
                window.location.href = '../../Pages/Browser/index.html?query=' + query +'&page=browser'
            }else{
                window.location.href = './Pages/Browser/index.html?query=' + query +'&page=browser'
            }
            
        }
    });


});



