<script setup lang="ts">
import { defineProps, ref, computed } from "vue";
import TickCircleIcon from "@/assets/images/tick-circle.svg";
import VideoCircleIcon from "@/assets/images/video-circle.svg";
import BookOpenIcon from "@/assets/images/BookOpen.svg";

// Define props
const props = defineProps({
  lessons: {
    type: Array,
    required: true,
  },
  process: {
    type: Number,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
});

// State for showing more lessons
const open = ref(false);

// Computed property to limit displayed lessons to 4 or show all based on `open`
const displayedLessons = computed(() =>
  open.value ? props.lessons : props.lessons?.slice(0, 4)
);

// Toggle the `open` state
const toggleOpen = () => {
  open.value = !open.value;
};
</script>

<template>
  <div class="bg-white rounded-lg mb-5">
    <div class="p-5 max-md:p-2">
      <div
        class="flex items-center gap-3 border-b border-color-button-change-slide pb-2"
      >
        <img :src="BookOpenIcon" alt="Icon" />
        <p
          class="text-color-primary text-font20lh font-semibold max-lg:text-lg"
        >
          Bài học
        </p>
      </div>

      <div class="w-full mt-5">
        <div
          v-if="props.lessons?.length === 0"
          class="text-center text-color-gray text-sm italic"
        >
          Chưa có bài học nào !
        </div>
        <div v-else class="mx-auto w-full">
          <div
            class="border border-color-border rounded-md overflow-hidden mb-3"
          >
            <div class="py-2 px-4 bg-white">
              <div
                v-for="(lesson, index) in displayedLessons"
                :key="index"
                :class="[
                  'grid grid-cols-2 max-lg:grid-cols-1 py-3 relative group',
                  index !== displayedLessons.length - 1
                    ? 'border-b border-color-border-2'
                    : '',
                ]"
              >
                <div class="flex items-center gap-2 max-lg:w-full">
                  <!-- Conditionally render icon based on lesson.inCourse and process -->
                  <img
                    :src="
                      lesson.inCourse <= process
                        ? TickCircleIcon
                        : VideoCircleIcon
                    "
                    alt="Icon"
                    class="max-lg:h-5"
                  />
                  <p class="text-color-text-1 text-sm font-medium">
                    {{ lesson.name }}
                  </p>
                </div>

                <!-- "Học tiếp" button for the next lesson -->
                <div
                  v-if="lesson?.inCourse === process + 1"
                  class="absolute inset-0 flex items-center justify-end transition-opacity max-lg:mt-1"
                >
                  <router-link
                    :to="{
                      name: 'ChiTietHocLieu',
                      params: {
                        slug: slug,
                        id: lesson.id,
                      },
                    }"
                  >
                    <button
                      class="px-4 py-[5px] bg-color-primary-2 rounded-lg text-white text-sm w-full"
                    >
                      Học tiếp
                    </button>
                  </router-link>
                </div>

                <!-- "Học lại" button for completed lessons on hover -->
                <div
                  v-if="lesson.inCourse <= process"
                  class="absolute inset-0 flex items-center justify-end transition-opacity max-lg:mt-1"
                >
                  <router-link
                    :to="{
                      name: 'ChiTietHocLieu',
                      params: {
                        slug: slug,
                        id: lesson.id,
                      },
                    }"
                    class="max-lg:order-2"
                  >
                    <button
                      class="px-4 py-[5px] bg-orange-500 rounded-lg text-white text-sm w-full"
                    >
                      Học lại
                    </button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <!-- Show More / Show Less button -->
          <p
            v-if="props.lessons?.length > 4"
            @click="toggleOpen"
            class="text-base text-color-primary-2 font-semibold pt-4 text-center max-lg:text-sm cursor-pointer"
          >
            {{ open ? "Thu gọn" : "Xem thêm" }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
