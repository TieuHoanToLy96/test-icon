<script>
export default {
  name: 'handbag-svg',
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
<path d="M8.48529 9.75V6.75C8.48529 5.75544 8.88038 4.80161 9.58364 4.09835C10.2869 3.39509 11.2407 3 12.2353 3C13.2299 3 14.1837 3.39509 14.8869 4.09835C15.5902 4.80161 15.9853 5.75544 15.9853 6.75V9.75M19.814 6.75H4.65658C4.472 6.75 4.29391 6.81806 4.15638 6.94115C4.01885 7.06425 3.93155 7.23373 3.91116 7.41718L2.57783 19.4172C2.56618 19.522 2.57678 19.6281 2.60892 19.7286C2.64107 19.829 2.69405 19.9216 2.7644 20.0002C2.83474 20.0788 2.92088 20.1417 3.01717 20.1847C3.11347 20.2278 3.21776 20.25 3.32324 20.25H21.1473C21.2528 20.25 21.3571 20.2278 21.4534 20.1847C21.5497 20.1417 21.6358 20.0788 21.7062 20.0002C21.7765 19.9216 21.8295 19.829 21.8617 19.7286C21.8938 19.6281 21.9044 19.522 21.8928 19.4172L20.5594 7.41718C20.539 7.23373 20.4517 7.06425 20.3142 6.94115C20.1767 6.81806 19.9986 6.75 19.814 6.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    