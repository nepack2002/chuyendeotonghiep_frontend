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

          <Lesson
            :lessons="lessonsData.lessons"
            :process="detail.process"
            :slug="slug"
          />

          <Document :documents="docData.docs" :course="courses" />

          <Ranking :courses="courses" @submitReview="handleSubmitReview" />
        </div>
        <div class="mt-[-50px] max-md:order-1 max-md:mt-0 z-[1]">
          <Infomation :course="detail" @register="register" />
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
      courses: {},
    };
  },
  methods: {
    async register() {
      try {
        await axios.post(`course/register/${this.slug}`);
        alert("Đăng ký thành công!");
        window.location.reload();
      } catch (error) {
        console.error("Có lỗi xảy ra khi đăng ký:", error);
      }
    },
    async handleSubmitReview(review) {
      try {
        await axios.post(`/course/review/${this.slug}`, {
          rate: review.rate,
          comment: review.comment,
        });

        const ranking = await axios.get(`/course/review/${this.slug}`);
        this.courses = ranking.data.data;
      } catch (error) {
        console.error("Có lỗi xảy ra khi gửi đánh giá:", error);
      }
    },

    async getInfo() {
      try {
        const [response, lessonResponse, docResponse, ranking] =
          await Promise.all([
            axios.get(`/course/${this.slug}`),
            axios.get(`/material/list-lesson/${this.slug}`),
            axios.get(`/material/list-document/${this.slug}`),
            axios.get(`/course/review/${this.slug}`),
          ]);

        this.detail = response.data.data;
        console.log(this.detail);
        this.lessonsData = lessonResponse.data.data;
        this.docData = docResponse.data.data;
        this.courses = ranking.data.data;
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
