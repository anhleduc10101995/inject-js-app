<template>
  <div>
      <h1>About this page</h1>
      <p>This is an app to display corny jokes</p>
  </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'About This App',
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