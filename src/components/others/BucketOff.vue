<script>
export default {
  name: 'bucket-off',
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
<path d="M17.184 17.173L17 18C16.807 19.183 15.966 20.024 15 20H9C8.034 20.024 7.193 19.183 7 18L5 9H9M13 9H19L17.911 13.9" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 9C7 8.404 7.104 7.833 7.295 7.303M9 5C9.74285 4.44287 10.6262 4.1036 11.551 4.02021C12.4758 3.93682 13.4055 4.1126 14.2361 4.52787C15.0666 4.94313 15.7651 5.58147 16.2533 6.37135C16.7414 7.16123 17 8.07144 17 9" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    