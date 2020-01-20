<template>
  <div class="hello">
    <div class="span" v-for="item in 1000" :key="item">
      <img src="../images/wu.gif" alt />
      <span>在吗？</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<style scoped>
.hello {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  flex-wrap: wrap;
}
.span {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 110px;
  text-align: center;
  overflow: hidden;
  line-height: 80px;
}
.span img {
  height: 50px;
  width: 50px;
}
</style>
