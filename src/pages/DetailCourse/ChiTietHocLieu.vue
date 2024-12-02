<template>
  <Breadcrumb :items="breadcrumbItems" />
  <div class="bg-white pt-8 max-md:pt-3 max-md:min-h-[1000px] min-h-screen">
    <div class="container mx-auto">
      <p
        class="text-font28 max-md:text-font18 text-color-text-1 font-bold mb-5 max-md:mb-3"
      >
        {{ detail.name }}
      </p>
      <div
        class="flex max-md:flex-col gap-[25px] max-md:gap-4 text-lg max-md:text-base"
      >
        <div class="md:w-[70%]">
          <video
            controls
            :src="detail.context"
            alt="Video bài học"
            class="h-full w-full object-cover"
          />
        </div>
        <div class="md:w-[30%] flex-col space-y-4 max-md:space-y-2">
          <div
            class="p-3 max-md:p-2 flex-col max-md:flex max-md:flex-row max-md:items-center max-md:justify-between bg-orange-background rounded-lg"
          >
            <div class="flex items-center gap-x-2 max-md:gap-x-1 md:mb-1">
              <img src="@/assets/icon/calendar-2.svg" alt="" />
              <p
                class="font-normal text-color-text-1 max-md:after:content-[':']"
              >
                Ngày đăng
              </p>
            </div>
            <div class="pl-8 text-orange-text font-semibold">
              {{ detail.createDate }}
            </div>
          </div>
        </div>
      </div>
      <Lesson :lessons="lessonsData" :process="courseDetail" :slug="slugs" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Breadcrumb from "@/components/global/Breadcrumb.vue";
import Lesson from "./Lesson.vue";
export default {
  components: {
    Breadcrumb,
    Lesson,
  },
  data() {
    return {
      breadcrumbItems: [
        { label: "Trang chủ", link: "Home" },
        { label: "Khóa học", link: "Course" },
        { label: "Chi tiết khóa học", link: "" },
      ],
      detail: {
        name: "",
        specialization: "",
        department: "",
        user: "",
        createDate: "",
        description: "",
        context: "",
      },
      lessonsData: [],
      docData: [],
      loading: true,
      error: null,
      slugs: this.$route.params.slug,
    };
  },
  async mounted() {
    await this.fetchData();
  },
  watch: {
    // Theo dõi sự thay đổi của id trong route
    "$route.params.id": {
      handler() {
        this.fetchData(); // Gọi lại API khi id thay đổi
      },
      immediate: true, // Gọi ngay lần đầu
    },
  },
  methods: {
    async fetchData() {
      const { slug, id } = this.$route.params;

      this.loading = true;
      try {
        // Gọi API chi tiết bài học
        const lessonDetailResponse = await axios.get(
          `/material/lesson/${slug}/${id}`
        );
        const lessonDetail = lessonDetailResponse.data.data;

        this.detail = {
          name: lessonDetail.name,
          createDate: new Date(lessonDetail.createdAt).toLocaleDateString(
            "vi-VN"
          ),
          description: lessonDetail.description,
          context: "http://localhost:5000/videos/" + lessonDetail.context,
        };

        // Gọi API chi tiết khóa học (sau khi gọi xong API chi tiết bài học)
        const courseResponse = await axios.get(`/course/${slug}`);
        this.courseDetail = courseResponse.data.data.process;

        // Gọi API danh sách bài học (sau khi gọi xong API chi tiết khóa học)
        const lessonsResponse = await axios.get(
          `/material/list-lesson/${slug}`
        );
        this.lessonsData = lessonsResponse.data.data.lessons;
      } catch (error) {
        this.error = error.message;
        console.error("Error fetching data:", error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
