<template>
  <!-- Đồng hồ đếm ngược -->
  <div class="flex justify-center items-center py-5 max-sm:py-2 gap-2">
    <img
      src="@/assets/images/alarm-clock 1.svg"
      alt="Clock"
      class="max-md:h-8 max-sm:h-4"
    />
    <p
      class="text-color-greend-2 text-4xl font-bold max-md:text-3xl max-sm:text-xs"
    >
      {{ timeDisplay }}
    </p>
  </div>

  <!-- Các nút điều hướng câu hỏi -->
  <div class="grid grid-cols-5 gap-2 max-lg:grid-cols-3 max-sm:grid-cols-6">
    <button
      v-for="(question, index) in dataQuestion"
      @click="goToQuestion(index)"
      :key="index"
      :class="[
        'p-[10px] max-sm:p-1 max-sm:text-[10px] bg-color-black flex justify-center items-center text-color-text-1 rounded-lg relative font-semibold border border-color-border w-11 h-11',
        {
          'bg-color-primary-2 text-white': isActive(question.id),
        },
      ]"
    >
      {{ index + 1 }}
    </button>
  </div>

  <!-- Thông báo thời gian -->
  <div
    class="flex items-start bg-color-orange-2 p-2 max-sm:p-1 rounded-md border border-color-orange-1 gap-2 mt-5 max-sm:flex-wrap max-md:text-center max-sm:justify-center"
  >
    <img src="@/assets/images/info-circle.svg" alt="Icon" class="max-lg:h-3" />
    <p class="text-color-primary text-sm max-lg:text-xs max-sm:text-[5px]">
      Thời gian được tính từ lúc bắt đầu làm bài. Hết thời gian quy định hệ
      thống sẽ tự động nộp bài.
    </p>
  </div>

  <!-- Nút Nộp bài -->
  <div class="py-5 text-center max-sm:py-2">
    <button
      @click="emitSubmitExam"
      class="px-4 py-2 max-sm:px-2 max-sm:py-1 bg-color-primary-2 rounded-lg text-white text-sm"
    >
      <p class="max-sm:text-[10px]">Nộp bài</p>
    </button>
  </div>
</template>

<script>
import { ref, onMounted, computed, onUnmounted } from "vue";

export default {
  props: {
    dataQuestion: Array,
    selectedAnswers: Object,
  },
  emits: ["submitExam"],
  methods: {
    isActive(questionId) {
      return this.selectedAnswers.hasOwnProperty(questionId);
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
    emitSubmitExam() {
      clearInterval(this.countdownInterval); // Dừng đồng hồ đếm ngược
      localStorage.removeItem("remainingTime"); // Xóa `remainingTime` khỏi `localStorage`
      this.$emit("submitExam");
        this.$router.back();
    },
  },
  setup(props, { emit }) {
    const timeDisplay = ref("10:00");
    let countdownInterval = null;

    const startCountdown = () => {
      let totalSeconds =
        Number(localStorage.getItem("remainingTime")) || 10 * 60;

      countdownInterval = setInterval(() => {
        if (totalSeconds <= 0) {
          clearInterval(countdownInterval);
          localStorage.removeItem("remainingTime");
          emit("submitExam");
        } else {
          totalSeconds -= 1;
          localStorage.setItem("remainingTime", totalSeconds);
          const minutes = String(Math.floor(totalSeconds / 60)).padStart(
            2,
            "0"
          );
          const seconds = String(totalSeconds % 60).padStart(2, "0");
          timeDisplay.value = `${minutes}:${seconds}`;
        }
      }, 1000);
    };

    onMounted(() => {
      startCountdown();
    });

    onUnmounted(() => {
      clearInterval(countdownInterval);
    });

    return {
      timeDisplay,
    };
  },
};
</script>
