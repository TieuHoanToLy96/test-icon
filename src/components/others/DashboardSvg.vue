<script>
export default {
  name: 'dashboard-svg',
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
<path d="M12 15C13.1046 15 14 14.1046 14 13C14 11.8954 13.1046 11 12 11C10.8954 11 10 11.8954 10 13C10 14.1046 10.8954 15 12 15Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.45 11.55L15.5 9.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.4 19.9999C4.93815 18.838 3.87391 17.2501 3.35478 15.4564C2.83564 13.6626 2.88732 11.7518 3.50265 9.98872C4.11797 8.22564 5.26647 6.69762 6.78899 5.61641C8.3115 4.5352 10.1326 3.95435 12 3.95435C13.8674 3.95435 15.6885 4.5352 17.211 5.61641C18.7335 6.69762 19.882 8.22564 20.4974 9.98872C21.1127 11.7518 21.1644 13.6626 20.6452 15.4564C20.1261 17.2501 19.0619 18.838 17.6 19.9999H6.4Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    