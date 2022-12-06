<script>
export default {
  name: 'skip-forward',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.2207 3.75V20.25M18.1735 11.36L6.86179 4.44733C6.7481 4.37785 6.61795 4.33992 6.48474 4.33742C6.35152 4.33493 6.22005 4.36797 6.10384 4.43315C5.98762 4.49832 5.89087 4.59328 5.82354 4.70825C5.7562 4.82322 5.7207 4.95405 5.7207 5.08729V18.9127C5.7207 19.0459 5.7562 19.1768 5.82354 19.2918C5.89087 19.4067 5.98762 19.5017 6.10384 19.5669C6.22005 19.632 6.35152 19.6651 6.48474 19.6626C6.61795 19.6601 6.7481 19.6221 6.86179 19.5527L18.1735 12.64C18.2831 12.573 18.3737 12.4789 18.4366 12.3669C18.4994 12.2548 18.5324 12.1285 18.5324 12C18.5324 11.8715 18.4994 11.7452 18.4366 11.6331C18.3737 11.5211 18.2831 11.427 18.1735 11.36Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    