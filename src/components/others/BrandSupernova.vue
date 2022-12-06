<script>
export default {
  name: 'brand-supernova',
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
<path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 15H15.5C18.538 15 21 13.657 21 12C21 10.343 18.538 9 15.5 9C13.664 9 12.038 9.49 11.04 10.245" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 9H8.5C5.462 9 3 10.343 3 12C3 13.657 5.462 15 8.5 15C10.344 15 11.976 14.505 12.974 13.745" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 9V8.5C15 5.462 13.657 3 12 3C10.343 3 9 5.462 9 8.5C9 10.333 9.49 11.957 10.241 12.956" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 15V15.5C9 18.538 10.343 21 12 21C13.657 21 15 18.538 15 15.5C15 13.658 14.506 12.028 13.748 11.03" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    