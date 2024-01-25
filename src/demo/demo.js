class PromiseA {
  // 构造器
  constructor(executor) {
    // 初始化state为等待态
    this.state = "pending";
    // 成功的值
    this.value = undefined;
    // 失败的原因
    this.reason = undefined;
    // 成功
    let resolve = (value) => {
      console.log(222);
      if (this.state === "pending") {
        this.state = "fulfilled";
        // 存储成功的值
        this.value = value;
      }
    };
    // 失败
    let reject = (reason) => {
      this.state = "rejected";
      // 存储失败的原因
      this.reason = reason;
    };
    // 立即执行

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    if (this.state === "fulfilled") {
      onFulfilled(this.value);
    }
    if (this.state === "rejected") {
      onRejected(this.reason);
    }
  }
}

new PromiseA((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello, Promise!");
  }, 1000);
}).then((result) => {
  console.log(result); // 输出: 'Hello, Promise!'
});
