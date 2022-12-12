<script>
export default {
  name: 'wallet-svg',
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
<path d="M3.92645 6V18C3.92645 18.3978 4.08449 18.7794 4.36579 19.0607C4.6471 19.342 5.02863 19.5 5.42645 19.5H20.4265C20.6254 19.5 20.8161 19.421 20.9568 19.2803C21.0974 19.1397 21.1765 18.9489 21.1765 18.75V8.25C21.1765 8.05109 21.0974 7.86032 20.9568 7.71967C20.8161 7.57902 20.6254 7.5 20.4265 7.5H5.42645C5.02863 7.5 4.6471 7.34196 4.36579 7.06066C4.08449 6.77936 3.92645 6.39782 3.92645 6ZM3.92645 6C3.92645 5.60218 4.08449 5.22064 4.36579 4.93934C4.6471 4.65804 5.02863 4.5 5.42645 4.5H18.1765" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.0506 14.4375C17.5679 14.4375 17.9872 14.0178 17.9872 13.5C17.9872 12.9822 17.5679 12.5625 17.0506 12.5625C16.5333 12.5625 16.114 12.9822 16.114 13.5C16.114 14.0178 16.5333 14.4375 17.0506 14.4375Z" fill="currentColor"/>
</svg>

</template>
    