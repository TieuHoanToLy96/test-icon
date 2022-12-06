<script>
export default {
  name: 'cookie-man',
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
<path d="M12 2C13.0658 1.9999 14.1038 2.34039 14.9625 2.97178C15.8211 3.60318 16.4556 4.49243 16.7732 5.50982C17.0909 6.5272 17.0751 7.61947 16.7283 8.62727C16.3814 9.63506 15.7216 10.5056 14.845 11.112L14.992 11.481L16.747 10.678C17.716 10.235 18.867 10.646 19.318 11.596C19.522 12.0276 19.5542 12.5206 19.408 12.975C19.2619 13.4294 18.9484 13.8113 18.531 14.043L18.383 14.119L16 15.208V17.228L17.426 18.653L17.54 18.778C17.8569 19.1534 18.0212 19.6341 18.0005 20.1249C17.9798 20.6157 17.7755 21.0808 17.4282 21.4281C17.0808 21.7755 16.6157 21.9798 16.1249 22.0005C15.6341 22.0212 15.1534 21.8568 14.778 21.54L14.653 21.426L12.574 19.346L12.46 19.222C12.4013 19.1525 12.3475 19.079 12.299 19.002H11.7C11.653 19.077 11.599 19.152 11.54 19.222L11.425 19.347L9.34502 21.426C8.98803 21.7846 8.50618 21.9912 8.00031 22.0027C7.49444 22.0141 7.00374 21.8295 6.6309 21.4874C6.25806 21.1453 6.03197 20.6722 5.99993 20.1673C5.9679 19.6623 6.1324 19.1645 6.45902 18.778L6.57302 18.653L8.00002 17.227V15.208L5.61702 14.118L5.46902 14.043C5.05169 13.8113 4.73815 13.4294 4.592 12.975C4.44584 12.5206 4.47803 12.0276 4.68202 11.596C5.11102 10.694 6.17102 10.278 7.10602 10.618L7.25302 10.678L9.00802 11.481L9.15502 11.112C8.52005 10.673 7.99546 10.0929 7.62243 9.41709C7.24939 8.74128 7.03806 7.98822 7.00502 7.217L7.00002 7C7.00002 5.67392 7.52681 4.40215 8.46449 3.46447C9.40217 2.52678 10.6739 2 12 2V2Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 16H12.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 13H12.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 7H10.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 7H14.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 9H12.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    