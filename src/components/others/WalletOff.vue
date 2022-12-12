<script>
export default {
  name: 'wallet-off',
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
<path d="M17.0001 8V5C17.0001 4.73478 16.8947 4.48043 16.7072 4.29289C16.5197 4.10536 16.2653 4 16.0001 4H8.00009M4.58709 4.584C4.30684 4.86354 4.11585 5.21995 4.03828 5.6081C3.96072 5.99625 4.00008 6.39869 4.15138 6.76446C4.30268 7.13024 4.55911 7.44289 4.8882 7.66283C5.2173 7.88277 5.60426 8.00011 6.00009 8H8.00009M12.0001 8H18.0001C18.2653 8 18.5197 8.10536 18.7072 8.29289C18.8947 8.48043 19.0001 8.73478 19.0001 9V12" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 19C19 19.2652 18.8946 19.5196 18.7071 19.7071C18.5196 19.8946 18.2652 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 12H20V16M16 16C15.4696 16 14.9609 15.7893 14.5858 15.4142C14.2107 15.0391 14 14.5304 14 14" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    