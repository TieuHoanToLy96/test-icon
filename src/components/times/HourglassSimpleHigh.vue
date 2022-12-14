<script>
export default {
  name: 'hourglass-simple-high',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.8234 12L19.793 5.03033C19.8979 4.92544 19.9694 4.7918 19.9983 4.64632C20.0272 4.50083 20.0124 4.35003 19.9556 4.21299C19.8989 4.07594 19.8027 3.95881 19.6794 3.8764C19.5561 3.79399 19.411 3.75 19.2627 3.75H6.38403C6.2357 3.75 6.09069 3.79399 5.96736 3.8764C5.84402 3.95881 5.74789 4.07594 5.69112 4.21299C5.63436 4.35003 5.61951 4.50083 5.64844 4.64632C5.67738 4.7918 5.74881 4.92544 5.8537 5.03033L12.8234 12ZM12.8234 12L19.793 18.9697C19.8979 19.0746 19.9694 19.2082 19.9983 19.3537C20.0272 19.4992 20.0124 19.65 19.9556 19.787C19.8989 19.9241 19.8027 20.0412 19.6794 20.1236C19.5561 20.206 19.411 20.25 19.2627 20.25H6.38403C6.2357 20.25 6.09069 20.206 5.96736 20.1236C5.84402 20.0412 5.74789 19.9241 5.69112 19.787C5.63436 19.65 5.61951 19.4992 5.64844 19.3537C5.67738 19.2082 5.74881 19.0746 5.8537 18.9697L12.8234 12ZM7.57337 6.75H18.0734" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    