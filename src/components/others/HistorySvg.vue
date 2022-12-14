<script>
export default {
  name: 'history-svg',
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
<path d="M12 8V12L14 14" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.04999 11.0001C3.27408 8.80013 4.30025 6.75968 5.93272 5.26803C7.56519 3.77639 9.68968 2.93795 11.9009 2.9127C14.112 2.88744 16.2551 3.67713 17.9213 5.1311C19.5874 6.58507 20.6599 8.60155 20.9342 10.7958C21.2084 12.99 20.6653 15.2085 19.4083 17.0278C18.1514 18.8472 16.2686 20.1401 14.1193 20.6599C11.9699 21.1797 9.7044 20.89 7.75498 19.8461C5.80557 18.8022 4.30871 17.0772 3.54999 15.0001M3.04999 20.0001V15.0001H8.04999" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    