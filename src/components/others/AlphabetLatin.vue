<script>
export default {
  name: 'alphabet-latin',
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
<path d="M6 10H8C8.53043 10 9.03914 10.2107 9.41421 10.5858C9.78929 10.9609 10 11.4696 10 12V17H7C6.46957 17 5.96086 16.7893 5.58579 16.4142C5.21071 16.0391 5 15.5304 5 15C5 14.4696 5.21071 13.9609 5.58579 13.5858C5.96086 13.2107 6.46957 13 7 13H10" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 7V17" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 10H16C14.8954 10 14 10.8954 14 12V15C14 16.1046 14.8954 17 16 17H17C18.1046 17 19 16.1046 19 15V12C19 10.8954 18.1046 10 17 10Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    