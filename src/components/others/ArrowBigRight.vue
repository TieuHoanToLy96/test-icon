<script>
export default {
  name: 'arrow-big-right',
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
<path d="M4 9.00009H12V5.41409C12 5.21634 12.0587 5.02305 12.1686 4.85864C12.2785 4.69423 12.4346 4.56609 12.6173 4.49042C12.8 4.41475 13.0011 4.39494 13.195 4.43351C13.389 4.47208 13.5671 4.56728 13.707 4.70709L20.293 11.2931C20.4805 11.4806 20.5858 11.7349 20.5858 12.0001C20.5858 12.2653 20.4805 12.5196 20.293 12.7071L13.707 19.2931C13.5671 19.4329 13.389 19.5281 13.195 19.5667C13.0011 19.6052 12.8 19.5854 12.6173 19.5098C12.4346 19.4341 12.2785 19.306 12.1686 19.1416C12.0587 18.9771 12 18.7838 12 18.5861V15.0001H4C3.73478 15.0001 3.48043 14.8947 3.29289 14.7072C3.10536 14.5197 3 14.2653 3 14.0001V10.0001C3 9.73488 3.10536 9.48052 3.29289 9.29299C3.48043 9.10545 3.73478 9.00009 4 9.00009V9.00009Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    