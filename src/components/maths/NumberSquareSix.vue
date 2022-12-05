<script>
export default {
  name: 'number-square-six',
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
<path d="M10.3743 12.5627L13.3972 7.49946M5.14722 3.75H20.1472C20.5614 3.75 20.8972 4.08579 20.8972 4.5V19.5C20.8972 19.9142 20.5614 20.25 20.1472 20.25H5.14722C4.733 20.25 4.39722 19.9142 4.39722 19.5V4.5C4.39722 4.08579 4.733 3.75 5.14722 3.75ZM15.2722 13.875C15.2722 15.3247 14.097 16.5 12.6472 16.5C11.1975 16.5 10.0222 15.3247 10.0222 13.875C10.0222 12.4253 11.1975 11.25 12.6472 11.25C14.097 11.25 15.2722 12.4253 15.2722 13.875Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    