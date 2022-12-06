<script>
export default {
  name: 'hourglass-medium',
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
<path d="M7.64641 8.24958H17.6085M12.647 12L6.94697 7.725C6.85383 7.65514 6.77822 7.56455 6.72615 7.46041C6.67408 7.35627 6.64697 7.24143 6.64697 7.125V3.75C6.64697 3.55109 6.72599 3.36032 6.86664 3.21967C7.0073 3.07902 7.19806 3 7.39697 3H17.897C18.0959 3 18.2867 3.07902 18.4273 3.21967C18.568 3.36032 18.647 3.55109 18.647 3.75V7.09136C18.647 7.20732 18.6201 7.3217 18.5684 7.42551C18.5168 7.52932 18.4417 7.61974 18.3492 7.68966L12.647 12ZM12.647 12L6.94697 16.275C6.85383 16.3449 6.77822 16.4354 6.72615 16.5396C6.67408 16.6437 6.64697 16.7586 6.64697 16.875V20.25C6.64697 20.4489 6.72599 20.6397 6.86664 20.7803C7.0073 20.921 7.19806 21 7.39697 21H17.897C18.0959 21 18.2867 20.921 18.4273 20.7803C18.568 20.6397 18.647 20.4489 18.647 20.25V16.9086C18.647 16.7927 18.6201 16.6783 18.5684 16.5745C18.5168 16.4707 18.4417 16.3803 18.3492 16.3103L12.647 12ZM12.647 12V15.7496" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    