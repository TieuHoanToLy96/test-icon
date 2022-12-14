<script>
export default {
  name: 'books-svg',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.48523 4.49997C8.48523 4.08576 8.14944 3.74997 7.73523 3.74997H4.73523C4.32102 3.74997 3.98523 4.08576 3.98523 4.49997V19.5C3.98523 19.9142 4.32102 20.25 4.73523 20.25H7.73523C8.14944 20.25 8.48523 19.9142 8.48523 19.5M8.48523 4.49997V19.5M8.48523 4.49997C8.48523 4.08576 8.82102 3.74997 9.23523 3.74997H12.2352C12.6494 3.74997 12.9852 4.08576 12.9852 4.49997V19.5C12.9852 19.9142 12.6494 20.25 12.2352 20.25H9.23523C8.82102 20.25 8.48523 19.9142 8.48523 19.5M3.98523 7.49997H8.48523M8.48523 16.5H12.9852M16.2891 16.7961L20.6357 15.6314M13.9597 8.10279L18.3064 6.93811M13.7137 4.28645L16.6114 3.50999C17.0115 3.40279 17.4228 3.64023 17.53 4.04033L21.4123 18.5293C21.5195 18.9294 21.2821 19.3406 20.882 19.4478L17.9842 20.2243C17.5841 20.3315 17.1728 20.0941 17.0656 19.694L13.1833 5.20502C13.0761 4.80492 13.3136 4.39366 13.7137 4.28645Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    