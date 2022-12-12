<script>
export default {
  name: 'dice-three',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 3.75H6C4.75736 3.75 3.75 4.75736 3.75 6V18C3.75 19.2426 4.75736 20.25 6 20.25H18C19.2426 20.25 20.25 19.2426 20.25 18V6C20.25 4.75736 19.2426 3.75 18 3.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.625 9.5625C9.14277 9.5625 9.5625 9.14277 9.5625 8.625C9.5625 8.10723 9.14277 7.6875 8.625 7.6875C8.10723 7.6875 7.6875 8.10723 7.6875 8.625C7.6875 9.14277 8.10723 9.5625 8.625 9.5625Z" fill="currentColor"/>
<path d="M12 12.9375C12.5178 12.9375 12.9375 12.5178 12.9375 12C12.9375 11.4822 12.5178 11.0625 12 11.0625C11.4822 11.0625 11.0625 11.4822 11.0625 12C11.0625 12.5178 11.4822 12.9375 12 12.9375Z" fill="currentColor"/>
<path d="M15.375 16.3125C15.8928 16.3125 16.3125 15.8928 16.3125 15.375C16.3125 14.8572 15.8928 14.4375 15.375 14.4375C14.8572 14.4375 14.4375 14.8572 14.4375 15.375C14.4375 15.8928 14.8572 16.3125 15.375 16.3125Z" fill="currentColor"/>
</svg>

</template>
    