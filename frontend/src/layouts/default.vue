<template>
  <div>
    <NavBar />
    <Header />
    <TopicNav />
    <div class="container mx-auto flex flex-wrap py-6">
      <Nuxt />
      <SideBar />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: "default",
    mounted() {
        console.log("default");
    },
})
</script>