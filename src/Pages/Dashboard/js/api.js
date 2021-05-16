 //landing
 //https://api.themoviedb.org/3/discover/movie?api_key=

 //pesquisa
 //search/movie?api_key=


const APIKEY = '51bdd827768a48612af8d3a0bd074a01';
 let baseURL = 'https://api.themoviedb.org/3/';
 let configData = null;
 let baseImageURL = null;
 

 let getConfig = function () {
     let url = "".concat(baseURL, 'configuration?api_key=', APIKEY); 
     fetch(url)
     .then((result)=>{
         return result.json();
     })
     .then((data)=>{
         baseImageURL = data.images.secure_base_url;
         configData = data.images;
         console.log('config:', data);
         console.log('config fetched');
         runSearch('')
     })
     .catch(function(err){
         alert(err);
     });
 }


 let runSearch = function (keyword) {
     let url = ''.concat(baseURL, 'search/movie?api_key=', APIKEY, '&query=', keyword);
     fetch(url)
     .then(result=>result.json())
     .then((data)=>{
         //process the returned data
       
        console.log(data);
         document.getElementById('output').innerHTML = JSON.stringify(data, null, 4);
         //work with results array...
         
     })
 }
 
 document.addEventListener('DOMContentLoaded', getConfig);
