<script>
export default {
  name: 'headset-off',
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
<path d="M8 15C8 13.8954 7.10457 13 6 13C4.89543 13 4 13.8954 4 15V17C4 18.1046 4.89543 19 6 19C7.10457 19 8 18.1046 8 17V15Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.185 13.1731C17.4896 13.0372 17.8233 12.9796 18.1558 13.0056C18.4883 13.0316 18.8091 13.1403 19.0888 13.3219C19.3686 13.5035 19.5985 13.7521 19.7576 14.0452C19.9168 14.3383 20.0001 14.6666 20 15.0001V16.0001M18.82 18.8251C18.5154 18.962 18.1813 19.0205 17.8482 18.9952C17.5152 18.9698 17.1938 18.8615 16.9134 18.68C16.633 18.4985 16.4025 18.2497 16.2429 17.9563C16.0834 17.6628 15.9999 17.3341 16 17.0001V16.0001" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 15.0002V12.0002C4 9.7922 4.894 7.7932 6.34 6.3462M8.717 4.7032C9.93548 4.15487 11.2719 3.92047 12.6042 4.02139C13.9366 4.12231 15.2225 4.55534 16.3444 5.28095C17.4664 6.00657 18.3888 7.00165 19.0273 8.17536C19.6659 9.34907 20.0003 10.664 20 12.0002V15.0002" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 19C18 20.657 15.314 22 12 22" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    