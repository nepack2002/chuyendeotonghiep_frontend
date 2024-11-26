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
      timeDisplay: null,
      isFullscreen: false,
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
    // Tự động nộp bài nếu thoát fullscreen
    handleExitFullscreen() {
      if (!document.fullscreenElement) {
        alert(
          "Bạn đã thoát chế độ toàn màn hình. Hệ thống sẽ tự động nộp bài."
        );
        // Gọi API để nộp bài
        this.onSubmit().then(() => {
          // Chuyển hướng hoặc thông báo
        });
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
    preventTabSwitch() {
      if (document.hidden) {
        alert("Bạn không được chuyển tab!");
        this.onSubmit(); // Tự động nộp bài
      }
    },
    detectDevTools() {
      if (
        window.outerHeight - window.innerHeight > 100 ||
        window.outerWidth - window.innerWidth > 100
      ) {
        location.reload(); // Reload trang hoặc thực hiện hành động khác
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
    window.addEventListener("resize", this.detectDevTools);
    document.addEventListener("keydown", this.handleKeyDown);
  },
  beforeUnmount() {
    // Xóa sự kiện khi component bị destroy
    document.removeEventListener("fullscreenchange", this.checkFullscreen);
    document.removeEventListener("fullscreenchange", this.handleExitFullscreen);
    document.removeEventListener("contextmenu", this.preventRightClick);
    document.removeEventListener("keydown", this.preventKeyActions);
    document.removeEventListener("visibilitychange", this.preventTabSwitch);
    window.removeEventListener("resize", this.detectDevTools);
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
