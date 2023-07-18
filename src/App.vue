<template>
  <div id="app">
    <div class="container">
      <div class="column">
        <UserSelectedItems />
        <UserItems />
      </div>
      <div class="column">
        <AvailableSelectedItems />
        <AvailableItems />
      </div>
    </div>
  </div>
</template>

<script>
import UserSelectedItems from './components/UserSelectedItems.vue';
import UserItems from './components/UserItems.vue';
import AvailableSelectedItems from './components/AvailableSelectedItems.vue';
import AvailableItems from './components/AvailableItems.vue';

export default {
  components: {
    UserSelectedItems,
    UserItems,
    AvailableSelectedItems,
    AvailableItems,
  },
};
</script>

<style>
.container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  justify-content: space-evenly;
}
.column {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 5px;
}
.item-block {
  margin-top: 20px;
}
.selected-items  {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  min-height: 200px;
}
.selected-items > div {
  margin: 5px;
}
.items-list {
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  min-height: 200px;
}

.items-list > div {
  cursor: pointer;
  margin: 5px;
}

.selected-item {
  background-color: #e0e0e0;
}

.border {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
}
</style>

