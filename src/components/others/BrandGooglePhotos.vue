<script>
export default {
  name: 'brand-google-photos',
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
<path d="M7.5 7C9.985 7 12 8.974 12 11.409V12H3.603C3.44387 12.0001 3.291 11.938 3.177 11.827C3.12114 11.7726 3.0767 11.7077 3.0463 11.6359C3.01591 11.5641 3.00017 11.487 3 11.409C3 8.974 5.015 7 7.5 7V7Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.5 17C14.015 17 12 15.026 12 12.591V12H20.397C20.73 12 21 12.265 21 12.591C21 15.026 18.985 17 16.5 17Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 16.5C7 14.015 8.972 12 11.405 12H12V20.392C12.0014 20.5529 11.9392 20.7078 11.827 20.823C11.7722 20.8794 11.7066 20.9241 11.6341 20.9546C11.5615 20.985 11.4836 21.0004 11.405 21C8.972 21 7 18.985 7 16.5V16.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 7.50001C17 9.98501 15.028 12 12.595 12H12V3.60301C11.9999 3.4429 12.0628 3.28918 12.175 3.17501C12.2297 3.11922 12.2951 3.07498 12.3673 3.04492C12.4394 3.01486 12.5168 2.99959 12.595 3.00001C15.028 3.00001 17 5.01501 17 7.50001Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    