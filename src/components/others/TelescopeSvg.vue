<script>
export default {
  name: 'telescope-svg',
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
<path d="M6 21L12 16L18 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 13V21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.29403 13.678L3.46003 13.959C3.98003 14.839 5.08403 15.224 6.06503 14.869L20.307 9.704C20.4476 9.65553 20.5758 9.577 20.6829 9.4739C20.79 9.3708 20.8734 9.2456 20.9271 9.10701C20.9809 8.96842 21.0038 8.81978 20.9943 8.67143C20.9848 8.52308 20.9431 8.37858 20.872 8.248L18.252 3.543C18.1118 3.2996 17.8829 3.11992 17.6131 3.04162C17.3433 2.96332 17.0538 2.99249 16.805 3.123L16.749 3.155L4.05503 10.773C3.03503 11.386 2.69803 12.67 3.29503 13.678H3.29403Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 5L17 10.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    