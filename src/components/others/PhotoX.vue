<script>
export default {
  name: 'photo-x',
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
<path d="M15 8H15.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 20H7C6.20435 20 5.44129 19.6839 4.87868 19.1213C4.31607 18.5587 4 17.7956 4 17V7C4 6.20435 4.31607 5.44129 4.87868 4.87868C5.44129 4.31607 6.20435 4 7 4H17C17.7956 4 18.5587 4.31607 19.1213 4.87868C19.6839 5.44129 20 6.20435 20 7V13" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 14.9998L8 10.9998C8.928 10.1068 10.072 10.1068 11 10.9998L13.5 13.4998" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.5 21.5L16.5 16.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.5 21.5L21.5 16.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    