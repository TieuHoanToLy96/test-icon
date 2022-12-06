<script>
export default {
  name: 'football-svg',
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
<path d="M17.5974 17.3033C13.704 21.1967 8.29781 20.8863 5.6984 20.4461C5.23594 20.3682 4.80926 20.1481 4.47764 19.8164C4.14601 19.4848 3.92592 19.0581 3.84793 18.5957C3.40773 15.9963 3.09741 10.5901 6.99077 6.6967C10.8841 2.80335 16.2903 3.11367 18.8897 3.55386C19.3522 3.63185 19.7789 3.85195 20.1105 4.18357C20.4421 4.51519 20.6622 4.94188 20.7402 5.40433C21.1804 8.00375 21.4907 13.4099 17.5974 17.3033Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.2941 9L9.29407 15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9834 9.56799L14.7235 12.3106" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.86206 11.6893L12.6022 14.432" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.1901 3.396L20.898 10.104" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.69006 13.896L10.3981 20.604" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    