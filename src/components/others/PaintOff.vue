<script>
export default {
  name: 'paint-off',
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
<path d="M7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V7C19 7.53043 18.7893 8.03914 18.4142 8.41421C18.0391 8.78929 17.5304 9 17 9H13M9 9H7C6.46957 9 5.96086 8.78929 5.58579 8.41421C5.21071 8.03914 5 7.53043 5 7V5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8C22 9.32608 21.4732 10.5979 20.5355 11.5355C19.5979 12.4732 18.3261 13 17 13M13 13H12V15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 15H11C10.4477 15 10 15.4477 10 16V20C10 20.5523 10.4477 21 11 21H13C13.5523 21 14 20.5523 14 20V16C14 15.4477 13.5523 15 13 15Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    