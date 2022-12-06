<script>
export default {
  name: 'air-conditioning',
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
<path d="M8 16C8 16.7956 7.68393 17.5587 7.12132 18.1213C6.55871 18.6839 5.79565 19 5 19" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 16C16 16.7956 16.3161 17.5587 16.8787 18.1213C17.4413 18.6839 18.2044 19 19 19" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 16V20" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 5H5C3.89543 5 3 5.89543 3 7V11C3 12.1046 3.89543 13 5 13H19C20.1046 13 21 12.1046 21 11V7C21 5.89543 20.1046 5 19 5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 13V10C7 9.73478 7.10536 9.48043 7.29289 9.29289C7.48043 9.10536 7.73478 9 8 9H16C16.2652 9 16.5196 9.10536 16.7071 9.29289C16.8946 9.48043 17 9.73478 17 10V13" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    