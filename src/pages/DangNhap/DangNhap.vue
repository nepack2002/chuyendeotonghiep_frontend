<template>
  <div class="container mx-auto pt-40 flex justify-center items-center">
    <div
      class="flex flex-col items-center w-full max-w-md bg-white shadow-lg rounded-lg p-8"
    >
      <img src="@/assets/images/Logo.svg" class="h-[40px] w-auto mb-8" />
      <p class="font-semibold text-2xl mb-6 text-center">Đăng nhập</p>
      <div class="w-full mb-4">
        <label for="email" class="block text-sm font-medium mb-1">Email</label>
        <input
          v-model="email"
          type="text"
          name="email"
          class="border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring focus:ring-blue-500"
          placeholder="Nhập email"
        />
      </div>
      <div class="w-full mb-1 relative">
        <label for="password" class="block text-sm font-medium mb-1"
          >Mật khẩu</label
        >
        <input
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          name="password"
          class="border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring focus:ring-blue-500"
          placeholder="Nhập mật khẩu"
        />
        <div
          v-if="hasPass"
          class="absolute right-3 top-[34px] text-gray-400"
          @click="showPassword = !showPassword"
        >
          <img
            v-if="!showPassword"
            src="@/assets/icon/eye-slash.svg"
            alt="show password"
            title="Ẩn"
            id="show-password"
            class=""
          />
          <img
            v-if="showPassword"
            src="@/assets/icon/eye-pass.svg"
            alt="show password"
            title="Hiện"
            id="show-password"
            class=""
          />
        </div>
      </div>
      <div @click="openForm" class="ml-auto cursor-pointer w-fit">
        <div
          class="text-base font-medium text-color-primary-2 mb-6 max-lg:mt-[12px] max-lg:mb-[4px] first-letter:uppercase"
        >
          Quên mật khẩu?
        </div>
      </div>
      <button
        @click="handleLogin"
        class="bg-blue-500 text-white rounded-md w-full p-2 hover:bg-blue-600 transition duration-200"
      >
        Đăng nhập
      </button>
      <!-- <p v-if="authStore.errorMessage" class="text-red-500 mt-4">{{ authStore.errorMessage }}</p> -->
    </div>
    <div v-if="user">{{ user.name }}</div>
  </div>
  <Modal ref="ForgotPassword" @close-modal="doClearChangePassword">
    <ForgotPassword />
  </Modal>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useAuthStore } from "@/stores/auth";
import Modal from "@/components/global/Modal.vue";
import ForgotPassword from "./ForgotPassword.vue";
export default {
  name: "DangNhap",
  components: {
    Modal,
    ForgotPassword,
  },
  data() {
    return {
      showPassword: false,
      email: "", // Khai báo biến email
      password: "", // Khai báo biến password
    };
  },

  computed: {
    // Sử dụng mapState để lấy state từ Pinia
    ...mapState(useAuthStore, ["user", "refreshToken"]),
    hasPass() {
      // hasPass sẽ tự động thay đổi dựa trên giá trị của password
      return this.password.length > 0;
    },
  },

  methods: {
    openForm() {
      this.$refs.ForgotPassword.openModal();
    },
    // Sử dụng mapActions để lấy action từ Pinia
    ...mapActions(useAuthStore, ["login", "getInfo"]),
    async handleLogin() {
      await this.login(this.email, this.password);

      // Sau khi đăng nhập, gọi refresh token
      await this.getInfo();
      // Kiểm tra trạng thái đăng nhập
      if (this.user) {
        this.$toast.success("Đăng nhập thành công");
        window.location.href = "/";
      } else {
        this.$toast.error("Đăng nhập thất bại");
      }
    },
  },
};
</script>
