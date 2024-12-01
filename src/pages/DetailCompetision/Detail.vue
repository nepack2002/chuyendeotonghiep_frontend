<template>
  <Header :competitions="competitions" @back="goBack" />
  <div>
    <div
      class="bg-white container pt-[10px] py-3 border-b border-color-border lg:hidden relative"
    >
      <!-- Nội dung khác của trang -->
    </div>

    <div class="container mx-auto min-h-[80vh]">
      <div
        class="grid grid-cols-1 gap-5 max-md:gap-[6px] pt-5 max-md:pt-1 pb-[100px] max-md:grid-cols-1"
      >
        <div class="bg-white pt-5 max-md:pt-3 rounded-lg">
          <!-- Nội dung khác của trang -->
          <div class="text-center pb-3 md:border-b border-color-border">
            <p
              class="text-color-primary text-font20lh font-semibold max-md:text-lg"
            >
              Làm bài thi
            </p>
          </div>
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
          </div>
          <!-- Nút tham gia vòng thi -->
          <div
            class="py-5 max-md:py-4 mx-4 text-center md:border-b border-color-border"
          >
            <button
              @click="openThongBaoModal"
              class="px-4 py-2 bg-color-primary-2 rounded-lg text-white text-sm max-md:w-[200px]"
            >
              <p class="max-md:text-xs">Tham gia vòng thi</p>
            </button>
          </div>

          <!-- Truyền prop vào component ResultTest -->
          <ResultTest
            :results="detail"
            :count="count"
            :examResult="competitions.submitTime"
          />
        </div>
      </div>
    </div>
    <Modal ref="PopUpCanhBao">
      <CanhBaoManHinh @close="closeThongBaoModal" @submit="confirmJoinExam" />
    </Modal>
     <Modal ref="PopUpDevTool">
      <CanhBaoDevTools @close="closeDevToolModal" />
    </Modal>
  </div>
</template>

<script>
import ResultTest from "./ResultTest.vue";
import Header from "@/components/ParitialCompetision/Header.vue";
import CanhBaoManHinh from "./CanhBaoManHinh.vue";
import CanhBaoDevTools from "./CanhBaoDevTools.vue";
import Modal from "@/components/global/Modal.vue";
import axios from "axios";

export default {
  components: {
    ResultTest,
    Header,
    CanhBaoManHinh,
    CanhBaoDevTools,
    Modal,
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
          axios.get(`/exam/list-attend/${this.slug}`, {
            params: { limit: 20 },
          }),
        ]);
        this.competitions = response.data.data;
        this.detail = response_.data.data.results;
        this.count = response_.data.data.count;
        console.log(this.competitions, this.detail, this.count);
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
    openThongBaoModal() {
      this.$refs.PopUpCanhBao.openModal();
    },
    closeThongBaoModal() {
      this.$refs.PopUpCanhBao.closeModal();
    },
     openDevToolModal() {
      this.$refs.PopUpDevTool.openModal();
    },
    closeDevToolModal() {
      this.$refs.PopUpDevTool.closeModal();
    },
    isDevToolsOpen() {
      const threshold = 160; // Kích thước nhỏ hơn giá trị này có thể là DevTools đang mở
      const isOpen =
        window.outerWidth - window.innerWidth > threshold ||
        window.outerHeight - window.innerHeight > threshold;

      return isOpen;
    },
    async confirmJoinExam() {
      if (this.isDevToolsOpen()) {
        this.openDevToolModal();
        return;
      }
      this.closeThongBaoModal(); // Đóng modal trước
      try {
        // Gọi API để tham gia vòng thi
        const response = await axios.get(
          `/exam/attend/${this.competitions.slug}`
        );
        const examId = response.data.data.test; // Lấy `id` từ API
        // Điều hướng đến trang làm bài với `id` vừa nhận được
        this.$router.push({ name: "LamBaiThi", params: { id: examId } });
      } catch (error) {
        console.error("Lỗi khi tham gia vòng thi:", error);
        this.error = error.message;
      }
    },
    goBack() {
      this.$router.push({ name: "Competision" });
    },
  },
  mounted() {
    this.getInfo();
  },
};
</script>
