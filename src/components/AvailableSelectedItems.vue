<template>
  <div class="border">
    <h3>Selected Item:</h3>
    <div class="selected-items">
      <div class="border">
        <p>{{selectedAvailableItem ? selectedAvailableItem.name : "empty" }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['selectedAvailableItem']),
  },
};
</script>

<style  scoped>

</style>