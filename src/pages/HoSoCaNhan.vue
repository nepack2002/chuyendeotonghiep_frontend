<template>
  <Breadcrumb :items="breadcrumbItems" />
  <div class="bg-[#f5f5f5] pt-10 max-lg:pt-0 lg:pb-10">
    <div class="container mx-auto w-full">
      <div class="bg-white px-5">
        <!--============== Dòng đầu ================-->
        <div
          class="flex items-center justify-between py-4 max-lg:py-3 uppercase text-color-text-1 text-xl max-lg:text-base font-semibold max-lg:border-b border-line first-letter:uppercase"
        >
          <p>Thông tin sinh viên</p>
          <Menu as="div" class="relative inline-block lg:hidden h-6">
            <MenuButton>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 3C10.9 3 10 3.9 10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3Z"
                  fill="rgb(var(--color-primary-text))"
                />
                <path
                  d="M12 17C10.9 17 10 17.9 10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17Z"
                  fill="rgb(var(--color-primary-text))"
                />
                <path
                  d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
                  fill="rgb(var(--color-primary-text))"
                />
              </svg>
            </MenuButton>
            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <MenuItems
                class="absolute right-0 mt-2 w-[281px] origin-top-right rounded-md bg-white z-50 shadow-shadow-more"
              >
                <div class="px-1 py-1">
                  <MenuItem v-slot="{ active }">
                    <button
                      @click="$refs.changePassword.openModal()"
                      class="flex items-center gap-2 py-2 px-2 rounded-lg text-base w-full first-letter:uppercase"
                      :class="[
                        active
                          ? 'bg-color-primary-2 text-color-primary-2 font-semibold'
                          : 'text-color-primary-2 font-medium',
                      ]"
                    >
                      <svg
                        :class="{ hidden: !active }"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 10V8C6 4.69 7 2 12 2C17 2 18 4.69 18 8V10"
                          stroke="rgb(var(--color-primary-text))"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 18.5C13.3807 18.5 14.5 17.3807 14.5 16C14.5 14.6193 13.3807 13.5 12 13.5C10.6193 13.5 9.5 14.6193 9.5 16C9.5 17.3807 10.6193 18.5 12 18.5Z"
                          stroke="rgb(var(--color-primary-text))"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17 22H7C3 22 2 21 2 17V15C2 11 3 10 7 10H17C21 10 22 11 22 15V17C22 21 21 22 17 22Z"
                          stroke="rgb(var(--color-primary-text))"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <img
                        src="@/assets/icon/lock-neutral4.svg"
                        alt=""
                        class="w-5 h-5"
                        :class="{ hidden: active }"
                      />
                      Đổi mật khẩu
                    </button>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>

          <div class="ml-auto flex items-center gap-x-3 max-lg:hidden">
            <button
              @click="$refs.changePassword.openModal()"
              class="flex items-center justify-center gap-2 py-2 px-3 font-semibold text-base rounded-lg border border-color-primary-2 hover:bg-color-primary-2/[0.1]"
            >
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 10V8C6 4.69 7 2 12 2C17 2 18 4.69 18 8V10"
                    stroke="rgb(var(--color-primary-text))"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 18.5C13.3807 18.5 14.5 17.3807 14.5 16C14.5 14.6193 13.3807 13.5 12 13.5C10.6193 13.5 9.5 14.6193 9.5 16C9.5 17.3807 10.6193 18.5 12 18.5Z"
                    stroke="rgb(var(--color-primary-text))"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17 22H7C3 22 2 21 2 17V15C2 11 3 10 7 10H17C21 10 22 11 22 15V17C22 21 21 22 17 22Z"
                    stroke="rgb(var(--color-primary-text))"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <p class="text-start first-letter:uppercase text-color-primary-2">
                Đổi mật khẩu
              </p>
            </button>
          </div>
        </div>
        <!--============== Dòng đầu ================-->

        <!--============== Dòng 2 bên trái ================-->
        <div class="lg:border-t border-line py-4 flex gap-x-12 max-lg:flex-col">
          <div
            class="flex flex-col space-y-3 text-center max-lg:items-center max-lg:mb-2"
          >
            <div class="mx-[10px]">
              <img
                :src="userAvatar"
                alt="img"
                class="max-h-[180px] max-w-[180px] min-w-[180px] rounded-full ob object-cover shadow-[0_7px_8px_1px_rgba(142,142,142,0.08)]"
              />
            </div>
            <p class="text-lg max-lg:text-base text-color-text-1 font-medium">
              {{ user.fullName }}
            </p>
          </div>
          <!--============== Dòng 2 bên trái ================-->
          <div class="w-full flex flex-col">
            <!--============== Dòng 2 bên phải ================-->
            <div
              class="grid grid-cols-3 gap-6 max-lg:gap-0 w-full max-lg:flex max-lg:flex-col"
            >
              <!-- Họ tên -->
              <div
                class="lg:space-y-1 max-lg:flex max-lg:gap-x-2 items-center max-lg:py-3 max-lg:border-b border-line"
              >
                <p
                  class="text-color-text-2 text-base font-normal max-lg:after:content-[':'] w-[105px] first-letter:uppercase"
                >
                  Họ tên
                </p>

                <p
                  class="text-color-text-1 text-base max-lg:text-base font-semibold max-lg:col-span-3"
                >
                  {{ user.fullName }}
                </p>
              </div>

              <!-- Tên đăng nhập -->
              <div
                class="lg:space-y-1 max-lg:flex max-lg:gap-x-2 items-center max-lg:py-3 max-lg:border-b border-line"
              >
                <p
                  class="text-color-text-2 text-base font-normal max-lg:after:content-[':'] w-[105px] first-letter:uppercase text-nowrap"
                >
                  Tên đăng nhập
                </p>
                <p
                  class="text-color-text-1 text-base max-lg:text-base font-semibold max-lg:col-span-3"
                >
                  {{ user.fullName }}
                </p>
              </div>

              <!-- Giới tính -->
              <div
                class="lg:space-y-1 max-lg:flex max-lg:gap-x-2 items-center max-lg:py-3 max-lg:border-b border-line"
              >
                <p
                  class="text-color-text-2 text-base font-normal max-lg:after:content-[':'] w-[105px] first-letter:uppercase"
                >
                  Giới tính
                </p>
                <p
                  class="text-color-text-1 text-base max-lg:text-base font-semibold max-lg:col-span-3"
                >
                  Nữ
                </p>
              </div>

              <!-- Ngày sinh -->
              <div
                class="lg:space-y-1 max-lg:flex max-lg:gap-x-2 items-center max-lg:py-3 max-lg:border-b border-line"
              >
                <p
                  class="text-color-text-2 text-base font-normal max-lg:after:content-[':'] w-[105px] first-letter:uppercase"
                >
                  Ngày sinh
                </p>

                <div
                  class="text-color-text-1 text-base max-lg:text-base font-semibold max-lg:col-span-3"
                >
                  19/09/2002
                </div>
              </div>

              <!-- Số điện thoại -->
              <div
                class="lg:space-y-1 max-lg:flex max-lg:gap-x-2 items-center max-lg:py-3 max-lg:border-b border-line"
              >
                <p
                  class="text-color-text-2 text-base font-normal max-lg:after:content-[':'] w-[105px] first-letter:uppercase"
                >
                  Số điện thoại
                </p>

                <p
                  class="text-color-text-1 text-base max-lg:text-base font-semibold max-lg:col-span-3"
                >
                  0859118855
                </p>
              </div>

              <!-- Email  -->
              <div
                class="lg:space-y-1 max-lg:flex max-lg:gap-x-2 items-center max-lg:py-3 max-lg:border-b border-line"
              >
                <p
                  class="text-color-text-2 text-base font-normal max-lg:after:content-[':'] w-[105px]"
                >
                  Email
                </p>

                <p
                  class="text-color-text-1 text-base max-lg:text-base font-semibold max-lg:col-span-3"
                >
                  {{ user.email }}
                </p>
              </div>

              <!-- Mã sinh viên  -->
              <div
                class="lg:space-y-1 max-lg:flex max-lg:gap-x-2 items-center max-lg:py-3 max-lg:border-b border-line"
              >
                <p
                  class="text-color-text-2 text-base font-normal max-lg:after:content-[':'] w-[105px] first-letter:uppercase"
                >
                  Mã sinh viên
                </p>

                <p
                  class="text-color-text-1 text-base max-lg:text-base font-semibold max-lg:col-span-3"
                >
                  A37873
                </p>
              </div>

              <!-- Lớp  -->
              <div
                class="lg:space-y-1 max-lg:flex max-lg:gap-x-2 items-center max-lg:py-3 max-lg:border-b border-line"
              >
                <p
                  class="text-color-text-2 text-base font-normal max-lg:after:content-[':'] w-[105px] first-letter:uppercase"
                >
                  Lớp
                </p>

                <p
                  class="text-color-text-1 text-base max-lg:text-base font-semibold max-lg:col-span-3"
                >
                  TT33H1
                </p>
              </div>

              <!-- Chuyên ngành -->
              <div
                class="lg:space-y-1 max-lg:flex max-lg:gap-x-2 items-center max-lg:py-3 max-lg:border-b border-line"
              >
                <p
                  class="text-color-text-2 text-base font-normal max-lg:after:content-[':'] w-[105px] first-letter:uppercase text-nowrap"
                >
                  Chuyên ngành
                </p>

                <p
                  class="text-color-text-1 text-base max-lg:text-base font-semibold max-lg:col-span-3"
                >
                  Công nghệ thông tin
                </p>
              </div>

              <!-- Khoa -->
              <div
                class="lg:space-y-1 max-lg:flex max-lg:gap-x-2 lg:col-span-2 items-center max-lg:py-3"
              >
                <p
                  class="text-color-text-2 text-base font-normal max-lg:after:content-[':'] max-lg:min-w-[105px] first-letter:uppercase"
                >
                  Khoa
                </p>

                <div
                  class="text-color-text-1 text-base max-lg:text-base font-semibold max-lg:col-span-3"
                >
                  Toán Tin
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Modal ref="changePassword" @close-modal="doClearChangePassword">
    <div
      class="md:min-w-[550px] md:max-w-[550px] max-md:max-w-[343px] p-[20px] bg-white rounded-[10px]"
    >
      <div class="flex flex-col items-center justify-center">
        <div
          class="relative flex items-center justify-center w-[80px] h-[80px]"
        >
          <span
            class="animate-ping absolute inline-flex h-[50px] w-[50px] rounded-full bg-color-primary-2/[0.3] z-0"
          ></span>
          <span
            class="absolute inline-flex h-[58px] w-[58px] rounded-full bg-color-primary-2/[0.7] z-1"
          ></span>
          <img
            alt="notice"
            class="w-[27.5px] h-[27.5px] relative z-10 animate-wiggle"
            src="@/assets/lock-code.svg"
          />
        </div>
        <div
          class="font-semibold text-xl max-md:text-lg first-letter:uppercase mt-4 text-color-text-1"
        >
          Đổi mật khẩu
        </div>
      </div>
      <div class="flex flex-col gap-y-3 mt-4">
        <div class="items-center">
          <label class="text-base text-color-text-1 col-span-2 font-medium">
            Mật khẩu cũ
          </label>
          <div class="col-span-3">
            <div class="relative">
              <FormInput
                v-model="current_password"
                placeholder="Mật khẩu cũ"
                :toggle-password="true"
                field-name="oldPassword"
                input-class="!py-3 mt-1 h-[40px]"
                :type="showOldPassword ? 'text' : 'password'"
              />
              <div
                class="absolute right-3 top-3 text-gray-400"
                @click="showOldPassword = !showOldPassword"
              >
                <img
                  v-if="!showOldPassword"
                  src="@/assets/icon/eye-slash.svg"
                  alt="show password"
                  title="Ẩn"
                  id="show-password"
                  class=""
                />
                <img
                  v-if="showOldPassword"
                  src="@/assets/icon/eye-pass.svg"
                  alt="show password"
                  title="Hiện"
                  id="show-password"
                  class=""
                />
              </div>
            </div>
          </div>
        </div>
        <div class="items-center">
          <label class="text-base text-color-text-1 col-span-2 font-medium"
            >Mật khẩu mới
          </label>
          <div class="relative col-span-3">
            <FormInput
              v-model="new_password"
              placeholder="Mật khẩu mới"
              :toggle-password="true"
              field-name="password"
              input-class="!py-3 mt-1 h-[40px]"
              :type="showNewPassword ? 'text' : 'password'"
            />
            <div
              class="absolute right-3 top-3 text-gray-400"
              @click="showNewPassword = !showNewPassword"
            >
              <img
                v-if="!showNewPassword"
                src="@/assets/icon/eye-slash.svg"
                alt="show password"
                title="Ẩn"
                id="show-password"
                class=""
              />
              <img
                v-if="showNewPassword"
                src="@/assets/icon/eye-pass.svg"
                alt="show password"
                title="Hiện"
                id="show-password"
                class=""
              />
            </div>
          </div>
        </div>
        <div class="items-center">
          <label class="text-base text-color-text-1 col-span-2 font-medium"
            >Mật lại mật khẩu
          </label>
          <div class="relative col-span-3">
            <FormInput
              v-model="confirm_password"
              placeholder="Mật khẩu mới"
              :toggle-password="true"
              field-name="password"
              input-class="!py-3 mt-1 h-[40px]"
              :type="showRePassword ? 'text' : 'password'"
            />
            <div
              class="absolute right-3 top-3 text-gray-400"
              @click="showRePassword = !showRePassword"
            >
              <img
                v-if="!showRePassword"
                src="@/assets/icon/eye-slash.svg"
                alt="show password"
                title="Ẩn"
                id="show-password"
                class=""
              />
              <img
                v-if="showRePassword"
                src="@/assets/icon/eye-pass.svg"
                alt="show password"
                title="Hiện"
                id="show-password"
                class=""
              />
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center mx-auto gap-x-4 mt-2">
          <button
            :disabled="isSaving"
            class="flex items-center justify-center max-w-[160px] md:min-w-[160px] max-md:min-w-[140px] gap-x-3 hover:opacity-80 rounded-lg border border-color-primary-2 bg-opacity-10 py-2 text-base text-color-primary-2 font-semibold col-span-1"
            @click="$refs.changePassword.closeModal()"
          >
            <span>Hủy</span>
          </button>
          <button
            :disabled="isSaving"
            @click="doChangePassword()"
            class="flex items-center justify-center max-w-[160px] md:min-w-[160px] max-md:min-w-[140px] gap-x-3 hover:opacity-80 rounded-lg bg-color-primary-2 py-2 text-[15px] text-white font-semibold"
          >
            <span v-if="isSaving" class="loader loader-white" />
            <span>Lưu</span>
          </button>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script>
