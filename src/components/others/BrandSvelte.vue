<script>
export default {
  name: 'brand-svelte',
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
<path d="M15 8L9.99999 11L10.821 10.505C12.681 9.355 15.233 10.015 16.395 11.857C16.6712 12.2949 16.8578 12.7833 16.9437 13.2939C17.0297 13.8044 17.0134 14.327 16.8959 14.8312C16.7783 15.3354 16.5617 15.8113 16.2587 16.2311C15.9558 16.651 15.5724 17.0065 15.131 17.277L10.078 20.403C8.21799 21.554 5.76599 20.994 4.60399 19.152C4.3277 18.7142 4.14112 18.2258 4.05506 17.7153C3.96901 17.2048 3.9852 16.6822 4.10269 16.178C4.22019 15.6738 4.43665 15.198 4.73951 14.7781C5.04238 14.3582 5.42562 14.0026 5.86699 13.732L6.12699 13.572" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.00002 16.9999L13 13.9999L12.178 14.4959C10.318 15.6469 7.76702 14.9869 6.60402 13.1449C6.32777 12.707 6.14125 12.2186 6.05527 11.7081C5.96929 11.1975 5.98556 10.675 6.10315 10.1707C6.22074 9.66651 6.4373 9.19067 6.74027 8.77081C7.04323 8.35096 7.42656 7.99545 7.86802 7.72493L12.922 4.59793C14.782 3.44793 17.233 4.00793 18.396 5.84993C18.6723 6.28783 18.8588 6.77623 18.9448 7.28679C19.0307 7.79735 19.0145 8.3199 18.8969 8.82412C18.7793 9.32834 18.5627 9.80419 18.2598 10.224C17.9568 10.6439 17.5735 10.9994 17.132 11.2699L16.872 11.4299" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    