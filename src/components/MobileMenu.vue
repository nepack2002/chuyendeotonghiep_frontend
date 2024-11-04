<template>
  <Popover v-slot="{ open }" class="lg:hidden">
    <PopoverButton class="flex items-center outline-none">
      <img
          v-if="!open"
          src="@/assets/images/Notification.svg"
          alt="Location"
          class="h-6 w-6 mr-2"
        />
      <img
        v-if="!open"
        src="@/assets/images/menu.svg"
        alt="Menu"
        class="max-lg:py-4"
      />
      <div v-else class="flex gap-x-2 items-center max-lg:py-[12px]">
        <img
          src="@/assets/images/Notification.svg"
          alt="Location"
          class="w-6 h-6"
          @click.stop
        />
        <img
          src="@/assets/images/Default.svg"
          alt="Avatar"
          class="w-9 h-9"
          @click.stop
        />
        <img src="@/assets/images/Cancel.svg" alt="Close" class="w-6 h-6" />
      </div>
    </PopoverButton>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <PopoverPanel
        class="custom-scrollbar absolute left-0 top-14 z-50 w-full overflow-auto border-b-2 border-border bg-white text-base font-medium text-color-primary"
        style="max-height: calc(100vh - 0px); min-height: calc(100vh - 0px)"
      >
        <div class="py-[7px] px-3 border">
          <router-link
            :to="{ name: 'Home' }"
            class="py-3 pl-2 block rounded-lg"
            active-class="bg-color-primary-2 text-white"
          >
            Trang chủ
          </router-link>
           <router-link
            :to="{ name: 'Knowledge' }"
            class="py-3 pl-2 block rounded-lg"
            active-class="bg-color-primary-2 text-white"
          >
           Knowledge
          </router-link>
          <div class="py-3 pl-2">Kho học liệu</div>
          <Disclosure v-slot="{ open }">
            <DisclosureButton
              class="py-3 px-2 flex items-center justify-between w-full"
            >
              <span>Góc đào tạo</span>
              <ChevronUpIcon
                :class="open ? 'rotate-180 transform' : ''"
                class="h-6 w-6 text-[#636b90]"
              />
            </DisclosureButton>
            <DisclosurePanel class="font-normal text-color-text-1">
              <router-link
                :to="{ name: 'Home' }"
                class="flex items-center gap-x-3 px-2 py-[10px] rounded-lg"
                active-class="bg-color-primary-2 text-white"
              >
                <img src="@/assets/images/CalendarCheck copy.svg" alt="" />
                Kế hoạch đào tạo
              </router-link>
              <router-link
                :to="{ name: 'Home' }"
                class="flex items-center gap-x-3 px-2 py-[10px] rounded-lg"
                active-class="bg-color-primary-2 text-white"
              >
                <img src="@/assets/images/LTCD.svg" alt="" />
                Lộ trình công danh
              </router-link>
              <router-link
                :to="{ name: 'Course' }"
                class="flex items-center gap-x-3 px-2 py-[10px] rounded-lg"
                active-class="bg-color-primary-2 text-white"
              >
                <img :src="isCourseActive ? KhoaHocActive : KhoaHoc" alt="" />
                Khóa học
              </router-link>
              <router-link
                :to="{ name: 'Competision' }"
                class="flex items-center gap-x-3 px-2 py-[10px] rounded-lg"
                active-class="bg-color-primary-2 text-white"
              >
                <img
                  :src="isCompetisionActive ? CuocThi : CuocThiActive"
                  alt=""
                />
                Cuộc thi
              </router-link>
              <router-link
                :to="{ name: 'TaiLieu' }"
                class="flex items-center gap-x-3 px-2 py-[10px] rounded-lg"
                active-class="bg-color-primary-2 text-white"
              >
                <img :src="isTaiLieuActive ? TaiLieuActive : TaiLieu" alt="" />
                Tài liệu
              </router-link>
              <router-link
                :to="{ name: 'Home' }"
                class="flex items-center gap-x-3 px-2 py-[10px] rounded-lg"
                active-class="bg-color-primary-2 text-white"
              >
                <img src="@/assets/images/ThanhTich.svg" alt="" />
                Thành tích
              </router-link>
            </DisclosurePanel>
          </Disclosure>
           <router-link
            :to="{ name: 'KhaoSat' }"
            class="py-3 pl-2 block rounded-lg"
            active-class="bg-color-primary-2 text-white"
          >
            Khảo sát
          </router-link>
        </div>
        <div class="py-2 px-3">
          <div class="px-2 flex items-center justify-between">
            <p class="">Ngôn ngữ</p>
            <div class="flex gap-x-5">
              <img src="@/assets/images/VietNam.svg" alt="" />
              <img src="@/assets/images/American.svg" alt="" />
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script>
import { useRoute } from "vue-router";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUpIcon } from "@heroicons/vue/20/solid";
import TaiLieu from "@/assets/images/TaiLieu.svg";
import TaiLieuActive from "@/assets/images/TaiLieuActive.svg";
import CuocThi from "@/assets/images/CuocThi.svg";
import CuocThiActive from "@/assets/images/CuocThiActive.svg";
import KhoaHoc from "@/assets/images/KhoaHoc.svg";
import KhoaHocActive from "@/assets/images/KhoaHocActive.svg";

export default {
  data() {
    return {
      KhoaHoc,
      KhoaHocActive,
      CuocThi,
      CuocThiActive,
      TaiLieu,
      TaiLieuActive,
    };
  },
  computed: {
    route() {
      return useRoute();
    },
    isCourseActive() {
      return this.route.name === "Course";
    },
    isCompetisionActive() {
      return this.route.name === "Competision";
    },
    isTaiLieuActive() {
      return this.route.name === "TaiLieu";
    },
  },
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronUpIcon,
  },
};
</script>
