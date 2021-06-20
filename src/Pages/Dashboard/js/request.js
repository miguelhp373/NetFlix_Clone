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
        console.log(data)
    })

})