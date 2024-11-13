<script setup>
import Ranking from "./Ranking.vue";
</script>

<template>
  <div>
    <!-- Truyền các biến tĩnh vào Banner -->
    <Banner :name="detail.name" :topic="detail.topic" />

    <div class="container mx-auto">
      <div class="grid grid-cols-4 gap-2 max-md:grid-cols-1">
        <div class="col-span-3 max-md:order-2 max-md:col-span-1">
          <Description :description="detail.description" />

          <Lesson :lessons="lessonsData.lessons" :process="detail.process" />

          <Document :documents="docData.docs" />

          <Ranking />
        </div>
        <div class="mt-[-50px] max-md:order-1 max-md:mt-0 z-[1]">
          <Infomation :course="detail" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Banner from "./Banner.vue";
import Document from "./Document.vue";
import Lesson from "./Lesson.vue";
import Description from "./Description.vue";
import Infomation from "./Information.vue";

export default {
  data() {
    return {
      detail: {},
      lessonsData: {},
      docData: {},
      slug: this.$route.params.slug,
      error: null,
      loading: true,
    };
  },
  methods: {
    async getInfo() {
      try {
        const [response, lessonResponse, docResponse] = await Promise.all([
          axios.get(`/course/${this.slug}`),
          axios.get(`/material/list-lesson/${this.slug}`),
          axios.get(`/material/list-document/${this.slug}`),
        ]);

        this.detail = response.data.data;
        this.lessonsData = lessonResponse.data.data;
        this.docData = docResponse.data.data;
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
