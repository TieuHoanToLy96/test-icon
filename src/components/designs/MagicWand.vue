<script>
export default {
  name: 'magic-wand',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.3087 12V16.5M18.0587 14.25H22.5587M7.93372 3.75V7.5M6.05872 5.625H9.80872M15.8087 17.25V20.25M14.3087 18.75H17.3087M13.5587 7.5L16.5587 10.5M3.58905 17.4697L17.5284 3.53033C17.8213 3.23744 18.2962 3.23744 18.5891 3.53033L20.5284 5.46967C20.8213 5.76256 20.8213 6.23744 20.5284 6.53033L6.58905 20.4697C6.29616 20.7626 5.82129 20.7626 5.52839 20.4697L3.58905 18.5303C3.29616 18.2374 3.29616 17.7626 3.58905 17.4697Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    