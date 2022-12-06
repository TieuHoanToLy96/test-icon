<script>
export default {
  name: 'wiper-wash',
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
<path d="M12 21C12.5523 21 13 20.5523 13 20C13 19.4477 12.5523 19 12 19C11.4477 19 11 19.4477 11 20C11 20.5523 11.4477 21 12 21Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 10.9998L8.5 16.4998C9.43464 15.5836 10.6912 15.0705 12 15.0705C13.3088 15.0705 14.5654 15.5836 15.5 16.4998L21 10.9998C19.8739 9.72288 18.489 8.70023 16.9373 7.99976C15.3855 7.29928 13.7025 6.93701 12 6.93701C10.2975 6.93701 8.61447 7.29928 7.06275 7.99976C5.51102 8.70023 4.1261 9.72288 3 10.9998" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 20V6" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.9999 6.0002C3.99123 5.37723 4.1282 4.76086 4.3999 4.2002" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 2.10016C7.65591 1.93081 8.34409 1.93081 9 2.10016" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.0001 6.0002C12.0088 5.37723 11.8718 4.76086 11.6001 4.2002" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9999 6.0002C11.9912 5.37723 12.1282 4.76086 12.3999 4.2002" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 2.10016C15.6559 1.93081 16.3441 1.93081 17 2.10016" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.0001 6.0002C20.0088 5.37723 19.8718 4.76086 19.6001 4.2002" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    