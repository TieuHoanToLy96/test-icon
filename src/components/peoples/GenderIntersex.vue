<script>
export default {
  name: 'gender-intersex',
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
<path d="M11.2502 15.75C14.3568 15.75 16.8752 13.2316 16.8752 10.125C16.8752 7.0184 14.3568 4.5 11.2502 4.5C8.14364 4.5 5.62524 7.0184 5.62524 10.125C5.62524 13.2316 8.14364 15.75 11.2502 15.75ZM11.2502 15.75V21.75M8.25024 19.125H14.2502M15.7502 2.25H19.5002M19.5002 2.25V6M19.5002 2.25L15.4108 6.33946" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    