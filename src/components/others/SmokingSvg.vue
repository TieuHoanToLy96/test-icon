<script>
export default {
  name: 'smoking-svg',
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
<path d="M20 13H4C3.44772 13 3 13.4477 3 14V16C3 16.5523 3.44772 17 4 17H20C20.5523 17 21 16.5523 21 16V14C21 13.4477 20.5523 13 20 13Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 13V17" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 5V5.5C16 6.03043 16.2107 6.53914 16.5858 6.91421C16.9609 7.28929 17.4696 7.5 18 7.5C18.5304 7.5 19.0391 7.71071 19.4142 8.08579C19.7893 8.46086 20 8.96957 20 9.5V10" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    