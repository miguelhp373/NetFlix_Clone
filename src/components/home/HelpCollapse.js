$(document).ready(function () {
    $('#btn-colapse').click(function () {
        alert('teste')
        $('#container').removeClass('container-hidden');
        $('.fas').removeClass('fa-plus');
        $('.fas').addClass('fa-times')
    })
});

/* var collapseAction = document.querySelector(".btn-colapse");
 for (let i = 0; i < collapseAction.length; i++) {
    collapseAction[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}  */


$(document).ready(function () {
    var btnActive = $('.btn-colapse');
    for (let i = 0; i < btnActive.length; i++) {
        $('.btn-colapse')[i].click(function () {
             var content = $('.container-hidden').nextElementSibling;
            if (content.style.display === "none") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        }
        )
    }


});

