<template>
  <div>
    <div
      class="bg-white container pt-[10px] py-3 border-b border-color-border lg:hidden relative"
    >
      <div class="flex mb-1">
        <p class="text-font18 font-semibold text-color-primary">
          Cuộc thi an toàn thông tin quý I năm 2024
        </p>
        <router-link :to="{ name: 'Competision' }">
          <img
            src="@/assets/images/Cancel.svg"
            alt="Icon"
            class="w-6 h-6 absolute top-3 right-4"
          />
        </router-link>
      </div>
      <div>
        <span class="text-font14 text-color-gray">Số điểm cần đạt: </span>
        <span class="text-font14 text-color-primary font-medium"
          >{{ competitions.passingQuestion }} điểm</span
        >
      </div>
    </div>
    <div class="md:container mx-auto min-h-[80vh]">
      <div
        class="grid grid-cols-1 gap-5 max-md:gap-[6px] pt-5 max-md:pt-1 pb-[100px] max-md:grid-cols-1"
      >
        <div class="bg-white pt-5 max-md:pt-3 rounded-lg">
          <!-- Thông tin về vòng thi -->
          <div class="text-center pb-3 md:border-b border-color-border">
            <p
              class="text-color-primary text-font20lh font-semibold max-md:text-lg"
            >
              Làm bài thi
            </p>
          </div>
          <!-- Thông tin chi tiết -->
          <div class="max-md:border-y border-color-border">
            <div class="grid grid-cols-2 max-lg:grid-cols-1 mx-4">
              <div class="flex items-center gap-2 pt-3 max-md:pt-4">
                <div class="flex items-center gap-2">
                  <img src="@/assets/images/message-question.svg" alt="Icon" />
                  <p class="text-color-gray text-sm font-semibold">
                    Số câu hỏi :
                  </p>
                </div>
                <p class="text-color-primary text-sm font-medium">
                  {{ competitions.numberQuestion }} câu
                </p>
              </div>
              <div class="flex items-center gap-2 pt-3 max-md:pt-2">
                <div class="flex items-center gap-2">
                  <img src="@/assets/images/message-question.svg" alt="Icon" />
                  <p class="text-color-gray text-sm font-semibold">
                    Số lần làm bài:
                  </p>
                </div>
                <p
                  v-if="competitions.reDoTime !== 0"
                  class="text-color-primary text-sm font-medium"
                >
                  {{ competitions.reDoTime }}
                </p>
                <p v-else>Vô hạn</p>
              </div>

              <div class="flex items-center gap-2 pt-3 max-md:pt-2">
                <div class="flex items-center gap-2">
                  <img src="@/assets/images/message-question.svg" alt="Icon" />
                  <p class="text-color-gray text-sm font-semibold">
                    Thời gian làm bài:
                  </p>
                </div>
                <p class="text-color-primary text-sm font-medium">
                  {{ competitions.submitTime }} phút
                </p>
              </div>
            </div>
            <router-link to="/competision-exam">
              <div
                class="py-5 max-md:py-4 mx-4 text-center md:border-b border-color-border"
              >
                <button
                  class="px-4 py-2 bg-color-primary-2 rounded-lg text-white text-sm max-md:w-[200px]"
                >
                  <p class="max-md:text-xs">Tham gia vòng thi</p>
                </button>
              </div>
            </router-link>
          </div>
          <!-- Truyền prop vào component ResultTest -->
          <ResultTest :results="detail" :count="count" :examResult="competitions.submitTime" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ResultTest from "./ResultTest.vue";
import axios from "axios";

export default {
  components: {
    ResultTest,
  },
  data() {
    return {
      competitions: [],
      detail: {},
      count: 0,
      status: "",
      slug: this.$route.params.id,
      error: null,
      loading: true,
    };
  },
  methods: {
    async getInfo() {
      try {
        const [response, response_] = await Promise.all([
          axios.get(`/exam/detail/${this.slug}`),
          axios.get(`/exam/list-attend/${this.slug}`),
        ]);

        this.competitions = response.data.data;
        console.log(this.competitions.passingQuestion);
        
        this.detail = response_.data.data.results;
          this.count = response_.data.data.count;
    
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

<style scoped>
/* Add your custom styles here */
</style>
