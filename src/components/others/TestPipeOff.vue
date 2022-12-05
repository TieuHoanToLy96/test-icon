<script>
export default {
  name: 'test-pipe-off',
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
<path d="M20.0001 8.04C18.6621 9.35533 17.3288 10.6753 16.0001 12M14.0001 14C12.9151 15.085 10.8751 17.14 7.87805 20.164C7.61278 20.4293 7.29785 20.6398 6.95123 20.7834C6.60461 20.9271 6.2331 21.001 5.85791 21.0011C5.10017 21.0012 4.37342 20.7002 3.83755 20.1645C3.30168 19.6288 3.00058 18.9021 3.00049 18.1444C3.00039 17.3866 3.30132 16.6599 3.83705 16.124C6.85505 13.128 8.91005 11.087 10.0001 10M12.0001 8C12.8721 7.128 14.1911 5.795 15.9591 4" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 13H13" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 15L20.5 16.6M19.76 19.773C19.3951 19.9232 18.994 19.9622 18.607 19.8849C18.2201 19.8077 17.8646 19.6177 17.5854 19.3389C17.3062 19.0601 17.1157 18.705 17.0378 18.3181C16.96 17.9313 16.9983 17.5301 17.148 17.165" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 3L21 9" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    