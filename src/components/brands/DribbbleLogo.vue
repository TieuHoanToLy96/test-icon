<script>
export default {
  name: 'dribbble-logo',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.89386 19.2442C8.22885 17.0325 10.1127 15.2034 12.3627 13.9341C14.6127 12.6649 17.1525 11.9986 19.7358 11.9998C20.2418 11.9998 20.7415 12.0245 21.235 12.0738M17.863 4.97727C16.4577 6.70458 14.6847 8.09664 12.6733 9.052C10.6619 10.0074 8.46263 10.502 6.23584 10.4998C5.28734 10.5003 4.34092 10.4112 3.40915 10.2339M8.29127 3.90798C10.5468 5.23142 12.4169 7.1218 13.716 9.39144C15.0151 11.6611 15.698 14.231 15.6968 16.8462C15.6977 18.0715 15.5487 19.2923 15.2533 20.4815M21.2353 12C21.2353 16.9706 17.2059 21 12.2353 21C7.26473 21 3.23529 16.9706 3.23529 12C3.23529 7.02944 7.26473 3 12.2353 3C17.2059 3 21.2353 7.02944 21.2353 12Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    