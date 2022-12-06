<script>
export default {
  name: 'currency-cny',
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
<path d="M6.05882 6H18.0588M4.55882 11.25H19.5588M14.3088 11.25V16.5C14.3088 17.0967 14.5459 17.669 14.9678 18.091C15.3898 18.5129 15.9621 18.75 16.5588 18.75H20.3088V16.5M9.80882 11.25V12.75C9.80882 14.3413 9.17668 15.8674 8.05146 16.9926C6.92625 18.1179 5.40012 18.75 3.80882 18.75" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    