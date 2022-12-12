<script>
export default {
  name: 'creative-commons-off',
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
<path d="M5.63807 5.63402C4.80201 6.46942 4.13868 7.46132 3.68595 8.55308C3.23323 9.64484 2.99998 10.8151 2.99951 11.997C2.99905 13.1789 3.23138 14.3493 3.68325 15.4414C4.13511 16.5335 4.79766 17.526 5.63307 18.362C6.46847 19.1981 7.46037 19.8614 8.55213 20.3141C9.64389 20.7669 10.8141 21.0001 11.996 21.0006C13.1779 21.001 14.3484 20.7687 15.4405 20.3168C16.5326 19.865 17.525 19.2024 18.3611 18.367M20.0471 16.035C20.8968 14.3436 21.1916 12.4273 20.8895 10.5587C20.5875 8.69009 19.7039 6.96428 18.3646 5.62671C17.0252 4.28914 15.2983 3.4079 13.4293 3.10832C11.5603 2.80874 9.64437 3.10606 7.95407 3.95802" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.5 10.5001C10.085 10.1576 9.5584 9.98009 9.0208 10.0015C8.4832 10.0229 7.97236 10.2417 7.58596 10.6161C7.40065 10.7958 7.25331 11.0109 7.1527 11.2487C7.05209 11.4864 7.00024 11.7419 7.00024 12.0001C7.00024 12.2582 7.05209 12.5138 7.1527 12.7515C7.25331 12.9892 7.40065 13.2044 7.58596 13.3841C7.97247 13.7583 8.48328 13.977 9.02082 13.9984C9.55835 14.0198 10.0849 13.8424 10.5 13.5001" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.4999 10.4999C16.1822 10.238 15.7971 10.0707 15.3888 10.0173C14.9805 9.9639 14.5653 10.0265 14.1909 10.1979" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    