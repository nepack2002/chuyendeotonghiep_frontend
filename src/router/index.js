import { createRouter, createWebHistory } from "vue-router";
import TrangChu from "../pages/TrangChu/TrangChu.vue";
import KhoaHoc from "../pages/KhoaHoc/KhoaHoc.vue";
import DetailCourse from "../pages/DetailCourse/Detail.vue";
import Competision from "../pages/Competition/Competision.vue";
import DetailCompetision from "../pages/DetailCompetision/Detail.vue";
import LamBaiThi from "../pages/LamBaiThi/LamBaiThi.vue";
import XemDapAn from "../pages/XemDapAn/XemDapAn.vue";
import Video from "../pages/Learn/Video.vue";
import Exam from "../pages/Learn/Exam.vue";
import KhaoSat from "@/pages/KhaoSat/KhaoSat.vue";
import ChiTietKhaoSat from "@/pages/ChiTietKhaoSat/ChiTietKhaoSat.vue";
import TaiLieu from "@/pages/TaiLieu/TaiLieu.vue";
import Knowledge from "@/pages/Knowledge/Knowledge.vue";
import DaoTao from "@/pages/Dung_Chung/DaoTao.vue";
import Banner from "@/pages/Dung_Chung/Banner.vue";
import DangNhap from "../pages/DangNhap/DangNhap.vue";
import Page404 from "@/pages/404.vue";
const routes = [
   {
     path: '/:pathMatch(.*)*',
     name: "Page404",
     component: Page404 ,
     meta: {
       hideNavigation: true,
       routeName: {
         i18n: "not_found",
         label: "Không tìm thấy"
       }
     }
   },
  {
    path: "/",
    component: TrangChu,
    name: "Home",
  },
  {
    path: "/dang-nhap",
    component: DangNhap,
    name: "DangNhap",
    meta: {
      layout: "dangnhap",
    },
  },
  {
    path: "/course-detail/:slug?",
    component: DetailCourse,
    name: "DetailCourse",
    beforeEnter: (to, from, next) => {
      if (!to.params.slug) {
        next({ path: "/" });
      } else {
        next();
      }
    },
  },
  {
    path: "/learn-video",
    component: Video,
    name: "learn-video",
    meta: {
      layout: "content-learn",
    },
  },
  {
    path: "/learn-exam",
    component: Exam,
    meta: {
      layout: "content-learn",
    },
  },
  {
    path: "/competision",
    component: Competision,
  },
  {
    path: "/competision-detail/:id",
    component: DetailCompetision,
    name: "competision-detail",
    meta: {
      layout: "competision",
    },
  },
  {
    path: "/competision-exam/:id",
    name: "LamBaiThi",
    component: LamBaiThi,
    meta: {
      layout: "competision",
    },
  },
  {
    path: "/competision-result/:id",
    name: "XemDapAn",
    component: XemDapAn,
    meta: {
      layout: "competision",
    },
  },
  {
    path: "/khao-sat",
    component: KhaoSat,
    name: "KhaoSat",
  },
  {
    path: "/khao-sat/:id",
    component: ChiTietKhaoSat,
    name: "ChiTietKhaoSat",
    meta: {
      layout: "KhaoSat",
    },
  },
  {
    path: "/knowledge",
    component: Knowledge,
    name: "Knowledge",
  },
  {
    path: "/dao-tao",
    component: DaoTao,
    name: "DaoTao",
    redirect: { name: "TaiLieu" },
    children: [
      {
        path: "",
        name: "Banner",
        component: Banner,
        children: [
          {
            path: "tai-lieu",
            component: TaiLieu,
            name: "TaiLieu",
          },
          {
            path: "khoa-hoc",
            name: "Course",
            component: KhoaHoc,
          },
          {
            path: "competision",
            component: Competision,
            name: "Competision",
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
