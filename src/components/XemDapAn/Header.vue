<script>
import { mapState, mapActions } from "pinia";
import { useAuthStore } from "@/stores/auth";
export default {
  props: {
    competitions: {
      type: Object, // Đặt kiểu dữ liệu cho competitions
      required: true, // Đảm bảo competitions là bắt buộc
    },
  },
  computed: {
    // Sử dụng mapState để lấy state từ Pinia
    ...mapState(useAuthStore, ["user"]),
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
            @click="this.$emit('back')"
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
