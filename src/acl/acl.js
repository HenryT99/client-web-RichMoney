import Vue from "vue";
import { AclInstaller, AclCreate, AclRule } from "vue-acl";
import router from "@/router";

Vue.use(AclInstaller);

let initialRole = "Root";
if (localStorage.getItem("userRole"))
  initialRole = localStorage.getItem("userRole");

export default new AclCreate({
  initial: initialRole,
  notfound: "/pages/not-authorized",
  router,
  acceptLocalRules: true,
  globalRules: {
    Root: new AclRule("Root").generate(),
    Manager: new AclRule("Manager").or("Root").generate()
    // public: new AclRule('public').or('admin').or('editor').generate(),
  }
});
