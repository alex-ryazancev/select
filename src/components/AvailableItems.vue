<template>
  <div class="item-block">
    <div class="items-list border">
      <div
        class="border"
        v-for="item in availableItems"
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
    ...mapState(['availableItems', 'selectedAvailableItem']),
  },
  methods: {
    ...mapMutations(['setSelectedAvailableItem']),
    onItemClick(item) {
      this.setSelectedAvailableItem(item);
    },
    isSelected(item) {
      return this.selectedAvailableItem && this.selectedAvailableItem.id === item.id;
    },
  },
};
</script>
<style>

</style>
