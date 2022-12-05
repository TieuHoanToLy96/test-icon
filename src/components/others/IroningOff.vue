<script>
export default {
  name: 'ironing-off',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 6H16.459C17.1691 6.00005 17.8562 6.25202 18.3981 6.71107C18.9399 7.17013 19.3013 7.80651 19.418 8.507L19.995 11.971L20.799 16.792L20.806 16.836M18 18H3C3 16.1435 3.7375 14.363 5.05025 13.0503C6.36301 11.7375 8.14348 11 10 11H11M15 11H19.8" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    