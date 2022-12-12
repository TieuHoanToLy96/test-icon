<script>
export default {
  name: 'helmet-svg',
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
<path d="M12 4C13.8611 4.00018 15.6763 4.5773 17.1958 5.6519C18.7153 6.7265 19.8643 8.24573 20.4846 10.0004C21.1048 11.7551 21.1659 13.6589 20.6593 15.4497C20.1528 17.2405 19.1035 18.8302 17.656 20H6.344C4.8965 18.8302 3.84722 17.2405 3.34066 15.4497C2.8341 13.6589 2.89516 11.7551 3.51543 10.0004C4.13571 8.24573 5.28469 6.7265 6.80418 5.6519C8.32367 4.5773 10.1389 4.00018 12 4V4Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 9H11.2C11.0479 9.00019 10.8978 9.03511 10.7611 9.10209C10.6245 9.16906 10.505 9.26634 10.4116 9.3865C10.3182 9.50666 10.2535 9.64654 10.2224 9.79548C10.1913 9.94443 10.1946 10.0985 10.232 10.246C10.739 12.246 11.828 13.664 13.5 14.5C15.5 15.5 17.833 16 20.5 16" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    