<script>
export default {
  name: 'currency-taka',
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
<path d="M16.5 16.5C17.0523 16.5 17.5 16.0523 17.5 15.5C17.5 14.9477 17.0523 14.5 16.5 14.5C15.9477 14.5 15.5 14.9477 15.5 15.5C15.5 16.0523 15.9477 16.5 16.5 16.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 7C7 6.46957 7.21071 5.96086 7.58579 5.58579C7.96086 5.21071 8.46957 5 9 5C9.53043 5 10.0391 5.21071 10.4142 5.58579C10.7893 5.96086 11 6.46957 11 7V16C11 16.7956 11.3161 17.5587 11.8787 18.1213C12.4413 18.6839 13.2044 19 14 19C14.7956 19 15.5587 18.6839 16.1213 18.1213C16.6839 17.5587 17 16.7956 17 16V15.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 11H14" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    