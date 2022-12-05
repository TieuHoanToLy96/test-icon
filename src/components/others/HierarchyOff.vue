<script>
export default {
  name: 'hierarchy-off',
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
      default: 1.5
    },
    color: {
      type: String,
      default: "#3D3D3D"
    }
  }
}
</script>
  
<template>
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 7C13.1046 7 14 6.10457 14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5C10 6.10457 10.8954 7 12 7Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 21C6.10457 21 7 20.1046 7 19C7 17.8954 6.10457 17 5 17C3.89543 17 3 17.8954 3 19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.585 17.5869C17.2182 17.9621 17.0135 18.4664 17.015 18.9911C17.0166 19.5158 17.2243 20.0188 17.5933 20.3918C17.9624 20.7648 18.4632 20.9778 18.9879 20.985C19.5125 20.9921 20.0189 20.7927 20.398 20.4299" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.5 17.5L12 13L17.5 17.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 7V8M12 12V13" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    