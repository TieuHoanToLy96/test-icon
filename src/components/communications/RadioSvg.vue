<script>
export default {
  name: 'radio-svg',
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
<path d="M3.64709 7.5H20.8971C21.096 7.5 21.2868 7.57902 21.4274 7.71967C21.5681 7.86032 21.6471 8.05109 21.6471 8.25V18.75C21.6471 18.9489 21.5681 19.1397 21.4274 19.2803C21.2868 19.421 21.096 19.5 20.8971 19.5H4.39709C4.19818 19.5 4.00742 19.421 3.86676 19.2803C3.72611 19.1397 3.64709 18.9489 3.64709 18.75V7.5ZM3.64709 7.5L18.6471 3M6.6471 10.5H9.6471M6.6471 13.5H9.6471M6.6471 16.5H9.6471M18.6471 13.5C18.6471 15.1569 17.304 16.5 15.6471 16.5C13.9902 16.5 12.6471 15.1569 12.6471 13.5C12.6471 11.8431 13.9902 10.5 15.6471 10.5C17.304 10.5 18.6471 11.8431 18.6471 13.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    