<script>
export default {
  name: 'hexagon-svg',
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
<path d="M21.3309 16.4374V7.5626C21.3309 7.42978 21.2956 7.29935 21.2287 7.18463C21.1617 7.06991 21.0655 6.97503 20.9499 6.90968L13.0749 2.45859C12.9623 2.39495 12.8352 2.36151 12.7059 2.36151C12.5765 2.36151 12.4494 2.39495 12.3368 2.45859L4.46183 6.90968C4.3462 6.97503 4.25001 7.06991 4.18307 7.18463C4.11614 7.29935 4.08087 7.42978 4.08087 7.5626V16.4374C4.08087 16.5702 4.11614 16.7007 4.18307 16.8154C4.25001 16.9301 4.3462 17.025 4.46183 17.0903L12.3368 21.5414C12.4494 21.605 12.5765 21.6385 12.7059 21.6385C12.8352 21.6385 12.9623 21.605 13.0749 21.5414L20.9499 17.0903C21.0655 17.025 21.1617 16.9301 21.2287 16.8154C21.2956 16.7007 21.3309 16.5702 21.3309 16.4374V16.4374Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    