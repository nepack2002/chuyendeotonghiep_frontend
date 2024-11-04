import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: '',
    accessToken: '',
    refreshToken: '',
    errorMessage: null,
  }),
  actions: {
    //Lấy thông tin người dùng
    async getInfo() {
      try {
        const response = await axios.get('/student/my_info/', {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
          },

        });
        this.user = response.data.data;
      } catch (error) {
        console.error('Get info failed:', error.response?.data?.error || error.message);
      }
    },
    //Đăng nhập
    async login(email, password) {
      try {
        const response = await axios.post('/auth/student/', { email, password });
        if (response.data && response.data.data) {

          this.accessToken = response.data.data.accessToken;
          this.refreshToken = response.data.data.refreshToken;
          axios.defaults.headers.common['Authorization'] = `Bearer ${this.accessToken}`;
          this.errorMessage = null;

        } else {
          throw new Error('Unexpected response structure');
        }
      } catch (error) {
        this.errorMessage = error.response?.data?.message || 'Login failed. Please check your credentials.';
      }
    },


    async refreshTokenn() {
      try {
        const response = await axios.post(
          "/auth/refresh",
          {
            refreshToken: this.refreshToken,
          }
        );
        this.accessToken = response.data.data.accessToken;
        this.refreshToken = response.data.data.refreshToken;
        return this.accessToken;
      } catch (error) {
        if (error.response && error.response.status === 403) {
          this.errorMessage = 'Refresh token không hợp lệ. Vui lòng đăng nhập lại.';
          this.logout();
        } else {
          this.errorMessage = error.response?.data?.message || 'Failed to refresh token.';
        }
      }
    },

    logout() {
      // Xóa tất cả dữ liệu trong localStorage và sessionStorage
      localStorage.clear();
      sessionStorage.clear();

      // Reset các biến trạng thái
      this.user = null;
      this.accessToken = null;
      this.refreshToken = null;
      delete axios.defaults.headers.common['Authorization'];

      // (Tùy chọn) Chuyển hướng người dùng về trang đăng nhập
      window.location.href = '/dang-nhap';
    },
    // Phương thức để khôi phục user từ localStorage khi ứng dụng khởi động
    restoreUser() {
      const user = localStorage.getItem('user');
      if (user) {
        this.user = JSON.parse(user);
      }
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'auth', // Tên khóa lưu trữ trong localStorage
        storage: localStorage, // Lưu trữ trong localStorage
        paths: ['accessToken', 'refreshToken', 'user'], // Thêm user vào danh sách lưu trữ
      },
    ],
  },
});
