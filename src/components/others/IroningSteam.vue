<script>
export default {
  name: 'ironing-steam',
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
<path d="M12 19V21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 4H16.459C17.1691 4.00005 17.8562 4.25202 18.3981 4.71107C18.9399 5.17013 19.3013 5.80651 19.418 6.507L19.995 9.971L20.805 14.836C20.8288 14.9791 20.8212 15.1257 20.7826 15.2656C20.7441 15.4054 20.6756 15.5352 20.5819 15.646C20.4882 15.7567 20.3715 15.8457 20.2399 15.9069C20.1084 15.968 19.9651 15.9998 19.82 16H3C3 14.1435 3.7375 12.363 5.05025 11.0503C6.36301 9.7375 8.14348 9 10 9H19.8" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 19L7 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 19L17 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    