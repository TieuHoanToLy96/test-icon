<script>
export default {
  name: 'flask-2-off',
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
<path d="M6.09998 15H15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.742 17.741C17.3374 19.0761 16.4803 20.2285 15.318 21H8.68298C7.75347 20.3833 7.0142 19.5198 6.54812 18.5064C6.08204 17.493 5.9076 16.3697 6.04438 15.2627C6.18115 14.1556 6.62372 13.1086 7.32243 12.239C8.02114 11.3695 8.94833 10.7119 9.99998 10.34V10.014M9.99998 6V3H14V10M14.613 10.598C15.8392 11.192 16.827 12.1854 17.414 13.415" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 3H15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    