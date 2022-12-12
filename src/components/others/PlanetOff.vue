<script>
export default {
  name: 'planet-off',
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
<path d="M18.8161 13.5802C20.7721 15.4052 21.9731 17.0292 22.0001 18.0252M18.5721 18.6182C16.4741 17.9842 13.6281 16.5882 10.6531 14.6422C5.18306 11.0632 1.34906 6.97818 2.09306 5.51918C2.41306 4.89118 3.68406 4.91918 5.38706 5.40618" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.04192 7.05887C5.75195 8.37718 5.03443 10.1513 5.04529 11.9958C5.05615 13.8402 5.79452 15.6058 7.09992 16.9088C8.40532 18.2118 10.1723 18.947 12.0167 18.9545C13.8611 18.962 15.634 18.2412 16.9499 16.9489M18.5309 14.5239C19.0207 13.2586 19.1322 11.8782 18.8518 10.5507C18.5715 9.22317 17.9114 8.00574 16.9518 7.04651C15.9923 6.08727 14.7746 5.42757 13.447 5.14766C12.1194 4.86775 10.7391 4.97969 9.47392 5.46987" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    