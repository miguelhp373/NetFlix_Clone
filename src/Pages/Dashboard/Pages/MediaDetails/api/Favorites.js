$(document).ready(function () {
  var stateFavorite = false;
  var getListFavorites = {};
  const urlParams = new URLSearchParams(window.location.search);
  const idMedia = urlParams.get("id");
  const type = urlParams.get("type");

  VerifyFavorite();

  function VerifyFavorite() {
    ExistsMediaInDataBase();

    if (stateFavorite == true) {
      document.getElementById(
        "btn_favorite"
      ).innerHTML = `<i class="fas fa-heart"></i>`;
      $("#btn_favorite").css({ filter: "brightness(100%)" });
    }
  }

  function ExistsMediaInDataBase() {
    if (!localStorage.getItem("FavoritesList")) {
      localStorage.setItem("FavoritesList", '{"results":{}}');
    } else {
      getListFavorites = JSON.parse(localStorage.getItem("FavoritesList"));

      for (let count in getListFavorites.results) {

        if (getListFavorites.results[count].codigo == idMedia) {
          stateFavorite = true;
          indexId = idMedia;
        }
      }


    }
  }

  function RemoveMediaInDataBase() {
    ExistsMediaInDataBase();

    if (stateFavorite == true) {
      getListFavorites = JSON.parse(localStorage.getItem("FavoritesList"));

      if (getListFavorites != null) {
        for (let count in getListFavorites.results) {
          
          if (getListFavorites.results[count].codigo == urlParams.get("id")) {
            
            delete getListFavorites.results[count];

          }
        }

        localStorage.setItem("FavoritesList", JSON.stringify(getListFavorites));
      } else {
        localStorage.setItem("FavoritesList", JSON.stringify({ results: {} }));
      }

      document.getElementById(
        "btn_favorite"
      ).innerHTML = `<i class="far fa-heart"></i>`;
      $("#btn_favorite").css({ filter: "brightness(100%)" });

      stateFavorite = false;
    }
  }

  $("#btn_favorite").click(function () {
    ExistsMediaInDataBase();

    if (stateFavorite != true) {
      let getitemlocalstorage = JSON.parse(localStorage.getItem("FavoritesList"));

      if (getitemlocalstorage == null) {
        listArray = {};
      } else {
        listArray = getitemlocalstorage;
      }
      
      listArray.results[Math.floor(Math.random() * 65536)] = { codigo: idMedia, tipo: type };

      localStorage.setItem("FavoritesList", JSON.stringify(listArray));

      document.getElementById(
        "btn_favorite"
      ).innerHTML = `<i class="fas fa-heart"></i>`;
      $("#btn_favorite").css({ filter: "brightness(100%)" });
    } else {
      RemoveMediaInDataBase();
    }
  });
});
