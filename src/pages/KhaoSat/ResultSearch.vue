<template>
  <div class="mt-5">
    <div class="md:mx-4 mx-auto">
      <!-- Kiểm tra nếu không có khảo sát nào chưa hết hạn -->
      <div v-if="noActiveSurveys">
        <div class="bg-color-white-2">
          <div class="py-10 container mx-auto">
            <div class="flex justify-center items-center">
              <div class="flex flex-col items-center justify-center">
                <img
                  src="@/assets/images/SearchEmp.svg"
                  alt="Icon"
                  class="max-md:h-[100px] max-md:mb-5 mb-4"
                />
                <p
                  class="font-medium text-base text-color-text-1 max-md:text-sm"
                >
                  Không có bài khảo sát nào
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Nếu có bài khảo sát chưa hết hạn thì hiển thị danh sách -->
      <div
        class="grid grid-cols-3 gap-4 my-5 max-md:grid-cols-2 max-sm:grid-cols-1"
      >
        <!-- Sử dụng v-for để lặp qua danh sách khảo sát -->
        <CardKhaoSat
          v-for="(survey, index) in surveys"
          :key="index"
          :title="survey.name"
          :slug="survey.slug"
          :attend="survey.attend"
          :isExpired="survey.isExpired"
          :dueAt="getDaysLeft(survey.dueAt)"
          :studentCount="survey.participated"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardKhaoSat from "@/pages/Dung_Chung/CardKhaoSat.vue";

export default {
  props: {
    surveys: Array,
  },
  components: {
    CardKhaoSat,
  },
  computed: {
    noActiveSurveys() {
      // Kiểm tra nếu không có khảo sát nào mà isExpired === false
      return !this.surveys.some((survey) => survey.isExpired === false);
    },
  },
  methods: {
    getDaysLeft(dueDate) {
      const due = new Date(dueDate);
      const today = new Date();
      const difference = due - today;
      return Math.ceil(difference / (1000 * 60 * 60 * 24)); // Chuyển đổi thành số ngày
    },
  },
};
</script>
