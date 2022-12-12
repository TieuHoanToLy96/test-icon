<script>
export default {
  name: 'cell-signal-full',
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
<path d="M15.4703 6.00001V20.25M11.7203 9.75001V20.25M7.97035 13.5V20.25M19.2203 4.06067V19.5C19.2203 19.6989 19.1413 19.8897 19.0007 20.0303C18.86 20.171 18.6693 20.25 18.4703 20.25H3.03101C2.88267 20.25 2.73767 20.206 2.61433 20.1236C2.49099 20.0412 2.39486 19.9241 2.3381 19.787C2.28133 19.65 2.26648 19.4992 2.29542 19.3537C2.32436 19.2082 2.39579 19.0746 2.50068 18.9697L17.94 3.53034C18.0449 3.42545 18.1785 3.35402 18.324 3.32508C18.4695 3.29614 18.6203 3.31099 18.7574 3.36776C18.8944 3.42453 19.0115 3.52065 19.0939 3.64399C19.1764 3.76733 19.2203 3.91233 19.2203 4.06067Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    