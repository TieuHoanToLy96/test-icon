<script>
export default {
  name: 'square-arrow-up',
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
<path d="M16 12L12 8L8 12" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 16V8" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.333 20H6.667C6.31676 20 5.96996 19.931 5.64638 19.797C5.32281 19.663 5.0288 19.4665 4.78115 19.2189C4.53349 18.9712 4.33704 18.6772 4.20301 18.3536C4.06898 18.03 4 17.6832 4 17.333V6.667C4 5.95967 4.28099 5.28131 4.78115 4.78115C5.28131 4.28099 5.95967 4 6.667 4H17.333C17.6832 4 18.03 4.06898 18.3536 4.20301C18.6772 4.33704 18.9712 4.53349 19.2189 4.78115C19.4665 5.0288 19.663 5.32281 19.797 5.64638C19.931 5.96996 20 6.31676 20 6.667V17.333C20 17.6832 19.931 18.03 19.797 18.3536C19.663 18.6772 19.4665 18.9712 19.2189 19.2189C18.9712 19.4665 18.6772 19.663 18.3536 19.797C18.03 19.931 17.6832 20 17.333 20Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    