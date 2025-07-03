<script setup lang="ts">

import {onBeforeUnmount, onMounted, ref} from 'vue';
  import useLeafletMap from '../composables/useLeafletMap.ts';

  const mapRef = ref<HTMLMapElement|null>(null);
  const { initMap, destroyMap } = useLeafletMap(mapRef, -21.7841751, -45.9677930, 10);

  onMounted(() => {
    initMap();
  });

  onBeforeUnmount(() => {
    destroyMap();
  });
</script>

<template>
  <div ref="mapRef" class="leaflet-map__container"></div>
</template>

<style scoped>
.leaflet-map__container {
  width: 500px;
  height: 500px;
  margin-top: 15px;
}
</style>