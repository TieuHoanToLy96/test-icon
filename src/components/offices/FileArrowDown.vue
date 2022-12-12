<script>
export default {
  name: 'file-arrow-down',
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
<path d="M14.3088 3H5.30811C5.10919 3 4.91843 3.07902 4.77778 3.21967C4.63712 3.36032 4.55811 3.55109 4.55811 3.75V20.25C4.55811 20.4489 4.63712 20.6397 4.77778 20.7803C4.91843 20.921 5.10919 21 5.30811 21H18.8088C18.9073 21 19.0049 20.9806 19.0959 20.9429C19.1868 20.9052 19.2695 20.85 19.3392 20.7803C19.4088 20.7107 19.4641 20.628 19.5017 20.537C19.5394 20.446 19.5588 20.3485 19.5588 20.25V8.25M14.3088 3L19.5588 8.25M14.3088 3V8.25H19.5588M9.43384 14.625L12.0588 17.25M12.0588 17.25L14.6838 14.625M12.0588 17.25V11.25" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    