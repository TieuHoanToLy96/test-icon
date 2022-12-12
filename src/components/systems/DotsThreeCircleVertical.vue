<script>
export default {
  name: 'dots-three-circle-vertical',
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
<path d="M12.6461 8.4375C13.1634 8.4375 13.5827 8.01777 13.5827 7.5C13.5827 6.98223 13.1634 6.5625 12.6461 6.5625C12.1288 6.5625 11.7095 6.98223 11.7095 7.5C11.7095 8.01777 12.1288 8.4375 12.6461 8.4375Z" fill="currentColor"/>
<path d="M12.6461 12.9375C13.1634 12.9375 13.5827 12.5178 13.5827 12C13.5827 11.4822 13.1634 11.0625 12.6461 11.0625C12.1288 11.0625 11.7095 11.4822 11.7095 12C11.7095 12.5178 12.1288 12.9375 12.6461 12.9375Z" fill="currentColor"/>
<path d="M12.6461 17.4375C13.1634 17.4375 13.5827 17.0178 13.5827 16.5C13.5827 15.9822 13.1634 15.5625 12.6461 15.5625C12.1288 15.5625 11.7095 15.9822 11.7095 16.5C11.7095 17.0178 12.1288 17.4375 12.6461 17.4375Z" fill="currentColor"/>
</svg>

</template>
    