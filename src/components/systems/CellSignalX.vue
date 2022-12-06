<script>
export default {
  name: 'cell-signal-x',
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
<path d="M21.8234 9.75001L17.3234 14.25M21.8234 14.25L17.3234 9.75001M19.5734 16.2426V19.5C19.5734 19.6989 19.4944 19.8897 19.3537 20.0303C19.2131 20.171 19.0223 20.25 18.8234 20.25H3.38403C3.2357 20.25 3.09069 20.206 2.96736 20.1236C2.84402 20.0412 2.74789 19.9241 2.69112 19.787C2.63436 19.65 2.61951 19.4992 2.64844 19.3537C2.67738 19.2082 2.74881 19.0746 2.8537 18.9697L18.293 3.53034C18.3979 3.42545 18.5316 3.35402 18.6771 3.32508C18.8225 3.29614 18.9733 3.31099 19.1104 3.36776C19.2474 3.42453 19.3646 3.52065 19.447 3.64399C19.5294 3.76733 19.5734 3.91233 19.5734 4.06067V7.75741" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    