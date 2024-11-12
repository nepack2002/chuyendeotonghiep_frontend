<template>
  <div class="md:py-8">
    <div
      class="bg-white container pt-[10px] py-3 border-b border-color-border lg:hidden relative"
    >
      <!-- Nội dung và thông tin -->
    </div>
    <div class="lg:container mx-auto">
      <form @submit.prevent="onSubmit">
        <div class="lg:grid grid-cols-4 gap-3 max-sm:grid-cols-1">
          <div class="col-span-3 max-sm:col-span-1 max-sm:order-2">
            <CauHoi
              :dataQuestion="dataQuestion"
              @updateSelectedAnswers="updateSelectedAnswers"
            />
          </div>
          <div
            class="bg-white rounded-lg p-3 max-sm:order-1 max-md:hidden h-fit sticky top-8"
          >
            <ThoiGian
              :dataQuestion="dataQuestion"
              :selectedAnswers="selectedAnswers"
              @submitExam="onSubmit"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CauHoi from "./CauHoi.vue";
import ThoiGian from "./ThoiGian.vue";

export default {
  components: {
    CauHoi,
    ThoiGian,
  },
  data() {
    return {
      dataQuestion: [],
      selectedAnswers: {},
      id: null,
    };
  },
  methods: {
    async fetchQuestions() {
      const testId = this.$route.params.id;
      try {
        const response = await axios.get(`/exam/detail-result/${testId}`);
        this.dataQuestion = response.data.data.detailResult || [];
        console.log(this.dataQuestion);
        this.id = response.data.data.id;
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    },
    updateSelectedAnswers({ questionId, choice, type }) {
      if (type === "radio") {
        this.selectedAnswers[questionId] = choice;
      } else if (type === "checkbox") {
        if (!this.selectedAnswers[questionId]) {
          this.selectedAnswers[questionId] = [];
        }
        const answers = this.selectedAnswers[questionId];
        const index = answers.indexOf(choice);
        if (index > -1) {
          answers.splice(index, 1);
        } else {
          answers.push(choice);
        }
      }
    },
    async onSubmit() {
      const answersArray = this.dataQuestion.map((question) => {
        const questionId = question.id;
        const answer = this.selectedAnswers[questionId]
          ? Array.isArray(this.selectedAnswers[questionId])
            ? this.selectedAnswers[questionId]
            : [this.selectedAnswers[questionId]]
          : [];
        return { id: questionId, selectedAns: answer };
      });

      const payload = {
        answers: answersArray,
      };

      try {
        const response = await axios.post(`/exam/submit/${this.id}`, payload);
        console.log("Submit successful:", response.data);
        alert("Bài thi đã được nộp!");
      } catch (error) {
        console.error("Error submitting answers:", error);
      }
    },
  },
  mounted() {
    this.fetchQuestions();
  },
};
</script>
