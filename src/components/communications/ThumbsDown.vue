<script>
export default {
  name: 'thumbs-down',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.55811 4.5H3.05811C2.85919 4.5 2.66843 4.57902 2.52778 4.71967C2.38712 4.86032 2.30811 5.05109 2.30811 5.25V13.5C2.30811 13.6989 2.38712 13.8897 2.52778 14.0303C2.66843 14.171 2.85919 14.25 3.05811 14.25H7.55811M7.55811 4.5V14.25M7.55811 4.5H18.9839C19.3495 4.5 19.7026 4.63353 19.9766 4.87548C20.2507 5.11744 20.427 5.45117 20.4723 5.81395L21.5973 14.8139C21.6237 15.025 21.6049 15.2392 21.5422 15.4425C21.4795 15.6457 21.3742 15.8333 21.2335 15.9927C21.0927 16.1522 20.9196 16.2798 20.7258 16.3673C20.5319 16.4548 20.3216 16.5 20.1089 16.5H14.3081V18.75C14.3081 19.144 14.2305 19.5341 14.0797 19.8981C13.929 20.262 13.708 20.5927 13.4294 20.8713C13.1509 21.1499 12.8201 21.3709 12.4562 21.5216C12.0922 21.6724 11.7021 21.75 11.3081 21.75L7.55811 14.25" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    