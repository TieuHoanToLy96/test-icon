<script>
export default {
  name: 'cube-svg',
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
<path d="M12.6471 22.0145C12.5183 22.0145 12.3917 21.9813 12.2794 21.9182L4.0294 17.2775C3.91341 17.2123 3.81687 17.1174 3.74969 17.0025C3.6825 16.8876 3.64709 16.7569 3.64709 16.6239V7.37613C3.64709 7.24305 3.6825 7.11237 3.74969 6.9975C3.81687 6.88262 3.91341 6.78769 4.0294 6.72245L12.2794 2.08182C12.3917 2.01868 12.5183 1.98551 12.6471 1.98551C12.7759 1.98551 12.9025 2.01868 13.0148 2.08182L21.2648 6.72245C21.3808 6.78769 21.4773 6.88262 21.5445 6.9975C21.6117 7.11237 21.6471 7.24305 21.6471 7.37613V16.6239C21.6471 16.7569 21.6117 16.8876 21.5445 17.0025C21.4773 17.1174 21.3808 17.2123 21.2648 17.2775L13.0148 21.9182C12.9025 21.9813 12.7759 22.0145 12.6471 22.0145ZM12.6471 22.0145L12.7361 12M21.5437 6.99619L12.7361 12M12.7361 12L3.75097 6.99534" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    