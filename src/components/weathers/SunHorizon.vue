<script>
export default {
  name: 'sun-horizon',
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
<path d="M9.11122 5.53153L8.39369 3.79926M4.4434 10.1993L2.71113 9.48181M20.3803 10.1993L22.1126 9.48181M15.7125 5.53153L16.43 3.79926M22.9119 15H1.91187M19.9119 18.75H4.91187M6.98908 15C6.75892 14.165 6.72471 13.288 6.88914 12.4376C7.05357 11.5871 7.41218 10.7861 7.93703 10.097C8.46188 9.40795 9.13878 8.84939 9.91497 8.46489C10.6912 8.08039 11.5457 7.88034 12.4119 7.88034C13.2781 7.88034 14.1326 8.08039 14.9088 8.46489C15.6849 8.84938 16.3618 9.40795 16.8867 10.097C17.4115 10.7861 17.7702 11.5871 17.9346 12.4376C18.099 13.288 18.0648 14.165 17.8346 15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    