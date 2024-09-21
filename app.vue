<template>
  <h1 class="title"> Ola mundo!</h1>
  <button class="button" @click="handleClick">click</button>
</template>

<script>
export default {
  name: "App",
  methods: {
    handleClick() {
      console.log('lalala')
    }
  }
}
</script>

<style lang="scss">
</style>