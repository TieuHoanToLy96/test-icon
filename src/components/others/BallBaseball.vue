<script>
export default {
  name: 'ball-baseball',
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
<path d="M5.63599 18.3641C6.47173 19.1998 7.46389 19.8627 8.55582 20.315C9.64776 20.7673 10.8181 21.0001 12 21.0001C13.1819 21.0001 14.3522 20.7673 15.4442 20.315C16.5361 19.8627 17.5283 19.1998 18.364 18.3641C19.1997 17.5283 19.8627 16.5362 20.315 15.4442C20.7673 14.3523 21 13.182 21 12.0001C21 10.8182 20.7673 9.64782 20.315 8.55588C19.8627 7.46395 19.1997 6.47179 18.364 5.63606C16.6762 3.94822 14.387 3 12 3C9.61303 3 7.32383 3.94822 5.63599 5.63606C3.94816 7.32389 2.99994 9.61309 2.99994 12.0001C2.99994 14.387 3.94816 16.6762 5.63599 18.3641V18.3641Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.495 3.02002C12.5636 4.28232 12.3655 5.5449 11.9136 6.72553C11.4617 7.90616 10.7661 8.97834 9.87223 9.87223C8.97834 10.7661 7.90616 11.4617 6.72553 11.9136C5.5449 12.3655 4.28232 12.5636 3.02002 12.495" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.98 11.505C19.7177 11.4364 18.4551 11.6345 17.2745 12.0864C16.0939 12.5383 15.0217 13.2338 14.1278 14.1277C13.2339 15.0216 12.5384 16.0938 12.0864 17.2744C11.6345 18.4551 11.4364 19.7177 11.505 20.98" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 9L11 11" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 13L15 15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 7L13 8" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 11L8 13" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 11L17 13" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 16L13 17" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    