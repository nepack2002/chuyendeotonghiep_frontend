<script setup lang="ts">
import { defineProps } from "vue";
import { ref } from "vue";

const props = defineProps({
  course: {
    type: Object,
    required: true,
  },
});

const open = ref(false);
</script>

<template>
  <div class="p-3 bg-white rounded-lg sticky top-[100px]">
    <div
      class="flex gap-2 items-start border-b border-color-button-change-slide p-2"
    >
      <img src="@/assets/images/clock-2.svg" alt="Icon" class="max-lg:h-7" />
      <div class="flex-1">
        <p class="text-base font-medium text-color-primary max-lg:text-base">
          Thời gian diễn ra
        </p>
        <div class="flex justify-between items-center">
          <p class="text-sm font-normal text-color-gray max-lg:text-sm">
            Ngày khởi tạo:
          </p>
          <p class="max-lg:text-sm text-color-primary">
            {{ course.createdAt?.split(" : ")[0] }}
          </p>
        </div>
        <div class="flex justify-between items-center">
          <p class="text-sm font-normal text-color-gray max-lg:text-sm">
            Ngày cập nhật:
          </p>
          <p class="max-lg:text-sm text-color-primary">
            {{ course.updatedAt?.split(" : ")[0] }}
          </p>
        </div>
      </div>
    </div>
    <div
      class="flex items-center justify-between gap-2 border-b border-color-button-change-slide p-2"
    >
      <div class="flex gap-2 items-center">
        <img
          src="@/assets/images/BookBookmark.svg"
          alt="Icon"
          class="max-lg:h-7"
        />
        <p class="max-lg:text-sm text-color-primary font-medium">Số bài học:</p>
      </div>
      <p class="max-lg:text-sm text-color-primary font-medium">
        {{ course.totalLesson }}
      </p>
    </div>

    <div class="py-3 max-md:text-center">
      <button
        v-if="course.process >= 0"
        class="px-4 py-10px bg-[#005ED3] rounded-lg text-white text-sm w-full"
      >
        Bạn đã đăng ký khóa học
      </button>
      <button
        v-else-if="course.type === 0"
        @click="this.$emit('register')"
        class="px-4 py-10px bg-[#28a745] rounded-lg text-white text-sm w-full"
      >
        Đăng ký học
      </button>
      <button
        v-else-if="course.type === 1"
        disabled
        class="px-4 py-10px bg-gray-500 rounded-lg text-white text-sm w-full"
      >
        Khóa học không khả dụng
      </button>
    </div>
  </div>
</template>
