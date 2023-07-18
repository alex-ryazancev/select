<template>
  <div class="border">
    <div class="selected-items">
      <div class="border" v-for="item in selectedUserItems" :key="item.id">
        <p>{{ item.name }}</p>
      </div>
    </div>
    <h3>Selected: {{ selectedUserItems.length }}/{{ itemMax }}</h3>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['selectedUserItems','itemMax']),
  },
};
</script>

<style>

</style>
