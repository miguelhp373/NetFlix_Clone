$(document).ready(function () {

    localStorage.setItem('expand01', 'false');
    localStorage.setItem('expand02', 'false');
    localStorage.setItem('expand03', 'false');
    localStorage.setItem('expand04', 'false');
    localStorage.setItem('expand05', 'false');


    $('#expand-01').click(function(){
        if (localStorage.getItem('expand01') == 'false') {
            localStorage.setItem('expand01', 'true');
            $('#plus-icon-01').removeClass('fa-plus');
            $('#plus-icon-01').addClass('fa-times');
    
    
        } else if (localStorage.getItem('expand01') == 'true') {
            localStorage.setItem('expand01', 'false');
            $('#plus-icon-01').removeClass('fa-times');
            $('#plus-icon-01').addClass('fa-plus');
        }
    });
    
    
    $('#expand-02').click(function(){
        if (localStorage.getItem('expand02') == 'false') {
            localStorage.setItem('expand02', 'true');
            $('#plus-icon-02').removeClass('fa-plus');
            $('#plus-icon-02').addClass('fa-times');
    
    
        } else if (localStorage.getItem('expand02') == 'true') {
            localStorage.setItem('expand02', 'false');
            $('#plus-icon-02').removeClass('fa-times');
            $('#plus-icon-02').addClass('fa-plus');
        }
    });
    
    
    $('#expand-03').click(function(){
        if (localStorage.getItem('expand03') == 'false') {
            localStorage.setItem('expand03', 'true');
            $('#plus-icon-03').removeClass('fa-plus');
            $('#plus-icon-03').addClass('fa-times');
    
    
        } else if (localStorage.getItem('expand03') == 'true') {
            localStorage.setItem('expand03', 'false');
            $('#plus-icon-03').removeClass('fa-times');
            $('#plus-icon-03').addClass('fa-plus');
        }
    });
    
    
    $('#expand-04').click(function(){
        if (localStorage.getItem('expand04') == 'false') {
            localStorage.setItem('expand04', 'true');
            $('#plus-icon-04').removeClass('fa-plus');
            $('#plus-icon-04').addClass('fa-times');
    
    
        } else if (localStorage.getItem('expand04') == 'true') {
            localStorage.setItem('expand04', 'false');
            $('#plus-icon-04').removeClass('fa-times');
            $('#plus-icon-04').addClass('fa-plus');
        }
    });
    
    
    $('#expand-05').click(function(){
        if (localStorage.getItem('expand05') == 'false') {
            localStorage.setItem('expand05', 'true');
            $('#plus-icon-05').removeClass('fa-plus');
            $('#plus-icon-05').addClass('fa-times');
    
    
        } else if (localStorage.getItem('expand05') == 'true') {
            localStorage.setItem('expand05', 'false');
            $('#plus-icon-05').removeClass('fa-times');
            $('#plus-icon-05').addClass('fa-plus');
        }
    })
});


