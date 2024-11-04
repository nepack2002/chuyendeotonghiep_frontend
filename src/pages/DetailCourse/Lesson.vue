<script setup>
    import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
    import { ChevronUpIcon } from '@heroicons/vue/20/solid'
</script>

<template>

  <div class=" bg-white rounded-lg mb-5">
    <div class="p-5 max-md:p-2">
      
      <div class="flex items-center gap-3 border-b border-color-button-change-slide pb-2">
        <img src="@/assets/images/BookOpen.svg" alt="Icon" />
        <p class="text-color-primary text-font20lh font-semibold max-lg:text-lg">Bài học</p>
      </div>

      <div class="w-full mt-5 ">
        <div class="mx-auto w-full">
          <Disclosure v-slot="{ open }">
            <div class="border border-color-border rounded-lg mb-3">
              <DisclosureButton
                class="flex w-full p-4 justify-between items-center max-lg:items-end rounded-lg bg-color-white-2 text-left text-sm font-medium focus:outline-none focus-visible:ring border-b border-color-border"
              >
                <div
                class="w-full flex justify-between  gap-2 bg-color-white-2 max-lg:flex-wrap"
              >
                  <h1 class="text-color-primary text-base font-semibold">
                    Chương 1: Đào tạo chuyển đổi số doanh nghiệp
                  </h1>
                  <div class="mr-2">
                    <div class="flex items-center gap-2 flex-wrap justify-end max-lg:justify-start">
                      <p class="text-color-text-1 text-sm border-r border-[#000] pr-2 ">
                        4 Nhiệm vụ
                      </p>
                      <p class="text-color-text-1 text-sm">1 giờ 30 phút</p>
                    </div>
                  </div>
              </div>
                <ChevronUpIcon
                    :class="open ? 'rotate-180 transform' : ''"
                    class="h-5 w-5 text-color-gray"
                />
                </DisclosureButton>
                <DisclosurePanel class="py-2 px-4">
                  <div
                    class="bg-white"
                  >
                  <div class="grid grid-cols-2 max-lg:grid-cols-1 border-b border-color-border-2 py-3">
                      <div class="flex items-center gap-2 max-lg:w-full">
                        <img src="@/assets/images/tick-circle.svg" alt="Icon" class="max-lg:h-5"/>
                        <p class="text-color-text-1 text-sm font-medium">
                          What is React Js ?
                        </p>
                      </div>
                      <div>
                        <p class="text-color-gray text-sm max-lg:mt-1 text-right max-lg:text-start">10 phút</p>
                      </div>
                  </div>
                  <div class="grid grid-cols-2 max-lg:grid-cols-1 border-b border-color-border-2 py-3">
                      <div class="flex items-center gap-2 max-lg:w-full">
                        <img src="@/assets/images/tick-circle.svg" alt="Icon" class="max-lg:h-5"/>
                        <p class="text-color-text-1 text-sm font-medium">
                          What is React Js ?
                        </p>
                      </div>
                      <div>
                        <p class="text-color-gray text-sm max-lg:mt-1 text-right max-lg:text-start">10 phút</p>
                      </div>
                  </div>
                    <div class="grid grid-cols-2 max-lg:grid-cols-1 items-center border-b border-color-border-2 py-3 ">
                      <div class="flex items-center gap-2">
                        <img src="@/assets/images/video-circle.svg" alt="Icon" class="max-lg:h-5"/>
                        <p class="text-color-text-1 text-sm font-medium">
                          What is React Js ?
                        </p>
                      </div>
                      <div class="flex items-center gap-5 justify-end max-lg:mt-1 max-lg:justify-between">
                        <div class="max-lg:order-2">
                          <button
                            class="px-4 py-[5px] bg-color-primary-2 rounded-lg text-white text-sm w-full"
                          >
                            Học tiếp
                          </button>
                        </div>
                        <p class="text-color-gray text-sm max-lg:order-1">10 phút</p>
                      </div>
                    </div>
                    <div class="grid grid-cols-2 py-3 max-lg:grid-cols-1">
                      <div class="flex items-center gap-2 max-lg:w-full">
                        <img src="@/assets/images/book.svg" alt="Icon" class="max-lg:h-5" />
                        <p class="text-color-text-1 text-sm font-medium">
                          Setting up Environment
                        </p>
                      </div>
                      <div>
                        <p class="text-color-gray text-sm max-lg:mt-1 text-right max-lg:text-start">15 phút</p>
                      </div>
                    </div>
                  </div>
                </DisclosurePanel>
              </div>
          </Disclosure>
          <Disclosure v-slot="{ open }">
            <div class="border border-color-border rounded-lg mb-3">
              <DisclosureButton
                class="flex w-full p-4 justify-between items-center max-lg:items-end rounded-lg bg-color-white-2 text-left text-sm font-medium focus:outline-none focus-visible:ring border-b border-color-border"
              >
                <div
                class="w-full flex justify-between  gap-2 bg-color-white-2 max-lg:flex-wrap"
              >
                  <h1 class="text-color-primary text-base font-semibold">
                    Chương 1: Đào tạo chuyển đổi số doanh nghiệp
                  </h1>
                  <div class="mr-2">
                    <div class="flex items-center gap-2 flex-wrap justify-end max-lg:justify-start">
                      <p class="text-color-text-1 text-sm border-r border-[#000] pr-2 ">
                        4 Nhiệm vụ
                      </p>
                      <p class="text-color-text-1 text-sm">1 giờ 30 phút</p>
                    </div>
                  </div>
              </div>
                <ChevronUpIcon
                    :class="open ? 'rotate-180 transform' : ''"
                    class="h-5 w-5 text-color-gray"
                />
                </DisclosureButton>
                <DisclosurePanel class="py-2 px-4">
                  <div
                    class="bg-white"
                  >
                  <div class="grid grid-cols-2 max-lg:grid-cols-1 border-b border-color-border-2 py-3">
                      <div class="flex items-center gap-2 max-lg:w-full">
                        <img src="@/assets/images/tick-circle.svg" alt="Icon" class="max-lg:h-5"/>
                        <p class="text-color-text-1 text-sm font-medium">
                          What is React Js ?
                        </p>
                      </div>
                      <div>
                        <p class="text-color-gray text-sm max-lg:mt-1 text-right max-lg:text-start">10 phút</p>
                      </div>
                  </div>
                  <div class="grid grid-cols-2 max-lg:grid-cols-1 border-b border-color-border-2 py-3">
                      <div class="flex items-center gap-2 max-lg:w-full">
                        <img src="@/assets/images/tick-circle.svg" alt="Icon" class="max-lg:h-5"/>
                        <p class="text-color-text-1 text-sm font-medium">
                          What is React Js ?
                        </p>
                      </div>
                      <div>
                        <p class="text-color-gray text-sm max-lg:mt-1 text-right max-lg:text-start">10 phút</p>
                      </div>
                  </div>
                    <div class="grid grid-cols-2 max-lg:grid-cols-1 items-center border-b border-color-border-2 py-3 ">
                      <div class="flex items-center gap-2">
                        <img src="@/assets/images/video-circle.svg" alt="Icon" class="max-lg:h-5"/>
                        <p class="text-color-text-1 text-sm font-medium">
                          What is React Js ?
                        </p>
                      </div>
                      <div class="flex items-center gap-5 justify-end max-lg:mt-1 max-lg:justify-between">
                        <div class="max-lg:order-2">
                          <button
                            class="px-4 py-[5px] bg-color-primary-2 rounded-lg text-white text-sm w-full"
                          >
                            Học tiếp
                          </button>
                        </div>
                        <p class="text-color-gray text-sm max-lg:order-1">10 phút</p>
                      </div>
                    </div>
                    <div class="grid grid-cols-2 py-3 max-lg:grid-cols-1">
                      <div class="flex items-center gap-2 max-lg:w-full">
                        <img src="@/assets/images/book.svg" alt="Icon" class="max-lg:h-5" />
                        <p class="text-color-text-1 text-sm font-medium">
                          Setting up Environment
                        </p>
                      </div>
                      <div>
                        <p class="text-color-gray text-sm max-lg:mt-1 text-right max-lg:text-start">15 phút</p>
                      </div>
                    </div>
                  </div>
                </DisclosurePanel>
              </div>
          </Disclosure>
        </div>
      </div>

    </div>
  </div>
</template>
