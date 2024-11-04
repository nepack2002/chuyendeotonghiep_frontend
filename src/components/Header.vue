

<template>
  <div class="sticky top-0 z-[1000] h-14">
    <div class="bg-white">
      <div class="container mx-auto">
        <div class="grid grid-cols-10 gap-3 max-lg:flex max-lg:justify-between items-center">
          <div class="col-span-2 flex items-center justify-center">
            <RouterLink to="/">
              <img
                src="@/assets/images/Logo.svg"
                alt="Logo"
                class="h-8 w-auto max-lg:hidden"
              />
              <img
                src="@/assets/images/LogoMobile.svg"
                alt="Logo"
                class="w-auto lg:hidden"
              />
            </RouterLink>
          </div>
          <div class="col-span-5 max-lg:hidden">
            <ul
              class="flex items-center gap-5 text-[#3C4378] text-base font-normal"
            >
              <li class="px-4 py-4 ">
                <router-link
                  :to="{ name: 'Home' }"
                  active-class="text-[#005ED3] font-semibold"
                >
                  Trang chủ
                </router-link>
              </li>
              <!-- <li class="px-4 py-4 max-xl:px-1">
                <router-link
                  :to="{ name: 'Knowledge' }"
                  active-class="text-[#005ED3] font-semibold"
                  >Knowledge</router-link
                >
              </li> -->
              <!-- <li class="px-2 py-4 max-xl:px-1">
                <router-link to="/" active-class="text-[#005ED3] font-semibold">
                  Kho dữ liệu
                </router-link>
              </li> -->
              <li class="px-4 py-4 max-xl:px-1">
                <router-link
                  :to="{ name: 'DaoTao' }"
                  active-class="text-[#005ED3] font-semibold"
                  >Góc đào tạo
                </router-link>
              </li>
              <li class="px-4 py-4 max-xl:px-1">
                <router-link
                  :to="{ name: 'KhaoSat' }"
                  active-class="text-[#005ED3] font-semibold"
                  >Khảo sát
                </router-link>
              </li>
            </ul>
          </div>
          <div
            class="col-span-3 flex items-center gap-6 max-lg:justify-end justify-end max-md:gap-2 max-lg:hidden"
          >
            <div>
              <img
                src="@/assets/images/Notification.svg"
                alt="Location"
                class="h-6 w-6 max-sm:h-4"
              />
            </div>
            <div class="flex justify-center items-center">
              <img
                src="@/assets/images/Group 21404.svg"
                alt="Group"
                class="w-10 h-6 rounded-md max-sm:h-4"
              />
              <img
                src="@/assets/images/arrow-down.svg"
                alt="Arrow"
                class="max-sm:h-3"
              />
            </div>
            <div class="flex items-center gap-1 relative" v-if="user">
              <div class="w-10 h-10 shrink-0 max-sm:h-6">
                <img
                  src="@/assets/images/Default.svg"
                  alt="Avatar"
                  class=""
                />
              </div>
              <Popover class="relative">
                <PopoverButton class="flex gap-1 items-center outline-none">
                  <p
                    class="text-base font-medium text-[#273266] max-sm:hidden"
                  >
                    {{ user.fullName }}
                  </p>
                  <img
                    src="@/assets/images/arrow-down.svg"
                    alt="Arrow"
                    class="w-4 h-4 cursor-pointer"
                  />
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
                    class="absolute top-9 w-[163px] z-10 right-0 bg-[#FFFFFF] p-2 rounded-[10px]"
                  >
                    <ul>
                      <li
                        class="py-2 px-10px bg-[#EDF5FF] text-[#005ED3] text-base font-medium rounded-md max-sm:text-xs max-sm:px-2 max-sm:py-1"
                      >
                        Hồ sơ cá nhân
                      </li>
                      <li
                        class="py-2 px-10px text-[#636B90] text-base font-normal rounded-md max-sm:text-xs max-sm:px-2 max-sm:py-1"
                      >
                        Khoá học của tôi
                      </li>
                      <li
                        class="py-2 px-10px text-[#636B90] text-base font-normal rounded-md max-sm:text-xs max-sm:px-2 max-sm:py-1"
                      >
                        Cuộc thi của tôi
                      </li>
                      <li
                        class="py-2 px-10px text-[#636B90] text-base font-normal rounded-md max-sm:text-xs max-sm:px-2 max-sm:py-1"
                      >
                        Khảo sát của tôi
                      </li>
                      <li
                      @click="handleLogout"
                        class="py-2 px-10px text-[#FB324A] text-base font-normal rounded-md max-sm:text-xs max-sm:px-2 max-sm:py-1"
                      >
                        Đăng xuất
                      </li>
                    </ul>
                  </PopoverPanel>
                </transition>
              </Popover>
            </div>
            <div v-else>
                <router-link  :to="{ name: 'DangNhap' }" class="px-4 py-2 bg-[#005ED3] rounded-lg text-white">Đăng nhập</router-link>
            </div>
          </div>
          <MobileMenu/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import MobileMenu from "@/components/MobileMenu.vue";
import { mapState, mapActions } from 'pinia';
import { useAuthStore } from '@/stores/auth';

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    MobileMenu,
  },
 computed: {
    // Sử dụng mapState để lấy state từ Pinia
    ...mapState(useAuthStore, ['user']),
  },
  methods: {
    // Sử dụng mapActions để lấy các hành động từ store
    ...mapActions(useAuthStore, ['logout','refreshTokenn']),
  handleLogout() {
      this.logout(); // Call the logout action
    },
  },
};
</script>