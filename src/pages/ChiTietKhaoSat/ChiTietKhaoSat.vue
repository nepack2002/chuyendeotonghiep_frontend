<template>
  <Header :name="name" />
  <div class="py-8 max-lg:py-0 min-h-[100vh] max-lg:min-h-0">
    <div class="md:mx-8">
      <div>
        <div class="lg:grid grid-cols-4 gap-3 max-sm:grid-cols-1">
          <div class="col-span-3 max-sm:col-span-1 max-sm:order-2">
            <CauHoi :questions="questions" @answer-selected="updateAnswer" />
          </div>
          <div class="bg-white rounded-lg p-3 h-fit sticky lg:top-0 bottom-0">
            <ThoiGian
              :questions="questions"
              :answers="answers"
              @open-thong-bao="openThongBaoHandler"
              @open-thong-bao-2="openThongBaoHandler"
            />
          </div>
          <div
            class="fixed top-0 left-0 right-0 bottom-0 bg-[#000] bg-modal flex justify-center items-center z-50"
            v-if="openThongBao"
          >
            <PopupThongBao @close="onCloseThongBao" @submit="submitAnswers" />
          </div>
          <div
            class="fixed top-0 left-0 right-0 bottom-0 bg-[#000] bg-modal flex justify-center items-center z-50"
            v-if="openThanhCong"
          >
            <PopupThanhCong />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PopupThongBao from "./PopupThongBao.vue";
import PopupThanhCong from "./PopupThanhCong.vue";
import CauHoi from "./CauHoi.vue";
import ThoiGian from "./ThoiGian.vue";
import Header from "./Header.vue";
import axios from "axios";

export default {
  components: {
    PopupThongBao,
    PopupThanhCong,
    CauHoi,
    ThoiGian,
    Header,
  },
  data() {
    return {
      questions: [
        // ... câu hỏi ở đây ...
      ],
      answers: [],
      submitted: false,
      openThongBao: false,
      openThanhCong: false,
      slug: this.$route.params.id,
      surveyId: "",
      name: "",
    };
  },
  methods: {
    async fetchKhaoSat() {
      try {
        const response = await axios.get(`/survey/${this.slug}`);
        this.questions = response.data.data.questions;
        this.surveyId = response.data.data.survey.id;
        this.name = response.data.data.survey.name;
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu khảo sát:", error);
      }
    },
    updateAnswer({ index, answer }) {
      const isCorrect = answer === "Đúng";
      // Cập nhật trực tiếp mảng answers
      this.answers[index] = {
        id: this.questions[index].id,
        answer: isCorrect,
      };
    },
    async submitAnswers() {
      if (
        this.answers.length !== this.questions.length ||
        this.answers.some((answer) => answer == null)
      ) {
        alert("Vui lòng trả lời tất cả các câu hỏi trước khi nộp!");
        return;
      }

      try {
        this.submitted = true;
        const response = await axios.post(`/survey/attend/${this.surveyId}`, {
          answers: this.answers,
        });
        console.log("Phản hồi từ API:", response.data);
        this.openThanhCong = true;
      } catch (error) {
        console.error("Lỗi khi gửi câu trả lời:", error);
        this.submitted = false;
      }

      this.openThongBao = false;
    },

    openThongBaoHandler() {
      this.openThongBao = true; // Mở popup thông báo
    },
    onCloseThongBao() {
      this.openThongBao = false;
    },
    handleBeforeUnload(event) {
      // Cảnh báo khi người dùng cố gắng reload hoặc rời khỏi trang
      event.preventDefault();
      event.returnValue = ""; // Một thông báo mặc định sẽ hiển thị
    },
  },
  created() {
    // Thêm listener cho sự kiện beforeunload
    window.addEventListener("beforeunload", this.handleBeforeUnload);
  },
  beforeDestroy() {
    // Xóa listener khi component bị hủy
    window.removeEventListener("beforeunload", this.handleBeforeUnload);
  },
  mounted() {
    this.fetchKhaoSat();
  },
};
</script>
