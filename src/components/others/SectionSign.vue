<script>
export default {
  name: 'section-sign',
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
<path d="M9.17212 19.004C9.35597 19.5224 9.67877 19.9804 10.1053 20.3278C10.5318 20.6752 11.0455 20.8987 11.5905 20.9738C12.1354 21.049 12.6905 20.973 13.1951 20.754C13.6997 20.5351 14.1344 20.1816 14.4518 19.7323C14.7691 19.283 14.9569 18.7551 14.9945 18.2063C15.0321 17.6575 14.9182 17.1089 14.6652 16.6205C14.4121 16.1321 14.0297 15.7226 13.5597 15.4368C13.0897 15.151 12.5502 14.9999 12.0001 15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.8301 5.00205C14.6472 4.48295 14.3252 4.02414 13.8991 3.67577C13.473 3.32741 12.9594 3.10292 12.4143 3.02685C11.8693 2.95078 11.3138 3.02607 10.8086 3.24448C10.3034 3.46288 9.86806 3.816 9.55009 4.2652C9.23212 4.7144 9.0438 5.24239 9.00573 5.79143C8.96765 6.34046 9.08129 6.8894 9.33421 7.37819C9.58713 7.86698 9.96959 8.27681 10.4398 8.56286C10.9099 8.84891 11.4497 9.00015 12.0001 9.00005" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    