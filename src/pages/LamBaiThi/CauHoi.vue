<template>
  <div class="lg:container mx-auto bg-white rounded-lg">
    <div class="border-b border-color-border">
      <div class="flex items-center gap-3 py-3 px-5">
        <img
          src="@/assets/images/message-question-blue.svg"
          alt="Icon"
          class=""
        />
        <p class="text-color-primary text-lg font-semibold">NHÓM CÂU HỎI 1</p>
      </div>
    </div>
    <div class="lg:p-5">
      <div class="border-b border-color-border py-3 max-lg:mx-4">
        <div class="flex justify-between items-center gap-2">
          <p class="text-color-primary text-base font-semibold max-lg:text-sm">
            Câu 1: Phương án xác thực nào kém an toàn nhất cho điện thoại thông
            minh
          </p>
          <div class="flex lg:items-center max-lg:w-4 flex-shrink-0">
            <img src="@/assets/images/archive.svg" class="w-4 h-4" />
            <p class="text-color-purple text-sm max-lg:hidden text-nowrap">
              Đánh dấu
            </p>
          </div>
        </div>
        <div class="flex items-center gap-3 py-2">
          <div
            class="flex items-center gap-2 py-1 px-2 bg-color-red-2 rounded-[44px]"
          >
            <img src="@/assets/images/IconQues.svg" alt="Icon" />
            <p class="text-color-red text-xs font-medium">Câu điểm liệt</p>
          </div>
          <p class="text-color-gray text-sm">(Chọn 1 đán án)</p>
        </div>
        <div class="flex items-center gap-3 py-1">
          <input type="radio" name="answer" id="answer" class="w-5 h-5 max-md:h-4" />
          <label
            for="answer"
            class="text-color-text-1 text-base max-md:text-sm flex-1"
            >A. Mã PIN 6 chữ số</label
          >
        </div>
        <div class="flex items-center gap-3 py-1">
          <input
            type="radio"
            name="answer"
            id="answer"
            class="w-5 h-5 max-md:h-4"
          />
          <label
            for="answer"
            class="text-color-text-1 text-base max-md:text-sm flex-1"
            >B. Mật khẩu hình vẽ</label
          >
        </div>
        <div class="flex items-center gap-3 py-1">
          <input
            type="radio"
            name="answer"
            id="answer"
            class="w-5 h-5 max-md:h-4"
          />
          <label
            for="answer"
            class="text-color-text-1 text-base max-md:text-sm flex-1"
            >C. Mã PIN 4 chữ số</label
          >
        </div>
        <div class="flex items-center gap-3 py-1">
          <input
            type="radio"
            name="answer"
            id="answer"
            class="w-5 h-5 max-md:h-4"
          />
          <label
            for="answer"
            class="text-color-text-1 text-base max-md:text-sm flex-1"
            >D. Vân tay</label
          >
        </div>
      </div>

      <div class="border-b border-color-border py-3 max-lg:mx-4">
        <div class="flex justify-between items-center gap-2">
          <p class="text-color-primary text-base font-semibold max-lg:text-sm">
            Câu 2: Các biện pháp để đảm bảo an toàn trong giao dịch ngân hàng
          </p>
          <div class="flex lg:items-center max-lg:w-4 flex-shrink-0">
            <img src="@/assets/images/archive.svg" class="w-4 h-4" />
            <p class="text-color-purple text-sm max-lg:hidden text-nowrap">
              Đánh dấu
            </p>
          </div>
        </div>
        <div class="flex items-center gap-3 py-2">
          <p class="text-color-gray text-sm">(Chọn nhiều đáp án)</p>
        </div>
        <div class="flex items-center gap-3 py-1">
          <input
            type="checkbox"
            name="answer"
            id="answer"
            class="w-5 h-5 max-md:h-4"
          />
          <label
            for="answer"
            class="text-color-text-1 text-base max-md:text-sm flex-1"
          >
            A. Chuyển tiền cho bạn bè, người thân qua SMS/Mail/Chat ngay lập tức
            khi được yêu cầu</label
          >
        </div>
        <div class="flex items-center gap-3 py-1">
          <input
            type="checkbox"
            name="answer"
            id="answer"
            class="w-5 h-5 max-md:h-4"
          />
          <label
            for="answer"
            class="text-color-text-1 text-base max-md:text-sm flex-1"
          >
            B. Kiêm tra kỹ cây ATM trước kho rút tiền</label
          >
        </div>
        <div class="flex items-center gap-3 py-1">
          <input
            type="checkbox"
            name="answer"
            id="answer"
            class="w-5 h-5 max-md:h-4"
          />
          <label
            for="answer"
            class="text-color-text-1 text-base max-md:text-sm flex-1"
          >
            C. Khoá thẻ sau khi giao dịch</label
          >
        </div>
        <div class="flex items-center gap-3 py-1">
          <input
            type="checkbox"
            name="answer"
            id="answer"
            class="w-5 h-5 max-md:h-4"
          />
          <label
            for="answer"
            class="text-color-text-1 text-base max-md:text-sm flex-1"
          >
            D. Kiểm tra đường link giao dịch trên trình duyệt web sau khi chuyển
            tiền</label
          >
        </div>
      </div>

      <div class="flex justify-center gap-2 py-3 max-lg:hidden">
        <img src="@/assets/images/arrow-square-left.svg" alt="Prev" />
        <button
          class="bg-color-primary-2 px-3 py-1 rounded-lg text-white text-sm font-normal border border-color-button-change-slide"
        >
          1
        </button>
        <button
          class="bg-color-white px-3 py-1 rounded-lg text-color-text-1 text-sm font-normal border border-color-button-change-slide"
        >
          2
        </button>
        <button
          class="bg-color-white px-3 py-1 rounded-lg text-color-text-1 text-sm font-normal border border-color-button-change-slide"
        >
          3
        </button>
        <button
          class="bg-color-white px-3 py-1 rounded-lg text-color-text-1 text-sm font-normal border border-color-button-change-slide"
        >
          ...
        </button>
        <img src="@/assets/images/arrow-square-right.svg" alt="Next" />
      </div>
      <div class="bg-white px-4 py-3 lg:hidden text-center">
        <div class="">
          <Popover class="h-[42px]">
            <PopoverButton class="focus:outline-none flex justify-between items-center w-full">
              
                <div class="font-bold text-font20lh text-red-500 flex items-center gap-1"  @click.stop>
                    <img src="@/assets/images/clock-red.svg" alt="">04:40</div>
                <div
                  class="text-color-primary-2 flex items-center gap-1 font-semibold text-font14"
                >
                  <p class="py-[9px]">Xem danh sách câu hỏi</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 15.75 7.5-7.5 7.5 7.5"
                    />
                  </svg>
                </div>
              
            </PopoverButton>
            <transition
              enter-active-class="transition duration-700 ease-out"
              enter-from-class="translate-y-4 opacity-0"
              enter-to-class="translate-y-0 opacity-100"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="translate-y-0 opacity-100"
              leave-to-class="translate-y-4 opacity-0"
            >
              <PopoverPanel
                class="z-50 fixed top-0 left-0 w-full h-full bg-white"
              >
                <div
                  class="flex justify-between border-b border-color-border py-3 px-4"
                >
                  <p class="font-bold text-font20lh text-color-primary">
                    Danh sách câu hỏi
                  </p>

                  <PopoverButton class="focus:outline-none"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6 text-neutral-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </PopoverButton>
                </div>
                <div class="mt-7 container mx-auto">
                  <div class="font-bold text-font28lh text-red-500 flex items-center gap-1 justify-center">
                     <img class="w-9" src="@/assets/images/clock-red.svg" alt="">04:40
                  </div>
                  <div class="grid grid-cols-7 gap-2 mt-5 text-font14">
                    <button
                      class="py-[9px] px-2 bg-color-primary-2 w-10 h-10 text-center mx-auto text-white rounded-lg relative font-semibold"
                    >
                      1
                      <img
                        src="@/assets/images/Union.svg"
                        alt="Icon"
                        class="absolute top-0 right-1"
                      />
                    </button>
                    <button
                      class="py-[9px] px-2 bg-color-primary-2 w-10 h-10 text-center mx-auto text-white rounded-lg relative font-semibold"
                    >
                      2
                      <img
                        src="@/assets/images/Union.svg"
                        alt="Icon"
                        class="absolute top-0 right-1"
                      />
                    </button>
                    <button
                      class="py-[9px] px-2 bg-color-primary-2 w-10 h-10 text-center mx-auto text-white rounded-lg relative font-semibold"
                    >
                      3
                      <img
                        src="@/assets/images/Union.svg"
                        alt="Icon"
                        class="absolute top-0 right-1"
                      />
                    </button>
                    <button
                      class="py-[9px] px-2 bg-color-primary-2 w-10 h-10 text-center mx-auto text-white rounded-lg relative font-semibold"
                    >
                      4
                      <img
                        src="@/assets/images/Union.svg"
                        alt="Icon"
                        class="absolute top-0 right-1"
                      />
                    </button>
                    <button
                      class="py-[9px] px-2 bg-color-primary-2 w-10 h-10 text-center mx-auto text-white rounded-lg relative font-semibold"
                    >
                      5
                      <img
                        src="@/assets/images/Union.svg"
                        alt="Icon"
                        class="absolute mx-auto top-0 right-1"
                      />
                    </button>
                    <button
                      class="py-[9px] px-2 bg-color-primary-2 w-10 h-10 text-center mx-auto text-white rounded-lg relative font-semibold"
                    >
                      6
                      <img
                        src="@/assets/images/Union.svg"
                        alt="Icon"
                        class="absolute mx-auto top-0 right-1"
                      />
                    </button>
                    <button
                      class="py-[9px] px-2 bg-white w-10 h-10 text-center mx-auto text-color-primary border border-color-border rounded-lg relative font-semibold"
                    >
                      7
                      <!-- <img src="@/assets/images/Union.svg" alt="Icon" class="absolute top-0 right-1"> -->
                    </button>
                  </div>
                  <div
                    class="flex items-start bg-color-orange-2 p-2 rounded-md border border-color-orange-1 gap-2 my-4"
                  >
                    <img
                      src="@/assets/images/info-circle.svg"
                      alt="Icon"
                      class="h-5 w-5"
                    />
                    <p class="text-color-primary text-xs text-start">
                      Thời gian được tính từ lúc bắt đầu làm bài. Hết thời gian
                      quy định hệ thống sẽ tự động nộp bài
                    </p>
                  </div>
                  <button
                    @click="onSubmit"
                    class="w-full py-[9px] bg-color-primary-2 rounded-lg text-white font-semibold text-sm"
                  >
                    <p>Gửi kết quả</p>
                  </button>
                  <div
                    v-if="openThongBao"
                    class="fixed top-0 left-0 right-0 bottom-0 bg-[#000] bg-modal flex justify-center items-center z-50"
                  >
                    <PopupThongBao @close="onCloseThongBao" @submit="nopBai" />
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
        </div>
        <!-- Nút Gửi Kết Quả -->
        <button
          class="w-full py-10px bg-color-primary-2 rounded-lg"
          @click="onSubmit2"
        >
          <p
            class="max-md:text-font14 text-color-white text-base font-semibold"
          >
            Gửi kết quả
          </p>
        </button>
      </div>

      <!-- Popup Thông Báo -->
      <div
        v-if="openThongBao2"
        class="fixed top-0 left-0 right-0 bottom-0 bg-[#000] bg-modal flex justify-center items-center z-50"
      >
        <PopupThongBao @close="onCloseThongBao2" @submit="nopBai2" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import PopupThongBao from "./PopupThongBao.vue";
import PopupCanhBao from "./PopupCanhBao.vue";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
const openThongBao = ref(false);
const openNopBaiThanhCong = ref(false);
const openThongBao2 = ref(false);
const openNopBaiThanhCong2 = ref(false);
function onSubmit() {
  openThongBao.value = true;
}
function onSubmit2() {
  openThongBao2.value = true;
}

function onCloseThongBao() {
  openThongBao.value = false;
}
function onCloseThongBao2() {
  openThongBao2.value = false;
}

function nopBai() {
  openNopBaiThanhCong.value = true;
  openThongBao.value = false;
}
function nopBai2() {
  openNopBaiThanhCong2.value = true;
  openThongBao2.value = false;
}

function onCloseNopBaiThanhCong() {
  openNopBaiThanhCong.value = false;
}
function onCloseNopBaiThanhCong2() {
  openNopBaiThanhCong2.value = false;
}
</script>
