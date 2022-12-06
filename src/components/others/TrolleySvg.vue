<script>
export default {
  name: 'trolley-svg',
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
<path d="M11 21C12.1046 21 13 20.1046 13 19C13 17.8954 12.1046 17 11 17C9.89543 17 9 17.8954 9 19C9 20.1046 9.89543 21 11 21Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 16L9 18" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 17L20 5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 10L19 11" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.59198 4.69509L12.898 6.79909C13.0425 6.89099 13.1674 7.01053 13.2656 7.15086C13.3638 7.29119 13.4333 7.44953 13.4701 7.61679C13.5069 7.78405 13.5103 7.95694 13.48 8.12551C13.4498 8.29409 13.3866 8.45503 13.294 8.59909L10.2 13.4101C10.0141 13.6994 9.72121 13.9033 9.38535 13.9772C9.04949 14.051 8.69805 13.9888 8.40798 13.8041L5.10198 11.7001C4.95746 11.6082 4.83252 11.4887 4.73434 11.3483C4.63616 11.208 4.56667 11.0497 4.52987 10.8824C4.49308 10.7151 4.48969 10.5422 4.51991 10.3737C4.55013 10.2051 4.61337 10.0442 4.70598 9.90009L7.79998 5.09009C7.98583 4.80076 8.27875 4.59685 8.61461 4.52301C8.95047 4.44916 9.3019 4.5114 9.59198 4.69609V4.69509Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    