<script>
export default {
  name: 'hourglass-simple-low',
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
<path d="M12.4118 12L19.3814 5.03033C19.4863 4.92544 19.5577 4.7918 19.5867 4.64632C19.6156 4.50083 19.6008 4.35003 19.544 4.21299C19.4872 4.07594 19.3911 3.95881 19.2678 3.8764C19.1444 3.79399 18.9994 3.75 18.8511 3.75H5.97241C5.82408 3.75 5.67907 3.79399 5.55573 3.8764C5.4324 3.95881 5.33627 4.07594 5.2795 4.21299C5.22274 4.35003 5.20788 4.50083 5.23682 4.64632C5.26576 4.7918 5.33719 4.92544 5.44208 5.03033L12.4118 12ZM12.4118 12L19.3814 18.9697C19.4863 19.0746 19.5577 19.2082 19.5867 19.3537C19.6156 19.4992 19.6008 19.65 19.544 19.787C19.4872 19.9241 19.3911 20.0412 19.2678 20.1236C19.1444 20.206 18.9994 20.25 18.8511 20.25H5.97241C5.82408 20.25 5.67907 20.206 5.55573 20.1236C5.4324 20.0412 5.33627 19.9241 5.2795 19.787C5.22274 19.65 5.20788 19.4992 5.23682 19.3537C5.26576 19.2082 5.33719 19.0746 5.44208 18.9697L12.4118 12ZM16.9118 16.5H7.91175" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    