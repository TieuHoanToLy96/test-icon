<script>
export default {
  name: 'door-svg',
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
<path d="M2.89722 21H22.3972M5.89722 21V3.75C5.89722 3.55109 5.97623 3.36032 6.11689 3.21967C6.25754 3.07902 6.4483 3 6.64722 3H18.6472C18.8461 3 19.0369 3.07902 19.1775 3.21967C19.3182 3.36032 19.3972 3.55109 19.3972 3.75V21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.2714 12.9375C15.7886 12.9375 16.208 12.5178 16.208 12C16.208 11.4822 15.7886 11.0625 15.2714 11.0625C14.7541 11.0625 14.3347 11.4822 14.3347 12C14.3347 12.5178 14.7541 12.9375 15.2714 12.9375Z" fill="currentColor"/>
</svg>

</template>
    