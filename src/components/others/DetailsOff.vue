<script>
export default {
  name: 'details-off',
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
<path d="M5 19H19" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.9859 16.984C20.9838 16.7323 20.9343 16.4833 20.8399 16.25L13.7399 4.00002C13.567 3.68741 13.3135 3.42685 13.0057 3.2454C12.6979 3.06396 12.3472 2.96826 11.9899 2.96826C11.6327 2.96826 11.2819 3.06396 10.9742 3.2454C10.6664 3.42685 10.4129 3.68741 10.2399 4.00002L9.41895 5.41702M7.94995 7.95102L3.13995 16.25C3.01989 16.5456 2.97228 16.8656 3.0011 17.1833C3.02991 17.501 3.13432 17.8073 3.3056 18.0764C3.47688 18.3456 3.71006 18.5698 3.98567 18.7305C4.26129 18.8912 4.57134 18.9836 4.88995 19" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 3V8M12 12V19" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    