<template>
  <article class="flex flex-col shadow my-4">
    <!-- Article Image -->
    <a to="#" class="hover:opacity-75">
      <img :src="article.thumbnailUrl">
    </a>
    <div class="bg-white flex flex-col justify-start p-6">
      <a to="#" class="text-blue-700 text-sm font-bold uppercase pb-4">{{ article.Category.name }}</a>
      <a to="#" class="text-3xl font-bold hover:text-gray-700 pb-4">{{ article.title }}</a>
      <p to="#" class="text-sm pb-3">
        By <a to="#" class="font-semibold hover:text-gray-800">{{ article.userId }}</a>, Published on {{ article.createdAt }}
      </p>
      <a to="#" class="pb-6">{{ article.content }}</a>
      <a to="#" class="uppercase text-gray-800 hover:text-black">Continue Reading <i class="fas fa-arrow-right" /></a>
    </div>
  </article>
</template>

<script lang="ts">
import Article from '~/src/api/TopPage/definition'
import { defineComponent, PropType } from '@nuxtjs/composition-api'

export default defineComponent({
  props:{
    article:{
      type: Object as PropType<Article>,
      required: true
    }
  },
  setup(props) {
    const article: Article = props.article
    return {
      article
    }
  }
})
</script>
