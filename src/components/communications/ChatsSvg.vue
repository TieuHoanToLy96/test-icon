<script>
export default {
  name: 'chats-svg',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.55872 13.5001V17.2501C7.55872 17.449 7.63773 17.6397 7.77839 17.7804C7.91904 17.921 8.1098 18.0001 8.30872 18.0001H17.3478L21.0587 21.0001V9.00006C21.0587 8.80115 20.9797 8.61038 20.839 8.46973C20.6984 8.32908 20.5076 8.25006 20.3087 8.25006H16.5587M6.76961 13.5001L3.05872 16.5001V4.50006C3.05872 4.30115 3.13773 4.11038 3.27839 3.96973C3.41904 3.82908 3.6098 3.75006 3.80872 3.75006H15.8087C16.0076 3.75006 16.1984 3.82908 16.339 3.96973C16.4797 4.11038 16.5587 4.30115 16.5587 4.50006V12.7501C16.5587 12.949 16.4797 13.1397 16.339 13.2804C16.1984 13.421 16.0076 13.5001 15.8087 13.5001H6.76961Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    