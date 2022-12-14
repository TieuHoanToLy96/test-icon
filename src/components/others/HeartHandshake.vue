<script>
export default {
  name: 'heart-handshake',
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
<path d="M19.5001 12.5722L12.0001 20.0002L4.50006 12.5722C4.00536 12.0908 3.6157 11.5122 3.3556 10.8728C3.09551 10.2334 2.97062 9.54713 2.98879 8.85711C3.00697 8.16709 3.16782 7.48831 3.46121 6.86351C3.75461 6.23871 4.17419 5.68143 4.69354 5.22676C5.21289 4.77208 5.82076 4.42987 6.47887 4.22166C7.13697 4.01345 7.83106 3.94376 8.51743 4.01698C9.20379 4.0902 9.86756 4.30473 10.4669 4.64708C11.0663 4.98943 11.5883 5.45218 12.0001 6.00618C12.4136 5.4562 12.9362 4.9975 13.5352 4.65878C14.1341 4.32007 14.7966 4.10863 15.481 4.0377C16.1654 3.96677 16.8571 4.03787 17.5128 4.24657C18.1685 4.45526 18.7741 4.79705 19.2916 5.25054C19.8091 5.70403 20.2275 6.25946 20.5205 6.88207C20.8135 7.50468 20.9748 8.18106 20.9944 8.86889C21.0139 9.55671 20.8913 10.2412 20.6342 10.8794C20.3771 11.5177 19.991 12.096 19.5001 12.5782" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 6L8.70697 9.293C8.5195 9.48053 8.41418 9.73484 8.41418 10C8.41418 10.2652 8.5195 10.5195 8.70697 10.707L9.24997 11.25C9.93997 11.94 11.06 11.94 11.75 11.25L12.75 10.25C13.3467 9.65327 14.1561 9.31803 15 9.31803C15.8439 9.31803 16.6532 9.65327 17.25 10.25L19.5 12.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 15.5L14.5 17.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 13L17 15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    