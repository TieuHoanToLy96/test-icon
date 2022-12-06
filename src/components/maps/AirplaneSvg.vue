<script>
export default {
  name: 'airplane-svg',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.2352 20.25L8.48523 21.75V18.75L9.98523 17.25V14.25L2.48523 15.75V12.75L9.98523 9L9.99578 4.5C9.99578 3.90326 10.2328 3.33097 10.6548 2.90901C11.0767 2.48705 11.649 2.25 12.2458 2.25C12.8425 2.25 13.4148 2.48705 13.8368 2.90901C14.2587 3.33097 14.4958 3.90326 14.4958 4.5L14.5063 9L22.0063 12.75V15.75L14.5063 14.25V17.25L15.9852 18.75V21.75L12.2352 20.25Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    