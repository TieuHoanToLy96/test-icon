<script>
export default {
  name: 'number-two',
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
<path d="M8.50085 5.74839C8.7452 5.17027 9.10776 4.64965 9.56526 4.21996C10.0228 3.79027 10.5651 3.46102 11.1573 3.25336C11.7496 3.04569 12.3788 2.9642 13.0045 3.01412C13.6301 3.06404 14.2384 3.24427 14.7903 3.54323C15.3421 3.84218 15.8254 4.25326 16.2089 4.75006C16.5925 5.24685 16.8679 5.81838 17.0175 6.42794C17.1671 7.03749 17.1876 7.6716 17.0775 8.28952C16.9675 8.90744 16.7295 9.49552 16.3787 10.016V10.016L8.14722 21V20.9989H17.1472" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    