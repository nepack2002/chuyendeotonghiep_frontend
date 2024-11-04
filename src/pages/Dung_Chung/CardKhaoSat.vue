<template>
  <div class="bg-color-white rounded-lg shadow-box-shadow-1" v-if="!isExpired">
    <div class="relative">
      <img
        src="@/assets/images/image-invite.jpg"
        alt="Image"
        class="object-cover aspect-16/9 rounded-lg max-md:h- w-full"
      />
      <div
                  class="bg-customColor absolute bottom-3 left-3 py-1 px-2 flex justify-between items-center gap-1 rounded"
                >
                  <img src="@/assets/images/clock.svg" alt="Clock" class="" />
                  <p class="text-white font-medium text-sm">
                    Còn {{ dueAt }} ngày
                  </p>
                </div>
      <div class="absolute top-0 right-0">
        <img src="@/assets/images/banner-new.svg " alt="Vector" />
      </div>
    </div>
    <div class="px-5 max-md:px-3 pt-5 py-8 max-md:py-3">
      <p class="text-font18 font-bold text-color-primary py-1">
        {{ title }}
      </p>
      <div class="flex justify-start items-center gap-2 py-2">
        <p class="font-medium text-base max-md:text-font14 text-color-primary">
          {{ studentCount }} học viên tham gia
        </p>
      </div>
      <router-link
        :to="{ name: 'ChiTietKhaoSat', params: { id: slug } }"
        v-if="attend == null"
        class="flex py-10px px-4 gap-2 border border-color-primary-2 rounded-lg justify-center mt-4 max-md:mt-3"
      >
        <p class="text-base font-semibold text-color-primary-2 cursor-pointer">
          Khảo sát ngay
        </p>
        <img
          src="@/assets/images/upper arrow.svg"
          alt="arrow"
          class="h-6 w-auto"
        />
      </router-link>
      <div
        v-else
        class="flex py-10px px-4 gap-2 border border-color-primary rounded-lg justify-center mt-4 max-md:mt-3"
      >
        <p class="text-base font-semibold text-color-primary cursor-pointer">
          Bạn đã làm bài khảo sát này
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      default: "@/assets/images/image-invite.jpg",
    },
    title: {
      type: String,
      required: true,
    },
    studentCount: {
      type: Number,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    studentImages: {
      type: Array,
      default: () => [1, 2, 3, 4, 5], // Số lượng ảnh đại diện học viên
    },
    attend: {},
    isExpired: {
      type: Boolean,
    },
    dueAt: {
      
    },

  },
};
</script>

<style scoped>
/* Bạn có thể thêm các class CSS tại đây */
</style>
