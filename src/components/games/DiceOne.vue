<script>
export default {
  name: 'dice-one',
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
<path d="M18.353 3.75H6.35303C5.11039 3.75 4.10303 4.75736 4.10303 6V18C4.10303 19.2426 5.11039 20.25 6.35303 20.25H18.353C19.5957 20.25 20.603 19.2426 20.603 18V6C20.603 4.75736 19.5957 3.75 18.353 3.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.3522 12.9375C12.8695 12.9375 13.2888 12.5178 13.2888 12C13.2888 11.4822 12.8695 11.0625 12.3522 11.0625C11.8349 11.0625 11.4155 11.4822 11.4155 12C11.4155 12.5178 11.8349 12.9375 12.3522 12.9375Z" fill="currentColor"/>
</svg>

</template>
    