<script>
export default {
  name: 'hand-soap',
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
<path d="M7.79419 9.75H16.7942M7.79419 9.75C6.99854 9.75 6.23548 10.0661 5.67287 10.6287C5.11026 11.1913 4.79419 11.9544 4.79419 12.75V20.25C4.79419 20.4489 4.87321 20.6397 5.01386 20.7803C5.15451 20.921 5.34528 21 5.54419 21H19.0442C19.2431 21 19.4339 20.921 19.5745 20.7803C19.7152 20.6397 19.7942 20.4489 19.7942 20.25V12.75C19.7942 11.9544 19.4781 11.1913 18.9155 10.6287C18.3529 10.0661 17.5898 9.75 16.7942 9.75M7.79419 9.75V8.25C7.79419 7.65326 8.03124 7.08097 8.4532 6.65901C8.87516 6.23705 9.44745 6 10.0442 6H14.5442C15.1409 6 15.7132 6.23705 16.1352 6.65901C16.5571 7.08097 16.7942 7.65326 16.7942 8.25V9.75M17.5442 3.75C17.5442 3.35218 17.3862 2.97064 17.1048 2.68934C16.8235 2.40804 16.442 2.25 16.0442 2.25H10.0442M12.2942 2.25V6" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    