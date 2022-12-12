<script>
export default {
  name: 'steering-wheel-off',
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
<path d="M20.0401 16.0479C20.8923 14.3571 21.1895 12.4405 20.8895 10.571C20.5895 8.7015 19.7075 6.97422 18.369 5.63496C17.0305 4.29571 15.3038 3.41271 13.4344 3.11161C11.5651 2.8105 9.64836 3.10664 7.95705 3.95788M5.63705 5.63588C3.95041 7.32491 3.00381 9.61478 3.0055 12.0017C3.00718 14.3887 3.95702 16.6772 5.64605 18.3639C7.33508 20.0505 9.62495 20.9971 12.0119 20.9954C14.3989 20.9937 16.6874 20.0439 18.3741 18.3549" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.595 10.5762C10.2197 10.9511 10.0087 11.4597 10.0084 11.9901C10.0081 12.5206 10.2186 13.0294 10.5935 13.4047C10.9684 13.78 11.477 13.9909 12.0074 13.9912C12.5379 13.9915 13.0467 13.7811 13.422 13.4062" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 14V21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 12L3.25 10" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.542 11.543L20.75 10" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    