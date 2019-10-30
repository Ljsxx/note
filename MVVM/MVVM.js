
class MVVM {
  constructor(options) {
    // 先把 el 和 data 挂到 MVVM 实例上
    this.$el = options.el
    this.$data = options.data

    // 如果有 el 就开始编译模板
    if (this.$el) {
      // 数据劫持，就是把对象所有的属性加上 get 和 set
      new Observer(this.$data)

      // 将数据代理到实例上
      this.proxyData(this.$data)

      // 用数据和元素进行编译
      new Compile(this.$el, this)
      
    }
  }
  proxyData (data) {
    // 代理数据的方法
    Object.keys(data).forEach(key => {
      Object.defineProperty(this, key, {
        get () {
          return data[key]
        },
        set (newVal) {
          data[key] = newVal
        }
      })
    })
  }
}