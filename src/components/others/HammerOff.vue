<script>
export default {
  name: 'hammer-off',
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
<path d="M10.698 10.7202L4.02999 17.4182C3.83434 17.6126 3.67907 17.8437 3.57311 18.0983C3.46715 18.3529 3.4126 18.6259 3.4126 18.9017C3.4126 19.1775 3.46715 19.4505 3.57311 19.7051C3.67907 19.9597 3.83434 20.1909 4.02999 20.3852C4.42537 20.7785 4.96034 20.9992 5.51799 20.9992C6.07565 20.9992 6.61062 20.7785 7.00599 20.3852L13.702 13.7092" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.713 14.7018L20.707 12.7068C20.8945 12.5193 20.9998 12.265 20.9998 11.9998C20.9998 11.7347 20.8945 11.4804 20.707 11.2928L13.121 3.70685C12.9335 3.51938 12.6792 3.41406 12.414 3.41406C12.1488 3.41406 11.8945 3.51938 11.707 3.70685L9.70801 5.70585" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    