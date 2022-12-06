<script>
export default {
  name: 'archive-off',
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
<path d="M7.99997 4H19C19.5304 4 20.0391 4.21071 20.4142 4.58579C20.7893 4.96086 21 5.46957 21 6C21 6.53043 20.7893 7.03914 20.4142 7.41421C20.0391 7.78929 19.5304 8 19 8H12M7.99997 8H4.99997C4.54272 8.00027 4.09918 7.84385 3.74325 7.55681C3.38732 7.26976 3.1405 6.86942 3.04391 6.42248C2.94732 5.97555 3.0068 5.50901 3.21242 5.1006C3.41805 4.69219 3.75741 4.36657 4.17397 4.178" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 8V18C5 18.5304 5.21071 19.0391 5.58579 19.4142C5.96086 19.7893 6.46957 20 7 20H17C17.3854 20 17.7626 19.8886 18.0862 19.6792C18.4098 19.4699 18.666 19.1715 18.824 18.82M19 15V8" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 12H12" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    