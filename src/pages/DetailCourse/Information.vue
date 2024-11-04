<template>
  <div class="p-3 bg-white rounded-lg">
    <div class="flex gap-2 items-start border-b border-color-button-change-slide p-2">
      <img src="@/assets/images/clock-2.svg" alt="Icon" class="max-lg:h-7"/>
      <div class="flex-1">
        <p class="text-base font-medium text-color-primary max-lg:text-base">Thời gian diễn ra</p>
        <div class="flex justify-between items-center">
          <p class="text-sm font-normal text-color-gray max-lg:text-sm">Bắt đầu:</p>
          <p class="max-lg:text-sm text-color-primary">12/01/2024</p>
        </div>
        <div class="flex justify-between items-center">
          <p class="text-sm font-normal text-color-gray max-lg:text-sm">Kết thúc:</p>
          <p class="max-lg:text-sm text-color-primary">12/09/2024</p>
        </div>
      </div>
    </div>
    <div
      class="flex items-center justify-between gap-2 border-b border-color-button-change-slide p-2 "
    >
    <div class="flex gap-2 items-center">
      <img src="@/assets/images/BookBookmark.svg" alt="Icon" class="max-lg:h-7"/>
      <p class="max-lg:text-sm text-color-primary font-medium">Số nhiệm vụ:</p>
    </div>
    <p class="max-lg:text-sm text-color-primary font-medium">4</p>
      
    </div>
    <div class="flex items-start gap-2 p-2 max-lg:flex-wrap">
      <img src="@/assets/images/ChalkboardTeacher2.svg" alt="Icon" class="max-lg:h-7"/>
      <div>
        <p class="text-base font-medium text-color-primary max-lg:text-base">Giảng viên</p>
        <p class="text-sm font-normal text-color-primary max-lg:text-sm mt-2">Nguyễn Thị Mai Lan</p>
        <p class="text-sm font-normal text-color-primary max-lg:text-sm">Nguyễn Thị Mai Lan</p>
      </div>
    </div>
    <RouterLink to="/learn-video">
      <div class="py-3 max-md:text-center">
        <button class="px-4 py-10px bg-[#005ED3] rounded-lg text-white text-sm w-full ">
          Tiếp tục học
        </button>
      </div>
    </RouterLink>
    
  </div>
</template>
