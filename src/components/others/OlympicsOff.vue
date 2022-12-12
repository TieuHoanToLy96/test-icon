<script>
export default {
  name: 'olympics-off',
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
<path d="M6 6C5.40666 6 4.82664 6.17595 4.33329 6.50559C3.83994 6.83524 3.45543 7.30377 3.22836 7.85195C3.0013 8.40013 2.94189 9.00333 3.05765 9.58527C3.1734 10.1672 3.45912 10.7018 3.87868 11.1213C4.29824 11.5409 4.83279 11.8266 5.41473 11.9424C5.99667 12.0581 6.59987 11.9987 7.14805 11.7716C7.69623 11.5446 8.16477 11.1601 8.49441 10.6667C8.82405 10.1734 9 9.59334 9 9" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 12C19.6569 12 21 10.6569 21 9C21 7.34315 19.6569 6 18 6C16.3431 6 15 7.34315 15 9C15 10.6569 16.3431 12 18 12Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 9.0001C9 9.79575 9.31607 10.5588 9.87868 11.1214C10.4413 11.684 11.2044 12.0001 12 12.0001M14.566 10.5551C14.9154 9.97973 15.0611 9.30359 14.9797 8.63539C14.8983 7.9672 14.5946 7.34578 14.1174 6.87108C13.6401 6.39638 13.0171 6.09597 12.3485 6.01816C11.6799 5.94035 11.0045 6.08967 10.431 6.4421" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 18C10.6569 18 12 16.6569 12 15C12 13.3431 10.6569 12 9 12C7.34315 12 6 13.3431 6 15C6 16.6569 7.34315 18 9 18Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.8778 12.8802C12.599 13.1586 12.3777 13.4891 12.2265 13.853C12.0754 14.2168 11.9974 14.6069 11.9971 15.0009C11.9963 15.7966 12.3117 16.56 12.8738 17.1232C13.436 17.6864 14.1988 18.0032 14.9945 18.004C15.3885 18.0044 15.7787 17.9271 16.1429 17.7767C16.507 17.6262 16.838 17.4056 17.1168 17.1272M17.7028 13.6962C17.4022 13.075 16.8974 12.5758 16.2728 12.2822" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    