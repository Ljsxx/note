class Observer {
  constructor (data) {
    this.observer(data)
  }

  // 添加数据监听
  observer (data) {
    // 验证 data
    if (!data || typeof data !== 'object') {
      return
    }

    // 要对这个data 数据将原有的属性改成 set 和 get 的形式
    // 要将数据一一劫持，想获取到 data 的 key 和 value
    Object.keys(data).forEach(key => {
      // 劫持，实现数据响应式
      this.defineReactive(data, key, data[key])
      // 深度劫持
      this.observer(data[key])
    })
  }

  // 数据响应式
  defineReactive (object, key, value) {
    let _this = this
    // 每个变化的数据都会对应一个数组，这个数组是存放所有更新的操作
    let dep = new Dep()

    // 获取某个值被监听到
    Object.defineProperty(object, key, {
      enumerable: true,
      configurable: true,
      get () {
        // 当取值时调用的方法
        Dep.target && dep.addSub(Dep.target)
        return value
      },
      set (newValue) {
        // 当给 data 属性中设置的值时，更改获取的属性的值
        if (newValue !== value) {
          // 重新赋值如果是对象进行深度劫持
          _this.observer(newValue)
          value = newValue
          // 通知所有人数据更新了
          dep.notify()
        }
      }
    })
  }
}