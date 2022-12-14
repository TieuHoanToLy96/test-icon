<script>
export default {
  name: 'bell-simple',
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
<path d="M9.81648 21.002H15.8165M6.09253 9.75C6.09129 8.86051 6.26611 7.97957 6.60692 7.15796C6.94773 6.33635 7.44778 5.59031 8.07826 4.96286C8.70874 4.33541 9.45717 3.83895 10.2804 3.5021C11.1037 3.16525 11.9854 2.99467 12.8749 3.00019C16.5864 3.02778 19.5552 6.11282 19.5552 9.83474V10.5C19.5552 13.8577 20.2577 15.8062 20.8764 16.8711C20.9431 16.9849 20.9785 17.1142 20.9792 17.2461C20.9799 17.378 20.9459 17.5077 20.8804 17.6222C20.815 17.7367 20.7205 17.8319 20.6066 17.8982C20.4926 17.9646 20.3631 17.9997 20.2313 18H5.41571C5.28382 17.9997 5.15436 17.9645 5.04037 17.8982C4.92639 17.8318 4.83192 17.7366 4.7665 17.6221C4.70107 17.5076 4.66701 17.3778 4.66774 17.2459C4.66846 17.1141 4.70396 16.9847 4.77065 16.8709C5.38971 15.806 6.09252 13.8575 6.09252 10.5L6.09253 9.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    