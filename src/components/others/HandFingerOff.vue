<script>
export default {
  name: 'hand-finger-off',
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
<path d="M8 13V8" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.06006 4.07708C8.16123 3.7302 8.38421 3.4315 8.68802 3.23589C8.99182 3.04028 9.35603 2.9609 9.71368 3.01236C10.0713 3.06382 10.3984 3.24265 10.6347 3.51598C10.8711 3.7893 11.0008 4.13875 11.0001 4.50008V7.00008M11.0001 11.0001V12.0001" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.063 8.06507C12.2872 7.99679 12.5243 7.98199 12.7552 8.02188C12.9862 8.06176 13.2046 8.1552 13.3929 8.29472C13.5812 8.43424 13.7342 8.61594 13.8397 8.82526C13.9451 9.03458 14 9.2657 14 9.50007V10.0001" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.0601 10.082C14.1611 9.73549 14.3837 9.43708 14.687 9.24145C14.9902 9.04582 15.3539 8.96609 15.7112 9.01689C16.0685 9.06769 16.3955 9.24561 16.6323 9.51802C16.869 9.79043 16.9996 10.1391 17.0001 10.5V12" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.9999 11.5C16.9999 11.1022 17.158 10.7206 17.4393 10.4393C17.7206 10.158 18.1021 10 18.4999 10C18.8978 10 19.2793 10.158 19.5606 10.4393C19.8419 10.7206 19.9999 11.1022 19.9999 11.5V16M19.1199 19.129C18.5842 20.0063 17.8319 20.7311 16.9353 21.2339C16.0387 21.7367 15.0279 22.0005 13.9999 22H11.9999H12.2079C11.2143 22.0002 10.2361 21.7535 9.36132 21.2823C8.48652 20.811 7.74245 20.1299 7.19594 19.3L6.99994 19C6.68794 18.521 5.59294 16.612 3.71394 13.272C3.52239 12.9315 3.47122 12.5298 3.57132 12.1522C3.67142 11.7745 3.91489 11.4509 4.24994 11.25C4.60682 11.0359 5.02501 10.9471 5.4381 10.9978C5.85119 11.0486 6.23548 11.2359 6.52994 11.53L7.99994 13" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    