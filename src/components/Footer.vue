<template>
  <div class="footer">
    <a href="http://beian.miit.gov.cn" target="_blank">
      网络备案琼ICP备20000263号-1 链接至工信部首页及版权所有
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {  }
  })
export default class Footer extends Vue{
  title = 'sss'
}

</script>

<style lang="scss" type="text/css" scoped>
.footer{
  a{
    color: #66696b;
  }
  color: #66696b;
  line-height: 0.5rem;
  font-size: 0.2rem;
  background: url('../assets/images/header.png') center center;
}
</style>
