<script>
export default {
  name: 'number-circle-three',
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
<path d="M10.1025 7.87426H14.6025L11.9781 11.625C12.4098 11.625 12.8348 11.7315 13.2155 11.935C13.5962 12.1385 13.9209 12.4327 14.1607 12.7916C14.4005 13.1506 14.5481 13.5631 14.5904 13.9927C14.6328 14.4223 14.5685 14.8557 14.4033 15.2545C14.2381 15.6534 13.9771 16.0053 13.6434 16.2792C13.3097 16.553 12.9136 16.7403 12.4902 16.8246C12.0668 16.9088 11.6292 16.8873 11.2161 16.762C10.803 16.6367 10.4272 16.4114 10.1219 16.1062M21.3528 12C21.3528 16.9706 17.3233 21 12.3528 21C7.38222 21 3.35278 16.9706 3.35278 12C3.35278 7.02944 7.38222 3 12.3528 3C17.3233 3 21.3528 7.02944 21.3528 12Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    