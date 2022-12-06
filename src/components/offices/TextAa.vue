<script>
export default {
  name: 'text-aa',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2493 18L7.49927 5.25L0.749268 18M17.2488 10.536C17.8531 9.95571 18.6615 9.63633 19.4993 9.64688C21.1561 9.64688 22.4993 10.8221 22.4993 12.2719V18M12.264 14.25H2.73456M22.4993 15.6469C22.4993 17.0966 21.1561 18.2719 19.4993 18.2719C17.8424 18.2719 16.4993 17.0966 16.4993 15.6469C16.4993 14.1971 17.8424 13.0219 19.4993 13.0219C21.1561 13.0219 22.4993 14.1971 22.4993 15.6469Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    