<template>
  <div class="addItem">
    <input type="text" v-model="item.name" />
    <font-awesome-icon
      icon="plus-square"
      @click="addItem()"
      :class="[ item.name ? 'active' : 'inactive', 'plus']"
    />
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      item: {
        name: ""
      }
    };
  },
  methods: {
    addItem() {
      if (!this.item.name) {
        return;
      }
      axios
        .post("api/item/store", {
          name: this.item.name
        })
        .then(response => {
          if (response.status == 200) {
            this.item.name = "";
            this.$emit("reloadList");
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>