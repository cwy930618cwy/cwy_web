<template>
  <div class="Log">
    Log
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {  }
  })
export default class Log extends Vue{
  title = 'Log'
}

</script>

<style scoped>
.Log{
  height: 6rem;
}
</style>
