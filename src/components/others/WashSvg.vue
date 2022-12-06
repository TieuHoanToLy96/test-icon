<script>
export default {
  name: 'wash-svg',
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
<path d="M3.48584 8.96519C3.65384 8.98519 3.82584 8.99819 3.99984 9.00019C4.78984 9.00919 5.53884 8.82219 5.99984 8.50019C6.46084 8.18019 7.20984 7.99319 7.99984 8.00019C8.78984 7.99319 9.53884 8.18019 9.99984 8.50019C10.4608 8.82219 11.2098 9.00919 11.9998 9.00019C12.7898 9.00919 13.5388 8.82219 13.9998 8.50019C14.4608 8.18019 15.2098 7.99319 15.9998 8.00019C16.7898 7.99319 17.5388 8.18019 17.9998 8.50019C18.4608 8.82219 19.2098 9.00919 19.9998 9.00019C20.1698 8.99819 20.3388 8.98619 20.5028 8.96619" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 6L4.721 16.329C4.79888 16.796 5.0399 17.2202 5.40118 17.5262C5.76245 17.8322 6.22056 18.0001 6.694 18H17.306C17.7794 18.0001 18.2375 17.8322 18.5988 17.5262C18.9601 17.2202 19.2011 16.796 19.279 16.329L21 6" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    