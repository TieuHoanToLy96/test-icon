<script>
export default {
  name: 'messenger-logo',
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
<path d="M7.9706 13.5L10.9706 10.5L13.9706 13.5L16.9706 10.5M4.72953 16.5936C3.61134 14.7086 3.21974 12.4802 3.62826 10.3269C4.03679 8.17362 5.21733 6.24353 6.94822 4.89906C8.67911 3.55459 10.8413 2.88823 13.0287 3.02511C15.2161 3.16199 17.2783 4.0927 18.8281 5.64247C20.3779 7.19223 21.3086 9.25445 21.4455 11.4419C21.5824 13.6293 20.916 15.7915 19.5716 17.5224C18.2271 19.2532 16.297 20.4338 14.1437 20.8423C11.9904 21.2509 9.76207 20.8593 7.87707 19.7411L4.76866 20.6291C4.64005 20.6659 4.50396 20.6676 4.37449 20.634C4.24501 20.6005 4.12686 20.5329 4.03228 20.4383C3.93771 20.3437 3.87014 20.2256 3.83659 20.0961C3.80304 19.9666 3.80473 19.8306 3.84147 19.7019L4.72953 16.5936Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    