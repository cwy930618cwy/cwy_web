<template>
  <div class="main">
    <Header class="header"></Header>
    <Content class="content"></Content>
    <Footer class="footer"></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from '../components/Header.vue'
import Content from '../components/Content.vue'
import Footer from '../components/Footer.vue'

@Component({
  components: { Header, Content, Footer }
  })
export default class Main extends Vue{
  title = '哈希世界'
}

</script>

<style lang="scss" type="text/css" scoped>
.main{
  height: 100%;
}
</style>
