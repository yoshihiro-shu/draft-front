<template>
  <section class="w-full md:w-2/3 flex flex-col items-center px-3">
    <Article />
    <Article />
    <Article />
    <Pagination />
  </section>
</template>

<script lang="ts">
import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import Article from '@/src/api/TopPage'
import Vue from 'vue'

class Response {
  status: number
  data: Article[]

  public constructor (status: number, data: Article[]) {
    this.status = status
    this.data = data
  }
}

export default Vue.extend({
  name: 'IndexPage',
  mounted () {
    this.getTopPage()
  },
  methods: {
    getTopPage () {
      const options: AxiosRequestConfig = {
        url: 'top',
        method: 'GET'
      }

      this.$axios(options)
        .then((res: AxiosResponse<Response>) => {
          const { data, status } = res
          console.log('data:', data.data)
          console.log('status:', status)
        })
        .catch((e: AxiosError<{error: string}>) => {
          console.error(e.message)
        })
    }
  }
})
</script>
