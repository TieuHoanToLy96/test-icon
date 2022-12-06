<script>
export default {
  name: 'clipboard-heart',
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
<path d="M9 5H7C6.46957 5 5.96086 5.21071 5.58579 5.58579C5.21071 5.96086 5 6.46957 5 7V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V7C19 6.46957 18.7893 5.96086 18.4142 5.58579C18.0391 5.21071 17.5304 5 17 5H15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 3H11C9.89543 3 9 3.89543 9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5C15 3.89543 14.1046 3 13 3Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.993 16.75L14.74 13.935C15.0805 13.5818 15.2711 13.1106 15.272 12.62C15.273 12.1295 15.0841 11.6575 14.745 11.303C14.5797 11.1303 14.3812 10.9927 14.1614 10.8986C13.9417 10.8045 13.7051 10.7557 13.4661 10.7553C13.227 10.7548 12.9903 10.8026 12.7701 10.8959C12.55 10.9892 12.351 11.1259 12.185 11.298L12.002 11.486L11.819 11.297C11.6536 11.1244 11.4551 10.9869 11.2353 10.8928C11.0155 10.7988 10.7789 10.7501 10.5398 10.7498C10.3008 10.7494 10.0641 10.7973 9.84396 10.8907C9.62386 10.984 9.42489 11.1209 9.25899 11.293C8.91843 11.6463 8.7278 12.1176 8.72705 12.6082C8.72631 13.0989 8.9155 13.5708 9.25499 13.925L11.993 16.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    