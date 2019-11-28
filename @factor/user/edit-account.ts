import { pushToFilter, addPostType } from "@factor/tools"

pushToFilter("dashboard-routes", {
  path: "account",
  component: () => import("./v-account.vue"),
  meta: {
    postType: "user"
  }
})

pushToFilter("dashboard-menu", {
  group: "account",
  path: "account",
  name: "Your Account",
  icon: require("./img/users.svg")
})

addPostType({
  postType: "user",
  icon: require("./img/users.svg"),
  nameIndex: "Users",
  nameSingle: "User",
  namePlural: "Users",
  listTemplate: () => import("./v-list.vue"),
  editTemplate: () => import("./v-edit.vue"),
  baseRoute: "@",
  accessLevel: 500,
  add: false
})