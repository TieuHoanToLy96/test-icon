<script>
export default {
  name: 'grid-four',
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
      default: "currentColor"
    }
  }
}
</script>
  
<template>
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6471 4.125V19.875M20.5221 12H4.77209M5.52209 4.125H19.7721C20.1863 4.125 20.5221 4.46079 20.5221 4.875V19.125C20.5221 19.5392 20.1863 19.875 19.7721 19.875H5.52209C5.10788 19.875 4.77209 19.5392 4.77209 19.125V4.875C4.77209 4.46079 5.10788 4.125 5.52209 4.125Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    