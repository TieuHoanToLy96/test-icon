<script>
export default {
  name: 'file-like',
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
<path d="M5 16H4C3.44772 16 3 16.4477 3 17V20C3 20.5523 3.44772 21 4 21H5C5.55228 21 6 20.5523 6 20V17C6 16.4477 5.55228 16 5 16Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 20C6 20.2653 6.10536 20.5196 6.29289 20.7071C6.48043 20.8947 6.73478 21 7 21H10.756C10.9711 21.0001 11.1805 20.9307 11.3531 20.8022C11.5257 20.6738 11.6523 20.4931 11.714 20.287L12.914 17.287C13.004 16.984 13.047 16.657 12.858 16.403C12.67 16.149 12.316 16 12 16H10V13.533C9.99988 13.297 9.92386 13.0673 9.78318 12.8779C9.64249 12.6884 9.4446 12.5492 9.21872 12.4808C8.99284 12.4124 8.75096 12.4185 8.5288 12.4981C8.30665 12.5778 8.11599 12.7267 7.985 12.923L6 16V20V20Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 12.1V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H14L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21H14.7" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    