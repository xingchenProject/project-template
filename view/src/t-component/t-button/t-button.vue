<template>
  <div class="t-button">
    <button :class="[modelType, isLong]" :long="long" :type="type" :mode="mode" @click="click">
      <slot></slot>
    </button>
  </div>
</template>

<script>
import Mode from "__protocol__/Mode";

export default {
  name: "t-button",
  props: {
    //  应该场景
    mode: {
      type: String,
      default: "",
    },
    //  是否独占一行
    long: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "button"
    }
  },
  computed: {
    /**
     * 应用场景类型颜色
     * 若有应用场景，则返回对应应用场景的悬停变浅样式和点击加深样式
     * @return Array | String
     */
    modelType() {
      switch (this.mode) {
        case Mode.SUCCESS:
          return ["success-active-dark", "success-hover-light"];
        case Mode.WARNING:
          return ["warning-active-dark", "warning-hover-light"];
        case Mode.ERROR:
          return ["error-active-dark", "error-hover-light"];
        case Mode.PRIMARY:
          return ["primary-active-dark", "primary-hover-light"];
        case Mode.INFO:
          return ["info-active-dark", "info-hover-light"];
        case Mode.CANCEL:
          return ["cancel-active-dark", "cancel-hover-light"];
        default:
          return "";
      }
    },
    /**
     是否独占一行
     若独占一行返回long样式，否则返回空串
     @return String
     */
    isLong() {
      return this.long ? "long" : "";
    }
  },
  methods: {
    /**
     * 按钮被点击事件
     */
    click() {
      this.$emit("click");
    }
  }
};
</script>

<style scoped lang="less">
.t-button {
  button {
    border: none;
    outline: none;
  }
}
</style>