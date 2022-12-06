<script>
export default {
  name: 'macro-off',
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
      default: "#3D3D3D"
    }
  }
}
</script>
  
<template>
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 15C5.99968 16.3724 6.46985 17.7034 7.33212 18.7712C8.19439 19.8389 9.39663 20.5787 10.7384 20.8673C12.0801 21.1559 13.4802 20.9757 14.7052 20.357C15.9302 19.7382 16.906 18.7182 17.47 17.467" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.53 15.5298C14.4777 16.0053 13.5849 16.7743 12.9588 17.7445C12.3326 18.7148 11.9997 19.845 12 20.9998" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 21C12 19.4087 11.3679 17.8826 10.2426 16.7574C9.11742 15.6321 7.5913 15 6 15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 21V11" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.866 10.87C9.9589 10.6582 9.12886 10.1976 8.46921 9.53985C7.80957 8.88215 7.34648 8.05348 7.132 7.147M7 3L10 5L12 3L14 5L17 3V6C17.0001 6.898 16.7583 7.77944 16.3001 8.55174C15.8419 9.32404 15.1842 9.95868 14.396 10.389" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    