<template>
  <div class=" bg-white rounded-lg mt-5">
    <div class="p-5">
      <div class="flex items-center gap-3 border-b border-color-button-change-slide pb-2">
        <img src="@/assets/images/StarHalf.svg" alt="Icon" />
        <p class="text-color-primary text-font20lh font-semibold max-lg:text-lg">Xếp hạng</p>
      </div>

      <div class="grid grid-cols-5 max-sm:grid-cols-1 items-center">
        <div class="text-center col-span-2 max-sm:col-span-1">
          <p class="text-font80px text-color-primary-2 font-semibold max-lg:text-[64px]">4,7</p>
          <div class="flex justify-center py-3 max-md:py-1">
            <img
              src="@/assets/images/star-filled.svg"
              alt="Star"
              class="h-8 w-auto max-lg:h-7"
            />
            <img
              src="@/assets/images/star-filled.svg"
              alt="Star"
              class="h-8 w-auto max-lg:h-7"
            />
            <img
              src="@/assets/images/star-filled.svg"
              alt="Star"
              class="h-8 w-auto max-lg:h-7"
            />
            <img
              src="@/assets/images/star-filled.svg"
              alt="Star"
              class="h-8 w-auto max-lg:h-7"
            />
            <img
              src="@/assets/images/star-filled-2.svg"
              alt="Star"
              class="h-8 w-auto max-lg:h-7"
            />
          </div>
          <p class="text-sm font-normal text-color-gray ">
            (11656 lượt đánh giá)
          </p>
        </div>

        <div class="col-span-3 max-sm:col-span-1">
          <div class="flex items-center gap-2 justify-center py-2">
            <p class="text-color-primary text-sm font-semibold ">5.0</p>
            <img
              src="@/assets/images/star-filled.svg"
              alt="Star"
              class="h-4 w-auto"
            />

            <div
              class="relative w-56 h-2 bg-gray-200 rounded-lg overflow-hidden"
            >
              <div
                class="absolute top-0 left-0 h-full bg-color-primary-2 w-1/2"
              ></div>
            </div>
            <p class="text-color-primary text-sm font-semibold ">(1856)</p>
          </div>
          <div class="flex items-center gap-2 justify-center py-2">
            <p class="text-color-primary text-sm font-semibold ">5.0</p>
            <img
              src="@/assets/images/star-filled.svg"
              alt="Star"
              class="h-4 w-auto"
            />

            <div
              class="relative w-56 h-2 bg-gray-200 rounded-lg overflow-hidden"
            >
              <div
                class="absolute top-0 left-0 h-full bg-color-primary-2"
                style="width: 50%"
              ></div>
            </div>
            <p class="text-color-primary text-sm font-semibold ">(1856)</p>
          </div>
          <div class="flex items-center gap-2 justify-center py-2">
            <p class="text-color-primary text-sm font-semibold ">5.0</p>
            <img
              src="@/assets/images/star-filled.svg"
              alt="Star"
              class="h-4 w-auto"
            />

            <div
              class="relative w-56 h-2 bg-gray-200 rounded-lg overflow-hidden"
            >
              <div
                class="absolute top-0 left-0 h-full bg-color-primary-2"
                style="width: 50%"
              ></div>
            </div>
            <p class="text-color-primary text-sm font-semibold ">(1856)</p>
          </div>
        </div>
      </div>

        <form action="#" class="py-8">
          <!-- Chưa đánh giá -->
          <div class="text-center">
            <p class="text-color-primary text-sm font-medium ">
              Bạn có hài lòng với khóa học?
            </p>
            <div class="flex justify-center py-3">
              <img
                src="@/assets/images/star-filled.svg"
                alt="Star"
                class="h-8 w-auto"
              />
              <img
                src="@/assets/images/star-filled.svg"
                alt="Star"
                class="h-8 w-auto"
              />
              <img
                src="@/assets/images/star-filled.svg"
                alt="Star"
                class="h-8 w-auto"
              />
              <img
                src="@/assets/images/star-filled.svg"
                alt="Star"
                class="h-8 w-auto"
              />
              <img
                src="@/assets/images/star-filled-2.svg"
                alt="Star"
                class="h-8 w-auto"
              />
            </div>
          </div>

          <div class="flex justify-between max-lg:flex-wrap max-lg:justify-center">
            <input type="text" placeholder="Nhập đánh giá của bạn" 
                class="rounded-lg w-10/12 max-lg:w-full border border-color-border-2 focus:outline-none py-2 px-3 max-lg:text-sm "/>
              <button
                class="px-4 py-2 bg-color-primary-2 rounded-lg text-white text-sm max-lg:mt-2"
              >
                <div>Gửi đánh giá</div>
              </button>
            
          </div>
        </form>

        <div class="flex items-start gap-4 pb-3 max-lg:gap-2">
            <img src="@/assets/images/Group 21.svg" alt="User" class="max-md:h-8">
            <div class="py-3 px-4 bg-color-white-2 rounded-lg max-lg:py-2 max-lg:px-3">
                <div class="flex justify-between items-center max-lg:flex-wrap max-lg:items-end">
                    <div class="flex gap-2 items-center max-lg:flex-col max-lg:items-start">
                        <p class="text-base font-semibold text-color-primary max-lg:w-full">Trần Thị Mai</p>
                        <div class="flex ">
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
                    <div class="text-color-purple text-sm ">
                        <p>20/03/2024</p>
                    </div>
                    
                </div>
                <div class="max-lg:mt-2">
                    <p class="text-color-text-1 text-sm ">Lorem ipsum dolor sit amet, coetur adipiscing elit
                         ut aliquam, purus sit amet luctus Lorem ipsum dolor sit amet aliquam, purus sit amet luctus </p>
                </div>
                
            </div>
        </div>
        <div class="flex items-start gap-4 pb-3 max-lg:gap-2">
            <img src="@/assets/images/Group 21.svg" alt="User" class="max-md:h-8">
            <div class="py-3 px-4 bg-color-white-2 rounded-lg">
                <div class="flex justify-between items-center max-lg:flex-wrap max-lg:items-end">
                    <div class="flex gap-2 items-center max-lg:flex-col max-lg:items-start">
                        <p class="text-base font-semibold text-color-primary max-lg:w-full">Trần Thị Mai</p>
                        <div class="flex ">
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
                    <div class="text-color-purple text-sm ">
                        <p>20/03/2024</p>
                    </div>
                    
                </div>
                <div class="max-lg:mt-2">
                    <p class="text-color-text-1 text-sm ">Lorem ipsum dolor sit amet, coetur adipiscing elit
                         ut aliquam, purus sit amet luctus Lorem ipsum dolor sit amet aliquam, purus sit amet luctus </p>
                </div>
                
            </div>
        </div>
        <p class="text-base text-color-primary-2 font-semibold pt-4 text-center max-lg:text-sm">Xem thêm</p>
    </div>
  </div>
</template>
