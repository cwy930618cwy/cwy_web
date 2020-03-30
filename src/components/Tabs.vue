<template>
  <div class="tabs">
    <div class="box" v-for="item in tabList" :key="item.key" @click="toTabs(item)">
      {{item.name}}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {  }
  })
export default class Tabs extends Vue{
  title = 'sss'

  tabList = [
    {
      name: '日志',
      key: 'log'
    },
    {
      name: '图片',
      key: 'picture'
    },
    {
      name: '经验',
      key: 'experience'
    }
  ]

  toTabs(item: any){
    this.$router.push( {name: item.key})
  }
}

</script>

<style lang="scss" type="text/css" scoped>
.tabs{
  height: 6rem;
  .box{
    width: 1rem;
    height: 1rem;
    margin-bottom: 0.5rem;
    line-height: 1rem;
    background: bisque;
  }
}
</style>
