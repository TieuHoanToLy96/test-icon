<script>
export default {
  name: 'chart-bar-off',
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
<path d="M8 12H4C3.44772 12 3 12.4477 3 13V19C3 19.5523 3.44772 20 4 20H8C8.55228 20 9 19.5523 9 19V13C9 12.4477 8.55228 12 8 12Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 8H14C14.2652 8 14.5196 8.10536 14.7071 8.29289C14.8946 8.48043 15 8.73478 15 9V11M15 15V19C15 19.2652 14.8946 19.5196 14.7071 19.7071C14.5196 19.8946 14.2652 20 14 20H10C9.73478 20 9.48043 19.8946 9.29289 19.7071C9.10536 19.5196 9 19.2652 9 19V9" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 11V5C15 4.73478 15.1054 4.48043 15.2929 4.29289C15.4804 4.10536 15.7348 4 16 4H20C20.2652 4 20.5196 4.10536 20.7071 4.29289C20.8946 4.48043 21 4.73478 21 5V17M20 20H16C15.7348 20 15.4804 19.8946 15.2929 19.7071C15.1054 19.5196 15 19.2652 15 19V15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 20H18" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    