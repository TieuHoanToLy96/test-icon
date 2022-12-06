<script>
export default {
  name: 'link-simple',
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
<path d="M9.64112 15.1811L16.0051 8.81716M14.4139 16.7728L11.7622 19.4245C10.9183 20.2682 9.77377 20.7421 8.58043 20.742C7.38709 20.7419 6.24265 20.2678 5.39883 19.4239C4.55501 18.5801 4.08091 17.4357 4.08081 16.2423C4.08071 15.049 4.55461 13.9045 5.39829 13.0605L8.04994 10.4089M17.5963 13.5904L20.248 10.9387C21.0917 10.0948 21.5656 8.95027 21.5655 7.75692C21.5654 6.56358 21.0913 5.41915 20.2474 4.57533C19.4036 3.73151 18.2592 3.25741 17.0658 3.25731C15.8725 3.25721 14.728 3.73111 13.884 4.57478L11.2324 7.22643" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    