<script>
export default {
  name: 'cast-svg',
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
<path d="M3 19H3.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 19C7 17.9391 6.57857 16.9217 5.82843 16.1716C5.07828 15.4214 4.06087 15 3 15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 19C11 16.8783 10.1571 14.8434 8.65685 13.3431C7.15656 11.8429 5.12173 11 3 11" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 19H18C18.7956 19 19.5587 18.6839 20.1213 18.1213C20.6839 17.5587 21 16.7956 21 16V8C21 7.20435 20.6839 6.44129 20.1213 5.87868C19.5587 5.31607 18.7956 5 18 5H5.99995C5.38443 5.00584 4.7856 5.20088 4.28471 5.55866C3.78382 5.91644 3.40511 6.41965 3.19995 7" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    