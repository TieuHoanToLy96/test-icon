<script>
export default {
  name: 'text-bolder',
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
<path d="M6.88239 11.25H15.1324C16.1269 11.25 17.0808 11.6451 17.784 12.3483C18.4873 13.0516 18.8824 14.0054 18.8824 15C18.8824 15.9946 18.4873 16.9484 17.784 17.6517C17.0808 18.3549 16.1269 18.75 15.1324 18.75L6.88184 18.7495V4.49954L14.0074 4.5C14.9025 4.5 15.7609 4.85558 16.3939 5.48851C17.0268 6.12145 17.3824 6.97989 17.3824 7.875C17.3824 8.77011 17.0268 9.62855 16.3939 10.2615C15.7609 10.8944 14.9025 11.25 14.0074 11.25" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    