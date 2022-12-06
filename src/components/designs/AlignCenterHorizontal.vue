<script>
export default {
  name: 'align-center-horizontal',
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
<path d="M12.8823 2.99954V5.24954M12.8823 18.7495V20.9995M12.8823 10.4995V13.4995M7.63232 5.25H18.1323C18.5465 5.25 18.8823 5.58579 18.8823 6V9.75C18.8823 10.1642 18.5465 10.5 18.1323 10.5H7.63232C7.21811 10.5 6.88232 10.1642 6.88232 9.75V6C6.88232 5.58579 7.21811 5.25 7.63232 5.25ZM5.38232 13.5H20.3823C20.7965 13.5 21.1323 13.8358 21.1323 14.25V18C21.1323 18.4142 20.7965 18.75 20.3823 18.75H5.38232C4.96811 18.75 4.63232 18.4142 4.63232 18V14.25C4.63232 13.8358 4.96811 13.5 5.38232 13.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    