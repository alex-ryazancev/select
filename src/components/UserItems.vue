<template>
  <div class="item-block">
    <div class="items-list border">
      <div
        class="border"
        v-for="item in userItems"
        :key="item.id"
        @click="onItemClick(item)"
        :class="{ 'selected-item': isSelected(item) }"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState(['userItems', 'selectedUserItems']),
  },
  methods: {
    ...mapMutations(['addUserItemSelected', 'removeUserItemSelected']),
    onItemClick(item) {
      if (this.isSelected(item)) {
        this.removeUserItemSelected(item);
      } else {
        this.addUserItemSelected(item);
      }
    },
    isSelected(item) {
      return this.selectedUserItems.some((selectedItem) => selectedItem.id === item.id);
    },
  },
};
</script>


<style>

</style>
