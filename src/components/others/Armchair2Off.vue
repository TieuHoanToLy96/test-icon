<script>
export default {
  name: 'armchair-2-off',
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
<path d="M5 10V6C4.9998 5.70562 5.04293 5.41282 5.128 5.131M7.166 3.118C7.43 3.04 7.71 3 8 3H16C16.7957 3 17.5587 3.31607 18.1213 3.87868C18.6839 4.44129 19 5.20435 19 6V10" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.124 12.1451C16.2718 11.6477 16.5459 11.1972 16.9198 10.8374C17.2936 10.4777 17.7543 10.221 18.257 10.0924C18.7596 9.96382 19.287 9.96775 19.7877 10.1038C20.2884 10.2399 20.7452 10.5034 21.1136 10.8687C21.4821 11.234 21.7495 11.6886 21.8898 12.188C22.0302 12.6875 22.0386 13.2149 21.9144 13.7186C21.7901 14.2223 21.5373 14.6852 21.1808 15.0621C20.8242 15.439 20.3761 15.7171 19.88 15.8691M19 19.0001H5V16.0001C4.40666 16.0001 3.82664 15.8241 3.33329 15.4945C2.83994 15.1648 2.45543 14.6963 2.22836 14.1481C2.0013 13.5999 1.94189 12.9967 2.05765 12.4148C2.1734 11.8329 2.45912 11.2983 2.87868 10.8788C3.29824 10.4592 3.83279 10.1735 4.41473 10.0577C4.99667 9.94196 5.59987 10.0014 6.14805 10.2284C6.69623 10.4555 7.16477 10.84 7.49441 11.3334C7.82405 11.8267 8 12.4067 8 13.0001V15.0001" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 12H12" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 19V21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 19V21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    