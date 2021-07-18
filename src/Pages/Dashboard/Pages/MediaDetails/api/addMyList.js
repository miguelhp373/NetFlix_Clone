$(document).ready(function () {
  var urlParams;
  var idMedia;
  var stateFavorite = false;

  LoadPageVerifyfavorite();

  function IdValidationList() {
    urlParams = new URLSearchParams(window.location.search);
    idMedia = urlParams.get("id");

    if (!localStorage.getItem("FavoritesList")) {
      localStorage.setItem("FavoritesList", "");
    } else {
      var getListFavorites = [];
      getListFavorites = JSON.parse(localStorage.getItem("FavoritesList"));

      for (var i = 0; i < getListFavorites.length; i++) {
        console.log(getListFavorites[i]);
        if (getListFavorites[i] == idMedia) {
          stateFavorite = true;
          console.log(getListFavorites[i]);
        }
      }
    }
  }

  function LoadPageVerifyfavorite() {
    IdValidationList();

    if (stateFavorite == true) {
      document.getElementById(
        "btn_favorite"
      ).innerHTML = `<i class="fas fa-heart"></i>`;
      $("#btn_favorite").css({ filter: "brightness(100%)" });
    }
  }

  function RemoveMediaFromFavorites() {
    urlParams = new URLSearchParams(window.location.search);
    idMedia = urlParams.get("id");

    if (localStorage.getItem("FavoritesList")) {
      let getitemlocalstorage = localStorage.getItem("FavoritesList");
      listArray = JSON.parse(getitemlocalstorage);

      for (var i = 0; i < listArray.length; i++) {

        if (listArray[i] == idMedia) {
          stateFavorite = false;
          listArray.splice(listArray[i]);

          console.log(listArray);

          localStorage.setItem("FavoritesList", JSON.stringify(listArray));
        }
      }

      document.getElementById(
        "btn_favorite"
      ).innerHTML = `<i class="far fa-heart"></i>`;
      $("#btn_favorite").css({ filter: "brightness(50%)" });
    }
  }

  $("#btn_favorite").click(function () {
    IdValidationList();

    if (stateFavorite != true) {
      
     let idAdd = idMedia;

      if (localStorage.getItem("FavoritesList")) {
        let getitemlocalstorage = localStorage.getItem("FavoritesList");

        if (getitemlocalstorage == null) {
          listArray = [];
        } else {
          listArray = JSON.parse(getitemlocalstorage);
        }
        listArray.push(idAdd);
        localStorage.setItem("FavoritesList", JSON.stringify(listArray));

        document.getElementById(
          "btn_favorite"
        ).innerHTML = `<i class="fas fa-heart"></i>`;
        $("#btn_favorite").css({ filter: "brightness(100%)" });
      } else {
        RemoveMediaFromFavorites();
      }
    }
    
  });
});
