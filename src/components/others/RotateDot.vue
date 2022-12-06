<script>
export default {
  name: 'rotate-dot',
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
      default: 1.5
    },
    color: {
      type: String,
      default: "#3D3D3D"
    }
  }
}
</script>
  
<template>
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.95 10.9998C19.6971 9.07056 18.7498 7.2996 17.2853 6.01844C15.8209 4.73728 13.9397 4.03377 11.9939 4.03959C10.0482 4.0454 8.17123 4.76016 6.71446 6.05005C5.25769 7.33994 4.32096 9.11654 4.07962 11.0473C3.83828 12.978 4.30887 14.9305 5.4033 16.5393C6.49774 18.1481 8.14098 19.3029 10.0254 19.7875C11.9099 20.2721 13.9064 20.0533 15.6411 19.172C17.3759 18.2908 18.73 16.8075 19.45 14.9998M19.95 19.9998V14.9998H14.95" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    