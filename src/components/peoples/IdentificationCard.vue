<script>
export default {
  name: 'identification-card',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.0732 10.5H18.8232M15.0732 13.5H18.8232M9.45766 13.5C10.7003 13.5 11.7077 12.4926 11.7077 11.25C11.7077 10.0074 10.7003 9 9.45766 9C8.21502 9 7.20766 10.0074 7.20766 11.25C7.20766 12.4926 8.21502 13.5 9.45766 13.5ZM9.45766 13.5C8.79251 13.5 8.14611 13.721 7.62022 14.1283C7.09433 14.5355 6.71864 15.106 6.55218 15.75M9.45766 13.5C10.1228 13.5 10.769 13.7209 11.2949 14.1282C11.8209 14.5354 12.1966 15.1058 12.3631 15.7497M4.57324 4.5H21.0732C21.4875 4.5 21.8232 4.83579 21.8232 5.25V18.75C21.8232 19.1642 21.4875 19.5 21.0732 19.5H4.57324C4.15903 19.5 3.82324 19.1642 3.82324 18.75V5.25C3.82324 4.83579 4.15903 4.5 4.57324 4.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    