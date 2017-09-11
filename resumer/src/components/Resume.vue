<template>
  <div>
    <div class="page">
      <nav>
        <NavBar/>
      </nav>
      <section>
        <Topbar/>
        <main>
          <ResumeEditor/>
          <ResumePreview/>
        </main>
      </section>

    </div>
  </div>
</template>

<script>
import Topbar from './Topbar'
import ResumeEditor from './ResumeEditor'
import ResumePreview from './ResumePreview'
import NavBar from './NavBar'
export default {
  name: 'Resume',
  components: { Topbar, NavBar, ResumeEditor, ResumePreview },
  created() {
  }
}
</script>

<style lang="scss" scoped>
.page {
  height: 100vh;
  display: flex;
  flex-direction: row;
  background: #10645d;
  >nav {
    background: #000; // min-width: 8%;
  }
  >section {
    flex: 1;
    display: flex;
    flex-direction: column;
    >main {
      padding:16px;
      flex:1;
      display: flex;
      flex-direction: row;
    }
  }
}





#resumeEditor {
  min-width: 35%;
  background: #444;
}

#resumePreview {
  flex-grow: 1;
  margin-left: 16px;
}
</style>