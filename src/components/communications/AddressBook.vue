<script>
export default {
  name: 'address-book',
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
<path d="M13.3971 13.5C15.054 13.5 16.3971 12.1569 16.3971 10.5C16.3971 8.84315 15.054 7.5 13.3971 7.5C11.7402 7.5 10.3971 8.84315 10.3971 10.5C10.3971 12.1569 11.7402 13.5 13.3971 13.5ZM13.3971 13.5C12.5238 13.5 11.6625 13.7033 10.8814 14.0938C10.1003 14.4843 9.42086 15.0513 8.89683 15.7498M13.3971 13.5C14.2703 13.5 15.1315 13.7032 15.9126 14.0937C16.6937 14.4842 17.3731 15.0511 17.8972 15.7496M3.64709 10.125H5.8971M3.64709 6.37501H5.8971M3.64709 13.875H5.8971M3.64709 17.625H5.8971M20.8971 3.75V20.25C20.8971 20.6642 20.5613 21 20.1471 21H6.6471C6.23288 21 5.8971 20.6642 5.8971 20.25V3.75C5.8971 3.33579 6.23288 3 6.6471 3H20.1471C20.5613 3 20.8971 3.33579 20.8971 3.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    