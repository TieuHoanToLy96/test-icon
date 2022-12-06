<script>
export default {
  name: 'beach-off',
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
<path d="M15.071 15.102C13.7048 14.548 12.2056 14.4089 10.7607 14.702C9.31588 14.9951 7.98941 15.7074 6.94702 16.75" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.27 6.26907L20.196 12.0001C20.9952 10.6321 21.221 9.00358 20.8241 7.46979C20.4271 5.936 19.4396 4.62147 18.077 3.81305C16.7145 3.00462 15.0875 2.76793 13.5511 3.15461C12.0146 3.54129 10.6935 4.51996 9.87598 5.87707" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.7321 10C18.3901 7.13003 18.9571 4.35603 18.0001 3.80403C17.0431 3.25203 14.9251 5.13003 13.2681 8.00003" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 9L14.261 10.279" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.794 12.8201L12 14.1961" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 19.25C3.31129 19.0953 3.65249 19.01 4 19C4.3895 18.9919 4.77512 19.0787 5.12358 19.2529C5.47203 19.4271 5.77283 19.6835 6 20C6.22717 20.3165 6.52797 20.573 6.87642 20.7472C7.22488 20.9214 7.6105 21.0082 8 21C8.3895 21.0082 8.77512 20.9214 9.12358 20.7472C9.47203 20.573 9.77283 20.3165 10 20C10.2272 19.6835 10.528 19.4271 10.8764 19.2529C11.2249 19.0787 11.6105 18.9919 12 19C12.3895 18.9919 12.7751 19.0787 13.1236 19.2529C13.472 19.4271 13.7728 19.6835 14 20C14.2272 20.3165 14.528 20.573 14.8764 20.7472C15.2249 20.9214 15.6105 21.0082 16 21C16.3895 21.0082 16.7751 20.9214 17.1236 20.7472C17.472 20.573 17.7728 20.3165 18 20C18.2829 19.6059 18.6786 19.3067 19.135 19.142" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    