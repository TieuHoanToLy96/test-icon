<script>
export default {
  name: 'octagon-svg',
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
<path d="M16.1231 3H9.28861C9.19012 3 9.09259 3.0194 9.0016 3.05709C8.9106 3.09478 8.82792 3.15003 8.75828 3.21967L3.92554 8.05241C3.8559 8.12205 3.80065 8.20473 3.76296 8.29573C3.72527 8.38672 3.70587 8.48425 3.70587 8.58274V15.4173C3.70587 15.5158 3.72527 15.6133 3.76296 15.7043C3.80065 15.7953 3.8559 15.8779 3.92554 15.9476L8.75828 20.7803C8.82792 20.85 8.9106 20.9052 9.0016 20.9429C9.09259 20.9806 9.19012 21 9.28861 21H16.1231C16.2216 21 16.3192 20.9806 16.4101 20.9429C16.5011 20.9052 16.5838 20.85 16.6535 20.7803L21.4862 15.9476C21.5558 15.8779 21.6111 15.7953 21.6488 15.7043C21.6865 15.6133 21.7059 15.5158 21.7059 15.4173V8.58274C21.7059 8.48425 21.6865 8.38672 21.6488 8.29573C21.6111 8.20473 21.5558 8.12205 21.4862 8.05241L16.6535 3.21967C16.5838 3.15003 16.5011 3.09478 16.4101 3.05709C16.3192 3.0194 16.2216 3 16.1231 3Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    