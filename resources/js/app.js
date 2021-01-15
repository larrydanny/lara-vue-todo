import Vue from "vue";

//Main pages
import appComponent from "./vue/app.vue";

const app = new Vue({
    el: "#app",
    components: { "app-component": appComponent }
});
