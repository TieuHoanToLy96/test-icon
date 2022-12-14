<script>
export default {
  name: 'train-regional',
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
<path d="M20.4852 11.25L18.386 3.55266C18.3427 3.39393 18.2484 3.25384 18.1176 3.15397C17.9869 3.0541 17.8269 3 17.6624 3H6.80808C6.64355 3 6.48358 3.0541 6.35283 3.15397C6.22208 3.25384 6.12779 3.39393 6.0845 3.55266L3.98523 11.25M20.4852 11.25L18.386 18.9473C18.3427 19.1061 18.2484 19.2462 18.1176 19.346C17.9869 19.4459 17.8269 19.5 17.6624 19.5H6.80808C6.64355 19.5 6.48358 19.4459 6.35283 19.346C6.22208 19.2462 6.12779 19.1061 6.0845 18.9473L3.98523 11.25M20.4852 11.25L12.2352 12.75M3.98523 11.25L12.2352 12.75M12.2352 19.5V12.75M9.23523 8.25H15.2352M9.23523 19.5L6.98523 22.5M15.2352 19.5L17.4852 22.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    