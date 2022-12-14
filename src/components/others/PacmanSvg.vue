<script>
export default {
  name: 'pacman-svg',
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
<path d="M5.63601 5.6361C6.53145 4.74051 7.60582 4.04398 8.78889 3.59205C9.97195 3.14012 11.2371 2.94296 12.5016 3.01347C13.7661 3.08398 15.0014 3.42056 16.1269 4.00121C17.2524 4.58186 18.2427 5.39351 19.033 6.3831L13.414 12.0001L19.033 17.6171C18.2687 18.5725 17.3176 19.362 16.2379 19.9374C15.1581 20.5128 13.9724 20.862 12.7531 20.9637C11.5338 21.0654 10.3067 20.9174 9.14652 20.5287C7.98639 20.1401 6.91767 19.519 6.00568 18.7034C5.09368 17.8878 4.35756 16.8948 3.84229 15.7851C3.32702 14.6754 3.04342 13.4723 3.00882 12.2493C2.97422 11.0263 3.18935 9.80909 3.64106 8.67203C4.09277 7.53497 4.77158 6.50196 5.63601 5.6361V5.6361Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.5 8.5C12.0523 8.5 12.5 8.05228 12.5 7.5C12.5 6.94772 12.0523 6.5 11.5 6.5C10.9477 6.5 10.5 6.94772 10.5 7.5C10.5 8.05228 10.9477 8.5 11.5 8.5Z" fill="currentColor" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    