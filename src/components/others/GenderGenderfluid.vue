<script>
export default {
  name: 'gender-genderfluid',
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
<path d="M9.99998 15.4639C10.4551 15.7307 10.9584 15.9049 11.4811 15.9763C12.0037 16.0478 12.5354 16.0152 13.0454 15.8803C13.5554 15.7455 14.0337 15.5111 14.4527 15.1907C14.8717 14.8702 15.2233 14.4701 15.487 14.0132C15.7508 13.5564 15.9216 13.0519 15.9896 12.5288C16.0576 12.0057 16.0214 11.4742 15.8832 10.9652C15.745 10.4561 15.5075 9.97934 15.1843 9.56243C14.861 9.14552 14.4586 8.79666 14 8.53593C13.0817 8.01386 11.9943 7.87618 10.9749 8.15293C9.95555 8.42968 9.08703 9.0984 8.55888 10.0131C8.03074 10.9279 7.88585 12.0144 8.15583 13.0356C8.42582 14.0568 9.08876 14.9297 9.99998 15.4639V15.4639Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.4639 13.9992L18.4639 8.80322" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.53613 15.195L8.53613 9.99902" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 12H12.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 9L3 3" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.5 8.5L8.5 5.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 21L15 15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 20L20 17" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 7V3H7" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    