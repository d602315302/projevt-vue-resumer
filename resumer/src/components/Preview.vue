<template>
  <div>
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
    #resumepreview{
        width:80%;
    }
</style>
