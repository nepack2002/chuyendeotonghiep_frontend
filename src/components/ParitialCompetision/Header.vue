<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<template>
    <div class="bg-white">
        <div class="container mx-auto">
            <div class="flex justify-between items-center gap-3 py-3">
                <div class="flex items-center gap-3">
                    <div class="flex gap-3 cursor-pointer max-lg:hidden" @click="$router.back() ">
                        <img src="../../assets/images/arrow-left.svg" alt="Icon">
                        <p class="text-[#005ED3] text-base font-semibold">Trở về</p>
                    </div>
                    <div>
                        <p class="text-[#273266] text-font20lh font-semibold max-md:text-lg">Cuộc thi an toàn thông tin quý I năm 2024</p>
                        <div class="flex gap-2">
                            <p class="text-[#636B90] text-sm ">Số điểm cần đạt:</p>
                            <p class="text-[#3C4378] text-sm font-medium">80 điểm</p>
                        </div>
                    </div>
                    
                </div>

                <div class="col-span-3 flex items-center gap-6 max-lg:hidden">
                    <div class="flex  items-center gap-1 relative">
                        <div>
                            <img src="../../assets/images/Default.svg" alt="Aatar" class="w-full h-auto object-cover max-md:h-8">
                        </div>
                        <div class="flex gap-1 items-center">
                            <p class="text-sm font-medium text-[#273266] max-sm:hidden max-md:text-xs">Lê Nguyễn Hà Anh</p>
                            <img src="../../assets/images/arrow-down.svg" alt="Arrow" class="w-4 h-4 cursor-pointer" @click="toggleMenu">
                        </div>

                        <div class="absolute top-9 z-10 right-0 bg-[#FFFFFF] p-2 rounded-10px max-sm:w-24" v-if="isOpen">
                            <ul>
                                <li class="py-2 px-10px bg-[#EDF5FF] text-[#005ED3] text-base font-medium rounded-md max-sm:text-xs max-sm:px-2 max-sm:py-1">Hồ sơ cá nhân</li>
                                <li class="py-2 px-10px  text-[#636B90] text-base font-normal rounded-md max-sm:text-xs max-sm:px-2 max-sm:py-1">Khoá học của tôi</li>
                                <li class="py-2 px-10px  text-[#636B90] text-base font-normal rounded-md max-sm:text-xs max-sm:px-2 max-sm:py-1">Cuộc thi của tôi</li>
                                <li class="py-2 px-10px  text-[#636B90] text-base font-normal rounded-md max-sm:text-xs max-sm:px-2 max-sm:py-1">Khảo sát của tôi</li>
                                <li class="py-2 px-10px  text-[#FB324A] text-base font-normal rounded-md max-sm:text-xs max-sm:px-2 max-sm:py-1">Đăng xuất</li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
        </div>
        </div>
   </div>
</template>