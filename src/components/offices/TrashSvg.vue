<script>
export default {
  name: 'trash-svg',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.3669 5.25L3.86694 5.25001M9.86731 9.75V15.75M14.3673 9.75V15.75M18.8673 5.25V19.5C18.8673 19.6989 18.7883 19.8897 18.6476 20.0303C18.507 20.171 18.3162 20.25 18.1173 20.25H6.11731C5.9184 20.25 5.72763 20.171 5.58698 20.0303C5.44633 19.8897 5.36731 19.6989 5.36731 19.5V5.25M15.8673 5.25V3.75C15.8673 3.35218 15.7093 2.97064 15.428 2.68934C15.1467 2.40804 14.7651 2.25 14.3673 2.25H9.86731C9.46949 2.25 9.08795 2.40804 8.80665 2.68934C8.52535 2.97064 8.36731 3.35218 8.36731 3.75V5.25" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    