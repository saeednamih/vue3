/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCartStore = defineStore('cart', () => {
  const cart = ref([]);
  const cartTotal = computed(() => cart.value.reduce((prev, cur) => prev += cur.cost, 0));
  return { cart, cartTotal };
});
