<script>
export default {
  name: 'currency-circle-dollar',
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
<path d="M12.4706 6.75V8.25M12.4706 15.75V17.25M10.2206 15.75H13.5956C14.0929 15.75 14.5698 15.5525 14.9214 15.2008C15.273 14.8492 15.4706 14.3723 15.4706 13.875C15.4706 13.3777 15.273 12.9008 14.9214 12.5492C14.5698 12.1975 14.0929 12 13.5956 12H11.3456C10.8483 12 10.3714 11.8025 10.0198 11.4508C9.66813 11.0992 9.47058 10.6223 9.47058 10.125C9.47058 9.62772 9.66813 9.15081 10.0198 8.79917C10.3714 8.44754 10.8483 8.25 11.3456 8.25H14.7206M21.4706 12C21.4706 16.9706 17.4411 21 12.4706 21C7.50002 21 3.47058 16.9706 3.47058 12C3.47058 7.02944 7.50002 3 12.4706 3C17.4411 3 21.4706 7.02944 21.4706 12Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    