<template>
  <div class="item">
    <input type="checkbox" @change="updateCheck()" v-model="item.completed" />
    <span :class="[item.completed ? 'completed' : '', 'itemText']">{{ item.name }}</span>
    <button @click="removeItem()" class="trashcan">
      <font-awesome-icon icon="trash" />
    </button>
  </div>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    updateCheck() {
      axios
        .put("api/item/" + this.item.id, this.item)
        .then(response => {
          if (response.status == 200) {
            this.$emit("itemChanged");
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    removeItem() {
      axios
        .delete("api/item/" + this.item.id)
        .then(response => {
          if (response.status == 200) {
            this.$emit("itemChanged");
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    console.log("List Item component mounted");
  }
};
</script>