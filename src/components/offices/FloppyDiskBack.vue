<script>
export default {
  name: 'floppy-disk-back',
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
<path d="M9.17676 7.50084H15.1768V3.75084M3.92676 8.56066V19.5C3.92676 19.6989 4.00578 19.8897 4.14643 20.0303C4.28708 20.171 4.47785 20.25 4.67676 20.25H19.6768C19.8757 20.25 20.0664 20.171 20.2071 20.0303C20.3477 19.8897 20.4268 19.6989 20.4268 19.5V4.5C20.4268 4.30109 20.3477 4.11032 20.2071 3.96967C20.0664 3.82902 19.8757 3.75 19.6768 3.75H8.73742C8.63893 3.75 8.5414 3.7694 8.4504 3.80709C8.35941 3.84478 8.27673 3.90003 8.20709 3.96967L4.14643 8.03033C4.07678 8.09997 4.02154 8.18265 3.98385 8.27365C3.94616 8.36464 3.92676 8.46217 3.92676 8.56066ZM14.8023 13.8758C14.8023 15.3256 13.6271 16.5008 12.1773 16.5008C10.7276 16.5008 9.55231 15.3256 9.55231 13.8758C9.55231 12.4261 10.7276 11.2508 12.1773 11.2508C13.6271 11.2508 14.8023 12.4261 14.8023 13.8758Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    