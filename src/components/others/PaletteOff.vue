<script>
export default {
  name: 'palette-off',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.93397 3.97C9.1943 3.33179 10.5873 2.99948 12 3C16.97 3 21 6.582 21 11C21 12.06 20.526 13.078 19.682 13.828C19.3473 14.124 18.9705 14.3687 18.564 14.554M15 15H14C13.5538 14.9928 13.1181 15.135 12.7621 15.404C12.4061 15.673 12.1502 16.0533 12.0353 16.4844C11.9203 16.9155 11.9528 17.3727 12.1276 17.7833C12.3024 18.1938 12.6095 18.5341 13 18.75C13.1996 18.9342 13.3366 19.1764 13.3915 19.4425C13.4465 19.7085 13.4167 19.9851 13.3063 20.2334C13.196 20.4816 13.0106 20.6891 12.7763 20.8266C12.542 20.9641 12.2705 21.0247 12 21C10.2209 21 8.48171 20.4728 7.00214 19.4848C5.52258 18.4969 4.369 17.0926 3.68714 15.4494C3.00528 13.8062 2.82573 11.9977 3.17117 10.2525C3.51661 8.50726 4.37154 6.90357 5.62797 5.644" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 11.5C8.05228 11.5 8.5 11.0523 8.5 10.5C8.5 9.94772 8.05228 9.5 7.5 9.5C6.94772 9.5 6.5 9.94772 6.5 10.5C6.5 11.0523 6.94772 11.5 7.5 11.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 8.5C12.5523 8.5 13 8.05228 13 7.5C13 6.94772 12.5523 6.5 12 6.5C11.4477 6.5 11 6.94772 11 7.5C11 8.05228 11.4477 8.5 12 8.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.5 11.5C17.0523 11.5 17.5 11.0523 17.5 10.5C17.5 9.94772 17.0523 9.5 16.5 9.5C15.9477 9.5 15.5 9.94772 15.5 10.5C15.5 11.0523 15.9477 11.5 16.5 11.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    