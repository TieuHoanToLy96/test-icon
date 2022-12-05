<script>
export default {
  name: 'shopping-cart',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.7206 17.25H7.01603L4.40073 2.86584C4.36931 2.69303 4.27824 2.53673 4.14339 2.42419C4.00854 2.31164 3.83847 2.25 3.66283 2.25H1.97058M17.7206 17.25C16.685 17.25 15.8456 18.0895 15.8456 19.125C15.8456 20.1605 16.685 21 17.7206 21C18.7561 21 19.5956 20.1605 19.5956 19.125C19.5956 18.0895 18.7561 17.25 17.7206 17.25ZM6.33421 13.5H18.1051C18.4564 13.5 18.7965 13.3767 19.0662 13.1516C19.3359 12.9265 19.518 12.6139 19.5809 12.2683L20.7206 6H4.97058M9.84558 19.125C9.84558 20.1605 9.00611 21 7.97058 21C6.93505 21 6.09558 20.1605 6.09558 19.125C6.09558 18.0895 6.93505 17.25 7.97058 17.25C9.00611 17.25 9.84558 18.0895 9.84558 19.125Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    