<script>
export default {
  name: 'brand-firefox',
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
<path d="M4.02802 7.8199C3.21671 9.36699 2.87319 11.1167 3.03934 12.8557C3.2055 14.5947 3.87415 16.2478 4.96374 17.6132C6.05333 18.9787 7.51676 19.9975 9.1755 20.5455C10.8342 21.0935 12.6166 21.1468 14.3052 20.6991C15.9937 20.2514 17.5155 19.3219 18.6848 18.0241C19.8542 16.7263 20.6206 15.1162 20.8905 13.3903C21.1604 11.6644 20.9222 9.89718 20.2049 8.30432C19.4876 6.71146 18.3223 5.36177 16.851 4.4199C15.215 3.3999 13.787 3.3999 12 3.3999H10.353" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.91404 9.48503C3.15804 7.91603 4.10904 4.10503 5.02304 3.31503C5.10904 4.21103 5.60804 4.52303 6.13404 5.00003C7.01404 4.72503 7.44704 4.71803 8.00104 5.00003C8.82104 4.09003 9.69504 2.64603 10.629 2.90703C9.54704 4.64803 10.559 6.64003 12 7.08003C11.83 8.05503 10.516 8.99303 9.24004 9.76603C7.94404 10.704 8.51804 11.616 9.24004 12C10.189 12.506 12.851 11.005 13.785 12.354C12.087 12.456 12.249 15.461 9.80204 15.081C12.325 16.038 14.147 15.543 15.26 14.741C17.225 13.221 18.139 11.199 18.139 9.18403C18.125 7.78603 18.333 6.48903 16.879 4.43403" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    