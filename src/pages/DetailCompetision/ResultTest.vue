<script setup>
import { defineProps } from "vue";
import { ref } from "vue";
// Nhận prop results
const props = defineProps({
  results: {
    type: Object,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
  examResult: {
    type: Number,
    default: 0,
    required: true,
  },
});

const open = ref(false);
</script>

<template>
  <div class="pt-4 max-md:pt-3 mx-4">
    <div class="flex justify-between pb-4 max-md:pb-[5px]">
      <p class="text-color-gray text-sm font-semibold">
        Bạn đã làm bài thi này {{ count }} lần
      </p>
      <div class="flex items-center cursor-pointer gap-1" @click="open = !open">
        <p class="text-color-primary-2 text-sm font-medium select-none">
          Chi tiết
        </p>
        <img src="@/assets/images/Double-down.svg" alt="Icon" />
      </div>
    </div>

    <table class="w-full text-start mt-2" v-if="open">
      <thead>
        <tr class="bg-color-primary-4">
          <th class="text-start text-color-primary text-sm font-medium p-2">
            Lần thi
          </th>
          <th
            class="text-start text-color-primary text-sm font-medium p-2 max-md:hidden"
          >
            Làm bài lúc
          </th>
          <th
            class="text-start text-color-primary text-sm font-medium p-2 max-md:hidden"
          >
            Nộp bài lúc
          </th>
          <th class="text-center text-color-primary text-sm font-medium p-2">
            Trạng thái
          </th>
          <th class="text-center text-color-primary text-sm font-medium p-2">
            Xem kết quả
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(result, index) in results"
          :key="index"
          class="text-color-primary text-sm border-b border-color-border"
        >
          <td class="p-2">
            <p>Lần {{ index + 1 }}</p>
            <p class="md:hidden">{{ result.createdAt }}</p>
            <p class="md:hidden">{{ result.submitAt }}</p>
          </td>
          <td class="p-2 max-md:hidden">{{ result.createdAt }}</td>
          <td class="p-2 max-md:hidden">{{ result.submitAt }}</td>
          <td
            class="p-2 font-semibold text-center"
            :class="
              result.correctAns > examResult
                ? 'text-color-greend-2'
                : 'text-color-red'
            "
          >
            <p v-if="result.correctAns > examResult">Đạt</p>
            <p v-else>Chưa đạt</p>
          </td>
          <td class="p-2">
            <router-link :to="{name:'XemDapAn', params:{id: result.id}}" class="flex items-center justify-center gap-2">
              <img src="@/assets/images/eye.svg" alt="Icon" />
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
