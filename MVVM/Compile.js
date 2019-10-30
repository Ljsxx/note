class Compile {
  constructor (el, vm) {
    // 判断 el 是否是元素节点
    this.el = this.isElementNode(el) ? el : document.querySelector(el)
    this.vm = vm

    // 如果传入的根元素存在，才开始编译
    if (this.el) {
      // 1.把这些真是的 dom 移动到内存中，即 fragment 文档碎片
      let fragment = this.node2fragment(this.el)
      // 2.将模板中的指令中的变量和 {{}} 中的变量替换成真是的数据
      this.compile(fragment)
      // 3.把编译好的 fragment 再塞回页面中
      this.el.appendChild(fragment)
    }
  }

  // 辅助方法
  // 判断是否是元素节点
  isElementNode (node) {
    return node.nodeType === 1
  }
  // 判断是否为指令
  isDirective (name) {
    return name.includes('v-')
  }

  // 核心方法
  // 节点转成文档碎片
  node2fragment (el) {
    // 创建文档碎片
    let fragment = document.createDocumentFragment()
    // 第一个子节点
    let firstChild

    // 循环取出根节点中的节点并放入文档碎片中
    while (firstChild = el.firstChild) {
      fragment.appendChild(firstChild)
    }
    return fragment
  }

  // 解析文档碎片
  compile (fragment) {
    let childNodes = fragment.childNodes
    childNodes.forEach(node => {
      if (this.isElementNode(node)) {
        // 如果是元素节点
        // 递归编译子节点
        this.compile(node)
        // 编译元素节点
        this.compileElement(node)
      } else {
        // 如果是文本节点
        // 编译文本节点
        this.compileText(node)
      }
    })
  }

  // 编译元素节点
  compileElement (node) {
    // 取出当前节点的属性，类数组
    let attrs = node.attributes
    Array.from(attrs).forEach(attr => {
      // 获取属性名，判断属性是否为指令，即含 v-
      let attrName = attr.name
      if (this.isDirective(attrName)) {
        // 如果是指令，取到该属性值的变量在data中对应的值，替换到节点中
        let exp = attr.value
        // 取出方法名
        let [, type] = attrName.split('-')
        // 调用指令对应的方法
        CompileUtil[type](node, this.vm, exp)
      }
    })
  }

  // 编译文本节点
  compileText (node) {
    // 获取文本节点的内容
    let exp = node.textContent
    // 创建匹配 {{}} 的正则表达式
    let reg = /\{\{([^}]+)\}\}/g

    // 如果存在 {{}} 则使用 text 指令的方法
    if (reg.test(exp)) {
      CompileUtil['text'](node, this.vm, exp)
    }
  }
}