$(document).ready(function () {
                
    const urlParams = new URLSearchParams(window.location.search);
    
    var page = urlParams.get('page');
    var query  = urlParams.get('query');

    const ApiKey = '?api_key=51bdd827768a48612af8d3a0bd074a01'
    let baseURL = 'https://api.themoviedb.org/3/'

        fetch(baseURL + 'search/tv' + ApiKey +'&query=' + query)
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
           
              localStorage.setItem('resultsTv',data.results.length)

               var tvTot = localStorage.getItem("resultsTv");
               var movTot = localStorage.getItem("resultsMov");
         
               document.title = `${
                 Number(tvTot) + Number(movTot)
               } resultados encontrados`;

                if(data.total_results == 0){
                    $('.title_first_row').html(`<h2 style='color:#FFF'>Conteudo: '${query}' não Encontrado!</h2>`);
                }

                rowtvFind = document.getElementById('row01_tv_popular')

                for(let i = 2; i < data.results.length ; i++){
                    
                    var posterimg = 'http://image.tmdb.org/t/p/w300' + data.results[i].poster_path
                    //var posterimg = `http://image.tmdb.org/t/p/original${data.results[i].backdrop_path}` 

                    rowtvFind.innerHTML +=  
                        `
                        <li>
                            <a href="../../Pages/MediaDetails/index.html?id=${data.results[i].id}&type=tv&page=details">
                                <img src="${posterimg}" id="item0${i}" alt="">
                            </a>
                        </li>
                        `  
                        
                
            }
                
    
    
        })
    
    });