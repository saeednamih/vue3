import { usePartStore } from '@/stores/partStore';
import { computed, onMounted } from 'vue';
// import parts from '../data/part';

export default function useSearch(searchTerm) {
  const partStor = usePartStore();
  partStor.getParts();
  const allParts = computed(() => (partStor.parts ?
    [...partStor.parts.heads, ...partStor.parts.arms,
      ...partStor.parts.torsos, ...partStor.parts.bases] : []));

  const results = computed(() => {
    let searchResults;
    if (!searchTerm.value) searchResults = allParts.value;
    else {
      const lowerTerm = searchTerm.value.toLowerCase();
      searchResults = allParts.value.filter(
        (part) => part.title.toLowerCase().includes(lowerTerm),
      );
    }
    return [...searchResults];
  });

  onMounted(() => console.log('Mounted: useSearch'));

  return { searchResults: results };
}
