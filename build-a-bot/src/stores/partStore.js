/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePartStore = defineStore('parts', () => {
  const parts = ref(null);
  const getParts = async () => {
    const response = await fetch('api/parts');
    parts.value = await response.json();
  };

  return { parts, getParts };
});
