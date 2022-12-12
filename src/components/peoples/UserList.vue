<script>
export default {
  name: 'user-list',
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
<path d="M8.32318 13.5C10.3942 13.5 12.0732 11.8211 12.0732 9.75C12.0732 7.67893 10.3942 6 8.32318 6C6.25211 6 4.57318 7.67893 4.57318 9.75C4.57318 11.8211 6.25211 13.5 8.32318 13.5ZM8.32318 13.5C6.99283 13.5 5.70019 13.942 4.64835 14.7565C3.59652 15.5711 2.84512 16.712 2.51221 18M8.32318 13.5C9.65353 13.5 10.9462 13.942 11.998 14.7565C13.0498 15.5711 13.8012 16.712 14.1342 18M15.0732 7.5H24.0732M15.0732 12H24.0732M17.3232 16.5H24.0732" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    