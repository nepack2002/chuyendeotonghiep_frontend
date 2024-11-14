<template>
  <div class="result-summary">
    <div
      class="flex justify-center items-center py-2 border-b border-color-border max-md:hidden"
    >
      <p class="text-color-primary text-font20lh font-semibold max-md:text-lg">
        Kết quả thi
      </p>
    </div>

    <!-- Thông tin tổng quát -->
    <div class="py-2 border-b border-color-border">
      <div class="grid grid-cols-2 gap-5 py-5 max-md:py-0">
        <!-- Phần Điểm -->
        <div class="text-center">
          <p class="text-color-text-1 text-base font-semibold max-md:text-sm">
            Điểm
          </p>
          <div class="p-2 rounded-lg mt-1" :class="scoreClass">
            <p class="text-lg font-semibold max-md:text-base">
              {{ score }} điểm
            </p>
          </div>
        </div>

        <!-- Phần Kết quả -->
        <div class="text-center">
          <p class="text-color-text-1 text-base font-semibold max-md:text-sm">
            Kết quả
          </p>
          <div class="p-2 rounded-lg mt-1" :class="statusClass">
            <p class="text-lg font-semibold max-md:text-base">
              {{ status }}
            </p>
          </div>
        </div>
      </div>
      <div>
        <p class="text-color-gray text-sm">
          Số câu đúng:
          <span class="text-color-text-1 font-medium ml-2"
            >{{ correctAnswers }}/{{ totalQuestions }}</span
          >
        </p>
        <p class="text-color-gray text-sm mt-1">
          Làm bài lúc:
          <span class="text-color-text-1 font-medium ml-2">{{
            createdAt
          }}</span>
        </p>
        <p class="text-color-gray text-sm mt-1">
          Nộp bài lúc:
          <span class="text-color-text-1 font-medium ml-2">{{ submitAt }}</span>
        </p>
      </div>
    </div>

    <!-- Chi tiết các câu hỏi -->
    <div class="grid grid-cols-5 gap-2 max-md:grid-cols-7 mt-3">
      <div
        v-for="(question, index) in detailResult"
        :key="question.id"
        :class="buttonClass(question)"
        @click="goToQuestion(index)"
      >
        <p>{{ index + 1 }}</p>
      </div>
    </div>

    <!-- Ghi chú về đáp án đúng/sai -->
    <div class="py-3">
      <p class="text-color-text-1 text-sm font-semibold mb-2">Ghi chú :</p>
      <div class="flex gap-2 mb-2 max-md:flex-wrap">
        <img
          src="../../assets/images/tick-circle.svg"
          alt="Icon"
          class="max-md:h-5"
        />
        <p class="text-color-text-1 text-sm">Đáp án chọn đúng</p>
      </div>
      <div class="flex gap-2 max-md:flex-wrap">
        <img
          src="../../assets/images/close-circle.svg"
          alt="Icon"
          class="max-md:h-5"
        />
        <p class="text-color-text-1 text-sm">Đáp án chọn sai</p>
      </div>
    </div>

    <!-- Nút điều hướng -->
    <div class="text-center flex items-center justify-between gap-4">
      <div
        @click="$router.back()"
        class="px-4 py-[9px] bg-color-white border border-color-primary-2 rounded-lg flex-1"
      >
        <p class="text-color-primary-2 text-base font-semibold max-md:text-sm">
          Trở lại
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      score: "", // giả sử 75 điểm, có thể cập nhật khi load API
      status: "", // trạng thái mặc định
      correctAnswers: "", // số câu đúng
      totalQuestions: "", // tổng số câu hỏi
      createdAt: "",
      submitAt: "",
      detailResult: [], // chứa dữ liệu chi tiết từng câu hỏi
    };
  },
  async created() {
    try {
      const id = this.$route.params.id;
      const response = await axios.get(`/exam/detail-result/${id}`);
      const data = response.data.data;

      // Cập nhật dữ liệu từ API
      this.score = data.correctAns * 1; // ví dụ tính điểm
      this.status = data.correctAns >= 10 ? "Đạt" : "Chưa đạt"; // điều kiện đạt/chưa đạt
      this.correctAnswers = data.correctAns;
      this.totalQuestions = data.detailResult.length;
      this.createdAt = data.createdAt;
      this.submitAt = data.submitAt;
      this.detailResult = data.detailResult;
    } catch (error) {
      console.error("Lỗi khi lấy chi tiết kết quả bài thi:", error);
    }
  },
  methods: {
    isCorrect(question) {
      return (
        JSON.stringify(question.answer) === JSON.stringify(question.correctAns)
      );
    },
    buttonClass(question) {
      return this.isCorrect(question)
        ? "p-[10px] bg-color-green flex justify-center items-center text-white rounded-lg relative font-semibold"
        : "p-[10px] bg-color-red flex justify-center items-center text-white rounded-lg relative font-semibold";
    },
    goToQuestion(index) {
      this.currentQuestionIndex = index;
      this.$nextTick(() => {
        const questionElement = document.getElementById(`question-${index}`);
        if (questionElement) {
          questionElement.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      });
    },
  },
  computed: {
    scoreClass() {
      return this.score >= 50
        ? "bg-color-green text-white"
        : "bg-color-red text-white";
    },
    statusClass() {
      return this.status === "Đạt"
        ? "bg-color-green text-white"
        : "bg-color-red text-white";
    },
  },
};
</script>

<style scoped>
.bg-color-green {
  background-color: #4caf50; /* Màu xanh */
}
.bg-color-red {
  background-color: #f44336; /* Màu đỏ */
}
</style>
