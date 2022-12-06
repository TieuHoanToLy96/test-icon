<script>
export default {
  name: 'currency-dollar-off',
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
<path d="M16.7 8C16.501 7.43524 16.1375 6.94297 15.6563 6.58654C15.1751 6.23011 14.5983 6.02583 14 6H10M7.443 7.431C7.16402 7.88565 7.01131 8.40646 7.0006 8.93978C6.9899 9.47309 7.12158 9.99961 7.38208 10.4651C7.64259 10.9306 8.02249 11.3182 8.48265 11.588C8.94281 11.8578 9.46658 12 10 12H12M16.564 16.558C16.2966 16.9984 15.9201 17.3625 15.471 17.6151C15.0219 17.8677 14.5153 18.0002 14 18H10C9.40175 17.9742 8.82491 17.7699 8.34373 17.4135C7.86255 17.057 7.49905 16.5648 7.3 16" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 3V6M12 18V21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    