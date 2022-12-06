<script>
export default {
  name: 'check-square-offset',
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
<path d="M4.71333 13.4318V4.875C4.71333 4.67609 4.79235 4.48532 4.933 4.34467C5.07365 4.20402 5.26442 4.125 5.46333 4.125H19.7133C19.9122 4.125 20.103 4.20402 20.2437 4.34467C20.3843 4.48532 20.4633 4.67609 20.4633 4.875V19.125C20.4633 19.3239 20.3843 19.5147 20.2437 19.6553C20.103 19.796 19.9122 19.875 19.7133 19.875H13.3042M12.5884 14.25L6.58838 20.25L3.58838 17.25" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    