<template>
  <div class="container mx-auto">
    <LocKhoaHoc
      @tabSelected="handleTabSelected"
      @searchQuery="handleSearch"
      :categories="categories"
      v-model="selectedCategory"
    />
    <DanhSachKhoaHoc :courses="filteredItems" />

    <!-- Pagination cho tab 1 -->
    <Pagination
      v-if="tab === 'myCompetitions'"
      :current-page="currentPageTab1"
      :total-pages="totalPagesTab1"
      @page-changed="(page) => handlePageChange(page, 'myCompetitions')"
    />

    <!-- Pagination cho tab 2 -->
    <Pagination
      v-if="tab === 'otherCompetitions'"
      :current-page="currentPageTab2"
      :total-pages="totalPagesTab2"
      @page-changed="(page) => handlePageChange(page, 'otherCompetitions')"
    />
  </div>
</template>
<script>
import Pagination from "@/pages/KhoaHoc/Pagination.vue";
import DanhSachKhoaHoc from "@/pages/KhoaHoc/DanhSachKhoaHoc.vue";
import LocKhoaHoc from "@/pages/KhoaHoc/LocKhoaHoc.vue";
import axios from "axios";
export default {
  components: {
    DanhSachKhoaHoc,
    LocKhoaHoc,
    Pagination,
  },
  data() {
    return {
      itemsTab1: [],
      itemsTab2: [],
      filteredItems: [], // Danh sách khóa học đã được lọc
      selectedCategory: "Tất cả", // Danh mục mặc định
      categories: ["Tất cả", "Đại cương", "Marketing", "Công nghệ thông tin"],
      currentItems: [], // Danh sách khóa học hiện tại
      searchQuery: "", // Biến lưu từ khóa tìm kiếm
      currentPageTab1: 1,
      currentPageTab2: 1,
      perPage: 1, // Số khóa học trên mỗi trang
      totalPagesTab1: 0,
      totalPagesTab2: 0,
      tab: "myCompetitions",
    };
  },
  methods: {
    handleTabSelected(tab) {
      if (tab === "myCompetitions") {
        this.tab = "myCompetitions";
        this.currentItems = this.itemsTab1;
        this.currentPageTab1 = 1; // Khởi tạo lại trang về 1 khi chuyển tab
        this.fetchMyCourses(); // Gọi lại API nếu cần thiết
      } else {
        this.tab = "otherCompetitions";
        this.currentItems = this.itemsTab2;
        this.currentPageTab2 = 1; // Khởi tạo lại trang về 1 khi chuyển tab
        this.fetchOtherCourses(); // Gọi lại API nếu cần thiết
      }
    },
    filterItems() {
      let items = [...this.currentItems];
      // Lọc theo danh mục
      if (this.selectedCategory !== "Tất cả") {
        items = items.filter((item) => item.topic.name === this.selectedCategory);
      }
      // Lọc theo từ khóa tìm kiếm
      if (this.searchQuery) {
        items = items.filter((item) =>
          item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
      this.filteredItems = items; // Cập nhật danh sách đã lọc
      console.log(this.filteredItems);
    },
    handleSearch(query) {
      this.searchQuery = query; // Cập nhật từ khóa tìm kiếm
      this.filterItems(); // Gọi lại hàm lọc
    },
    async fetchMyCourses() {
      try {
        const response = await axios.get("/course/my-course", {
          params: {
            limit: this.perPage,
            page: this.currentPageTab1, // Sử dụng currentPageTab1 cho tab 1
          },
        });
        this.itemsTab1 = response.data.data.courses;
        this.totalPagesTab1 = Math.ceil(
          response.data.data.count / this.perPage
        ); // Tính số trang
        this.currentItems = this.itemsTab1;
        this.filterItems();
      } catch (e) {
        console.error("Lỗi khi lấy danh sách khóa học của bạn:", e);
      }
    },
    async fetchOtherCourses() {
      try {
        const response = await axios.get("/course/list", {
          params: {
            limit: this.perPage,
            page: this.currentPageTab2, // Sử dụng currentPageTab2 cho tab 2
          },
        });
        this.itemsTab2 = response.data.data.courses;
        this.totalPagesTab2 = Math.ceil(
          response.data.data.count / this.perPage
        ); // Tính số trang
        this.currentItems = this.itemsTab2;

        this.filterItems();
      } catch (e) {
        console.error("Lỗi khi lấy danh sách khóa học khác:", e);
      }
    },
    handlePageChange(page, tab) {
      if (tab === "myCompetitions") {
        this.currentPageTab1 = page;
        this.fetchMyCourses();
      } else {
        this.currentPageTab2 = page;
        this.fetchOtherCourses();
      }
    },
  },
  watch: {
    selectedCategory() {
      this.filterItems(); // Lọc lại danh sách khi thay đổi danh mục
    },
  },
  mounted() {
    this.fetchMyCourses();
    this.fetchOtherCourses();
  },
};
</script>
