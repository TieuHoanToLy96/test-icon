<script>
export default {
  name: 'fountain-off',
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
<path d="M9 16V11C9 10.4696 8.78929 9.96086 8.41421 9.58579C8.03914 9.21071 7.53043 9 7 9C6.46957 9 5.96086 9.21071 5.58579 9.58579C5.21071 9.96086 5 10.4696 5 11" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 16V15M15 11C15 10.4696 15.2107 9.96086 15.5858 9.58579C15.9609 9.21071 16.4696 9 17 9C17.5304 9 18.0391 9.21071 18.4142 9.58579C18.7893 9.96086 19 10.4696 19 11" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 16V12M12 8V6C12 5.20435 12.3161 4.44129 12.8787 3.87868C13.4413 3.31607 14.2044 3 15 3C15.7956 3 16.5587 3.31607 17.1213 3.87868C17.6839 4.44129 18 5.20435 18 6" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.45093 3.42986C7.9061 3.15543 8.42602 3.00685 8.95747 2.99932C9.48892 2.9918 10.0128 3.12561 10.4756 3.38705C10.9383 3.64849 11.3233 4.02818 11.5912 4.48726C11.859 4.94635 12.0001 5.46836 11.9999 5.99986" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 16H21V17M20.129 20.114C19.8504 20.3953 19.5188 20.6184 19.1534 20.7705C18.7879 20.9226 18.3959 21.0006 18 21H6C5.20435 21 4.44129 20.6839 3.87868 20.1213C3.31607 19.5587 3 18.7956 3 18V16H16" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    