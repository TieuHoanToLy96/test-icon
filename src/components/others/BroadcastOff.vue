<script>
export default {
  name: 'broadcast-off',
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
<path d="M18.364 19.3641C19.8322 17.8978 20.7487 15.9692 20.9583 13.9048C21.1679 11.8404 20.6576 9.76694 19.514 8.03551C18.3703 6.30408 16.6635 5.02103 14.6825 4.40355C12.7014 3.78608 10.5679 3.87212 8.64297 4.64712M6.15497 6.15612C5.21094 6.96234 4.4439 7.95515 3.9021 9.07214C3.3603 10.1891 3.05544 11.4061 3.0067 12.6466C2.95795 13.8871 3.16637 15.1243 3.61886 16.2803C4.07135 17.4364 4.75811 18.4863 5.63597 19.3641" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.536 16.536C16.2354 15.8367 16.7118 14.9457 16.9048 13.9757C17.0978 13.0057 16.9988 12.0002 16.6203 11.0865C16.2417 10.1727 15.6007 9.39175 14.7783 8.84235C13.9559 8.29296 12.989 7.99982 12 8M8.99899 9C8.42586 9.42985 7.9518 9.97785 7.60891 10.6069C7.26602 11.2359 7.06231 11.9313 7.01158 12.6459C6.96084 13.3605 7.06427 14.0777 7.31486 14.7489C7.56544 15.42 7.95733 16.0295 8.46399 16.536" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 12C11.8022 12 11.6089 12.0586 11.4444 12.1685C11.28 12.2784 11.1518 12.4346 11.0761 12.6173C11.0004 12.8 10.9806 13.0011 11.0192 13.1951C11.0578 13.3891 11.153 13.5673 11.2929 13.7071C11.4327 13.847 11.6109 13.9422 11.8049 13.9808C11.9989 14.0194 12.2 13.9996 12.3827 13.9239C12.5654 13.8482 12.7216 13.72 12.8315 13.5556C12.9414 13.3911 13 13.1978 13 13" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    