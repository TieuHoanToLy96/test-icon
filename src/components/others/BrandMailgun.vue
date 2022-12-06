<script>
export default {
  name: 'brand-mailgun',
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
<path d="M17 12.0001C17 12.5305 17.2107 13.0392 17.5858 13.4143C17.9609 13.7893 18.4696 14.0001 19 14.0001C19.5304 14.0001 20.0391 13.7893 20.4142 13.4143C20.7893 13.0392 21 12.5305 21 12.0001C20.9999 9.93862 20.2921 7.93971 18.995 6.33751C17.698 4.73532 15.8902 3.62696 13.8739 3.19774C11.8577 2.76853 9.75516 3.04449 7.91797 3.97947C6.08077 4.91445 4.62022 6.45178 3.78052 8.33444C2.94081 10.2171 2.77286 12.3309 3.30472 14.3226C3.83659 16.3142 5.03605 18.0629 6.70254 19.2763C8.36904 20.4896 10.4016 21.0942 12.4603 20.9887C14.519 20.8833 16.4792 20.0743 18.013 18.6971" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    