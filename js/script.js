

// Map

// Initialize and add the map
let map;

  async function initMap() {
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
  
    map = new Map(document.getElementById("map"), {
      center: { lat: 41.8326301342217, lng: -87.6269402584139 },
      zoom: 8,
    });
  }
  
  initMap();

