<script>
import CauHoi from "./CauHoi.vue";
import ThoiGian from "./ThoiGian.vue";
export default {
  components: {
    CauHoi,
    ThoiGian,
  },
  data() {
    return {
      "dataQuestion": [
        {
          "id": 82,
          "name": "Choose the even numbers",
          "type": "checkbox",
          "choice": [
            "1",
            "2",
            "3",
            "4"
          ]
        },
        {
          "id": 69,
          "name": "What is the capital of France?",
          "type": "radio",
          "choice": [
            "Paris",
            "London",
            "Berlin"
          ]
        },
        {
          "id": 81,
          "name": "What is the capital of France?",
          "type": "radio",
          "choice": [
            "Paris",
            "London",
            "Berlin"
          ]
        }
        ]
    }
  }
}
</script>

<template>
  <div class="md:py-8">
    <div
      class="bg-white container pt-[10px] py-3 border-b border-color-border lg:hidden relative"
    >
      <div class="flex mb-1">
        <p class="text-font18 font-semibold text-color-primary mb-2">
          Cuộc thi an toàn thông tin quý I năm 2024
        </p>
        <router-link :to="{ name: 'KhaoSat' }">
          <img
            src="@/assets/images/Cancel.svg"
            alt="Icon"
            class="w-6 h-6 absolute top-3 right-4"
          />
        </router-link>
      </div>
      <div class="flex justify-between">
        <div>
          <p class="text-font14 text-color-gray mb-1">Số điểm cần đạt:</p>
          <p class="text-font14 text-color-primary font-medium">80 điểm</p>
        </div>
        <div>
          <p class="text-font14 text-color-gray mb-1">Thời gian làm bài:</p>
          <p class="text-font14 text-color-primary font-medium">80 phút</p>
        </div>
      </div>
    </div>
    <div class="lg:container mx-auto">
      <form @submit.prevent="OnSubmit">
        <div class="lg:grid grid-cols-4 gap-3 max-sm:grid-cols-1">
          <div class="col-span-3 max-sm:col-span-1 max-sm:order-2">
            <CauHoi />
          </div>
          <div class="bg-white rounded-lg p-3 max-sm:order-1 max-lg:hidden">
            <ThoiGian />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
