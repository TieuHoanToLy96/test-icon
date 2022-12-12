<script>
export default {
  name: 'user-plus',
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
      default: "currentColor"
    }
  }
}
</script>
  
<template>
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.6324 12.75H24.1324M21.8824 10.5V15M11.0074 15C14.114 15 16.6324 12.4816 16.6324 9.375C16.6324 6.2684 14.114 3.75 11.0074 3.75C7.90075 3.75 5.38236 6.2684 5.38236 9.375C5.38236 12.4816 7.90075 15 11.0074 15ZM11.0074 15C9.47426 15 7.9598 15.3357 6.57029 15.9835C5.18079 16.6313 3.94998 17.5755 2.96436 18.7498M11.0074 15C12.5405 15 14.055 15.3357 15.4445 15.9835C16.834 16.6314 18.0648 17.5756 19.0504 18.7499" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    