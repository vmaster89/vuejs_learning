<template>
  <div class="w3-container w3-teal">
      <h1>{{ info }}</h1>
  </div>
</template>

<script>
export default {
  name: 'StartView',
  props: {
    msg: String,
  },
  data: function () {
    return {
      info: 'Todo List'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
