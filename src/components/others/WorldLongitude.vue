<script>
export default {
  name: 'world-longitude',
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
<path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.5 3C10.0937 4.04165 8.95106 5.39835 8.16374 6.9613C7.37641 8.52425 6.96631 10.2499 6.96631 12C6.96631 13.7501 7.37641 15.4758 8.16374 17.0387C8.95106 18.6017 10.0937 19.9584 11.5 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 3C13.9063 4.04165 15.0489 5.39835 15.8362 6.9613C16.6236 8.52425 17.0337 10.2499 17.0337 12C17.0337 13.7501 16.6236 15.4758 15.8362 17.0387C15.0489 18.6017 13.9063 19.9584 12.5 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 3V21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    