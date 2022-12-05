<script>
export default {
  name: 'brand-upwork',
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
<path d="M3 7V12C3 12.7956 3.31607 13.5587 3.87868 14.1213C4.44129 14.6839 5.20435 15 6 15C6.79565 15 7.55871 14.6839 8.12132 14.1213C8.68393 13.5587 9 12.7956 9 12V7H10L14 13C14.824 14.319 15.945 15 17.5 15C18.4283 15 19.3185 14.6313 19.9749 13.9749C20.6313 13.3185 21 12.4283 21 11.5C21 10.5717 20.6313 9.6815 19.9749 9.02513C19.3185 8.36875 18.4283 8 17.5 8C15.473 8 14.363 9.006 14 11C13.758 12.33 13.092 14.996 12 19" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    