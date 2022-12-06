<script>
export default {
  name: 'bus-off',
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
      default: "#3D3D3D"
    }
  }
}
</script>
  
<template>
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 19C7.10457 19 8 18.1046 8 17C8 15.8954 7.10457 15 6 15C4.89543 15 4 15.8954 4 17C4 18.1046 4.89543 19 6 19Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.18 16.1721C16.011 16.5431 15.9594 16.9569 16.0321 17.3581C16.1048 17.7593 16.2983 18.1286 16.5869 18.4167C16.8754 18.7048 17.245 18.8978 17.6463 18.9699C18.0476 19.042 18.4613 18.9897 18.832 18.8201" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 17H2V6C2 5.73478 2.10536 5.48043 2.29289 5.29289C2.48043 5.10536 2.73478 5 3 5H5M9 5H17C19.761 5 22 8.134 22 12V17H21M16 17H8" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 5L17.5 12H22" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 10H10M14 10H17" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 7V10" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 5V8" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    