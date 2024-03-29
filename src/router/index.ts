import { createRouter, createWebHistory } from "vue-router";

const routes = [
  //{
 //   path: "/about",
 //   name: "about",
 //   icon:"",
  //  title:"",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
 //   component: () =>
 //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  //},
  {
    path: '/TotalBranshSales',
    name: "TotalBranshSales",
    icon:"mdi-chart-line",
    title:"Total Bransh Sales",
    component: () => import('../views/TotalBranshSalesView.vue')
  },  
  {
    path: '/ItemsSales',
    name: "ItemsSales",
    icon:"mdi-chart-areaspline-variant",
    title:"Items Sales",
    component: () => import('../views/ItemsSalesView.vue')
  },  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
