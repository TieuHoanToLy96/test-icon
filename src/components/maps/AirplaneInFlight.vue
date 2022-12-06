<script>
export default {
  name: 'airplane-in-flight',
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
<path d="M7.04422 20.25H20.5442M2.80225 7.5H4.41922L6.29422 9.75H9.29422L8.12328 6.23717C8.0857 6.12443 8.07545 6.00437 8.09337 5.88689C8.11129 5.76941 8.15688 5.65787 8.22636 5.56147C8.29585 5.46506 8.38725 5.38655 8.49303 5.33239C8.59882 5.27824 8.71596 5.25 8.83479 5.25H10.4192L14.5442 9.75H19.7942C20.5899 9.75 21.3529 10.0661 21.9155 10.6287C22.4782 11.1913 22.7942 11.9544 22.7942 12.75V15H6.27632C5.63114 15 5.00315 14.792 4.48553 14.4069C3.9679 14.0218 3.58823 13.48 3.40284 12.862L2.08388 8.46551C2.05028 8.35352 2.04333 8.23523 2.06358 8.12008C2.08384 8.00493 2.13073 7.8961 2.20053 7.8023C2.27032 7.7085 2.36108 7.63231 2.46555 7.57982C2.57003 7.52734 2.68533 7.5 2.80225 7.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    