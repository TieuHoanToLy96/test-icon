<script>
export default {
  name: 'brand-cupra',
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
      default: "currentColor"
    }
  }
}
</script>
  
<template>
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 10L2 6L17.298 12.909C17.3235 12.9206 17.3463 12.9374 17.3648 12.9583C17.3834 12.9792 17.3974 13.0038 17.4059 13.0305C17.4144 13.0572 17.4172 13.0853 17.4141 13.1131C17.411 13.141 17.4021 13.1678 17.388 13.192L14 19" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.99979 19L6.61179 13.192C6.59767 13.1678 6.58878 13.141 6.58569 13.1131C6.58261 13.0853 6.5854 13.0572 6.59388 13.0305C6.60236 13.0038 6.61635 12.9792 6.63494 12.9583C6.65353 12.9374 6.6763 12.9206 6.70179 12.909L21.9998 6L19.4998 10" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    