<script>
export default {
  name: 'refresh-off',
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
<path d="M20 12.1121C19.8062 10.7153 19.2921 9.38251 18.498 8.21819C17.7039 7.05387 16.6514 6.08968 15.423 5.40122C14.1947 4.71276 12.8238 4.31875 11.418 4.25009C10.0121 4.18143 8.60951 4.43998 7.32013 5.00547M4.60887 6.83594C3.73019 7.69453 3.03408 8.72246 2.5625 9.85779M2 5.40122V9.85779L5.375 9.90976" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 14.3662C2.23188 16.0379 2.92174 17.6125 3.99296 18.9151C5.06418 20.2177 6.47482 21.1973 8.06821 21.7451C9.6616 22.2929 11.3754 22.3874 13.0191 22.0182C14.6629 21.649 16.1724 20.8305 17.3799 19.6536M20 19.6536V16.6205H16.625" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 2L22 22" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    