<script setup>
import Filter from "./Filter.vue";
import Infomation from "./Information.vue";
import Lesson from "./Lesson.vue";
import Document from "./Document.vue";
import Ranking from "./Ranking.vue";
import Course from "./Course.vue";

</script>

<template>
  <div>
    <!-- Truyền các biến tĩnh vào Banner -->
    <Banner :name="detail.name" :topic="detail.topic" />

    <div class="container mx-auto">
      <div class="grid grid-cols-4 gap-2 max-md:grid-cols-1">
        <div class="col-span-3 max-md:order-2 max-md:col-span-1">
          <Description :description="detail.description"/>

          <Lesson />

          <Document />

          <Ranking />
        </div>
        <div class="mt-[-50px] max-md:order-1 max-md:mt-0 z-[1]">
          <Infomation />
        </div>
      </div>

      <Course />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Banner from "./Banner.vue";
import Description from "./Description.vue";

export default {
  data() {
    return {
      detail: {},
      slug: this.$route.params.slug,
      error: null,
      loading: true,
    };
  },
  methods: {
    async getInfo() {
      try {
        const [response] = await Promise.all([
          axios.get(`/course/${this.slug}`),
        ]);

        this.detail = response.data.data;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    this.getInfo();
  },
};
</script>
