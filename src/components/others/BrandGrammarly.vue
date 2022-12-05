<script>
export default {
  name: 'brand-grammarly',
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
<path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.6969 9.43404C15.1403 8.63236 14.3381 8.03337 13.4114 7.72738C12.4846 7.42139 11.4835 7.42499 10.5589 7.73763C9.6344 8.05028 8.83657 8.65503 8.28573 9.46069C7.7349 10.2664 7.46092 11.2293 7.5051 12.2042C7.54929 13.1792 7.90925 14.1134 8.53071 14.8659C9.15216 15.6184 10.0014 16.1485 10.9505 16.3763C11.8995 16.604 12.8968 16.517 13.7921 16.1285C14.6874 15.7399 15.4321 15.0708 15.9139 14.222" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.5 14H16V16.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    