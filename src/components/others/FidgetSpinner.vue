<script>
export default {
  name: 'fidget-spinner',
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
<path d="M10 17C9.99988 17.6583 9.78325 18.2982 9.38352 18.8212C8.98378 19.3442 8.42313 19.7212 7.78798 19.8941C7.15283 20.067 6.47844 20.0262 5.86877 19.778C5.2591 19.5298 4.74799 19.0879 4.41423 18.5205C4.08046 17.9532 3.94258 17.2918 4.02182 16.6383C4.10106 15.9848 4.39304 15.3755 4.85274 14.9044C5.31244 14.4332 5.91434 14.1263 6.56567 14.031C7.21699 13.9357 7.88159 14.0573 8.457 14.377L10.544 10.623C9.9628 10.3004 9.50521 9.79388 9.24308 9.18301C8.98095 8.57214 8.92913 7.89151 9.09576 7.24799C9.26239 6.60448 9.63803 6.03453 10.1637 5.62765C10.6894 5.22077 11.3353 5 12 5C12.6648 4.99977 13.3109 5.22039 13.8367 5.62719C14.3626 6.03399 14.7384 6.60394 14.9051 7.24751C15.0719 7.89108 15.0201 8.57181 14.758 9.18278C14.4959 9.79375 14.0383 10.3003 13.457 10.623L15.544 14.377C16.1128 14.061 16.7689 13.9386 17.4134 14.0281C18.0579 14.1176 18.6559 14.4142 19.117 14.8732C19.5782 15.3322 19.8777 15.9288 19.9702 16.5728C20.0628 17.2169 19.9435 17.8736 19.6302 18.4439C19.3169 19.0142 18.8267 19.4672 18.2335 19.7346C17.6403 20.002 16.9763 20.0692 16.3415 19.9262C15.7067 19.7833 15.1356 19.4378 14.7144 18.9419C14.2931 18.446 14.0445 17.8265 14.006 17.177L14 17H10Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 17V17.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 17V17.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 8V8.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    