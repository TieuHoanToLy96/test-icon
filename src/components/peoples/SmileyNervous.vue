<script>
export default {
  name: 'smiley-nervous',
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
<path d="M12.8232 21C17.7938 21 21.8232 16.9706 21.8232 12C21.8232 7.02944 17.7938 3 12.8232 3C7.85268 3 3.82324 7.02944 3.82324 12C3.82324 16.9706 7.85268 21 12.8232 21Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.32324 16.125L9.82324 14.25L11.3232 16.125L12.8232 14.25L14.3232 16.125L15.8232 14.25L17.3232 16.125" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.44738 11.0625C9.96467 11.0625 10.384 10.6428 10.384 10.125C10.384 9.60723 9.96467 9.1875 9.44738 9.1875C8.93009 9.1875 8.51074 9.60723 8.51074 10.125C8.51074 10.6428 8.93009 11.0625 9.44738 11.0625Z" fill="currentColor"/>
<path d="M16.1974 11.0625C16.7147 11.0625 17.134 10.6428 17.134 10.125C17.134 9.60723 16.7147 9.1875 16.1974 9.1875C15.6801 9.1875 15.2607 9.60723 15.2607 10.125C15.2607 10.6428 15.6801 11.0625 16.1974 11.0625Z" fill="currentColor"/>
</svg>

</template>
    