import Breadcrumb from "@/components/global/Breadcrumb.vue";
import { mapActions, mapState } from "pinia";
import FormInput from "@/components/global/FormInput.vue";
import { useAuthStore } from "@/stores/auth";
import Modal from "@/components/global/Modal.vue";

import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import axios from "axios";

export default {
  components: {
    Breadcrumb,
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    Modal,
    FormInput,
  },
  data: function () {
    return {
      showOldPassword: false,
      showNewPassword: false,
      showRePassword: false,
      confirm_password: "",
      new_password: "",
      current_password: "",
      isSaving: false,
      image: {},
      // toast: useToast(),
      breadcrumbItems: [
        { label: "Trang chủ", link: "Home" },
        { label: "Hồ sơ cá nhân", link: "HoSoCaNhan" },
      ],
    };
  },
  computed: {
    ...mapState(useAuthStore, ["user"]),
    userAvatar() {
      // Nếu user.image có giá trị, thêm tiền tố; nếu không, sử dụng ảnh mặc định.
      return this.image
        ? `http://localhost:5000/${this.user.avatar}`
        : "@/assets/images/Default.svg";
    },
  },
  methods: {
    showSuccessToast() {
      this.toast.success("Đây là thông báo thành công!");
    },
    // Hiển thị thông báo lỗi
    showErrorToast() {
      this.$toast.success("This is a success message!");
    },
    openFormEditPass() {
      this.$refs.changePassword.openModal();
    },
    ...mapActions(useAuthStore, ["logout", "getInfo"]),
    handleLogout() {
      this.logout(); // Call the logout action
    },
    doChangePassword() {
      this.isSaving = true;
      axios
        .put("/student/my_info/change_password", {
          current_password: this.current_password,
          new_password: this.new_password,
          confirm_password: this.confirm_password,
        })
        .then((response) => {
          if (response.status === 200) {
            this.logout();
            this.$toast.success("Đổi mật khẩu thành công!");
          } else {
            this.$toast.error(response.data.error || "Đã có lỗi xảy ra.");
          }
        })
        .catch((error) => {
          // Kiểm tra nếu có lỗi trong quá trình gọi API
          if (error.response && error.response.data) {
            this.$toast.error(error.response.data.error || "Đã có lỗi xảy ra.");
          } else {
            this.$toast.error("Có lỗi xảy ra khi kết nối tới máy chủ.");
          }
        })
        .finally(() => {
          this.isSaving = false;
        });
    },
    doClearChangePassword() {
      this.current_password = "";
      this.new_password = "";
      this.confirm_password = "";
    },
  },
};
</script>
