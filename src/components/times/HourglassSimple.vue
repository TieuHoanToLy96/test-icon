<script>
export default {
  name: 'hourglass-simple',
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
<path d="M12.7648 12L19.7345 5.03033C19.8393 4.92544 19.9108 4.7918 19.9397 4.64632C19.9686 4.50083 19.9538 4.35003 19.897 4.21299C19.8403 4.07594 19.7441 3.95881 19.6208 3.8764C19.4975 3.79399 19.3525 3.75 19.2041 3.75H6.32544C6.1771 3.75 6.0321 3.79399 5.90876 3.8764C5.78543 3.95881 5.6893 4.07594 5.63253 4.21299C5.57576 4.35003 5.56091 4.50083 5.58985 4.64632C5.61879 4.7918 5.69022 4.92544 5.79511 5.03033L12.7648 12ZM12.7648 12L19.7345 18.9697C19.8393 19.0746 19.9108 19.2082 19.9397 19.3537C19.9686 19.4992 19.9538 19.65 19.897 19.787C19.8403 19.9241 19.7441 20.0412 19.6208 20.1236C19.4975 20.206 19.3525 20.25 19.2041 20.25H6.32544C6.1771 20.25 6.0321 20.206 5.90876 20.1236C5.78543 20.0412 5.6893 19.9241 5.63253 19.787C5.57576 19.65 5.56091 19.4992 5.58985 19.3537C5.61879 19.2082 5.69022 19.0746 5.79511 18.9697L12.7648 12Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    