<script>
export default {
  name: 'books-svg',
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
<path d="M8 4H6C5.44772 4 5 4.44772 5 5V19C5 19.5523 5.44772 20 6 20H8C8.55228 20 9 19.5523 9 19V5C9 4.44772 8.55228 4 8 4Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 4H10C9.44772 4 9 4.44772 9 5V19C9 19.5523 9.44772 20 10 20H12C12.5523 20 13 19.5523 13 19V5C13 4.44772 12.5523 4 12 4Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 8H9" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 16H13" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.8031 4.56004L15.9871 4.03004C16.5491 3.89504 17.1201 4.22004 17.2691 4.76204L20.9641 18.18C21.0293 18.4257 21.0004 18.6868 20.8831 18.9123C20.7659 19.1378 20.5686 19.3114 20.3301 19.399L20.1971 19.44L18.0131 19.97C17.4511 20.105 16.8801 19.78 16.7311 19.238L13.0361 5.82004C12.9709 5.57439 12.9998 5.31325 13.117 5.08778C13.2343 4.8623 13.4315 4.68872 13.6701 4.60104L13.8031 4.56004V4.56004Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 9L18 8" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 16L19.923 15.02" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    