<script>
export default {
  name: 'number-square-five',
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
<path d="M14.8383 7.5H11.0728L10.3383 12.019C10.7054 11.6519 11.1731 11.4019 11.6823 11.3006C12.1915 11.1993 12.7192 11.2513 13.1989 11.4499C13.6785 11.6486 14.0885 11.9851 14.3769 12.4167C14.6654 12.8484 14.8193 13.3559 14.8193 13.8751C14.8193 14.3942 14.6654 14.9017 14.3769 15.3334C14.0885 15.7651 13.6785 16.1015 13.1989 16.3002C12.7192 16.4989 12.1915 16.5509 11.6823 16.4496C11.1731 16.3483 10.7054 16.0983 10.3383 15.7312M5.08826 3.75H20.0883C20.5025 3.75 20.8383 4.08579 20.8383 4.5V19.5C20.8383 19.9142 20.5025 20.25 20.0883 20.25H5.08826C4.67404 20.25 4.33826 19.9142 4.33826 19.5V4.5C4.33826 4.08579 4.67404 3.75 5.08826 3.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    