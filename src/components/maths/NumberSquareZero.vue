<script>
export default {
  name: 'number-square-zero',
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
<path d="M12.2942 16.5C13.951 16.5 15.2942 14.4853 15.2942 12C15.2942 9.51472 13.951 7.5 12.2942 7.5C10.6373 7.5 9.29419 9.51472 9.29419 12C9.29419 14.4853 10.6373 16.5 12.2942 16.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.7942 3.75H4.79419C4.37998 3.75 4.04419 4.08579 4.04419 4.5V19.5C4.04419 19.9142 4.37998 20.25 4.79419 20.25H19.7942C20.2084 20.25 20.5442 19.9142 20.5442 19.5V4.5C20.5442 4.08579 20.2084 3.75 19.7942 3.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    