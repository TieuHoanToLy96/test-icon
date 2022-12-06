<script>
export default {
  name: 'power-svg',
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
<path d="M12.7642 4.50027V11.6253M17.2651 5.08431C18.7556 6.05441 19.8928 7.48021 20.5071 9.14919C21.1214 10.8182 21.1799 12.641 20.674 14.3459C20.168 16.0509 19.1247 17.5467 17.6994 18.6104C16.2742 19.6742 14.5433 20.2489 12.7649 20.2489C10.9864 20.2489 9.2556 19.6742 7.83035 18.6104C6.4051 17.5467 5.36174 16.0509 4.85579 14.3459C4.34984 12.6409 4.40838 10.8181 5.02269 9.14916C5.637 7.48018 6.77418 6.05439 8.26475 5.08429" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    