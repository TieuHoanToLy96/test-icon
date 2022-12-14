<script>
export default {
  name: 'target-off',
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
<path d="M11.286 11.2998C11.0978 11.4868 10.9916 11.7409 10.9908 12.0061C10.9899 12.2714 11.0945 12.5261 11.2815 12.7143C11.4685 12.9025 11.7225 13.0087 11.9878 13.0095C12.2531 13.0104 12.5078 12.9058 12.696 12.7188" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.44003 8.49015C7.50926 9.43209 6.99017 10.7048 6.99664 12.029C7.00312 13.3532 7.53464 14.6208 8.47457 15.5535C9.41451 16.4863 10.6861 17.0082 12.0103 17.0045C13.3345 17.0009 14.6032 16.4721 15.538 15.5342M16.915 12.9232C17.0654 12.1231 17.0182 11.2985 16.7774 10.5208C16.5367 9.74318 16.1097 9.03608 15.5336 8.46095C14.9575 7.88583 14.2496 7.46006 13.4716 7.22064C12.6936 6.98123 11.8688 6.9354 11.069 7.08715" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.64901 5.62303C3.95719 7.30689 3.00358 9.59386 2.99795 11.9808C2.99232 14.3678 3.93515 16.6592 5.619 18.351C7.30286 20.0429 9.58983 20.9965 11.9768 21.0021C14.3638 21.0077 16.6552 20.0649 18.347 18.381M20.03 16.068C20.888 14.3773 21.1902 12.4588 20.8934 10.5863C20.5966 8.71367 19.716 6.98265 18.3772 5.64012C17.0385 4.29759 15.3099 3.41214 13.4382 3.11008C11.5664 2.80802 9.64712 3.10478 7.95401 3.95803" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    