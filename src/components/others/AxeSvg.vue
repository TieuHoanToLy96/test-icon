<script>
export default {
  name: 'axe-svg',
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
<path d="M13 9L20.383 16.418C21.206 17.238 21.206 18.566 20.383 19.385C19.9876 19.7783 19.4527 19.999 18.895 19.999C18.3373 19.999 17.8024 19.7783 17.407 19.385L10 12" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.66004 15.66L3.34004 12.34C3.19389 12.1937 3.08632 12.0134 3.02696 11.8153C2.96761 11.6172 2.95832 11.4075 2.99995 11.205C3.04157 11.0024 3.13279 10.8133 3.26545 10.6547C3.3981 10.4961 3.56804 10.3728 3.76004 10.296L7.00004 9L13 3L16 6L10 12L8.70404 15.24C8.62722 15.432 8.50397 15.6019 8.34534 15.7346C8.1867 15.8672 7.99763 15.9585 7.79507 16.0001C7.59251 16.0417 7.38279 16.0324 7.1847 15.9731C6.98661 15.9137 6.80634 15.8062 6.66004 15.66Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    