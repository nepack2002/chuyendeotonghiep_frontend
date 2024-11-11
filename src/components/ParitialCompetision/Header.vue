<script>
import axios from "axios"; // Đảm bảo bạn đã import axios
import { mapState, mapActions } from "pinia";
import { useAuthStore } from "@/stores/auth";
export default {
  data() {
    return {
      competitions: null, // Dữ liệu cuộc thi
      error: null, // Lỗi nếu có
      loading: true, // Trạng thái tải
      slug: this.$route.params.id, // Slug từ URL
    };
  },
  computed: {
    // Sử dụng mapState để lấy state từ Pinia
    ...mapState(useAuthStore, ["user"]),
  },
  methods: {
    async getInfo() {
      try {
        const response = await axios.get(`/exam/detail/${this.slug}`);
        this.competitions = response.data.data; // Gán dữ liệu API vào competitions
        console.log(this.competitions);
      } catch (error) {
        this.error = error.message; // Nếu có lỗi, lưu vào error
      } finally {
        this.loading = false; // Đánh dấu tải xong
      }
    },
  },
  mounted() {
    this.getInfo(); // Gọi phương thức getInfo khi component được mount
  },
};
</script>

<template>
  <div class="bg-white">
    <div class="container mx-auto">
      <div class="flex justify-between items-center gap-3 py-3">
        <div class="flex items-center gap-3">
          <div
            class="flex gap-3 cursor-pointer max-lg:hidden"
            @click="$router.back()"
          >
            <img src="../../assets/images/arrow-left.svg" alt="Icon" />
            <p class="text-[#005ED3] text-base font-semibold">Trở về</p>
          </div>
          <div>
            <p
              class="text-[#273266] text-font20lh font-semibold max-md:text-lg"
            >
              {{ competitions?.name }}
            </p>
            <div class="flex gap-2">
              <p class="text-[#636B90] text-sm">Số điểm cần đạt:</p>
              <p class="text-[#3C4378] text-sm font-medium">
                {{ competitions?.passingQuestion }} điểm
              </p>
            </div>
          </div>
        </div>

        <div class="col-span-3 flex items-center gap-6 max-lg:hidden">
          <div class="flex items-center gap-1 relative">
            <div>
              <img
                src="../../assets/images/Default.svg"
                alt="Avatar"
                class="w-full h-auto object-cover max-md:h-8"
              />
            </div>
            <div class="flex gap-1 items-center">
              <p
                class="text-sm font-medium text-[#273266] max-sm:hidden max-md:text-xs"
              >
                {{ user?.fullName }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
