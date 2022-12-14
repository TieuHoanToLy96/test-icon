<script>
export default {
  name: 'wash-dryclean-off',
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
<path d="M20.048 16.0328C20.8972 14.3413 21.1916 12.4252 20.8892 10.5568C20.5868 8.68843 19.7031 6.96295 18.3637 5.62568C17.0244 4.28841 15.2975 3.40742 13.4286 3.10799C11.5598 2.80855 9.64414 3.1059 7.95401 3.95777M5.63301 5.63977C3.94583 7.32827 2.99851 9.61784 2.99945 12.0048C3.00039 14.3918 3.94951 16.6806 5.63801 18.3678C7.32651 20.0549 9.61608 21.0023 12.003 21.0013C14.39 21.0004 16.6788 20.0513 18.366 18.3628" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    