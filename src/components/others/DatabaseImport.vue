<script>
export default {
  name: 'database-import',
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
<path d="M12 9C16.4183 9 20 7.65685 20 6C20 4.34315 16.4183 3 12 3C7.58172 3 4 4.34315 4 6C4 7.65685 7.58172 9 12 9Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 6V14M9.009 14.783C9.933 14.923 10.942 15 12 15C16.418 15 20 13.657 20 12V6" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.252 20.987C11.498 20.996 11.748 21 12 21C16.418 21 20 19.657 20 18V12M2 19H9M6 16L9 19L6 22" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    