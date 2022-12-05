<script>
export default {
  name: 'brand-samsungpass',
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
<path d="M18 10H6C4.89543 10 4 10.8954 4 12V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V12C20 10.8954 19.1046 10 18 10Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 10V8.138C7 5.3 9.239 3 12 3C14.761 3 17 5.3 17 8.138V10" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.4849 17.5771C10.8219 17.8671 11.1849 18.0001 11.9999 18.0001H12.4129C12.7359 18.0001 13.0459 17.8671 13.2749 17.6321C13.5043 17.3943 13.632 17.0765 13.6309 16.7461C13.6309 16.4141 13.5029 16.0961 13.2749 15.8601C13.1631 15.7442 13.0293 15.6519 12.8812 15.5887C12.7331 15.5255 12.5739 15.4926 12.4129 15.4921H11.5869C11.4261 15.4917 11.267 15.4591 11.1191 15.396C10.9712 15.333 10.8375 15.2408 10.7259 15.1251C10.4965 14.8873 10.3688 14.5695 10.3699 14.2391C10.3699 13.9071 10.4979 13.5881 10.7259 13.3531C10.8374 13.2372 10.9711 13.1449 11.119 13.0817C11.2669 13.0184 11.426 12.9856 11.5869 12.9851H11.9999C12.8159 12.9851 13.1779 13.1181 13.5149 13.4081" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    