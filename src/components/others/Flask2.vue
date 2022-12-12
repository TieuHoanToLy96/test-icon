<script>
export default {
  name: 'flask-2',
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
<path d="M6.09998 15H17.9" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 3V10.342C15.0512 10.714 15.978 11.3716 16.6764 12.2409C17.3749 13.1101 17.8173 14.1568 17.9542 15.2635C18.091 16.3702 17.9169 17.4931 17.4513 18.5064C16.9856 19.5196 16.2469 20.3831 15.318 21H8.68298C7.75347 20.3833 7.0142 19.5198 6.54812 18.5064C6.08204 17.493 5.9076 16.3697 6.04438 15.2627C6.18115 14.1556 6.62372 13.1086 7.32243 12.239C8.02114 11.3695 8.94833 10.7119 9.99998 10.34V3H14Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 3H15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    