<template>
  <Header/>
  <div class="py-8 max-md:py-0">
    <div class="md:container mx-auto">
      <div class="grid grid-cols-4 gap-3 max-md:grid-cols-1 max-md:gap-0">
        <div class="col-span-3">
          <CauHoi />
        </div>
        <div class="bg-white rounded-lg p-3 h-fit sticky top-8">
          <KetQua />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CauHoi from "./CauHoi.vue";
import KetQua from "./KetQua.vue";
import Header from "@/components/ParitialCompetision/Header.vue";

export default {
  components: {
    CauHoi,
    KetQua,
    Header,
  },
};
</script>
