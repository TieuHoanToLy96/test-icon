<script>
export default {
  name: 'bottle-off',
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
<path d="M10 5H14V3C14 2.73478 13.8946 2.48043 13.7071 2.29289C13.5196 2.10536 13.2652 2 13 2H11C10.7348 2 10.4804 2.10536 10.2929 2.29289C10.1054 2.48043 10 2.73478 10 3V5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 3.5C14 5.126 14.507 6.712 15.45 8.037L15.5 8.107C16.4758 9.4777 17.0001 11.1184 17 12.801V13M17 17V19C17 19.5304 16.7893 20.0391 16.4142 20.4142C16.0391 20.7893 15.5304 21 15 21H9C8.46957 21 7.96086 20.7893 7.58579 20.4142C7.21071 20.0391 7 19.5304 7 19V12.8C7.00008 11.2083 7.46968 9.65206 8.35 8.326M9.686 5.696C9.89446 4.98263 10.0002 4.2432 10 3.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.00293 14.803C7.40184 14.6306 7.74643 14.353 7.99993 14C8.2271 13.6835 8.5279 13.4271 8.87635 13.2529C9.22481 13.0787 9.61043 12.9919 9.99993 13C10.3894 12.9919 10.7751 13.0787 11.1235 13.2529C11.472 13.4271 11.7728 13.6835 11.9999 14C12.2271 14.3165 12.5279 14.573 12.8764 14.7472C13.2248 14.9214 13.6104 15.0082 13.9999 15C14.2949 15.0063 14.5884 14.9582 14.8659 14.858" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    