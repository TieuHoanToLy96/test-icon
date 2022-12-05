<script>
export default {
  name: 'text-htwo',
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
<path d="M3.75 5.25V16.5M13.5 10.875H3.75M13.5 5.25V16.5M18.1768 11.1242C18.299 10.8351 18.4803 10.5748 18.709 10.36C18.9378 10.1451 19.2089 9.98051 19.5051 9.87668C19.8012 9.77285 20.1158 9.7321 20.4286 9.75706C20.7414 9.78202 21.0456 9.87214 21.3215 10.0216C21.5975 10.1711 21.8391 10.3766 22.0309 10.625C22.2226 10.8734 22.3604 11.1592 22.4352 11.464C22.5099 11.7687 22.5202 12.0858 22.4652 12.3948C22.4101 12.7037 22.2911 12.9978 22.1157 13.258L18 18.75L22.5 18.7495" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    