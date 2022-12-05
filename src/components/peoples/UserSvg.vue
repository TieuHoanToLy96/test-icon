<script>
export default {
  name: 'user-svg',
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
<path d="M12.1175 15C15.4312 15 18.1175 12.3137 18.1175 9C18.1175 5.68629 15.4312 3 12.1175 3C8.80378 3 6.11749 5.68629 6.11749 9C6.11749 12.3137 8.80378 15 12.1175 15ZM12.1175 15C10.2742 15 8.46354 15.485 6.8671 16.4064C5.27065 17.3278 3.94479 18.6531 3.02271 20.2491M12.1175 15C13.9607 15 15.7716 15.4851 17.3681 16.4065C18.9645 17.3279 20.2903 18.6533 21.2124 20.2493" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    