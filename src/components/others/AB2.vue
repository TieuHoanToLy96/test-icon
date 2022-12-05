<script>
export default {
  name: 'a-b-2',
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
<path d="M16 21H19C19.81 21 20.48 20.33 20.48 19.52L20.5 19.5C20.5 18.68 19.81 18 19 18H16V21Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 15.0001H18.5C19.34 14.9901 20 15.6601 20 16.5001C20 17.3401 19.34 18.0001 18.5 18.0001H16V15.0001Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 9V5C4 3.964 4.895 3 6 3C7.105 3 8 3.964 8 5V9" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.98999 11.98C2.98999 14.3669 3.9382 16.6561 5.62603 18.3439C7.31386 20.0318 9.60304 20.98 11.99 20.98M20.99 11.98C20.99 9.59303 20.0418 7.30385 18.354 5.61602C16.6661 3.92819 14.3769 2.97998 11.99 2.97998" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 7H4" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    