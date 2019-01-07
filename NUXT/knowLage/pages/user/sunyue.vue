<template>
  <section class="container">
    <div>
      <Singer/>
      <h1 class="title">
        我相信每一天的生活都是美好的
      </h1>
      <h2 class="subtitle">
          每一天都要加油哦
      </h2>
    </div>
  </section>
</template>

<script>
// import Logo from '~/components/Logo.vue' // 引入组件

import Singer from '~/components/singer.vue' // 引入组件

export default {
  components: {
    Singer
  }
}
</script>

<style>

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
