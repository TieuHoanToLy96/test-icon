<script>
export default {
  name: 'garden-cart-off',
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
<path d="M15.733 15.7319C15.5 15.9643 15.3152 16.2404 15.1892 16.5444C15.0631 16.8484 14.9983 17.1743 14.9985 17.5034C14.9987 17.8324 15.0639 18.1582 15.1903 18.4621C15.3166 18.7659 15.5018 19.0418 15.735 19.2739C15.9683 19.5061 16.2451 19.6899 16.5495 19.8148C16.8539 19.9397 17.18 20.0033 17.5091 20.0019C17.8382 20.0005 18.1638 19.9342 18.4671 19.8067C18.7705 19.6792 19.0457 19.493 19.277 19.2589" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 8V19C6.00019 19.2107 6.06691 19.4159 6.19063 19.5864C6.31436 19.7569 6.48877 19.884 6.68899 19.9495C6.8892 20.015 7.105 20.0156 7.30558 19.9513C7.50617 19.8869 7.6813 19.7608 7.806 19.591L11.5 14.5V14.555" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 8H8M12 8H21L17.995 14.01M14.676 14.703L10.4 14.253C9.67571 14.1769 8.98595 13.9045 8.40511 13.4651C7.82427 13.0258 7.37439 12.4362 7.104 11.76L4.251 4.63C4.17702 4.44425 4.04906 4.28494 3.88364 4.17264C3.71822 4.06034 3.52294 4.00021 3.323 4H2" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    