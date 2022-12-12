<script>
export default {
  name: 'paper-plane-right',
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
<path d="M7.69119 12H13.6912M21.5227 11.3456L5.68689 2.47758C5.55366 2.40297 5.40084 2.37081 5.24885 2.38538C5.09686 2.39996 4.95294 2.46057 4.83632 2.55913C4.7197 2.65769 4.63594 2.7895 4.59623 2.93694C4.55653 3.08437 4.56277 3.24042 4.61413 3.38421L7.6011 11.7477C7.65936 11.9109 7.65936 12.0891 7.6011 12.2522L4.61413 20.6158C4.56277 20.7596 4.55653 20.9156 4.59623 21.063C4.63594 21.2105 4.7197 21.3423 4.83632 21.4408C4.95294 21.5394 5.09686 21.6 5.24885 21.6146C5.40085 21.6292 5.55367 21.597 5.68689 21.5224L21.5227 12.6544C21.639 12.5892 21.7358 12.4943 21.8033 12.3792C21.8707 12.2642 21.9062 12.1333 21.9062 12C21.9062 11.8667 21.8707 11.7358 21.8032 11.6207C21.7358 11.5057 21.639 11.4108 21.5227 11.3456Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    