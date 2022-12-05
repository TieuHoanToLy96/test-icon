<script>
export default {
  name: 'hanger-2',
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
<path d="M12 9L4.029 13.428C3.71706 13.6012 3.45714 13.8548 3.27621 14.1623C3.09527 14.4698 2.99991 14.8202 3 15.177V16C3 16.5304 3.21071 17.0391 3.58579 17.4142C3.96086 17.7893 4.46957 18 5 18H6" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.9999 18H18.9999C19.5303 18 20.039 17.7893 20.4141 17.4142C20.7892 17.0391 20.9999 16.5304 20.9999 16V15.177C21 14.8202 20.9046 14.4698 20.7237 14.1623C20.5428 13.8548 20.2828 13.6012 19.9709 13.428L11.9999 9C10.5429 8.19 10.0069 6.667 10.0039 5C10.0039 4.46957 10.2146 3.96086 10.5897 3.58579C10.9648 3.21071 11.4735 3 12.0039 3C12.5343 3 13.043 3.21071 13.4181 3.58579C13.7932 3.96086 14.0039 4.46957 14.0039 5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 16H8C6.89543 16 6 16.8954 6 18V19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19V18C18 16.8954 17.1046 16 16 16Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    