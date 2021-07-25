$(document).ready(function () {

        const ApiKey = '?api_key=51bdd827768a48612af8d3a0bd074a01&language=pt-br'
        let baseURL = 'https://api.themoviedb.org/3/'
        
        const urlParams = new URLSearchParams(window.location.search);
        const idMedia = urlParams.get('id');
        const typeURLMedia = urlParams.get('type')

        if(typeURLMedia == 'movie'){

            fetch(baseURL + `${typeURLMedia}/${idMedia}/videos` + ApiKey)
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
        
                        const trailer = document.getElementById('iframe_trailer')
                        trailer.innerHTML += `
                        <iframe width="727" height="409" src="https://www.youtube.com/embed/${data.results[0].key}?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        `      
            })
        }

        if(typeURLMedia == 'tv'){

            fetch(baseURL + `${typeURLMedia}/${idMedia}/videos` + ApiKey)
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
                        
                        const trailer = document.getElementById('iframe_trailer')
                        trailer.innerHTML += `
                            <iframe width="727" height="409" src="https://www.youtube.com/embed/${data.results[0].key}?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        `
            })
        }
    
    })