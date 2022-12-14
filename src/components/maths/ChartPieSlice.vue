<script>
export default {
  name: 'chart-pie-slice',
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
<path d="M12.6472 12V3C14.2241 3.00029 15.7731 3.41485 17.1393 4.20216C18.5055 4.98947 19.6409 6.1219 20.4317 7.48605C21.2226 8.8502 21.6412 10.3982 21.6455 11.975C21.6499 13.5518 21.24 15.1021 20.4567 16.4706C19.6734 17.8391 18.5444 18.9779 17.1826 19.7728C15.8208 20.5676 14.274 20.9908 12.6972 20.9999C11.1204 21.0089 9.56895 20.6035 8.19812 19.8243C6.82728 19.0451 5.68522 17.9194 4.8863 16.56M20.4415 7.5L4.85301 16.5M3.7973 13.6454C3.40763 11.5366 3.78254 9.35793 4.85471 7.50069C5.92687 5.64345 7.62605 4.22929 9.64709 3.51217V10.268L3.7973 13.6454Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    