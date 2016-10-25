/**
 * Created by kuo zi on 2016/10/12.
 */
import Vue from "vue";
import Router from "vue-router";

import login from "./../view/login.vue";
import messages from "./../view/messages.vue";
import contacts from "./../view/contacts.vue";
import somethings from "./../view/somethings.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  scrollBehavior: ()=>({y: 0}),
  routes: [
    {
      name: "index",
      path: "/",
      component: login
    }, {
      name: "login",
      path: "/login",
      component: login
    }, {
      name: "messages",
      path: "/messages",
      component: messages
    }, {
      name: "contacts",
      path: "/contacts",
      component: contacts
    }, {
      name: "somethings",
      path: "/somethings",
      component: somethings
    }
  ]
});

