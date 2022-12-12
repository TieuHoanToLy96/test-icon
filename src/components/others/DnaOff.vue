<script>
export default {
  name: 'dna-off',
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
<path d="M16.0001 12C16.0057 11.4739 15.9047 10.9522 15.7033 10.4661C15.5019 9.98011 15.2042 9.53989 14.8281 9.172C14.0764 8.4243 13.0603 8.00317 12.0001 8M9.17208 9.172C8.79004 9.54099 8.48531 9.98237 8.27568 10.4704C8.06604 10.9584 7.95569 11.4833 7.95108 12.0144C7.94646 12.5455 8.04767 13.0722 8.24879 13.5638C8.44992 14.0554 8.74693 14.502 9.1225 14.8776C9.49807 15.2532 9.94468 15.5502 10.4363 15.7513C10.9278 15.9524 11.4546 16.0536 11.9857 16.049C12.5168 16.0444 13.0417 15.934 13.5297 15.7244C14.0177 15.5148 14.4591 15.21 14.8281 14.828" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.17189 20.4851C9.54334 20.1137 9.83798 19.6727 10.039 19.1874C10.24 18.7021 10.3435 18.1819 10.3435 17.6566C10.3435 17.1313 10.24 16.6111 10.039 16.1258C9.83798 15.6405 9.54334 15.1995 9.17189 14.8281C8.80045 14.4567 8.35948 14.162 7.87417 13.961C7.38885 13.76 6.86869 13.6565 6.34339 13.6565C5.81809 13.6565 5.29793 13.76 4.81262 13.961C4.3273 14.162 3.88634 14.4567 3.51489 14.8281" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.8281 3.51489C14.4567 3.88634 14.162 4.3273 13.961 4.81262C13.76 5.29793 13.6565 5.81809 13.6565 6.34339C13.6565 6.86869 13.76 7.38885 13.961 7.87417C14.162 8.35948 14.4567 8.80045 14.8281 9.17189C15.1995 9.54334 15.6405 9.83798 16.1258 10.039C16.6111 10.24 17.1313 10.3435 17.6566 10.3435C18.1819 10.3435 18.7021 10.24 19.1874 10.039C19.6727 9.83798 20.1137 9.54334 20.4851 9.17189" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    