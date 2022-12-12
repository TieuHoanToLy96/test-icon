<script>
export default {
  name: 'toggle-right',
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
<path d="M16.9705 6H7.97045C4.65675 6 1.97046 8.6863 1.97046 12C1.97046 15.3137 4.65675 18 7.97045 18H16.9705C20.2842 18 22.9704 15.3137 22.9704 12C22.9704 8.68629 20.2842 6 16.9705 6Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.9705 15C18.6273 15 19.9705 13.6569 19.9705 12C19.9705 10.3431 18.6273 9 16.9705 9C15.3136 9 13.9705 10.3431 13.9705 12C13.9705 13.6569 15.3136 15 16.9705 15Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    