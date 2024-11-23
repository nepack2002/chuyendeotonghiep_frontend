<template>
  <Header :competitions="competitions" @back="goBack" />
  <div class="md:py-8">
    <div
      class="bg-white container pt-[10px] py-3 border-b border-color-border lg:hidden relative"
    >
      <!-- Nội dung và thông tin -->
    </div>
    <div class="lg:container mx-auto">
      <form @submit.prevent>
        <div class="lg:grid grid-cols-5 gap-3 max-sm:grid-cols-1">
          <div class="col-span-4 max-sm:col-span-1 max-sm:order-2">
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
              :timeDisplay="timeDisplay"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
  <Modal ref="PopUpCanhBao">
    <PopupCanhBao @close="closeThongBaoModal" @submit="onSubmit" />
  </Modal>
</template>

<script>
import axios from "axios";
import CauHoi from "./CauHoi.vue";
import ThoiGian from "./ThoiGian.vue";
import Header from "@/components/ParitialCompetision/Header.vue";
import Modal from "@/components/global/Modal.vue";
import PopupCanhBao from "./PopupCanhBao.vue";
export default {
  components: {
    CauHoi,
    ThoiGian,
    Header,
    Modal,
    PopupCanhBao,
  },
  data() {
    return {
      competitions: [],
      dataQuestion: [],
      selectedAnswers: {},
      slug: "",
      id: null,
      timeDisplay:null,
    };
  },
  computed: {
    submitTime() {
      return this.competitions.submitTime;
    },
  },
  methods: {
    openThongBaoModal() {
      this.$refs.PopUpCanhBao.openModal();
    },
    closeThongBaoModal() {
      this.$refs.PopUpCanhBao.closeModal();
    },
    async fetchQuestions() {
      const testId = this.$route.params.id;
      try {
        const response = await axios.get(`/exam/detail-result/${testId}`);
        this.dataQuestion = response.data.data.detailResult;
        this.slug = response.data.data.exam.slug;
        console.log(this.dataQuestion);
        await this.getInfo();
        this.id = response.data.data.id;
      } catch (error) {
        this.$router.back();
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
        await axios.post(`/exam/submit/${this.id}`, payload);
        localStorage.removeItem("remainingTime");
        this.$router.back();
      } catch (error) {
        console.error("Error submitting answers:", error);
      }
    },
    startCountdown() {
      let totalSeconds =
        Number(localStorage.getItem("remainingTime")) || this.submitTime * 60;

      this.countdownInterval = setInterval(() => {
        if (totalSeconds <= 0) {
          clearInterval(this.countdownInterval);
          localStorage.removeItem("remainingTime");
          this.$emit("submitExam");
        } else {
          totalSeconds -= 1;
          localStorage.setItem("remainingTime", totalSeconds);
          const minutes = String(Math.floor(totalSeconds / 60)).padStart(
            2,
            "0"
          );
          const seconds = String(totalSeconds % 60).padStart(2, "0");
          this.timeDisplay = `${minutes}:${seconds}`;
        }
      }, 1000);
    },
    async getInfo() {
      try {
        const [response] = await Promise.all([
          axios.get(`/exam/detail/${this.slug}`),
        ]);
        this.competitions = response.data.data;
        this.startCountdown();
        console.log(this.competitions.submitTime);
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
    goBack() {
      this.openThongBaoModal();
    },
  },
  mounted() {
    this.fetchQuestions();
  },
};
</script>
