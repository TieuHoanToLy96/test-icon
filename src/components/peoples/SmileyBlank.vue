<script>
export default {
  name: 'smiley-blank',
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
<path d="M12.1768 21C17.1473 21 21.1768 16.9706 21.1768 12C21.1768 7.02944 17.1473 3 12.1768 3C7.2062 3 3.17676 7.02944 3.17676 12C3.17676 16.9706 7.2062 21 12.1768 21Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.8009 11.0625C9.31819 11.0625 9.73754 10.6428 9.73754 10.125C9.73754 9.60723 9.31819 9.1875 8.8009 9.1875C8.28361 9.1875 7.86426 9.60723 7.86426 10.125C7.86426 10.6428 8.28361 11.0625 8.8009 11.0625Z" fill="currentColor"/>
<path d="M15.5509 11.0625C16.0682 11.0625 16.4875 10.6428 16.4875 10.125C16.4875 9.60723 16.0682 9.1875 15.5509 9.1875C15.0336 9.1875 14.6143 9.60723 14.6143 10.125C14.6143 10.6428 15.0336 11.0625 15.5509 11.0625Z" fill="currentColor"/>
</svg>

</template>
    