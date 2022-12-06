<script>
export default {
  name: 'credit-card',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.0436 15.75H19.0436M11.5436 15.75H13.0436M2.54361 9.0799H22.0436M3.29416 5.25H21.2942C21.7084 5.25 22.0442 5.58579 22.0442 6V18C22.0442 18.4142 21.7084 18.75 21.2942 18.75H3.29416C2.87995 18.75 2.54416 18.4142 2.54416 18V6C2.54416 5.58579 2.87995 5.25 3.29416 5.25Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    