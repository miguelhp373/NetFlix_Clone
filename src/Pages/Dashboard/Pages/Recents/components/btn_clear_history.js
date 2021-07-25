$(document).ready(function () {
    $("#btn_clear_history").click(function (e) { 
        e.preventDefault();
        
        localStorage.setItem("RecentsList",`{"results":{}}`)
        
        document.getElementById("show_media").innerHTML = ''

        localStorage.getItem("RecentsList") == `{"results":{}}` || !localStorage.getItem("RecentsList") ? document.getElementById("text_title_page").innerHTML = `Nenhum Conteúdo Recente` : document.getElementById("text_title_page").innerHTML = `Recentes`; 
    });
});