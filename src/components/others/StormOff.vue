<script>
export default {
  name: 'storm-off',
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
      default: "currentColor"
    }
  }
}
</script>
  
<template>
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.88392 9.87406C9.32086 10.4363 9.00423 11.1992 9.00366 11.9949C9.0031 12.7907 9.31866 13.554 9.88092 14.1171C10.4432 14.6801 11.2061 14.9968 12.0018 14.9973C12.7975 14.9979 13.5609 14.6823 14.1239 14.1201M14.6939 10.6791C14.394 10.0701 13.8971 9.58027 13.2839 9.28906" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.03698 7.06324C6.38747 7.71374 5.87243 8.4858 5.52129 9.33535C5.17015 10.1849 4.98978 11.0953 4.99048 12.0145C4.99189 13.8711 5.73073 15.651 7.04448 16.9627C8.35823 18.2745 10.1393 19.0106 11.9958 19.0092C13.8523 19.0078 15.6322 18.269 16.944 16.9552M18.529 14.5292C19.0203 13.2636 19.1329 11.8823 18.8532 10.5538C18.5735 9.22523 17.9134 8.0067 16.9534 7.04662C15.9934 6.08654 14.775 5.42635 13.4465 5.14646C12.118 4.86657 10.7367 4.97906 9.47098 5.47024" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.36899 14.2362C3.76399 10.8082 3.77199 7.56321 4.36899 4.38721" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.6299 9.75977C19.5515 11.7136 20.0191 13.8506 19.9979 16.0108M19.6279 19.6188C19.5409 20.0788 19.4409 20.5388 19.3329 20.9958" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    