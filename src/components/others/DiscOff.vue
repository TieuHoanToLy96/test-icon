<script>
export default {
  name: 'disc-off',
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
<path d="M20.044 16.04C20.8941 14.3495 21.1898 12.4339 20.8889 10.5657C20.5881 8.6975 19.706 6.97164 18.3682 5.63342C17.0303 4.2952 15.3046 3.41273 13.4365 3.11142C11.5683 2.81011 9.65274 3.1053 7.96197 3.95503M5.62897 5.64303C4.37226 6.90249 3.51704 8.50617 3.17137 10.2515C2.8257 11.9968 3.00509 13.8054 3.68687 15.4488C4.36864 17.0922 5.52222 18.4966 7.00185 19.4847C8.48148 20.4727 10.2208 21 12 21C14.491 21 16.73 20.003 18.36 18.369" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.298 11.2881C11.1088 11.474 11.0012 11.7275 10.9988 11.9927C10.9965 12.258 11.0996 12.5134 11.2855 12.7026C11.4714 12.8918 11.7249 12.9994 11.9902 13.0018C12.2555 13.0041 12.5108 12.901 12.7 12.7151" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 12C7 10.62 7.559 9.371 8.462 8.466M11.069 7.086C11.371 7.03 11.682 7 12 7" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 17C12.6604 17.0008 13.3144 16.8704 13.924 16.6164C14.5336 16.3623 15.0867 15.9896 15.551 15.52M16.913 12.933C16.97 12.631 17 12.319 17 12" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    