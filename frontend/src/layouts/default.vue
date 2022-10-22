<template>
  <div>
    <NavBar />
    <Header />
    <TopicNav />
    <Nuxt />
    <div class="container mx-auto flex flex-wrap py-6">
      <Article />
      <SideBar />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NavBar from '../components/NavBar.vue'
import Header from '../components/Header.vue'
import TopicNav from '../components/TopicNav.vue'
import Article from '../components/Article.vue'
import SideBar from '../components/SideBar.vue'
import Footer from '../components/Footer.vue'

export default Vue.extend({
    name: "default",
    mounted() {
        console.log("default");
    },
    components: { NavBar }
})
</script>