<script>
export default {
  name: 'path-svg',
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
      default: "#3D3D3D"
    }
  }
}
</script>
  
<template>
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.7942 18.75C16.7942 19.9926 17.8016 21 19.0442 21C20.2868 21 21.2942 19.9926 21.2942 18.75C21.2942 17.5074 20.2868 16.5 19.0442 16.5C17.8016 16.5 16.7942 17.5074 16.7942 18.75ZM16.7942 18.75H7.04419C6.04963 18.75 5.0958 18.3549 4.39254 17.6517C3.68928 16.9484 3.29419 15.9946 3.29419 15C3.29419 14.0054 3.68928 13.0516 4.39254 12.3483C5.0958 11.6451 6.04963 11.25 7.04419 11.25H16.0442C16.8398 11.25 17.6029 10.9339 18.1655 10.3713C18.7281 9.80871 19.0442 9.04565 19.0442 8.25C19.0442 7.45435 18.7281 6.69129 18.1655 6.12868C17.6029 5.56607 16.8398 5.25 16.0442 5.25H7.04419" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    