<template>
  <div id="app">
    <form enctype='multipart/form-data'>
      <h1>
        Upload images
      </h1>
      <input type='file' name='photo' @change="filesChange($event.target.name, $event.target.files)">
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data () {
    return {
      serverLink: 'http://localhost:3000/upload/'
    }
  },
  methods: {
    filesChange (filename, files) {
      if (!files.length) {
        return
      }

      console.log(filename, files)
      const formData = new FormData()
      for (let i = 0; i < files.length; i++) {
        formData.append(filename, files[i], files[i].name)
      }

      axios.post(this.serverLink, formData).then(
        rsp => {
          console.log(rsp)
        }
      ).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
