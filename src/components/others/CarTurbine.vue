<script>
export default {
  name: 'car-turbine',
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
<path d="M11 17C13.2091 17 15 15.2091 15 13C15 10.7909 13.2091 9 11 9C8.79086 9 7 10.7909 7 13C7 15.2091 8.79086 17 11 17Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.86 11C18.948 11.66 19 12.512 19 13C19 14.5823 18.5308 16.129 17.6518 17.4446C16.7727 18.7602 15.5233 19.7855 14.0615 20.391C12.5997 20.9965 10.9911 21.155 9.43928 20.8463C7.88743 20.5376 6.46197 19.7757 5.34315 18.6569C4.22433 17.538 3.4624 16.1126 3.15372 14.5607C2.84504 13.0089 3.00347 11.4003 3.60897 9.93853C4.21447 8.47672 5.23985 7.22729 6.55544 6.34824C7.87103 5.46919 9.41775 5 11 5H17" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 9C13.489 9.108 15.489 9.108 17 9" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 3H18C17.4477 3 17 3.44772 17 4V10C17 10.5523 17.4477 11 18 11H20C20.5523 11 21 10.5523 21 10V4C21 3.44772 20.5523 3 20 3Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 13L7.5 11.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 13L13.5 16" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.5 16L11 13" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 13L14.5 11.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 9V13" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    