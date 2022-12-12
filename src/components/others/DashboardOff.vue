<script>
export default {
  name: 'dashboard-off',
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
<path d="M11.175 11.178C10.8799 11.3117 10.6217 11.5151 10.4226 11.7706C10.2235 12.0262 10.0895 12.3264 10.032 12.6452C9.97461 12.9641 9.9955 13.2921 10.0929 13.6011C10.1903 13.9101 10.3613 14.1908 10.5912 14.419C10.8212 14.6473 11.1031 14.8163 11.4128 14.9115C11.7224 15.0066 12.0506 15.0252 12.369 14.9655C12.6875 14.9057 12.9866 14.7696 13.2408 14.5686C13.4949 14.3677 13.6964 14.108 13.828 13.812" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5 10.5L15.5 9.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.62098 4.61209C10.2596 3.94826 12.0575 3.78178 13.7902 4.13343C15.5229 4.48507 17.1136 5.33927 18.3638 6.58938C19.6141 7.8395 20.4684 9.43017 20.8202 11.1628C21.172 12.8955 21.0057 14.6934 20.342 16.3321M18.826 18.8201C18.4555 19.2512 18.045 19.6463 17.6 20.0001H6.39998C5.36248 19.1755 4.51988 18.132 3.93238 16.9441C3.34488 15.7562 3.02698 14.4532 3.00137 13.1282C2.97577 11.8032 3.24311 10.4888 3.78428 9.27912C4.32545 8.06939 5.12711 6.99411 6.13198 6.13009" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    