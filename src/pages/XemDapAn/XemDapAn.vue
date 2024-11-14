<template>
  <Header :name="nameHeader" :slug="slug" />
  <div class="py-8 max-md:py-0">
    <div class="md:container mx-auto">
      <div class="grid grid-cols-4 gap-3 max-md:grid-cols-1 max-md:gap-0">
        <div class="col-span-3">
          <!-- Truyền câu hỏi vào CauHoi -->
          <CauHoi :questions="questions" />
        </div>
        <div class="bg-white rounded-lg p-3 h-fit sticky -top-20">
          <!-- Truyền kết quả vào KetQua -->
          <KetQua />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CauHoi from "./CauHoi.vue";
import KetQua from "./KetQua.vue";
import Header from "@/components/XemDapAn/Header.vue";
import axios from "axios";
import { useRoute } from "vue-router"; // Import useRoute

export default {
  components: {
    CauHoi,
    KetQua,
    Header,
  },

  data() {
    return {
      questions: [], // Dữ liệu câu hỏi
      nameHeader: "",
      slug: "",
    };
  },

  methods: {
    async fetchExamResult() {
      try {
        const id = this.route.params.id; // Lấy id từ URL params
        const response = await axios.get(`/exam/detail-result/${id}`); // Gọi API với id
        const data = response.data.data;
        this.nameHeader = data.exam.name; // Cấu trúc lại dữ liệu cho câu hỏi
        this.slug = data.exam.slug;
        console.log(this.slug);

        this.questions = data.detailResult.map((item) => ({
          id: item.id,
          question: item.name,
          options: item.choice.map((choice) => ({
            text: choice,
          })),
          answer: item.correctAns,
          selectedAnswer: item.answer,
          type: item.type,
        }));
      } catch (error) {
        this.$router.back();
        console.error("Lỗi khi lấy dữ liệu bài thi:", error);
      }
    },
  },

  computed: {
    route() {
      return useRoute(); // Sử dụng useRoute thông qua computed
    },
  },

  mounted() {
    this.fetchExamResult(); // Gọi API khi component được mount
  },
};
</script>
