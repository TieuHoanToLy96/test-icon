<script>
export default {
  name: 'chisel-svg',
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
<path d="M14 14L15.5 15.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.347 15.5749L20.427 17.6539C20.7945 18.0217 21.001 18.5204 21.0009 19.0403C21.0008 19.5602 20.7942 20.0589 20.4265 20.4264C20.0587 20.794 19.56 21.0005 19.0401 21.0004C18.5202 21.0003 18.0215 20.7937 17.654 20.4259L15.574 18.3469C15.2064 17.9792 14.9999 17.4805 15 16.9606C15.0001 16.4406 15.2067 15.942 15.5745 15.5744C15.9422 15.2069 16.4409 15.0004 16.9608 15.0005C17.4808 15.0006 17.9794 15.2072 18.347 15.5749V15.5749Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 6L6 3L13.414 10.414C13.7891 10.789 13.9999 11.2976 14 11.828V14H11.828C11.2976 13.9999 10.789 13.7891 10.414 13.414L3 6Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    