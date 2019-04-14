<template>
  <div class="m-geo">
    <i class="el-icon-location" />{{ $store.state.geo.position.city.replace('市', '') }}
    <nuxt-link
      class="changeCity"
      to="/changeCity"
    >切换城市</nuxt-link>
  </div>
</template>

<script>
export default {
//   data() {
//     return {
//       county: []
//     }
//   },
//   mounted: {
//     async function() {
//       let self = this;
//       let {
//         status,
//         data: { county }
//       } = await self.$axios.get(`/geo/getPosition`);
//       if (status === 200) {
//         self.county = county.map(item => {
//           return {
//             value: item.id,
//             label: item.name
//           };
//         });
//       }
//     }
//   },
};
</script>