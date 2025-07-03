// TYPE
import type { Ref } from 'vue';

// LEAFLET
import L from 'leaflet';

export default function useLeafletMap(
  mapElement: Ref<HTMLMapElement|null>, latitude: number, longitude: number, zoomMap: number
) {
  let map: L.Map|null = null;

  const initMap = (lat = latitude, lng = longitude, zoom = zoomMap) => {
    if (!mapElement.value) return;

    map = L.map(mapElement.value).setView([lat, lng], zoom);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'OpenStreetMap contributors'
    }).addTo(map);

    L.marker([lat, lng])
      .addTo(map)
      .bindPopup('Você está aqui')
      .openPopup();
  };

  const destroyMap = () => {
    if (map) {
      map.remove();
      map = null;
    }
  };

  return {
    initMap,
    destroyMap
  };
}