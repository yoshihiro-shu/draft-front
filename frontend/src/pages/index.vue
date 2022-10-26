<template>
  <section class="w-full md:w-2/3 flex flex-col items-center px-3">
    <Article
      v-for="(article, index) in articles"
      :article="article"
      :index="index"
      :key="article.id"
    />
    <Pagination />
  </section>
</template>

<script lang="ts">
import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import Article from '~/src/api/TopPage/definition'
import { defineComponent, ref, useContext, onMounted } from '@nuxtjs/composition-api'

class Response {
  status: number
  data: Article[]

  public constructor (status: number, data: Article[]) {
    this.status = status
    this.data = data
  }
}

const options: AxiosRequestConfig = {
  url: 'top',
  method: 'GET'
}

export default defineComponent({
  setup() {
    const { $axios } = useContext();
    const articles = ref<Article[]>()

    onMounted(() => {
      $axios(options)
        .then((res: AxiosResponse<Response>) => {
          const { data, status } = res
          articles.value = data.data
        })
        .catch((e: AxiosError<{error: string}>) => {
          console.error(e.message)
          return
        })
    })

    return {
      articles
    }
  }
})
</script>
