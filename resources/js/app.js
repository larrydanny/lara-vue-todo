require("./bootstrap");

import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlusSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPlusSquare, faTrash);

Vue.component("font-awesome-icon", FontAwesomeIcon);

//Main pages
import appComponent from "./vue/app.vue";

const app = new Vue({
    el: "#app",
    components: { "app-component": appComponent }
});
