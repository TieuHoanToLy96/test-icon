<script>
export default {
  name: 'bug-off',
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
<path d="M9.88403 5.87289C10.3042 5.45481 10.8388 5.17057 11.4204 5.05604C12.0019 4.94152 12.6044 5.00184 13.1517 5.22939C13.699 5.45694 14.1667 5.84152 14.4956 6.3346C14.8246 6.82768 15.0001 7.40715 15 7.99989V8.99989" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 9H16C16.5956 9.89259 16.9409 10.9286 17 12V13M16.702 16.705C16.2998 17.8094 15.5216 18.7368 14.5038 19.3247C13.4861 19.9125 12.2938 20.1232 11.1362 19.9198C9.97864 19.7164 8.92966 19.1118 8.17332 18.2122C7.41698 17.3126 7.00158 16.1753 7 15V12C7.05907 10.9286 7.4044 9.89259 8 9H9" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 13H7" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 13H21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 20V14" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 19L7.35 17" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 7L7.75 9.4" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 7L16.25 9.4" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    