<script>
export default {
  name: 'heartbeat-svg',
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
<path d="M3.35278 12H7.10278L8.60278 9.75001L11.6028 14.25L13.1028 12H15.3528M2.9885 8.9994C2.9814 8.87505 2.97783 8.75026 2.97778 8.62501C2.97797 7.49826 3.3684 6.40635 4.08267 5.53493C4.79694 4.66351 5.79098 4.06636 6.89577 3.84501C8.00057 3.62367 9.14792 3.79179 10.1428 4.32079C11.1376 4.84979 11.9185 5.70702 12.3528 6.74673C12.787 5.70701 13.5679 4.84979 14.5628 4.32079C15.5576 3.79179 16.705 3.62367 17.8098 3.84501C18.9146 4.06636 19.9086 4.66351 20.6229 5.53493C21.3372 6.40635 21.7276 7.49826 21.7278 8.62501C21.7278 15 12.3528 20.25 12.3528 20.25C12.3528 20.25 8.60797 18.1529 5.85192 15.0001" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    