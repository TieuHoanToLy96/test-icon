<script>
export default {
  name: 'arrows-join-2',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 7H4.948C6.861 7 8.653 7.933 9.75 9.5C10.2904 10.2721 11.0091 10.9025 11.8451 11.3377C12.681 11.7729 13.6096 12.0001 14.552 12H21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 17H4.95C5.89187 17 6.81985 16.7728 7.65513 16.3375C8.49042 15.9023 9.20836 15.272 9.748 14.5C10.2876 13.728 11.0056 13.0977 11.8409 12.6625C12.6762 12.2272 13.6041 12 14.546 12H20" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 15L21 12L18 9" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    