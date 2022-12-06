<script>
export default {
  name: 'map-pin',
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
<path d="M12.5293 12.75C14.1862 12.75 15.5293 11.4069 15.5293 9.75C15.5293 8.09315 14.1862 6.75 12.5293 6.75C10.8724 6.75 9.5293 8.09315 9.5293 9.75C9.5293 11.4069 10.8724 12.75 12.5293 12.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.0293 9.75C20.0293 16.5 12.5293 21.75 12.5293 21.75C12.5293 21.75 5.0293 16.5 5.0293 9.75C5.0293 7.76088 5.81947 5.85322 7.226 4.4467C8.63252 3.04018 10.5402 2.25 12.5293 2.25C14.5184 2.25 16.4261 3.04018 17.8326 4.4467C19.2391 5.85322 20.0293 7.76088 20.0293 9.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    