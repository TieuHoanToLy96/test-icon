<script>
export default {
  name: 'chat-teardrop',
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
<path d="M12.4337 20.2493H4.52747C4.33684 20.2493 4.15402 20.1735 4.01923 20.0388C3.88444 19.904 3.80872 19.7211 3.80872 19.5305V11.6242C3.80872 10.4916 4.03181 9.37004 4.46525 8.32361C4.8987 7.27718 5.53401 6.32637 6.33491 5.52547C7.13582 4.72456 8.08663 4.08925 9.13306 3.6558C10.1795 3.22236 11.3011 2.99927 12.4337 2.99927H12.4337C13.5664 2.99927 14.6879 3.22236 15.7344 3.65581C16.7808 4.08925 17.7316 4.72457 18.5325 5.52547C19.3334 6.32638 19.9687 7.27719 20.4022 8.32362C20.8356 9.37006 21.0587 10.4916 21.0587 11.6243V11.6243C21.0587 13.9118 20.15 16.1056 18.5325 17.7231C16.915 19.3406 14.7212 20.2493 12.4337 20.2493Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    