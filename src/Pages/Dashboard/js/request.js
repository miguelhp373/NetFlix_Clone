$(document).ready(function () {
    //https://api.themoviedb.org/3/discover/movie?api_key=51bdd827768a48612af8d3a0bd074a01

const ApiKey = '?api_key=51bdd827768a48612af8d3a0bd074a01'
let baseURL = 'https://api.themoviedb.org/3/'

$(document).ready(function () {
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
//data.results.length
            for(let i = 2; i < 20 ; i++){
                console.log(data.results[i])
                console.log(data.results[i].poster_path)//retorna o array separado
                //var poster = document.getElementById('row_')
                rowDiscover = document.getElementById('row02_movies_popular')
                
                var posterimg = 'http://image.tmdb.org/t/p/w300' + data.results[i].poster_path
                 console.log(posterimg) 
                rowDiscover.innerHTML +=  `
                <li>
                <a href="#">
                  <img src="${posterimg}" id="item0${i}" alt="">
                </a>
              </li>
                `
                
            }


    })

})
});