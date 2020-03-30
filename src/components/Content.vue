<template>
  <div class="content">
    <Tabs class="tabs"></Tabs>
    <router-view /> 
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Tabs from '../components/Tabs.vue'

@Component({
  components: { Tabs }
  })
export default class Content extends Vue{
  title = 'sss'
}

</script>

<style lang="scss" type="text/css" scoped>
.content{
  height: 6rem;
  position: relative;
  .tabs{
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
