<script>
export default {
  name: 'chat-text',
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
<path d="M9.00012 10.5H15.0001M9.00012 13.5H15.0001M7.31118 18.876L4.23273 21.4639C4.1234 21.5558 3.99011 21.6146 3.84852 21.6333C3.70693 21.652 3.56293 21.63 3.43347 21.5697C3.304 21.5094 3.19444 21.4133 3.11767 21.2929C3.0409 21.1725 3.00012 21.0326 3.00012 20.8898V6.00006C3.00012 5.80115 3.07914 5.61038 3.21979 5.46973C3.36044 5.32908 3.55121 5.25006 3.75012 5.25006H20.2501C20.449 5.25006 20.6398 5.32908 20.7805 5.46973C20.9211 5.61038 21.0001 5.80115 21.0001 6.00006V18.0001C21.0001 18.199 20.9211 18.3897 20.7805 18.5304C20.6398 18.671 20.449 18.7501 20.2501 18.7501H7.65677L7.31118 18.876Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    