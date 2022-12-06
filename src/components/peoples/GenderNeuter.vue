<script>
export default {
  name: 'gender-neuter',
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
      default: 1.5
    },
    color: {
      type: String,
      default: "#3D3D3D"
    }
  }
}
</script>
  
<template>
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1768 16.5C15.9047 16.5 18.9268 13.4779 18.9268 9.75C18.9268 6.02208 15.9047 3 12.1768 3C8.44884 3 5.42676 6.02208 5.42676 9.75C5.42676 13.4779 8.44884 16.5 12.1768 16.5ZM12.1768 16.5V21.75" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    