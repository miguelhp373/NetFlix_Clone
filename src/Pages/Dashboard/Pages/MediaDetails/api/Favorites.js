$(document).ready(function () {
  var stateFavorite = false;
  var indexId
  const urlParams = new URLSearchParams(window.location.search);
  const id = (idMedia = urlParams.get("id"));

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
      localStorage.setItem("FavoritesList", "[]");
    } else {
      var getListFavorites = [];

      getListFavorites = JSON.parse(localStorage.getItem("FavoritesList"));

      for (var i = 0; i < getListFavorites.length; i++) {
        if (getListFavorites[i] == id) {
            stateFavorite = true;
            indexId = i
        }
      }
    }
  }

  function RemoveMediaInDataBase(){
    ExistsMediaInDataBase()
    if(stateFavorite == true){
        getListFavorites = JSON.parse(localStorage.getItem("FavoritesList"));
        getListFavorites.splice(indexId, 1);

        localStorage.setItem('FavoritesList',JSON.stringify(getListFavorites))

        document.getElementById(
            "btn_favorite"
          ).innerHTML = `<i class="far fa-heart"></i>`;
          $("#btn_favorite").css({ filter: "brightness(100%)" });

    }  
  }

  $("#btn_favorite").click(function () {
    ExistsMediaInDataBase();

    if (stateFavorite != true) {
      let idAdd = idMedia; //recebe o id
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

    }else{
        RemoveMediaInDataBase()
    }
  });
});
