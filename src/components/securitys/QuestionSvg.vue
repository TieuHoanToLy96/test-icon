<script>
export default {
  name: 'question-svg',
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
<path d="M11.9991 17.8125C12.5164 17.8125 12.9358 17.3928 12.9358 16.875C12.9358 16.3572 12.5164 15.9375 11.9991 15.9375C11.4818 15.9375 11.0625 16.3572 11.0625 16.875C11.0625 17.3928 11.4818 17.8125 11.9991 17.8125Z" fill="currentColor"/>
<path d="M12 13.5004V12.7504C12.5191 12.7504 13.0266 12.5965 13.4583 12.308C13.89 12.0196 14.2265 11.6096 14.4251 11.13C14.6238 10.6503 14.6758 10.1225 14.5745 9.61331C14.4732 9.10411 14.2232 8.63638 13.8561 8.26927C13.489 7.90215 13.0213 7.65215 12.5121 7.55086C12.0029 7.44957 11.4751 7.50156 10.9954 7.70024C10.5158 7.89892 10.1058 8.23537 9.81735 8.66705C9.52891 9.09873 9.37495 9.60625 9.37495 10.1254M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    