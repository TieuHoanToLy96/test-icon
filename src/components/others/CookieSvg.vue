<script>
export default {
  name: 'cookie-svg',
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
<path d="M8 13V13.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 17V17.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 12V12.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 14V14.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 8V8.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.148 3.4759L15.815 4.5799C15.2864 5.27532 15 6.12464 14.9996 6.99814C14.9991 7.87164 15.2845 8.72128 15.8123 9.41729C16.3401 10.1133 17.0812 10.6174 17.9224 10.8526C18.7637 11.0878 19.6588 11.0412 20.471 10.7199L20.524 10.8519C20.8285 11.587 20.8285 12.4128 20.524 13.1479C20.027 13.9339 19.686 14.5519 19.5 14.9999C19.311 15.4559 19.091 16.1939 18.84 17.2159C18.5353 17.9508 17.9511 18.5346 17.216 18.8389C16.168 19.1019 15.429 19.3219 15 19.4999C14.525 19.6969 13.908 20.0379 13.148 20.5239C12.413 20.8284 11.5871 20.8284 10.852 20.5239C10.05 20.0209 9.43302 19.6799 9.00002 19.4999C8.52902 19.3049 7.79002 19.0849 6.78402 18.8399C6.04908 18.5352 5.46528 17.951 5.16102 17.2159C4.89602 16.1639 4.67602 15.4259 4.50002 14.9999C4.30202 14.5209 3.96002 13.9039 3.47602 13.1479C3.17157 12.4128 3.17157 11.587 3.47602 10.8519C3.95602 10.1079 4.29602 9.4909 4.50002 8.9999C4.67102 8.5869 4.89102 7.8479 5.16002 6.7839C5.46473 6.04896 6.04889 5.46515 6.78402 5.1609C7.81602 4.9049 8.55402 4.6849 9.00002 4.4999C9.45802 4.3099 10.075 3.9689 10.852 3.4759C11.5871 3.17145 12.413 3.17145 13.148 3.4759V3.4759Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    