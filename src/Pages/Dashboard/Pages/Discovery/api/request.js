$(document).ready(function () {

    const urlParams = new URLSearchParams(window.location.search);
    var page  = urlParams.get('page');


    const ApiKey = '?api_key=51bdd827768a48612af8d3a0bd074a01'
    let baseURL = 'https://api.themoviedb.org/3/'

    if(page == 01){

        fetch(baseURL + 'discover/tv' + ApiKey)
        .then(function(response){
            if (!response.ok) {
                throw new Error(
                    "Erro Ao Tentar Se Comunicar com o Servidor! Status " + 
                    response.status
            )}else{
                return response.json();
            }   
    })
        .then(function (data) {

            document.getElementById('text_title_page').innerHTML = `Inicio > Séries`
    
                for(let i = 2; i < data.results.length ; i++){
            
                    tvDiscovery = document.getElementById('show_media')
                    
                    //aqui retorna o link da imagem
                    var posterimg = 'http://image.tmdb.org/t/p/w300' + data.results[i].poster_path
             
                    

                   
        
                    if(data.results[i].poster_path == null){

                        tvDiscovery.innerHTML +=  
                        `
                            <div class="col mt-4 p-2" style='display:none;'>
                                <a href="../../Pages/MediaDetails/index.html?id=${data.results[i].id}&type=tv">
                                    <img src="${posterimg}" class="item0${i}" alt="">
                                </a>
                            </div>
                        `
                    }else{
                        tvDiscovery.innerHTML += 
                        `
                        <div class="col mt-4 p-2" id='item0${i}'>
                            <a href="../../Pages/MediaDetails/index.html?id=${data.results[i].id}&type=tv&page=details">
                                <img src="${posterimg}" id="item0${i}" alt="">
                            </a>
                        </div>
                        `
                    }
                }    
        })


    }

    if(page == 02){

        fetch(baseURL + 'discover/movie' + ApiKey)
        .then(function(response){
            if (!response.ok) {
                throw new Error(
                    "Erro Ao Tentar Se Comunicar com o Servidor! Status " + 
                    response.status
            )}else{
                return response.json();
            }   
    })
        .then(function (data) {
            document.getElementById('text_title_page').innerHTML = `Inicio > Filmes`
    
                for(let i = 2; i < data.results.length ; i++){
            
                    movieDiscovery = document.getElementById('show_media')
                    
                    //aqui retorna o link da imagem
                    var posterimg = 'http://image.tmdb.org/t/p/w300' + data.results[i].poster_path

                    //demonstra os filmes na tela

                    if(data.results[i].poster_path == null){

                        movieDiscovery.innerHTML +=  
                        `
                            <div class="col mt-4 p-2" style='display:none;'>
                                <a href="../../Pages/MediaDetails/index.html?id=${data.results[i].id}&type=movie">
                                    <img src="${posterimg}" class="item0${i}" alt="">
                                </a>
                            </div>
                        `
                    }else{
                        movieDiscovery.innerHTML += 
                        `
                        <div class="col mt-4 p-2">
                            <a href="../../Pages/MediaDetails/index.html?id=${data.results[i].id}&type=movie&page=details">
                                <img src="${posterimg}" id="item0${i}" alt="">
                            </a>
                        </div>
                        `
                    }
        
                 
                }    
        })
    }
});