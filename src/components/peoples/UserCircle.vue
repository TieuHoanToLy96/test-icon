<script>
export default {
  name: 'user-circle',
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
<path d="M12.0002 15C14.0713 15 15.7502 13.3211 15.7502 11.25C15.7502 9.17893 14.0713 7.5 12.0002 7.5C9.92918 7.5 8.25024 9.17893 8.25024 11.25C8.25024 13.3211 9.92918 15 12.0002 15ZM12.0002 15C10.7541 15 9.53222 15.3448 8.46993 15.9963C7.40764 16.6478 6.54635 17.5806 5.98141 18.6913M12.0002 15C13.2464 15 14.4682 15.3448 15.5305 15.9963C16.5928 16.6478 17.4541 17.5806 18.0191 18.6913M21.0002 12C21.0002 16.9706 16.9708 21 12.0002 21C7.02968 21 3.00024 16.9706 3.00024 12C3.00024 7.02944 7.02968 3 12.0002 3C16.9708 3 21.0002 7.02944 21.0002 12Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    