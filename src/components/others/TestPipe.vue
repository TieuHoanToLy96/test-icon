<script>
export default {
  name: 'test-pipe',
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
<path d="M20.0001 8.04L7.87805 20.164C7.61278 20.4293 7.29785 20.6398 6.95123 20.7834C6.60461 20.9271 6.2331 21.001 5.85791 21.0011C5.10017 21.0012 4.37342 20.7002 3.83755 20.1645C3.30168 19.6288 3.00058 18.9021 3.00049 18.1444C3.00039 17.3866 3.30132 16.6599 3.83705 16.124L15.9591 4" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 13H15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 15L20.5 16.6C20.7546 16.8887 20.9205 17.2447 20.9777 17.6253C21.035 18.0059 20.9812 18.3949 20.8229 18.7458C20.6645 19.0966 20.4083 19.3942 20.085 19.603C19.7616 19.8118 19.3849 19.9229 19 19.9229C18.6151 19.9229 18.2384 19.8118 17.915 19.603C17.5917 19.3942 17.3355 19.0966 17.1771 18.7458C17.0188 18.3949 16.965 18.0059 17.0223 17.6253C17.0795 17.2447 17.2454 16.8887 17.5 16.6L19 15V15Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 3L21 9" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    