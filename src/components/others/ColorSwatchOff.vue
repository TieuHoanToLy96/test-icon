<script>
export default {
  name: 'color-swatch-off',
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
<path d="M13 13V17C13 17.7916 13.2348 18.5653 13.6748 19.2234C14.1147 19.8814 14.74 20.3941 15.4715 20.6966C16.203 20.9991 17.0078 21.0777 17.784 20.9226C18.5603 20.7674 19.273 20.3854 19.832 19.825M21 17V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H15C14.4696 3 13.9609 3.21071 13.5858 3.58579C13.2107 3.96086 13 4.46957 13 5V9" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.9999 7.35005L10.9999 5.35005C10.7292 5.07932 10.3865 4.89197 10.0125 4.81025C9.63843 4.72853 9.24881 4.75588 8.88987 4.88905M6.75987 6.76305L5.34387 8.17805C4.96893 8.55311 4.7583 9.06172 4.7583 9.59205C4.7583 10.1224 4.96893 10.631 5.34387 11.0061L14.3439 20.0061" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.3 13H5C4.46957 13 3.96086 13.2107 3.58579 13.5858C3.21071 13.9609 3 14.4696 3 15V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H17" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 17V17.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    