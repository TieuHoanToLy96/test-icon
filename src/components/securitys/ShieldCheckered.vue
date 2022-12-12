<script>
export default {
  name: 'shield-checkered',
  props: {
    size: {
      type: Number,
      default: 24
    },
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    },
    strokeWidth: {
      type: Number,
      default: 1.7
    },
    color: {
      type: String,
      default: "currentColor"
    }
  }
}
</script>
  
<template>
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.80819 12.0001H20.1909M12 4.50006V21.7166M3.74951 10.7496V5.24963C3.74951 5.05072 3.82853 4.85996 3.96918 4.7193C4.10983 4.57865 4.3006 4.49963 4.49951 4.49963H19.4995C19.6984 4.49963 19.8892 4.57865 20.0298 4.7193C20.1705 4.85996 20.2495 5.05072 20.2495 5.24963V10.7496C20.2495 18.6261 13.5646 21.2356 12.2298 21.6781C12.0806 21.7295 11.9185 21.7295 11.7692 21.6781C10.4345 21.2356 3.74951 18.6261 3.74951 10.7496Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    