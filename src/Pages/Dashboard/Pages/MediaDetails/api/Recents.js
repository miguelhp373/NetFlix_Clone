$(document).ready(function () {
    var getListRecents = {};
    const urlParams = new URLSearchParams(window.location.search);
    const idMedia = urlParams.get("id");
    const type = urlParams.get("type");
  
    ExistsMediaInDataBase();
    AddList();
  
    function AddList() {
        let getitemlocalstorage = JSON.parse(localStorage.getItem("RecentsList"));

        if (getitemlocalstorage == null) {
          listArray = {};
        } else {
          listArray = getitemlocalstorage;
        }
        
        listArray.results[Math.floor(Math.random() * 65536)] = { codigo: idMedia, tipo: type };
  
        localStorage.setItem("RecentsList", JSON.stringify(listArray));
    }
  
  
    function ExistsMediaInDataBase() {
      if (!localStorage.getItem("RecentsList")) {
        localStorage.setItem("RecentsList", '{"results":{}}');
      } else {
        getListRecents = JSON.parse(localStorage.getItem("RecentsList"));
  
        for (let count in getListRecents.results) {
  
          if (getListRecents.results[count].codigo == idMedia) {
            indexId = idMedia;
          }
        }
  
  
      }
    }

  });
  