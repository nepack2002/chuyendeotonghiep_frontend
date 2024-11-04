

<template>
    <div class="flex justify-center items-center py-5 max-sm:py-2 gap-2">
        <img src="@/assets/images/alarm-clock 1.svg" alt="Clock" class="max-md:h-8 max-sm:h-4">
        <p class="text-color-greend-2 text-4xl font-bold max-md:text-3xl max-sm:text-xs">80:42</p>
    </div>

    <!-- Het thoi gian -->
    <!-- <div class="flex justify-center items-center py-5 gap-2">
        <img src="@/assets/images/alarm-clock 1-2.svg" alt="Clock" class="max-md:h-8 max-sm:h-4">
        <p class="text-[#FB324A] text-4xl font-bold max-md:text-3xl max-sm:text-xs">80:42</p>
    </div> -->

    <!-- ////// -->
    <div class="grid grid-cols-5 gap-2 max-lg:grid-cols-3 max-sm:grid-cols-6">
        <button 
            class="p-[10px] max-sm:p-1 max-sm:text-[10px] bg-color-primary-2 flex justify-center items-center text-white rounded-lg relative font-semibold">
                1
            <img src="@/assets/images/archive.svg" alt="Icon" class="absolute top-0 right-0 max-sm:h-2">
            <img src="@/assets/images/IconBg.svg" alt="Icon" class="absolute bottom-0 right-0 h-4 object-cover max-sm:h-2">
        </button>

        <button 
            class="p-[10px] max-sm:p-1 max-sm:text-[10px] bg-color-white flex justify-center items-center text-color-text-1 rounded-lg relative font-semibold border border-color-border">
                2
        </button>
        <button class="p-[10px] max-sm:p-1 max-sm:text-[10px] bg-color-white flex justify-center items-center text-color-text-1 rounded-lg relative font-semibold border border-color-border">
                3
        </button>
        <button class="p-[10px] max-sm:p-1 max-sm:text-[10px] bg-color-white flex justify-center items-center text-color-text-1 rounded-lg relative font-semibold border border-color-border">
                4
        </button>
        <button class="p-[10px] max-sm:p-1 max-sm:text-[10px] bg-color-white flex justify-center items-center text-color-text-1 rounded-lg relative font-semibold border border-color-border">
                5
        </button>
        <button class="p-[10px] max-sm:p-1 max-sm:text-[10px] bg-color-white flex justify-center items-center text-color-text-1 rounded-lg relative font-semibold border border-color-border">
                6
        </button> 
    </div>
    <div class="flex items-start bg-color-orange-2 p-2 max-sm:p-1 rounded-md border border-color-orange-1 gap-2 mt-5 max-sm:flex-wrap max-md:text-center max-sm:justify-center">
        <img src="@/assets/images/info-circle.svg" alt="Icon" class="max-lg:h-3">
        <p class="text-color-primary text-sm max-lg:text-xs max-sm:text-[5px]">Thời gian được tính từ lúc bắt đầu làm bài. Hết thời gian quy định hệ thống sẽ tự động nộp bài</p>
    </div>
    <div class="py-5 text-center max-sm:py-2">
        <button class="px-4 py-2 max-sm:px-2 max-sm:py-1 bg-color-primary-2 rounded-lg text-white text-sm">
            <p class="max-sm:text-[10px]">Nộp bài</p>
        </button>
    </div>
</template>