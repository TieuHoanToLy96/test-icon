<script>
export default {
  name: 'book-open',
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
<path d="M12.1176 8.25C12.1176 7.45435 12.4336 6.69129 12.9962 6.12868C13.5588 5.56607 14.3219 5.25 15.1176 5.25H21.1176C21.3165 5.25 21.5072 5.32902 21.6479 5.46967C21.7885 5.61032 21.8676 5.80109 21.8676 6V18C21.8676 18.1989 21.7885 18.3897 21.6479 18.5303C21.5072 18.671 21.3165 18.75 21.1176 18.75H15.1176C14.3219 18.75 13.5588 19.0661 12.9962 19.6287C12.4336 20.1913 12.1176 20.9544 12.1176 21.75M12.1176 8.25V21.75M12.1176 8.25C12.1176 7.45435 11.8015 6.69129 11.2389 6.12868C10.6763 5.56607 9.9132 5.25 9.11755 5.25H3.11755C2.91864 5.25 2.72788 5.32902 2.58722 5.46967C2.44657 5.61032 2.36755 5.80109 2.36755 6V18C2.36755 18.1989 2.44657 18.3897 2.58722 18.5303C2.72788 18.671 2.91864 18.75 3.11755 18.75H9.11755C9.9132 18.75 10.6763 19.0661 11.2389 19.6287C11.8015 20.1913 12.1176 20.9544 12.1176 21.75" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    