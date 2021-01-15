<template>
  <div class="listContainer">
    <div class="heading">
      <h2 id="title" class="text-center">Todo List</h2>
      <add-item-form v-on:reloadList="getList()" />
    </div>
    <list-view :items="items" v-on:reloadList="getList()" />
  </div>
</template>

<script>
import addItemForm from "./addItemForm";
import listView from "./listView";

export default {
  components: {
    addItemForm,
    listView
  },
  data: function() {
    return {
      items: []
    };
  },
  methods: {
    getList() {
      axios
        .get("api/items")
        .then(response => {
          this.items = response.data.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {
    this.getList();
  },
  mounted() {
    console.log("App component mounted");
  }
};
</script>