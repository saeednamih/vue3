<!-- eslint-disable vue/multi-word-component-names -->
<template>
<div>
    <h1>{{ part.title }}</h1>
    <div>
        {{ part.description }}
    </div>
</div>
</template>

<script setup>
import { computed } from 'vue';
// import { useRoute } from 'vue-router';
import Parts from '../data/part';

const props = defineProps(['partType', 'id']);
const part = computed(() => {
  // const route = useRoute();
  // const { partType, id } = route.params;
  const pa = Parts[props.partType].find((p) => p.id === +props.id);
  console.log('pa', pa);
  return pa;
});

</script>
