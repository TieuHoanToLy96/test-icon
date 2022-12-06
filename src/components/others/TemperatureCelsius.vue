<script>
export default {
  name: 'temperature-celsius',
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
<path d="M6 10C7.10457 10 8 9.10457 8 8C8 6.89543 7.10457 6 6 6C4.89543 6 4 6.89543 4 8C4 9.10457 4.89543 10 6 10Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 9C20 8.20435 19.6839 7.44129 19.1213 6.87868C18.5587 6.31607 17.7956 6 17 6H16C15.2044 6 14.4413 6.31607 13.8787 6.87868C13.3161 7.44129 13 8.20435 13 9V15C13 15.7956 13.3161 16.5587 13.8787 17.1213C14.4413 17.6839 15.2044 18 16 18H17C17.7956 18 18.5587 17.6839 19.1213 17.1213C19.6839 16.5587 20 15.7956 20 15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    