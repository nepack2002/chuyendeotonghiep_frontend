<script>
import { mapState, mapActions } from "pinia";
import { useAuthStore } from "@/stores/auth";
export default {
  props: {
    name: {
      required: true, // Đảm bảo competitions là bắt buộc
    },
    slug: {
      required: false, // Đảm bảo slug là bắt buộc
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
          <router-link
            v-if="slug"
            :to="{ name: 'competision-detail', params: { id: slug } }"
            class="flex gap-3 cursor-pointer max-lg:hidden"
          >
            <img src="../../assets/images/arrow-left.svg" alt="Icon" />
            <p class="text-[#005ED3] text-base font-semibold">Trở về</p>
          </router-link>
          <div>
            <p
              class="text-[#273266] text-font20lh font-semibold max-md:text-lg"
            >
              {{ name }}
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
        <router-link
          v-if="slug"
          :to="{ name: 'competision-detail', params: { id: slug } }"
          class="flex gap-3 cursor-pointer lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>
