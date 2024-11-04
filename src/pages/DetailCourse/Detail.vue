<script setup>
  import Banner from "./Banner.vue";
  import Filter from "./Filter.vue";
  import Description from "./Description.vue";
  import Infomation from "./Information.vue";
  import Lesson from './Lesson.vue'
  import Document from './Document.vue'
  import Ranking from './Ranking.vue'
  import Course from './Course.vue'
</script>

<template>
  <div>
    <Banner />

   

    <div class="container mx-auto">
      <div class="grid grid-cols-4 gap-2 max-md:grid-cols-1">
        <div class="col-span-3 max-md:order-2 max-md:col-span-1">
          <Filter />
          
          <Description />

          <Lesson />

          <Document />

          <Ranking />

          
        </div>
        <div class="mt-[-50px] max-md:order-1 max-md:mt-0 z-[1]">
          <Infomation />
        </div>
      </div>

      <Course />
    </div>
  </div>
 
</template>
