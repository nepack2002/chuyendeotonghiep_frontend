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
              :remainingSeconds="remainingSeconds"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
  <Modal ref="PopUpCanhBao">
    <PopupCanhBao @close="closeThongBaoModal" @submit="onSubmit" />
  </Modal>
  <div
    v-if="showWarningModal"
    class="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
  >
    <div class="bg-white p-6 rounded shadow-lg text-center max-w-md">
      <h3 class="text-lg font-semibold mb-4">Cảnh báo</h3>
      <p class="text-gray-600 mb-4">
        Bạn không được chuyển tab hoặc thoát chế độ toàn màn hình!<br />
        Hệ thống sẽ tự động nộp bài trong
        <span class="text-red-500 font-bold">{{ warningCountdown }}</span> giây.
      </p>
      <button
        class="bg-red-500 text-white px-4 py-2 rounded"
        @click="handleCloseWarningModal"
      >
        Đóng và tiếp tục nộp bài
      </button>
    </div>
  </div>
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
      timeDisplay: null,
      isFullscreen: false,
      remainingSeconds: "",
      isSubmitting: false,
      showWarningModal: false,
      warningCountdown: 5, // Đếm ngược 5 giây
      warningInterval: null, // Interval cho đếm ngược
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
      } catch (error) {
        console.error("Error submitting answers:", error);
      } finally {
        this.isSubmitting = false;
        clearInterval(this.countdownInterval); // Dừng countdown
        localStorage.removeItem("remainingTime"); // Xóa remainingTime
        this.$router.back(); // Chuyển trang
      }
    },

    startCountdown() {
      let totalSeconds =
        Number(localStorage.getItem("remainingTime")) || this.submitTime * 60;

      this.countdownInterval = setInterval(() => {
        if (totalSeconds <= 0) {
          this.onSubmit();
        } else {
          totalSeconds -= 1;
          localStorage.setItem("remainingTime", totalSeconds);
          const minutes = String(Math.floor(totalSeconds / 60)).padStart(
            2,
            "0"
          );
          const seconds = String(totalSeconds % 60).padStart(2, "0");
          this.timeDisplay = `${minutes}:${seconds}`;
          this.remainingSeconds = totalSeconds;
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
    // Hàm kiểm tra trạng thái fullscreen
    checkFullscreen() {
      this.isFullscreen = !!document.fullscreenElement;
    },
    // Mở fullscreen
    enableFullscreen() {
      if (!document.fullscreenElement) {
        document.documentElement
          .requestFullscreen()
          .then(() => {
            console.log("Fullscreen activated!");
          })
          .catch((err) => {
            console.error("Failed to enable fullscreen:", err);
          });
      }
    },


    // Hàm hiển thị modal cảnh báo và bắt đầu đếm ngược
    openWarningModal() {
      this.showWarningModal = true; // Hiển thị modal cảnh báo
      this.startWarningCountdown(); // Bắt đầu đếm ngược
    },
    // Hàm đếm ngược 5 giây
    startWarningCountdown() {
      this.warningCountdown = 5; 
      if (this.warningInterval) clearInterval(this.warningInterval); 
      this.warningInterval = setInterval(() => {
        if (this.warningCountdown > 1) {
          this.warningCountdown--;
        } else {
          this.handleCloseWarningModal();
        }
      }, 1000);
    },
    // Hàm đóng modal cảnh báo và nộp bài
    handleCloseWarningModal() {
      this.showWarningModal = false; // Đóng modal cảnh báo
      clearInterval(this.warningInterval); // Dừng đếm ngược
      this.isSubmitting = true; // Đánh dấu trạng thái nộp bài
      this.onSubmit(); // Tự động nộp bài
    },
    // Khi thoát fullscreen
    handleExitFullscreen() {
      if (!document.fullscreenElement && !this.isSubmitting) {
        this.openWarningModal(); // Mở modal cảnh báo
      }
    },
    // Khi chuyển tab
    preventTabSwitch() {
      if (document.hidden && !this.isSubmitting) {
        this.openWarningModal(); // Mở modal cảnh báo
      }
    },



    preventRightClick(event) {
      event.preventDefault();
    },
    preventKeyActions(event) {
      if (
        event.key === "F12" ||
        (event.ctrlKey &&
          event.shiftKey &&
          ["I", "C", "J", "N"].includes(event.key))
      ) {
        event.preventDefault();
      }
      if (event.altKey && event.key === "Tab") {
        event.preventDefault();
      }
    },
    handleKeyDown(event) {
      // Chặn Ctrl
      if (event.ctrlKey && !event.shiftKey && !event.altKey) {
        event.preventDefault();
      }

      // Cảnh báo khi nhấn Alt + Tab
      if (event.altKey) {
        event.preventDefault();
      }
    },
  },
  mounted() {
    // Khi trang được mount, mở fullscreen và gọi API
    this.enableFullscreen();
    this.fetchQuestions();
    // this.preventTabOutAndDevTools();
    // Lắng nghe sự kiện thay đổi fullscreen
    document.addEventListener("fullscreenchange", this.checkFullscreen);
    document.addEventListener("fullscreenchange", this.handleExitFullscreen);
    document.addEventListener("contextmenu", this.preventRightClick);
    document.addEventListener("keydown", this.preventKeyActions);
    document.addEventListener("visibilitychange", this.preventTabSwitch);
    document.addEventListener("keydown", this.handleKeyDown);
  },
  beforeUnmount() {
    // Xóa sự kiện khi component bị destroy
    document.removeEventListener("fullscreenchange", this.checkFullscreen);
    document.removeEventListener("fullscreenchange", this.handleExitFullscreen);
    document.removeEventListener("contextmenu", this.preventRightClick);
    document.removeEventListener("keydown", this.preventKeyActions);
    document.removeEventListener("visibilitychange", this.preventTabSwitch);
    document.removeEventListener("keydown", this.handleKeyDown);
    if (document.fullscreenElement) {
      document
        .exitFullscreen()
        .then(() => {
          console.log("Exited fullscreen successfully.");
        })
        .catch((err) => {
          console.error("Error exiting fullscreen:", err);
        });
    }
  },
};
</script>
