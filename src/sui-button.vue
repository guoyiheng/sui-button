<template>
  <button
    class="sui-button"
    :class="[
      type ? 'sui-button-' + type : '',
      buttonSize ? 'sui-button-' + buttonSize : ''
    ]"
    v-bind="$attrs"
    v-on="$listeners"
    @click="handleClick"
  >
    <!--@slot 按扭文本 -->
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'SuiButton',
  props: {
    /**
     * 按扭样式 可选值: primary/success/danger
     */
    type: {
      type: String,
      default: 'primary',
      required: false,
      validator: function(value) {
        // 这个值必须匹配下列字符串中的一个
        return ['primary', 'success', 'danger'].includes(value)
      }
    },
    /**
     * 按扭大小 可选值: small/middle/large
     */
    size: {
      type: String,
      default: 'middle'
    }
  },
  computed: {
    buttonSize() {
      return this.size
    }
  },
  methods: {
    /**
     * 点击事件
     * @param {string} e - 1
     * @public
     */
    handleClick(e) {
      /**
       * 向上抛出点击事件
       * @property {string} e - 按钮事件默认参数
       */
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="less" scoped>
/*******************************
            Button
*******************************/
.sui-button {
  cursor: pointer;
  display: inline-block;
  min-height: 1em;
  outline: none;
  border: none;
  vertical-align: baseline;
  background: #e0e1e2 none;
  color: rgba(0, 0, 0, 0.6);
  font-family: 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;
  margin: 0 0.25em 0 0;
  padding: 0.78571429em 1.5em 0.78571429em;
  text-transform: none;
  text-shadow: none;
  font-weight: bold;
  font-style: normal;
  text-align: center;
  line-height: 1em;
  text-decoration: none;
  border-radius: 0.28571429rem;
  -webkit-box-shadow: 0 0 0 1px transparent inset,
    0 0 0 0 rgba(34, 36, 38, 0.15) inset;
  box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34, 36, 38, 0.15) inset;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: opacity 0.1s ease, background-color 0.1s ease,
    color 0.1s ease, background 0.1s ease, -webkit-box-shadow 0.1s ease;
  transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease,
    background 0.1s ease, -webkit-box-shadow 0.1s ease;
  transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease,
    box-shadow 0.1s ease, background 0.1s ease;
  transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease,
    box-shadow 0.1s ease, background 0.1s ease, -webkit-box-shadow 0.1s ease;
  will-change: '';
  -webkit-tap-highlight-color: transparent;
}

.sui-button-success {
  background-color: #67c23a;
}

.sui-button-danger {
  background-color: #f56c6c;
}

/*******************************
            States
*******************************/

/* Basic */
.sui-button-primary {
  -webkit-box-shadow: 0 0 0 1px #2185d0 inset !important;
  box-shadow: 0 0 0 1px #2185d0 inset !important;
  background-color: #1279c6;
  color: #fff;
  text-shadow: none;
}

.sui-button-primary:hover {
  background: transparent !important;
  -webkit-box-shadow: 0 0 0 1px #1678c2 inset !important;
  box-shadow: 0 0 0 1px #1678c2 inset !important;
  color: #1678c2 !important;
}

.sui-button-primary:focus {
  background: transparent !important;
  -webkit-box-shadow: 0 0 0 1px #0d71bb inset !important;
  box-shadow: 0 0 0 1px #0d71bb inset !important;
  color: #1678c2 !important;
}

.sui-button-primary:active {
  -webkit-box-shadow: 0 0 0 1px #1a69a4 inset !important;
  box-shadow: 0 0 0 1px #1a69a4 inset !important;
  color: #1a69a4 !important;
}
</style>
