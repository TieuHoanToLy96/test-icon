<script>
export default {
  name: 'brand-apple-arcade',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 7C13.1046 7 14 6.10457 14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5C10 6.10457 10.8954 7 12 7Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.0001 12.5V17.25C20.0066 17.3611 19.9878 17.4722 19.9451 17.575C19.8783 17.7358 19.7543 17.8662 19.5971 17.941L14.1351 20.521C13.4675 20.8364 12.7384 21 12.0001 21C11.2618 21 10.5326 20.8364 9.86507 20.521L4.40307 17.941C4.27417 17.8799 4.16683 17.7812 4.09524 17.6578C4.02364 17.5344 3.99115 17.3922 4.00207 17.25L4.00007 12.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.43097 12.2159L10.065 9.88394C11.3041 9.37169 12.6958 9.37169 13.935 9.88394L19.569 12.2159C19.6938 12.2669 19.801 12.3533 19.8774 12.4644C19.9538 12.5755 19.9961 12.7065 19.9991 12.8413C20.002 12.9761 19.9656 13.1088 19.8941 13.2231C19.8227 13.3375 19.7194 13.4285 19.597 13.4849L14.135 16.0279C13.4662 16.3389 12.7375 16.5 12 16.5C11.2624 16.5 10.5338 16.3389 9.86497 16.0279L4.40297 13.4849C4.27986 13.429 4.17589 13.3381 4.10394 13.2236C4.032 13.109 3.99523 12.9759 3.99821 12.8407C4.0012 12.7055 4.04379 12.5741 4.12071 12.4629C4.19764 12.3517 4.30552 12.2655 4.43097 12.2149V12.2159Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 7V13" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    