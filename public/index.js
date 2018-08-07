/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      people: [
        {
          name: "Matt Cories",
          bio: "Accountant",
          bioVisible: "true",
        },
        {
          name: "Adel Kolj",
          bio: "Branch Manager",
          bioVisible: "true",
        },
        {
          name: "Brian Rice",
          bio: "Code Instructor",
          bioVisible: "true",
        }
      ],
      newPerson: {name: "", bio: "", bioVisible: ""}
    };
  },
  created: function() {},
  methods: {
    addPerson: function() {
      console.log("add a person");
      var newPersonInfo = {
        name: this.newPerson.name,
        bio: this.newPerson.bio,
        bioVisible: "true"

      };
      this.people.push(newPersonInfo);
    }
  },
  computed: {}
};

var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});