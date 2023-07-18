import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userItems: [{
        "id": 1,
        "name": "Shoes 1"
      },
      {
        "id": 2,
        "name": "Shoes 2"
      },
      {
        "id": 3,
        "name": "Shoes 3"
      },
      {
        "id": 4,
        "name": "Shoes 4"
      },
      {
        "id": 5,
        "name": "T-shirt 1"
      },
      {
        "id": 6,
        "name": "T-shirt 2"
      },
      {
        "id": 7,
        "name": "T-shirt 3"
      },
      {
        "id": 8,
        "name": "T-shirt 4"
      }
    ],
    availableItems: [{
        "id": 11,
        "name": "Jacket 1"
      },
      {
        "id": 12,
        "name": "Jacket 2"
      },
      {
        "id": 13,
        "name": "Jacket 3"
      },
      {
        "id": 14,
        "name": "Jacket 4"
      },
      {
        "id": 15,
        "name": "Hoodie 1"
      },
      {
        "id": 16,
        "name": "Hoodie 2"
      },
      {
        "id": 17,
        "name": "Hoodie 3"
      },
      {
        "id": 18,
        "name": "Hoodie 4"
      }
    ],
    selectedUserItems: [],
    selectedAvailableItem: null,
    itemMax: 6,
  },
  mutations: {
    // Добавляет выбранный пользователем элемент в массив выбранных пользовательских элементов
    addUserItemSelected(state, item) {
      if (state.selectedUserItems.length < state.itemMax) {
        state.selectedUserItems.push(item);
      }
    },
    // Удаляет выбранный пользователем элемент из массива выбранных пользовательских элементов
    removeUserItemSelected(state, item) {
      state.selectedUserItems = state.selectedUserItems.filter((selectedItem) => selectedItem.id !== item.id);
    },
    // Устанавливает выбранный доступный элемент
    setSelectedAvailableItem(state, item) {
      state.selectedAvailableItem = item;
    },
  },
});