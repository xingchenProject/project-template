<template>
  <div :class="['t-input', isRadius]">
    <div class="input">
      <slot name="prefix"></slot>
      <input v-on="inputListeners" :class="[isLong]" :long="long" :mode="mode" :name="name" :placeholder="placeholder"
             :type="isPassword" :value="value" @blur="blurInput" :readonly="readonly"/>
      <slot name="suffix"></slot>
    </div>
  </div>
</template>

<script>
import TIcon from "__tcomponent__/t-icon";
export default {
  name: "t-input",
  components: {TIcon},
  props: {
    //  输入框值
    value: {
      type: String | Number,
    },
    //  是否未密码模式
    password: {
      type: Boolean,
      default: false,
    },
    //  提醒
    placeholder: {
      type: String,
    },
    //  名字
    name: {
      type: String,
    },
    //  应用场景类型
    mode: {
      type: String,
    },
    //  长
    long: {
      type: Boolean,
      default: false,
    },
    //  是否只读
    readonly: {
      type: Boolean,
      default: false,
    },
    //  是否开启圆角
    radius: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    /**
     * input失去焦点时,若父元素为t-form-item自动调用父元素blurItem函数
     **/
    blurInput() {
      if (this.$parent.$options.name === "t-form-item") {
        this.$parent.blurItem();
      }
    }
  },
  computed: {
    /**
     * 修改默认事件
     * 返回覆盖后的该组件事件
     * @return Object
     */
    inputListeners() {
      return Object.assign({},
          this.$listeners,
          {
            input: (event) => {
              this.$emit("input", event.target.value)
            }
          });
    },
    /**
     * 设置是否密码模式
     * 若password字段为true，则设置input为密码模式
     * @return String
     */
    isPassword() {
      return this.password ? "password" : "input";
    },
    /**
     * 是否独占一行
     * 若long字段为true则独占一行
     * @return string
     */
    isLong() {
      return this.long ? "long" : "";
    },
    /**
     * 是否开启圆角，
     * @return String
     */
    isRadius() {
      return  this.radius ? "radius" : "";
    },
  }
};
</script>

<style scoped lang="less">
.t-input {
  background-color: #fff;
  padding: 0 .5em;
  .input {
    display: flex;
    align-items: center;
    width: 100%;
    input {
      flex-grow: 9;
      outline: none;
      border: none;
    }
  }
}
</style>