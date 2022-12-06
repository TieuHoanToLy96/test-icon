<script>
export default {
  name: 'git-merge',
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
<path d="M6.78638 15C5.33663 15 4.16138 16.1753 4.16138 17.625C4.16138 19.0747 5.33663 20.25 6.78638 20.25C8.23612 20.25 9.41138 19.0747 9.41138 17.625C9.41138 16.1753 8.23612 15 6.78638 15ZM6.78638 15V9M6.78638 9C8.23612 9 9.41138 7.82475 9.41138 6.375C9.41138 4.92525 8.23612 3.75 6.78638 3.75C5.33663 3.75 4.16138 4.92525 4.16138 6.375C4.16138 7.82475 5.33663 9 6.78638 9ZM6.78638 9L9.18707 11.8808C9.60939 12.3876 10.138 12.7953 10.7354 13.0752C11.3328 13.355 11.9844 13.5 12.6441 13.5H15.4116M20.6616 13.125C20.6616 14.5747 19.4864 15.75 18.0366 15.75C16.5869 15.75 15.4116 14.5747 15.4116 13.125C15.4116 11.6753 16.5869 10.5 18.0366 10.5C19.4864 10.5 20.6616 11.6753 20.6616 13.125Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    