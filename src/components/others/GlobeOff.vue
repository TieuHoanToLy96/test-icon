<script>
export default {
  name: 'globe-off',
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
<path d="M8.36004 8.33878C8.02166 9.07897 7.91713 9.90476 8.06038 10.7059C8.20363 11.5071 8.58786 12.2455 9.16177 12.8225C9.73567 13.3996 10.472 13.7878 11.2723 13.9355C12.0727 14.0831 12.899 13.9831 13.641 13.6488M15.636 11.6688C15.9758 10.93 16.0823 10.1051 15.9413 9.30424C15.8004 8.50335 15.4187 7.76445 14.8471 7.18601C14.2755 6.60758 13.5412 6.21711 12.742 6.06664C11.9429 5.91616 11.1169 6.01284 10.374 6.34378" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.75 16C8.09109 17.1651 9.78127 17.8517 11.555 17.9517C13.3287 18.0518 15.0853 17.5598 16.549 16.553M18.565 14.555C19.205 13.6436 19.6481 12.6089 19.8659 11.5168C20.0838 10.4246 20.0716 9.29911 19.8303 8.21193C19.589 7.12476 19.1237 6.0998 18.4642 5.20243C17.8048 4.30507 16.9655 3.55498 16 3" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 18V22" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 22H16" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    