<script>
export default {
  name: 'gender-nonbinary',
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
<path d="M12.1174 9C8.59662 9 5.74243 11.8542 5.74243 15.375C5.74243 18.8958 8.59662 21.75 12.1174 21.75C15.6382 21.75 18.4924 18.8958 18.4924 15.375C18.4924 11.8542 15.6382 9 12.1174 9ZM12.1174 9V4.125M15.4655 6.375L8.76936 1.875M8.76936 6.375L15.4655 1.875" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    