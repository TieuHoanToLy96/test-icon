<script>
export default {
  name: 'list-border',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.1818 3H3.81818C3.36631 3 3 3.36631 3 3.81818V20.1818C3 20.6337 3.36631 21 3.81818 21H20.1818C20.6337 21 21 20.6337 21 20.1818V3.81818C21 3.36631 20.6337 3 20.1818 3Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.94755 16C8.47087 16 8.89511 15.5736 8.89511 15.0476C8.89511 14.5216 8.47087 14.0952 7.94755 14.0952C7.42423 14.0952 7 14.5216 7 15.0476C7 15.5736 7.42423 16 7.94755 16Z" fill="currentColor"/>
<path d="M7.94755 9.90476C8.47087 9.90476 8.89511 9.47837 8.89511 8.95238C8.89511 8.4264 8.47087 8 7.94755 8C7.42423 8 7 8.4264 7 8.95238C7 9.47837 7.42423 9.90476 7.94755 9.90476Z" fill="currentColor"/>
<path d="M10.9185 8.95238H17M10.9188 15.0476H14.4594H17" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    