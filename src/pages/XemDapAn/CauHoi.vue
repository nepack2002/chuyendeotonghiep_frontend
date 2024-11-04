<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

const route = useRoute(); // Sử dụng useRoute để lấy dữ liệu từ URL

// Dữ liệu câu hỏi
const questions = ref([]);

// Gọi API để lấy dữ liệu chi tiết kết quả bài thi
async function fetchExamResult() {
  try {
    const id = route.params.id; // Sử dụng route trực tiếp từ useRoute
    const response = await axios.get(`/exam/detail-result/${id}`);
    const data = response.data.data;

    // Cấu trúc lại dữ liệu cho questions từ phản hồi của API
    questions.value = data.detailResult.map((item) => ({
      id: item.id,
      question: item.name,
      options: item.choice.map((choice, index) => ({
        id: String.fromCharCode(65 + index), // Chuyển đổi thành A, B, C, ...
        text: choice,
      })),
      answer: item.correctAns,
      selectedAnswer: item.answer,
      type: item.type,
    }));
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu bài thi:", error);
  }
}

// Tính toán số lượng câu hỏi đúng
const correctAnswersCount = computed(() => {
  return questions.value.reduce((count, question) => {
    if (question.type === "radio") {
      return (
        count + (question.selectedAnswer[0] === question.answer[0] ? 1 : 0)
      );
    } else if (question.type === "checkbox") {
      return (
        count +
        (JSON.stringify(question.selectedAnswer.sort()) ===
        JSON.stringify(question.answer.sort())
          ? 1
          : 0)
      );
    }
    return count;
  }, 0);
});

// Tính điểm
const totalPoints = computed(() => {
  return correctAnswersCount.value * 1; // Giả sử mỗi câu đúng được 1 điểm
});

// Gọi API khi component được mount
onMounted(fetchExamResult);
</script>

<template>
  <div class="container mx-auto bg-white rounded-lg">
    <div class="p-5">
      <div
        v-for="(question, index) in questions"
        :key="question.id"
        class="border-b border-color-border py-3"
      >
        <div class="flex justify-between items-center max-md:items-start">
          <p class="text-color-primary text-base font-semibold max-md:text-sm">
            <span class="text-color-greend-2">Câu {{ question.id }}:</span>
            {{ question.question }}
          </p>
        </div>

        <div
          class="flex items-center gap-3 py-1 is_trues"
          v-for="option in question.options"
          :key="option.id"
        >
          <input
            :type="question.type"
            :name="'answer_' + question.id"
            :id="option.id"
            class="w-5 h-5 max-md:h-6 max-md:w-6"
            :value="option.id"
            :checked="
              Array.isArray(question.selectedAnswer)
                ? question.selectedAnswer.includes(option.text)
                : question.selectedAnswer === option.text
            "
            disabled
            :class="{
              is_true:
                (question.type === 'radio' &&
                  option.text === question.answer[0]) ||
                (question.type === 'checkbox' &&
                  question.answer.includes(option.text)),
              is_false:
                (question.type === 'radio' &&
                  option.text !== question.answer[0] &&
                  question.selectedAnswer === option.text) ||
                (question.type === 'checkbox' &&
                  question.selectedAnswer.includes(option.text) &&
                  !question.answer.includes(option.text)),
            }"
          />

          <label
            :for="option.id"
            class="text-color-text-1 text-base flex-1 max-md:text-sm"
            :class="{
              'text-green-500':
                (question.type === 'radio' &&
                  option.text === question.answer[0]) ||
                (question.type === 'checkbox' &&
                  question.answer.includes(option.text)),
              'text-red-500':
                (question.type === 'radio' &&
                  option.text !== question.answer[0] &&
                  question.selectedAnswer === option.text) ||
                (question.type === 'checkbox' &&
                  question.selectedAnswer.includes(option.text) &&
                  !question.answer.includes(option.text)),
            }"
          >
            {{ option.text }}
          </label>
        </div>

        <div class="py-[9px] px-3 bg-color-greend-3 rounded-lg my-2">
          <p class="text-color-greend-2 text-base font-semibold max-md:text-sm">
            Đáp án đúng:
            <span>{{
              question.answer.join
                ? question.answer.join(", ")
                : question.answer
            }}</span>
          </p>
          <p class="text-color-text-1 text-base font-semibold max-md:text-sm">
            Đáp án đã chọn:
            <span>{{
              Array.isArray(question.selectedAnswer)
                ? question.selectedAnswer.join(", ")
                : question.selectedAnswer || "Chưa chọn"
            }}</span>
          </p>
        </div>
      </div>
    </div>

    <!-- Phần kết quả -->
    <div class="bg-white lg:hidden sticky left-0 bottom-0 py-3 px-4">
      <!-- Kết quả hiển thị -->
      <p>
        Điểm: <span>{{ totalPoints }} điểm</span>
      </p>
      <p>{{ correctAnswersCount }}/{{ questions.length }} câu đúng</p>
    </div>
  </div>
</template>

<style scoped>
.text-color-green-2 {
  color: #4caf50; /* Màu xanh lá cây cho đáp án đúng */
}

.text-color-red {
  color: #f44336; /* Màu đỏ cho đáp án sai */
}

/* Bạn có thể thêm các kiểu CSS khác nếu cần */
</style>
