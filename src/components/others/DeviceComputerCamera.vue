<script>
export default {
  name: 'device-computer-camera',
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
<path d="M12 17C15.866 17 19 13.866 19 10C19 6.13401 15.866 3 12 3C8.13401 3 5 6.13401 5 10C5 13.866 8.13401 17 12 17Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.00006 16L5.90906 19.486C5.81816 19.6377 5.76911 19.8108 5.76692 19.9876C5.76473 20.1645 5.80948 20.3387 5.89659 20.4926C5.98371 20.6465 6.11008 20.7746 6.26282 20.8637C6.41556 20.9528 6.58921 20.9999 6.76606 21H17.2341C17.4109 20.9999 17.5845 20.9528 17.7373 20.8637C17.89 20.7746 18.0164 20.6465 18.1035 20.4926C18.1906 20.3387 18.2354 20.1645 18.2332 19.9876C18.231 19.8108 18.182 19.6377 18.0911 19.486L16.0001 16" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    