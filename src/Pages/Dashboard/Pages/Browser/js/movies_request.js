//https://api.themoviedb.org/3/discover/movie?api_key=51bdd827768a48612af8d3a0bd074a01

//https://api.themoviedb.org/3/search/movie?api_key=51bdd827768a48612af8d3a0bd074a01&query=star+wars
    
//https://api.themoviedb.org/3/movie/497698?api_key=51bdd827768a48612af8d3a0bd074a01
    
//http://image.tmdb.org/t/p/w300/hUzeosd33nzE5MCNsZxCGEKTXaQ.png

//Pages/Browser/index.html?query=' + query +'&page=browser

    $(document).ready(function () {
                
    const urlParams = new URLSearchParams(window.location.search);
    
    var page = urlParams.get('page');
    var query  = urlParams.get('query');

    

    const ApiKey = '?api_key=51bdd827768a48612af8d3a0bd074a01'
    let baseURL = 'https://api.themoviedb.org/3/'

        fetch(baseURL + 'search/movie' + ApiKey +'&query=' + query)
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

            //console.log(data.results)

            localStorage.setItem('resultsMov',data.results.length)



            if(data.total_results == 0){
                $('.title_second_row').html(`<h2 style='color:#FFF'>Conteudo: ' ${query} ' não Encontrado!</h2>`);
            }

                rowMovieFind = document.getElementById('row02_movies_popular')

                for(let i = 2; i < data.results.length ; i++){
                         
                    //aqui retorna o link da imagem
                    var posterimg = 'http://image.tmdb.org/t/p/w300' + data.results[i].poster_path
                     
                    //demonstra os filmes na tela
                    rowMovieFind.innerHTML +=  
                        `
                        <li>
                            <a href="../../Pages/MediaDetails/index.html?id=${data.results[i].id}&type=movie">
                                <img src="${posterimg}" id="item0${i}" alt="">
                            </a>
                        </li>
                        `  
                }
                
    
    
        })
    
    });