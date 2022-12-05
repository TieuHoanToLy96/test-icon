<script>
export default {
  name: 'shopping-cart-off',
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
<path d="M6 21C7.10457 21 8 20.1046 8 19C8 17.8954 7.10457 17 6 17C4.89543 17 4 17.8954 4 19C4 20.1046 4.89543 21 6 21Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 17C16.6044 17 16.2178 17.1173 15.8889 17.3371C15.56 17.5568 15.3036 17.8692 15.1522 18.2346C15.0009 18.6001 14.9613 19.0022 15.0384 19.3902C15.1156 19.7781 15.3061 20.1345 15.5858 20.4142C15.8655 20.6939 16.2219 20.8844 16.6098 20.9616C16.9978 21.0387 17.3999 20.9991 17.7654 20.8478C18.1308 20.6964 18.4432 20.44 18.6629 20.1111C18.8827 19.7822 19 19.3956 19 19" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 17H6V6" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.239 5.23096L20 5.99996L19 13H17M13 13H6" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    