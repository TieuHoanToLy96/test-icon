<script>
export default {
  name: 'fish-simple',
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
<path d="M15.4476 8.0625C15.9649 8.0625 16.3843 7.64277 16.3843 7.125C16.3843 6.60723 15.9649 6.1875 15.4476 6.1875C14.9303 6.1875 14.511 6.60723 14.511 7.125C14.511 7.64277 14.9303 8.0625 15.4476 8.0625Z" fill="currentColor"/>
<path d="M2.32349 17.2466C24.0586 22.0043 21.8039 7.07512 21.1848 4.21504C21.1543 4.07375 21.0837 3.94425 20.9815 3.84204C20.8793 3.73983 20.7498 3.66925 20.6085 3.63876C17.7484 3.01964 2.81893 0.764893 7.57349 22.5M19.6998 14.2491C18.4966 14.266 17.3023 14.0415 16.1874 13.5888C15.0726 13.1361 14.0598 12.4644 13.2091 11.6135C12.3583 10.7626 11.6868 9.74977 11.2342 8.63485C10.7817 7.51992 10.5573 6.32558 10.5744 5.12244" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    