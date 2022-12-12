<script>
export default {
  name: 'face-mask',
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
<path d="M5.00195 14.5H4.77995C3.24495 14.5 2.00195 13.38 2.00195 12C2.00195 10.62 3.24495 9.5 4.77995 9.5H5.00195" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.002 14.5H19.224C20.758 14.5 22.002 13.38 22.002 12C22.002 10.62 20.758 9.5 19.224 9.5H19.002" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 10H15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 14H15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.55 18.8432L17.55 17.4142C17.9678 17.2947 18.3353 17.0424 18.5969 16.6954C18.8585 16.3484 19 15.9257 19 15.4912V8.51017C19 8.07563 18.8585 7.6529 18.5969 7.30594C18.3353 6.95898 17.9678 6.70666 17.55 6.58717L12.55 5.15817C12.1905 5.05535 11.8095 5.05535 11.45 5.15817L6.45 6.58717C6.03238 6.70662 5.665 6.95878 5.4034 7.30554C5.14179 7.6523 5.00019 8.0748 5 8.50917V15.4912C4.99998 15.9257 5.14148 16.3484 5.40309 16.6954C5.66471 17.0424 6.03221 17.2947 6.45 17.4142L11.45 18.8432C11.8095 18.946 12.1905 18.946 12.55 18.8432Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    