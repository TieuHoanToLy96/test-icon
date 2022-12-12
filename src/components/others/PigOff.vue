<script>
export default {
  name: 'pig-off',
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
<path d="M15 11V11.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 6H11.499L15.999 3L16 6.803C17.2376 7.51912 18.1799 8.65245 18.658 10H19.999C20.2642 10 20.5186 10.1054 20.7061 10.2929C20.8937 10.4804 20.999 10.7348 20.999 11V13C20.999 13.2652 20.8937 13.5196 20.7061 13.7071C20.5186 13.8946 20.2642 14 19.999 14H18.657C18.6 14.16 18.537 14.318 18.467 14.472M17 17V18.5C17 18.8978 16.842 19.2794 16.5607 19.5607C16.2794 19.842 15.8978 20 15.5 20C15.1022 20 14.7207 19.842 14.4394 19.5607C14.1581 19.2794 14 18.8978 14 18.5V17.917C13.6696 17.9724 13.3351 18.0001 13 18H9.00002C8.66496 18.0001 8.33047 17.9724 8.00002 17.917V18.5C8.00002 18.8978 7.84198 19.2794 7.56068 19.5607C7.27937 19.842 6.89784 20 6.50002 20C6.10219 20 5.72066 19.842 5.43936 19.5607C5.15805 19.2794 5.00002 18.8978 5.00002 18.5V16.5V16.473C4.2572 15.8089 3.69145 14.9703 3.35384 14.0329C3.01622 13.0955 2.91738 12.0887 3.06623 11.1035C3.21509 10.1183 3.60694 9.1857 4.20643 8.38985C4.80592 7.594 5.59417 6.95997 6.50002 6.545" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    