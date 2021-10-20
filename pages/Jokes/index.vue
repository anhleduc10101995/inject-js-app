<template>
  <div>Jokes</div>
</template>

<script>
export default {
data() {
  return {
    jokes: []
  }
},
async created() {
  const config = {
    headers: {
      'Accept': 'application/json'
    }
  }
  const res = await this.$axios.get('https://icanhazdadjoke.com/search', config)
},
head() {
  return {
      title: 'Dad Jokes',
      meta: [
          {
              hid: 'description',
              name: 'description',
              content: 'Corny dad jokes'
          }
      ]
  };
    }
};
</script>

<style>

</style>