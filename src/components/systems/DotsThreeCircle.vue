<script>
export default {
  name: 'dots-three-circle',
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
<path d="M12.5884 21C17.5589 21 21.5884 16.9706 21.5884 12C21.5884 7.02944 17.5589 3 12.5884 3C7.61782 3 3.58838 7.02944 3.58838 12C3.58838 16.9706 7.61782 21 12.5884 21Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5875 12.9375C13.1048 12.9375 13.5242 12.5178 13.5242 12C13.5242 11.4822 13.1048 11.0625 12.5875 11.0625C12.0702 11.0625 11.6509 11.4822 11.6509 12C11.6509 12.5178 12.0702 12.9375 12.5875 12.9375Z" fill="currentColor"/>
<path d="M8.08752 12.9375C8.60481 12.9375 9.02416 12.5178 9.02416 12C9.02416 11.4822 8.60481 11.0625 8.08752 11.0625C7.57023 11.0625 7.15088 11.4822 7.15088 12C7.15088 12.5178 7.57023 12.9375 8.08752 12.9375Z" fill="currentColor"/>
<path d="M17.0875 12.9375C17.6048 12.9375 18.0242 12.5178 18.0242 12C18.0242 11.4822 17.6048 11.0625 17.0875 11.0625C16.5702 11.0625 16.1509 11.4822 16.1509 12C16.1509 12.5178 16.5702 12.9375 17.0875 12.9375Z" fill="currentColor"/>
</svg>

</template>
    