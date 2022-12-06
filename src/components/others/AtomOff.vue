<script>
export default {
  name: 'atom-off',
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
<path d="M12 12V12.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.17206 9.17192C5.26606 13.0769 3.36706 17.5089 4.92906 19.0719C6.49106 20.6329 10.9231 18.7339 14.8291 14.8279M16.7131 12.7149C19.3001 9.43792 20.3551 6.21292 19.0711 4.92892C17.7871 3.64492 14.5631 4.69892 11.2871 7.28592" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.92906 4.92896C3.36706 6.49096 5.26606 10.923 9.17206 14.829C13.0771 18.734 17.5091 20.633 19.0721 19.071M19.0001 15C18.2331 13.206 16.7851 11.128 14.8281 9.17196C12.8841 7.22696 10.7871 5.76996 9.00006 4.99996" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    