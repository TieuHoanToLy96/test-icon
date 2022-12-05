<script>
export default {
  name: 'line-segment',
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
<path d="M17.3502 7.59099L8.53215 16.409M9.19116 18C9.19116 19.2426 8.1838 20.25 6.94116 20.25C5.69852 20.25 4.69116 19.2426 4.69116 18C4.69116 16.7574 5.69852 15.75 6.94116 15.75C8.1838 15.75 9.19116 16.7574 9.19116 18ZM21.1912 6C21.1912 7.24264 20.1838 8.25 18.9412 8.25C17.6985 8.25 16.6912 7.24264 16.6912 6C16.6912 4.75736 17.6985 3.75 18.9412 3.75C20.1838 3.75 21.1912 4.75736 21.1912 6Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    