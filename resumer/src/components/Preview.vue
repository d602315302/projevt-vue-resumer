<template>
  <div class="previewContainer">
    <ResumePreview />
  </div>
</template>

<script>
import ResumePreview from './ResumePreview'
export default {
  name: 'Preview',
  components: {
    ResumePreview
  }
}
</script>
<style lang="scss" scoped>
.previewContainer{
  width: 80%;
  height:100vh;
  margin:0 auto;
  .iconPreview .previewNone{
    opacity: 0;
  }
}
</style>
