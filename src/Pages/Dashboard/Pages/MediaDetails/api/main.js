$(document).ready(function () {

  $(document).ready(function () {
    const ApiKey = "?api_key=51bdd827768a48612af8d3a0bd074a01&language=pt-br";
    let baseURL = "https://api.themoviedb.org/3/";

    const urlParams = new URLSearchParams(window.location.search);
    const idMedia = urlParams.get("id");
    const typeURLMedia = urlParams.get("type");

    if (typeURLMedia == "movie") {

      fetch(baseURL + `${typeURLMedia}/${idMedia}` + ApiKey)
        .then(function (response) {
          if (!response.ok) {
            throw new Error(
              "Erro Ao Tentar Se Comunicar com o Servidor! Status " +
                response.status
            );
          } else {
            return response.json();
          }
        })
        .then(function (data) {

          const backdropimage = document.getElementById("backdrop_image");
          const posterimage = document.getElementById("poster_image");
          const titleMedia = document.getElementById("title_overview");
          const overview = document.getElementById("text_overview");
          const rating = document.getElementById("rating_text");

          backdropimage.innerHTML += `
                            <img src="http://image.tmdb.org/t/p/original${data.backdrop_path}" id="poster_path${data.id}" alt="${data.original_title}">
                        `;
          document.title =
            data.original_title + ` (${data.release_date.substring(0, 4)})`;

          posterimage.innerHTML = `
                            <img src="http://image.tmdb.org/t/p/w300/${data.poster_path}" alt="">
                        `;

          titleMedia.innerHTML = `
                            <h1>${
                              data.original_title
                            } (${data.release_date.substring(0, 4)})</h1>
                        `;

          overview.innerHTML = `
                            <span>${data.overview}</span>
                        `;

          rating.innerHTML = `
                            <span>Rating: ⭐ ${data.vote_average}/10</span>
                        `;
        });
    }

    if (typeURLMedia == "tv") {
    
      fetch(baseURL + `${typeURLMedia}/${idMedia}` + ApiKey)
        .then(function (response) {

          if (!response.ok) {
            throw new Error(
              "Erro Ao Tentar Se Comunicar com o Servidor! Status " +
                response.status
            );
          } else {
            return response.json();
          }
        })
        .then(function (data) {

          console.log(baseURL + `${typeURLMedia}/${idMedia}` + ApiKey)

          const backdropimage = document.getElementById("backdrop_image");
          const posterimage = document.getElementById("poster_image");
          const titleMedia = document.getElementById("title_overview");
          const overview = document.getElementById("text_overview");
          const rating = document.getElementById("rating_text");

          backdropimage.innerHTML += `
                            <img src="http://image.tmdb.org/t/p/original${data.backdrop_path}" id="poster_path${data.id}" alt="${data.original_title}">
                        `;
          document.title =
            data.name + ` (${data.first_air_date.substring(0, 4)})`;

          posterimage.innerHTML = `
                            <img src="http://image.tmdb.org/t/p/w300/${data.poster_path}" alt="">
                        `;

          titleMedia.innerHTML = `
                            <h1>${data.name} (${data.first_air_date.substring(
            0,
            4
          )})</h1>
                        `;

          overview.innerHTML = `
                            <span>${data.overview}</span>
                        `;

          rating.innerHTML = `
                            <span>Rating: ⭐ ${data.vote_average}/10</span>
                        `;
        });
    }
  });
});
