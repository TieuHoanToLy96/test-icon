<script>
export default {
  name: 'c-sharp',
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
<path d="M10 9C10 8.20435 9.68393 7.44129 9.12132 6.87868C8.55871 6.31607 7.79565 6 7 6H6.5C5.57174 6 4.6815 6.36875 4.02513 7.02513C3.36875 7.6815 3 8.57174 3 9.5V14.5C3 15.4283 3.36875 16.3185 4.02513 16.9749C4.6815 17.6313 5.57174 18 6.5 18H7C7.79565 18 8.55871 17.6839 9.12132 17.1213C9.68393 16.5587 10 15.7956 10 15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 7L15 17" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 7L19 17" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 10H21.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 14H13.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    