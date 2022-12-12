<script>
export default {
  name: 'atom-svg',
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
<path d="M20.1017 19.6898C21.7126 18.0789 19.5757 13.3301 15.3287 9.08318C11.0818 4.83623 6.33305 2.69929 4.72213 4.31021C3.11122 5.92112 5.24815 10.6699 9.4951 14.9168C13.7421 19.1638 18.4908 21.3007 20.1017 19.6898Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.3287 14.9168C19.5757 10.6699 21.7126 5.92112 20.1017 4.31021C18.4908 2.69929 13.7421 4.83622 9.4951 9.08318C5.24815 13.3301 3.11122 18.0789 4.72213 19.6898C6.33305 21.3007 11.0818 19.1638 15.3287 14.9168Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.411 12.9375C12.9283 12.9375 13.3476 12.5178 13.3476 12C13.3476 11.4822 12.9283 11.0625 12.411 11.0625C11.8937 11.0625 11.4744 11.4822 11.4744 12C11.4744 12.5178 11.8937 12.9375 12.411 12.9375Z" fill="currentColor"/>
</svg>

</template>
    