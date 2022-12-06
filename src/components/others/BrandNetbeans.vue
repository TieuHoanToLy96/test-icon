<script>
export default {
  name: 'brand-netbeans',
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
<path d="M19 6.8731C19.3062 7.0499 19.5601 7.30473 19.7358 7.61163C19.9115 7.91852 20.0026 8.2665 20 8.6201V15.1561C19.9999 15.5127 19.9045 15.8629 19.7235 16.1702C19.5426 16.4776 19.2828 16.731 18.971 16.9041L12.971 20.7371C12.674 20.9021 12.3398 20.9886 12 20.9886C11.6602 20.9886 11.326 20.9021 11.029 20.7371L5.029 16.9041C4.71736 16.731 4.45763 16.4778 4.27671 16.1707C4.0958 15.8635 4.00026 15.5136 4 15.1571V8.6201C4.00008 8.26346 4.09553 7.91332 4.27646 7.60598C4.45739 7.29863 4.71721 7.04526 5.029 6.8721L11.029 3.3001C11.3348 3.12987 11.679 3.04053 12.029 3.04053C12.379 3.04053 12.7232 3.12987 13.029 3.3001L19.029 6.8731H19V6.8731Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.5 9.42991C15.6532 9.51835 15.7802 9.64584 15.868 9.79939C15.9559 9.95293 16.0014 10.127 16 10.3039V13.5719C15.9999 13.7503 15.9521 13.9254 15.8616 14.0791C15.771 14.2327 15.641 14.3594 15.485 14.4459L12.485 16.3629C12.3366 16.4452 12.1697 16.4884 12 16.4884C11.8303 16.4884 11.6634 16.4452 11.515 16.3629L8.515 14.4459C8.35916 14.3595 8.22924 14.233 8.1387 14.0795C8.04815 13.926 8.00027 13.7511 8 13.5729V10.3039C7.99999 10.1256 8.04764 9.9506 8.13801 9.79693C8.22839 9.64327 8.3582 9.51655 8.514 9.42991L11.514 7.64391C11.825 7.47091 12.204 7.47091 12.514 7.64391L15.514 9.43091H15.5V9.42991Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 21V12L4.5 7.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 12L19.5 7.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 3V7.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.5 16L16 14" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 14L4.5 16" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    