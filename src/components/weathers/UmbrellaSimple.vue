<script>
export default {
  name: 'umbrella-simple',
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
<path d="M16.9119 18.75C16.9119 19.3467 16.6749 19.919 16.2529 20.341C15.831 20.763 15.2587 21 14.6619 21C14.0652 21 13.4929 20.763 13.071 20.341C12.649 19.919 12.4119 19.3467 12.4119 18.75V12.75M3.44331 12.75C3.33925 12.7498 3.23636 12.728 3.14116 12.686C3.04597 12.6439 2.96053 12.5826 2.89025 12.5059C2.81997 12.4291 2.76639 12.3386 2.7329 12.2401C2.6994 12.1416 2.68671 12.0372 2.69565 11.9335C2.9005 9.49753 4.0129 7.22737 5.81244 5.57281C7.61198 3.91825 9.96737 3 12.4119 3C14.8565 3 17.2119 3.91825 19.0114 5.57281C20.811 7.22737 21.9234 9.49753 22.1282 11.9335C22.1372 12.0372 22.1245 12.1416 22.091 12.2401C22.0575 12.3386 22.0039 12.4291 21.9336 12.5059C21.8634 12.5826 21.7779 12.6439 21.6827 12.686C21.5875 12.728 21.4846 12.7498 21.3806 12.75H3.44331Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    