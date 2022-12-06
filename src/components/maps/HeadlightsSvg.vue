<script>
export default {
  name: 'headlights-svg',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.9852 7.5H22.7352M15.9852 16.5H22.7352M15.9852 10.5H22.7352M15.9852 13.5H22.7352M8.48523 18.75C7.59451 18.75 6.71258 18.5737 5.8903 18.2313C5.06803 17.8889 4.32165 17.3871 3.6942 16.7548C3.06675 16.1226 2.57064 15.3725 2.23446 14.5476C1.89827 13.7228 1.72867 12.8395 1.73542 11.9488C1.76302 8.227 4.84805 5.25 8.56997 5.25H12.2352C12.4341 5.25 12.6249 5.32902 12.7656 5.46967C12.9062 5.61032 12.9852 5.80109 12.9852 6V18C12.9852 18.1989 12.9062 18.3897 12.7656 18.5303C12.6249 18.671 12.4341 18.75 12.2352 18.75H8.48523Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    