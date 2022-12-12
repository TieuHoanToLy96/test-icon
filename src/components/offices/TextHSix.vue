<script>
export default {
  name: 'text-hsix',
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
<path d="M3.75 5.25V16.5M13.5 10.875H3.75M13.5 5.25V16.5M17.9767 14.4365L21 9.375M22.875 15.75C22.875 17.1997 21.6998 18.375 20.25 18.375C18.8003 18.375 17.625 17.1997 17.625 15.75C17.625 14.3003 18.8003 13.125 20.25 13.125C21.6998 13.125 22.875 14.3003 22.875 15.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    