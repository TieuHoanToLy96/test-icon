<script>
export default {
  name: 'bell-slash',
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
<path d="M5.20557 3.75003L20.2056 20.25M9.70557 18V18.75C9.70557 19.5457 10.0216 20.3087 10.5843 20.8713C11.1469 21.434 11.9099 21.75 12.7056 21.75C13.5012 21.75 14.2643 21.434 14.8269 20.8713C15.3895 20.3087 15.7056 19.5457 15.7056 18.75V18M18.1601 18H5.29779C5.1659 17.9997 5.03644 17.9646 4.92245 17.8982C4.80847 17.8319 4.714 17.7366 4.64858 17.6221C4.58315 17.5076 4.54909 17.3779 4.54982 17.246C4.55054 17.1141 4.58604 16.9847 4.65273 16.8709C5.27179 15.806 5.9746 13.8576 5.9746 10.5V9.75003C5.97226 8.37822 6.38907 7.03843 7.16923 5.91006M9.37885 3.88085C10.4071 3.29339 11.5728 2.98949 12.757 3.00021C16.4685 3.02781 19.4373 6.11284 19.4373 9.83476V10.5C19.4373 13.0002 19.8268 14.719 20.2811 15.8735" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    