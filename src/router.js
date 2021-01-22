/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  Object Strucutre:
                    path => router path
                    name => router name
                    component(lazy loading) => component to load
                    meta : {
                      rule => which user can have access (ACL)
                      breadcrumb => Add breadcrumb to specific page
                      pageTitle => Display title besides breadcrumb
                    }
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import Vue from "vue";
import Router from "vue-router";
import auth from "@/auth/authService";

import firebase from "firebase/app";
import "firebase/auth";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      // =============================================================================
      // MAIN LAYOUT ROUTES
      // =============================================================================
      path: "",
      component: () => import("./layouts/main/Main.vue"),
      children: [
        // =============================================================================
        // Theme Routes
        // =============================================================================
        {
          path: "/",
          redirect: "/dashboard/analytics"
        },
        {
          path: "/dashboard/analytics",
          name: "dashboardAnalytics",
          component: () => import("./views/DashboardAnalytics.vue"),
          meta: {
            rule: "Manager"
          }
        },

        {
          path: "/dashboard/ecommerce",
          name: "dashboardECommerce",
          component: () => import("./views/DashboardECommerce.vue"),
          meta: {
            rule: "Root"
          }
        },
        // =============================================================================
        // User Routes
        // =============================================================================

        {
          path: "services/users",
          name: "User",
          component: () => import("./views/apps/user/Users"),
          meta: {
            breadcrumb: [
              { title: "Dịch vụ", url: "/" },
              { title: "Người dùng", active: true }
            ],
            pageTitle: "Phân quyền",
            rule: "Root"
          }
        },

        {
          path: "services/users/:email",
          name: "dashboardECommerce",
          component: () => import("./views/apps/user/UserDetail"),
          meta: {
            breadcrumb: [
              { title: "Dịch vụ", url: "/" },
              { title: "Người dùng", active: true }
            ],
            pageTitle: "Phân quyền",
            rule: "Root"
          }
        },
        {
          path: "demo",
          name: "dashboardECommerce",
          component: () =>
            import("./views/forms/form-elements/select/Select.vue"),
          meta: {
            breadcrumb: [
              { title: "Dịch vụ", url: "/" },
              { title: "Người dùng", active: true }
            ],
            pageTitle: "Phân quyền",
            rule: "Root"
          }
        },

        // =============================================================================
        // Application Routes
        // =============================================================================
        {
          path: "/apps/todo",
          name: "todo",
          component: () => import("./views/apps/todo/Todo.vue"),
          meta: {
            rule: "Manager"
          }
        },
        {
          path: "/apps/chat",
          name: "chat",
          component: () => import("./views/apps/chat/Chat.vue"),
          meta: {
            rule: "Manager"
          }
        },
        {
          path: "/apps/email",
          name: "email",
          component: () => import("./views/apps/email/Email.vue"),
          meta: {
            rule: "Manager"
          }
        },
        {
          path: "/apps/calendar/vue-fullcalendar",
          name: "calendarFullCalendar",
          component: () => import("./views/apps/calendar/FullCalendar.vue"),
          meta: {
            rule: "Manager"
          }
        },
        {
          path: "/apps/calendar/vue-simple-calendar",
          name: "calendarSimpleCalendar",
          component: () => import("./views/apps/calendar/SimpleCalendar.vue"),
          meta: {
            rule: "Manager"
          }
        },
        {
          path: "/apps/eCommerce/shop",
          name: "eCommerceShop",
          component: () => import("./views/apps/eCommerce/ECommerceShop.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "eCommerce" },
              { title: "Shop", active: true }
            ],
            pageTitle: "Shop",
            rule: "Manager"
          }
        },
        {
          path: "/apps/eCommerce/wish-list",
          name: "eCommerceWishList",
          component: () =>
            import("./views/apps/eCommerce/ECommerceWishList.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "eCommerce", url: "/apps/eCommerce/shop" },
              { title: "Wish List", active: true }
            ],
            pageTitle: "Wish List",
            rule: "Manager"
          }
        },
        {
          path: "/apps/eCommerce/checkout",
          name: "eCommerceCheckout",
          component: () =>
            import("./views/apps/eCommerce/ECommerceCheckout.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "eCommerce", url: "/apps/eCommerce/shop" },
              { title: "Checkout", active: true }
            ],
            pageTitle: "Checkout",
            rule: "Manager"
          }
        },
        // =============================================================================
        // UI ELEMENTS
        // =============================================================================
        {
          path: "/ui-elements/data-list/list-view",
          name: "dataListListView",
          component: () =>
            import(
              "@/views/ui-elements/data-list/list-view/DataListListView.vue"
            ),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Data List" },
              { title: "List View", active: true }
            ],
            pageTitle: "List View",
            rule: "Manager"
          }
        },
        {
          path: "/ui-elements/data-list/thumb-view",
          name: "dataListThumbView",
          component: () =>
            import(
              "@/views/ui-elements/data-list/thumb-view/DataListThumbView.vue"
            ),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Data List" },
              { title: "Thumb View", active: true }
            ],
            pageTitle: "Thumb View",
            rule: "Manager"
          }
        },
        {
          path: "/ui-elements/grid/vuesax",
          name: "gridVuesax",
          component: () =>
            import("@/views/ui-elements/grid/vuesax/GridVuesax.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Grid" },
              { title: "Vuesax", active: true }
            ],
            pageTitle: "Grid",
            rule: "Manager"
          }
        },
        {
          path: "/ui-elements/grid/tailwind",
          name: "gridTailwind",
          component: () =>
            import("@/views/ui-elements/grid/tailwind/GridTailwind.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Grid" },
              { title: "Tailwind", active: true }
            ],
            pageTitle: "Tailwind Grid",
            rule: "Manager"
          }
        },
        {
          path: "/ui-elements/colors",
          name: "colors",
          component: () => import("./views/ui-elements/colors/Colors.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Colors", active: true }
            ],
            pageTitle: "Colors",
            rule: "Manager"
          }
        },
        {
          path: "/ui-elements/card/basic",
          name: "basicCards",
          component: () => import("./views/ui-elements/card/CardBasic.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Card" },
              { title: "Basic Cards", active: true }
            ],
            pageTitle: "Basic Cards",
            rule: "Manager"
          }
        },
        {
          path: "/ui-elements/card/statistics",
          name: "statisticsCards",
          component: () =>
            import("./views/ui-elements/card/CardStatistics.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Card" },
              { title: "Statistics Cards", active: true }
            ],
            pageTitle: "Statistics Card",
            rule: "Manager"
          }
        },
        {
          path: "/ui-elements/card/analytics",
          name: "analyticsCards",
          component: () => import("./views/ui-elements/card/CardAnalytics.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Card" },
              { title: "Analytics Card", active: true }
            ],
            pageTitle: "Analytics Card",
            rule: "Manager"
          }
        },
        {
          path: "/ui-elements/card/card-actions",
          name: "cardActions",
          component: () => import("./views/ui-elements/card/CardActions.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Card" },
              { title: "Card Actions", active: true }
            ],
            pageTitle: "Card Actions",
            rule: "Manager"
          }
        },
        {
          path: "/ui-elements/card/card-colors",
          name: "cardColors",
          component: () => import("./views/ui-elements/card/CardColors.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Card" },
              { title: "Card Colors", active: true }
            ],
            pageTitle: "Card Colors",
            rule: "Manager"
          }
        },
        {
          path: "/ui-elements/table",
          name: "table",
          component: () => import("./views/ui-elements/table/Table.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Table", active: true }
            ],
            pageTitle: "Table",
            rule: "Manager"
          }
        },
        {
          path: "/ui-elements/ag-grid-table",
          name: "agGridTable",
          component: () =>
            import("./views/ui-elements/ag-grid-table/AgGridTable.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "agGrid Table", active: true }
            ],
            pageTitle: "agGrid Table",
            rule: "Manager"
          }
        },

        // =============================================================================
        // COMPONENT ROUTES
        // =============================================================================
        {
          path: "/components/alert",
          name: "componentAlert",
          component: () => import("@/views/components/vuesax/alert/Alert.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Components" },
              { title: "Alert", active: true }
            ],
            pageTitle: "Alert",
            rule: "Manager"
          }
        },
        {
          path: "/components/avatar",
          name: "componentAvatar",
          component: () =>
            import("@/views/components/vuesax/avatar/Avatar.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Components" },
              { title: "Avatar", active: true }
            ],
            pageTitle: "Avatar",
            rule: "Manager"
          }
        },
        {
          path: "/components/breadcrumb",
          name: "componentBreadcrumb",
          component: () =>
            import("@/views/components/vuesax/breadcrumb/Breadcrumb.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Components" },
              { title: "Breadcrumb", active: true }
            ],
            pageTitle: "Breadcrumb",
            rule: "Manager"
          }
        },
        {
          path: "/components/button",
          name: "componentButton",
          component: () =>
            import("@/views/components/vuesax/button/Button.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Components" },
              { title: "Button", active: true }
            ],
            pageTitle: "Button",
            rule: "Manager"
          }
        },
        {
          path: "/components/button-group",
          name: "componentButtonGroup",
          component: () =>
            import("@/views/components/vuesax/button-group/ButtonGroup.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Components" },
              { title: "Button Group", active: true }
            ],
            pageTitle: "Button Group",
            rule: "Manager"
          }
        },
        {
          path: "/components/chip",
          name: "componentChip",
          component: () => import("@/views/components/vuesax/chip/Chip.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Components" },
              { title: "Chip", active: true }
            ],
            pageTitle: "Chip",
            rule: "Manager"
          }
        },
        {
          path: "/components/collapse",
          name: "componentCollapse",
          component: () =>
            import("@/views/components/vuesax/collapse/Collapse.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Components" },
              { title: "Collapse", active: true }
            ],
            pageTitle: "Collapse",
            rule: "Manager"
          }
        },
        {
          path: "/components/dialogs",
          name: "componentDialog",
          component: () =>
            import("@/views/components/vuesax/dialogs/Dialogs.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Components" },
              { title: "Dialogs", active: true }
            ],
            pageTitle: "Dialogs",
            rule: "Manager"
          }
        },
        {
          path: "/components/divider",
          name: "componentDivider",
          component: () =>
            import("@/views/components/vuesax/divider/Divider.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Components" },
              { title: "Divider", active: true }
            ],
            pageTitle: "Divider",
            rule: "Manager"
          }
        },
        {
          path: "/components/dropdown",
          name: "componentDropDown",
          component: () =>
            import("@/views/components/vuesax/dropdown/Dropdown.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Components" },
              { title: "Dropdown", active: true }
            ],
            pageTitle: "Dropdown",
            rule: "Manager"
          }
        },
        {
          path: "/components/list",
          name: "componentList",
          component: () => import("@/views/components/vuesax/list/List.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Components" },
              { title: "List", active: true }
            ],
            pageTitle: "List",
            rule: "Manager"
          }
        },
        {
          path: "/components/loading",
          name: "componentLoading",
          component: () =>
            import("@/views/components/vuesax/loading/Loading.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Components" },
              { title: "Loading", active: true }
            ],
            pageTitle: "Loading",
            rule: "Manager"
          }
        },
        {
          path: "/components/navbar",
          name: "componentNavbar",
          component: () =>
            import("@/views/components/vuesax/navbar/Navbar.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Components" },
              { title: "Navbar", active: true }
            ],
            pageTitle: "Navbar",
            rule: "Manager"
          }
        },
        {
          path: "/components/notifications",
          name: "componentNotifications",
          component: () =>
            import("@/views/components/vuesax/notifications/Notifications.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Components" },
              { title: "Notifications", active: true }
            ],
            pageTitle: "Notifications",
            rule: "Manager"
          }
        },
        {
          path: "/components/pagination",
          name: "componentPagination",
          component: () =>
            import("@/views/components/vuesax/pagination/Pagination.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Components" },
              { title: "Pagination", active: true }
            ],
            pageTitle: "Pagination",
            rule: "Manager"
          }
        },
        {
          path: "/components/popup",
          name: "componentPopup",
          component: () => import("@/views/components/vuesax/popup/Popup.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Components" },
              { title: "Popup", active: true }
            ],
            pageTitle: "Popup",
            rule: "Manager"
          }
        },
        {
          path: "/components/progress",
          name: "componentProgress",
          component: () =>
            import("@/views/components/vuesax/progress/Progress.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Components" },
              { title: "Progress", active: true }
            ],
            pageTitle: "Progress",
            rule: "Manager"
          }
        },
        {
          path: "/components/sidebar",
          name: "componentSidebar",
          component: () =>
            import("@/views/components/vuesax/sidebar/Sidebar.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Components" },
              { title: "Sidebar", active: true }
            ],
            pageTitle: "Sidebar",
            rule: "Manager"
          }
        },
        {
          path: "/components/slider",
          name: "componentSlider",
          component: () =>
            import("@/views/components/vuesax/slider/Slider.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Components" },
              { title: "Slider", active: true }
            ],
            pageTitle: "Slider",
            rule: "Manager"
          }
        },
        {
          path: "/components/tabs",
          name: "componentTabs",
          component: () => import("@/views/components/vuesax/tabs/Tabs.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Components" },
              { title: "Tabs", active: true }
            ],
            pageTitle: "Tabs",
            rule: "Manager"
          }
        },
        {
          path: "/components/tooltip",
          name: "componentTooltip",
          component: () =>
            import("@/views/components/vuesax/tooltip/Tooltip.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Components" },
              { title: "Tooltip", active: true }
            ],
            pageTitle: "Tooltip",
            rule: "Manager"
          }
        },
        {
          path: "/components/upload",
          name: "componentUpload",
          component: () =>
            import("@/views/components/vuesax/upload/Upload.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Components" },
              { title: "Upload", active: true }
            ],
            pageTitle: "Upload",
            rule: "Manager"
          }
        },

        // =============================================================================
        // FORMS
        // =============================================================================
        // =============================================================================
        // FORM ELEMENTS
        // =============================================================================
        {
          path: "/forms/form-elements/select",
          name: "formElementSelect",
          component: () =>
            import("./views/forms/form-elements/select/Select.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Form Elements" },
              { title: "Select", active: true }
            ],
            pageTitle: "Select",
            rule: "Manager"
          }
        },
        {
          path: "/forms/form-elements/switch",
          name: "formElementSwitch",
          component: () =>
            import("./views/forms/form-elements/switch/Switch.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Form Elements" },
              { title: "Switch", active: true }
            ],
            pageTitle: "Switch",
            rule: "Manager"
          }
        },
        {
          path: "/forms/form-elements/checkbox",
          name: "formElementCheckbox",
          component: () =>
            import("./views/forms/form-elements/checkbox/Checkbox.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Form Elements" },
              { title: "Checkbox", active: true }
            ],
            pageTitle: "Checkbox",
            rule: "Manager"
          }
        },
        {
          path: "/forms/form-elements/radio",
          name: "formElementRadio",
          component: () =>
            import("./views/forms/form-elements/radio/Radio.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Form Elements" },
              { title: "Radio", active: true }
            ],
            pageTitle: "Radio",
            rule: "Manager"
          }
        },
        {
          path: "/forms/form-elements/input",
          name: "formElementInput",
          component: () =>
            import("./views/forms/form-elements/input/Input.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Form Elements" },
              { title: "Input", active: true }
            ],
            pageTitle: "Input",
            rule: "Manager"
          }
        },
        {
          path: "/forms/form-elements/number-input",
          name: "formElementNumberInput",
          component: () =>
            import("./views/forms/form-elements/number-input/NumberInput.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Form Elements" },
              { title: "Number Input", active: true }
            ],
            pageTitle: "Number Input",
            rule: "Manager"
          }
        },
        {
          path: "/forms/form-elements/textarea",
          name: "formElementTextarea",
          component: () =>
            import("./views/forms/form-elements/textarea/Textarea.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Form Elements" },
              { title: "Textarea", active: true }
            ],
            pageTitle: "Textarea",
            rule: "Manager"
          }
        },
        // -------------------------------------------------------------------------------------------------------------------------------------------
        {
          path: "/forms/form-layouts",
          name: "formsFormLayouts",
          component: () => import("@/views/forms/FormLayouts.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Forms" },
              { title: "Form Layouts", active: true }
            ],
            pageTitle: "Form Layouts",
            rule: "Manager"
          }
        },
        {
          path: "/forms/form-wizard",
          name: "extraComponentFormWizard",
          component: () => import("@/views/forms/form-wizard/FormWizard.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Extra Components" },
              { title: "Form Wizard", active: true }
            ],
            pageTitle: "Form Wizard",
            rule: "Manager"
          }
        },
        {
          path: "/forms/form-validation",
          name: "extraComponentFormValidation",
          component: () =>
            import("@/views/forms/form-validation/FormValidation.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Extra Components" },
              { title: "Form Validation", active: true }
            ],
            pageTitle: "Form Validation",
            rule: "Manager"
          }
        },
        {
          path: "/forms/form-input-group",
          name: "extraComponentFormInputGroup",
          component: () =>
            import("@/views/forms/form-input-group/FormInputGroup.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Extra Components" },
              { title: "Form Input Group", active: true }
            ],
            pageTitle: "Form Input Group",
            rule: "Manager"
          }
        },

        // =============================================================================
        // Pages Routes
        // =============================================================================
        {
          path: "/pages/profile",
          name: "pageProfile",
          component: () => import("@/views/pages/Profile.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Pages" },
              { title: "Profile", active: true }
            ],
            pageTitle: "Profile",
            rule: "Manager"
          }
        },
        {
          path: "/pages/faq",
          name: "pageFAQ",
          component: () => import("@/views/pages/Faq.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Pages" },
              { title: "FAQ", active: true }
            ],
            pageTitle: "FAQ",
            rule: "Manager"
          }
        },
        {
          path: "/pages/knowledge-base",
          name: "pageKnowledgeBase",
          component: () => import("@/views/pages/KnowledgeBase.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Pages" },
              { title: "KnowledgeBase", active: true }
            ],
            pageTitle: "KnowledgeBase",
            rule: "Manager"
          }
        },
        {
          path: "/pages/knowledge-base/category",
          name: "pageKnowledgeBaseCategory",
          component: () => import("@/views/pages/KnowledgeBaseCategory.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Pages" },
              { title: "KnowledgeBase", url: "/pages/knowledge-base" },
              { title: "Category", active: true }
            ],
            rule: "Manager"
          }
        },
        {
          path: "/pages/knowledge-base/category/question",
          name: "pageKnowledgeBaseCategoryQuestion",
          component: () =>
            import("@/views/pages/KnowledgeBaseCategoryQuestion.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Pages" },
              { title: "KnowledgeBase", url: "/pages/knowledge-base" },
              { title: "Category", url: "/pages/knowledge-base/category" },
              { title: "Question", active: true }
            ],
            rule: "Manager"
          }
        },
        {
          path: "/pages/search",
          name: "pageSearch",
          component: () => import("@/views/pages/Search.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Pages" },
              { title: "Search", active: true }
            ],
            pageTitle: "Search",
            rule: "Manager"
          }
        },
        {
          path: "/pages/invoice",
          name: "pageInvoice",
          component: () => import("@/views/pages/Invoice.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Pages" },
              { title: "Invoice", active: true }
            ],
            pageTitle: "Invoice",
            rule: "Manager"
          }
        },

        // =============================================================================
        // CHARTS & MAPS
        // =============================================================================
        {
          path: "/charts-and-maps/charts/apex-charts",
          name: "extraComponentChartsApexCharts",
          component: () =>
            import("@/views/charts-and-maps/charts/apex-charts/ApexCharts.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Charts & Maps" },
              { title: "Apex Charts", active: true }
            ],
            pageTitle: "Apex Charts",
            rule: "Manager"
          }
        },
        {
          path: "/charts-and-maps/charts/chartjs",
          name: "extraComponentChartsChartjs",
          component: () =>
            import("@/views/charts-and-maps/charts/chartjs/Chartjs.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Charts & Maps" },
              { title: "chartjs", active: true }
            ],
            pageTitle: "chartjs",
            rule: "Manager"
          }
        },
        {
          path: "/charts-and-maps/charts/echarts",
          name: "extraComponentChartsEcharts",
          component: () =>
            import("@/views/charts-and-maps/charts/echarts/Echarts.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Charts & Maps" },
              { title: "echarts", active: true }
            ],
            pageTitle: "echarts",
            rule: "Manager"
          }
        },
        {
          path: "/charts-and-maps/maps/google-map",
          name: "extraComponentMapsGoogleMap",
          component: () =>
            import("@/views/charts-and-maps/maps/google-map/GoogleMap.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Charts & Maps" },
              { title: "Google Map", active: true }
            ],
            pageTitle: "Google Map",
            rule: "Manager"
          }
        },

        // =============================================================================
        // EXTENSIONS
        // =============================================================================
        {
          path: "/extensions/select",
          name: "extraComponentSelect",
          component: () =>
            import("@/views/components/extra-components/select/Select.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Extra Components" },
              { title: "Select", active: true }
            ],
            pageTitle: "Select",
            rule: "Manager"
          }
        },
        {
          path: "/extensions/quill-editor",
          name: "extraComponentQuillEditor",
          component: () =>
            import(
              "@/views/components/extra-components/quill-editor/QuillEditor.vue"
            ),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Extra Components" },
              { title: "Quill Editor", active: true }
            ],
            pageTitle: "Quill Editor",
            rule: "Manager"
          }
        },
        {
          path: "/extensions/drag-and-drop",
          name: "extraComponentDragAndDrop",
          component: () =>
            import(
              "@/views/components/extra-components/drag-and-drop/DragAndDrop.vue"
            ),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Extra Components" },
              { title: "Drag & Drop", active: true }
            ],
            pageTitle: "Drag & Drop",
            rule: "Manager"
          }
        },
        {
          path: "/extensions/datepicker",
          name: "extraComponentDatepicker",
          component: () =>
            import(
              "@/views/components/extra-components/datepicker/Datepicker.vue"
            ),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Extra Components" },
              { title: "Datepicker", active: true }
            ],
            pageTitle: "Datepicker",
            rule: "Manager"
          }
        },
        {
          path: "/extensions/datetime-picker",
          name: "extraComponentDatetimePicker",
          component: () =>
            import(
              "@/views/components/extra-components/datetime-picker/DatetimePicker.vue"
            ),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Extra Components" },
              { title: "Datetime Picker", active: true }
            ],
            pageTitle: "Datetime Picker",
            rule: "Manager"
          }
        },
        {
          path: "/extensions/access-control-editor",
          name: "extraComponentAccessControlEditor",
          component: () =>
            import(
              "@/views/components/extra-components/access-control/AccessControlEditor.vue"
            ),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Extensions" },
              { title: "Access Control" },
              { title: "Editor View", active: true }
            ],
            pageTitle: "Editor View",
            rule: "Manager"
          }
        },
        {
          path: "/extensions/access-control-admin",
          name: "extraComponentAccessControlOnlyAdmin",
          component: () =>
            import(
              "@/views/components/extra-components/access-control/AccessControlAdmin.vue"
            ),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Extensions" },
              { title: "Access Control" },
              { title: "Admin View", active: true }
            ],
            pageTitle: "Admin View",
            rule: "Root"
          }
        },
        {
          path: "/extensions/i18n",
          name: "extraComponentI18n",
          component: () =>
            import("@/views/components/extra-components/I18n.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Extensions" },
              { title: "I18n", active: true }
            ],
            pageTitle: "I18n",
            rule: "Manager"
          }
        },
        {
          path: "/extensions/carousel",
          name: "extraComponentCarousel",
          component: () =>
            import("@/views/components/extra-components/carousel/Carousel.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Extensions" },
              { title: "Carousel", active: true }
            ],
            pageTitle: "Carousel",
            rule: "Manager"
          }
        },
        {
          path: "/extensions/clipboard",
          name: "extraComponentClipboard",
          component: () =>
            import(
              "@/views/components/extra-components/clipboard/Clipboard.vue"
            ),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Extensions" },
              { title: "Clipboard", active: true }
            ],
            pageTitle: "Clipboard",
            rule: "Manager"
          }
        },
        {
          path: "/extensions/context-menu",
          name: "extraComponentContextMenu",
          component: () =>
            import(
              "@/views/components/extra-components/context-menu/ContextMenu.vue"
            ),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Extensions" },
              { title: "Context Menu", active: true }
            ],
            pageTitle: "Context Menu",
            rule: "Manager"
          }
        },
        {
          path: "/extensions/star-ratings",
          name: "extraComponentStarRatings",
          component: () =>
            import(
              "@/views/components/extra-components/star-ratings/StarRatings.vue"
            ),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Extensions" },
              { title: "Star Ratings", active: true }
            ],
            pageTitle: "Star Ratings",
            rule: "Manager"
          }
        },
        {
          path: "/extensions/autocomplete",
          name: "extraComponentAutocomplete",
          component: () =>
            import(
              "@/views/components/extra-components/autocomplete/Autocomplete.vue"
            ),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Extensions" },
              { title: "Autocomplete", active: true }
            ],
            pageTitle: "Autocomplete",
            rule: "Manager"
          }
        },
        {
          path: "/extensions/tree",
          name: "extraComponentTree",
          component: () =>
            import("@/views/components/extra-components/tree/Tree.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Extensions" },
              { title: "Tree", active: true }
            ],
            pageTitle: "Tree",
            rule: "Manager"
          }
        }
      ]
    },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
    {
      path: "",
      component: () => import("@/layouts/full-page/FullPage.vue"),
      children: [
        // =============================================================================
        // PAGES
        // =============================================================================
        {
          path: "/callback",
          name: "authCallback",
          component: () => import("@/views/Callback.vue"),
          meta: {
            rule: "Manager"
          }
        },
        {
          path: "/pages/login",
          name: "pageLogin",
          component: () => import("@/views/pages/Login.vue"),
          meta: {
            rule: "Root"
          }
        },
        {
          path: "/pages/register",
          name: "pageRegister",
          component: () => import("@/views/pages/Register.vue"),
          meta: {
            rule: "Manager"
          }
        },
        {
          path: "/pages/forgot-password",
          name: "pageForgotPassword",
          component: () => import("@/views/pages/ForgotPassword.vue"),
          meta: {
            rule: "Manager"
          }
        },
        {
          path: "/pages/reset-password",
          name: "pageResetPassword",
          component: () => import("@/views/pages/ResetPassword.vue"),
          meta: {
            rule: "Manager"
          }
        },
        {
          path: "/pages/lock-screen",
          name: "pageLockScreen",
          component: () => import("@/views/pages/LockScreen.vue"),
          meta: {
            rule: "Manager"
          }
        },
        {
          path: "/pages/comingsoon",
          name: "pageComingSoon",
          component: () => import("@/views/pages/ComingSoon.vue"),
          meta: {
            rule: "Manager"
          }
        },
        {
          path: "/pages/error-404",
          name: "pageError404",
          component: () => import("@/views/pages/Error404.vue"),
          meta: {
            rule: "Manager"
          }
        },
        {
          path: "/pages/error-500",
          name: "pageError500",
          component: () => import("@/views/pages/Error500.vue"),
          meta: {
            rule: "Manager"
          }
        },
        {
          path: "/pages/not-authorized",
          name: "pageNotAuthorized",
          component: () => import("@/views/pages/NotAuthorized.vue"),
          meta: {
            rule: "Manager"
          }
        },
        {
          path: "/pages/maintenance",
          name: "pageMaintenance",
          component: () => import("@/views/pages/Maintenance.vue"),
          meta: {
            rule: "Manager"
          }
        }
      ]
    },
    // Redirect to 404 page, if no match found
    {
      path: "*",
      redirect: "/pages/error-404"
    }
  ]
});

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById("loading-bg");
  if (appLoading) {
    appLoading.style.display = "none";
  }
});

router.beforeEach(async (to, from, next) => {
  // firebase.auth().onAuthStateChanged(() => {
  //   // get firebase current user
  //   const firebaseCurrentUser = firebase.auth().currentUser;

  // });
  const response = await Vue.axios.get(
    `${window.location.protocol}//${window.location.hostname}:3000/api/users/get-user-login`,
    {
      withCredentials: true
    }
  );
  if (response.data.code == 300) return next();
  if (
    to.path === "/pages/login" ||
    to.path === "/pages/forgot-password" ||
    to.path === "/pages/error-404" ||
    to.path === "/pages/error-500" ||
    to.path === "/pages/register" ||
    to.path === "/callback" ||
    to.path === "/pages/comingsoon"
    // || auth.isAuthenticated() ||
    // firebaseCurrentUser
  ) {
    return next();
  }
  router.push({ path: "/pages/login", query: { to: to.path } });
});

export default router;
