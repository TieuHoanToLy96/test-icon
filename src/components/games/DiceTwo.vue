<script>
export default {
  name: 'dice-two',
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
<path d="M18.4116 3.75H6.41162C5.16898 3.75 4.16162 4.75736 4.16162 6V18C4.16162 19.2426 5.16898 20.25 6.41162 20.25H18.4116C19.6543 20.25 20.6616 19.2426 20.6616 18V6C20.6616 4.75736 19.6543 3.75 18.4116 3.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.5366 11.0625C11.0544 11.0625 11.4741 10.6428 11.4741 10.125C11.4741 9.60723 11.0544 9.1875 10.5366 9.1875C10.0189 9.1875 9.59912 9.60723 9.59912 10.125C9.59912 10.6428 10.0189 11.0625 10.5366 11.0625Z" fill="currentColor"/>
<path d="M14.2866 14.8125C14.8044 14.8125 15.2241 14.3928 15.2241 13.875C15.2241 13.3572 14.8044 12.9375 14.2866 12.9375C13.7689 12.9375 13.3491 13.3572 13.3491 13.875C13.3491 14.3928 13.7689 14.8125 14.2866 14.8125Z" fill="currentColor"/>
</svg>

</template>
    