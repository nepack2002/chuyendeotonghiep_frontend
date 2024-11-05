<template>
  <a :href="`/course-detail/${slug}`" class="bg-color-white rounded-lg shadow-continue cursor-pointer">
    <div class="relative">
      <img
        src="@/assets/images/image-recomment.jpg"
        alt="Image"
        class="object-cover aspect-16/9 rounded-lg"
      />
      <img
        src="@/assets/images/heart-2.svg"
        alt="Heart"
        class="bg-bg absolute top-3 right-[14px] px-[8px] py-[5px] rounded-[52px] border-[1.5px] border-border-heart"
      />
    </div>
    <div class="px-5 max-md:px-3 py-7 max-md:pt-3 max-md:pb-4">
      <div class="flex justify-between gap-3 border-b border-color-border pb-2">
        <p
          class="text-base max-md:text-font14 font-medium text-color-primary-2 bg-color-primary-4 px-3 py-1 rounded-[100px] line-clamp-1"
        >
          {{ topic }}
        </p>
        <div class="flex justify-center items-center gap-1">
          <p
            class="text-base max-md:text-font14 font-medium text-color-primary-2"
          >
            <!-- {{ rating }} -->
            5
          </p>
          <div class="flex justify-center">
            <img
              src="@/assets/images/star-filled.svg"
              alt="Star"
              class="h-4 w-auto"
            />
            <img
              src="@/assets/images/star-filled.svg"
              alt="Star"
              class="h-4 w-auto"
            />
            <img
              src="@/assets/images/star-filled.svg"
              alt="Star"
              class="h-4 w-auto"
            />
            <img
              src="@/assets/images/star-filled.svg"
              alt="Star"
              class="h-4 w-auto"
            />
            <img
              src="@/assets/images/star-filled-2.svg"
              alt="Star"
              class="h-4 w-auto"
            />
          </div>
        </div>
      </div>
      <p class="text-font18 max-md:text-base font-bold text-color-primary pt-2">
        {{ name }}
      </p>
      <div class="flex justify-start items-center gap-2 py-3 max-md:pb-2">
        <p class="font-medium text-base text-color-primary max-md:text-font14">
          {{ studentCount }} học viên tham gia
        </p>
      </div>
      <div
        v-if="state === 0"
        class="flex justify-start items-center gap-2 max-md:text-font14"
      >
        <div class="flex justify-start items-center gap-2">
          <img src="@/assets/images/calendar-2.svg" alt="Calendar" />
          <p class="text-color-gray font-normal">Bắt đầu:</p>
        </div>
        <div>{{ createdAt }}</div>
      </div>
      <div v-else-if="state === 1">
        <div class="text-nowrap text-base text-color-primary">
          <span class="font-normal">Bạn đã hoàn thành </span>
          <span class="text-color-greend-2 font-medium"> {{ progress }}%</span>
        </div>
        <div
          class="relative w-full h-2 bg-gray-200 rounded-lg overflow-hidden mt-1"
        >
          <div
            class="absolute top-0 left-0 h-full bg-color-greend-2"
            :style="{ width: progress + '%' }"
          ></div>
        </div>
      </div>
      <div
        v-else-if="state === 2"
        class="text-base font-semibold flex text-center justify-between"
      >
        <div
          class="bg-color-greend-3 rounded-full border border-color-greend-2 py-[6px] px-3 text-color-greend-2 flex gap-2 items-center text-nowrap"
        >
          <img src="@/assets/images/tick-circle.svg" alt="" />
          Đã hoàn thành
        </div>
        <div
          class="bg-color-border-3 text-white py-[6px] px-[19px] rounded-lg max-md:text-font14 text-nowrap flex items-center"
        >
          Đánh giá ngay
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      required: false,
    },
    reviewsCount: {
      type: String,
      required: false,
    },
    topic: {
      type: String,
      required: true,
    },
    // users: {
    //   type: Array,
    //   required: true
    // },
    studentCount: {
      type: Number,
      required: true,
    },
    state: {
      type: Number,
      required: false,
    },
    createdAt: {
      type: String,
      required: true,
    },
    progress: {
      type: Number,
      required: false,
    },
  },
};
</script>
