<template>
  <div class="lg:container mx-auto bg-white rounded-lg">
    <div class="lg:p-5">
      <div
        class="border-b border-color-border py-3 max-lg:mx-4"
        v-for="(question, index) in dataQuestion"
        :id="`question-${index}`"
        :key="question.id"
      >
        <div class="flex justify-between items-center gap-2">
          <p class="text-color-primary text-base font-semibold max-lg:text-sm">
            Câu {{ index + 1 }}: {{ question.name }}
          </p>
         
        </div>
        <div class="flex items-center gap-3 py-2">
          <p class="text-color-gray text-sm" v-if="question.type === 'radio'">
            (Chọn 1 đáp án)
          </p>
          <p
            class="text-color-gray text-sm"
            v-if="question.type === 'checkbox'"
          >
            (Chọn nhiều đáp án)
          </p>
        </div>
        <div
          v-for="(choice, index) in question.choice"
          :key="index"
          class="flex items-center gap-3 py-1"
        >
          <input
            :type="question.type"
            :name="'answer_' + question.id"
            :id="'answer_' + question.id + '_' + index"
            @change="handleAnswerSelection(question.id, choice, question.type)"
            class="w-5 h-5 max-md:h-4"
          />
          <label
            :for="'answer_' + question.id + '_' + index"
            class="text-color-text-1 text-base max-md:text-sm flex-1"
            >{{ choice }}</label
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataQuestion: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleAnswerSelection(questionId, choice, type) {
      this.$emit("updateSelectedAnswers", { questionId, choice, type });
    },
  },
};
</script>
