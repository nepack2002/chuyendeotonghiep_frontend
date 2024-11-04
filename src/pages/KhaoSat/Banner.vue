<template>
  <div class="bg-BgCourse bg-cover">
    <div class="container mx-auto">
      <div class="md:grid grid-cols-2 items-center">
        <div class="py-6 max-md:py-0">
          <div
            class="flex items-center justify-start gap-2 max-md:gap-1 py-4 text-font14 max-md:text-xs"
          >
            <p class="text-color-text-breakcurmb font-normal">Trang chủ</p>
            <img src="@/assets/images/arrow-square-right.svg" alt="Icon" />
            <p class="text-[#fff] font-medium">KnowLedge</p>
          </div>
          <div>
            <p
              class="text-font24px font-bold text-white max-md:text-font20lh max-md:mb-3"
            >
              KnowLedge
            </p>
          </div>
          <div class="md:py-6 w-4/6 max-md:w-full max-md:mb-[18px]">
            <form
              action="#"
              class="bg-white py-1 pl-4 pr-1 rounded-lg flex justify-between"
            >
              <input
                type="text"
                v-model="searchQuery"
                @input="handleSearch"
                placeholder="Nhập tìm kiếm"
                class="w-full focus:outline-none max-md:text-base text-color-gray font-normal py-2"
              />
            </form>
          </div>
        </div>
        <div>
          <img
            src="@/assets/images/KhaoSat.png"
            alt="Banner"
            class="max-md:hidden"
          />

          <img
            src="@/assets/images/KhaoSatMobile.png"
            alt="Banner"
            class="md:hidden"
          />
        </div>
      </div>
    </div>
  </div>

  <router-view></router-view>
</template>
<script>
export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    handleSearch() {
      this.$emit("searchQuery", this.searchQuery);
    },
  },
};
</script>
