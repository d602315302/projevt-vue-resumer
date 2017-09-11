<template>
  <div class="dialogWrapper" v-show="visible">
    <div class="dialog">
      <header>
        <h3>{{title}}</h3>
        <span class="close" @click="close">X</span>
      </header>
      <main>
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyDialog',
  props: ['title', 'visible'],
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang="scss">
.dialogWrapper {
  position: fixed;
  background: rgba(88, 155, 157, 0.9);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.dialog {
  background: white;
  min-height: 300px;
  width: 300px;
  border-radius:8px;
  >header {
    h3{
      margin-top:30px;
      color:#ED2855;
      border-left:5px solid;
      padding-left:30px;
      line-height: 30px;
      display: inline-block;
    }
    span{
      float: right;
      margin-top:10px;
      margin-right:10px;
      color:#ED2855;
      cursor: pointer;
    }
  }
  >main {
    width:100%;
    padding: 16px 38px;
    text-align: center;
  }
}
</style>