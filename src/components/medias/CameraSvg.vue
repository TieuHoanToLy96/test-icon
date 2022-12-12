<script>
export default {
  name: 'camera-svg',
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
<path d="M20.0293 19.5H5.0293C4.63147 19.5 4.24994 19.342 3.96864 19.0607C3.68733 18.7794 3.5293 18.3978 3.5293 18V7.5C3.5293 7.10218 3.68733 6.72064 3.96864 6.43934C4.24994 6.15804 4.63147 6 5.0293 6H8.02875L9.52875 3.75H15.5287L17.0287 6H20.0293C20.4271 6 20.8087 6.15804 21.09 6.43934C21.3713 6.72064 21.5293 7.10218 21.5293 7.5V18C21.5293 18.3978 21.3713 18.7794 21.09 19.0607C20.8087 19.342 20.4271 19.5 20.0293 19.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5293 15.75C14.3933 15.75 15.9043 14.239 15.9043 12.375C15.9043 10.511 14.3933 9 12.5293 9C10.6653 9 9.1543 10.511 9.1543 12.375C9.1543 14.239 10.6653 15.75 12.5293 15.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    