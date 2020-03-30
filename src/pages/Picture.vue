<template>
  <div class="Picture">
    Picture
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {  }
  })
export default class Picture extends Vue{
  title = 'Picture'
}

</script>

<style scoped>
.Picture{
  height: 6rem;
}
</style>
