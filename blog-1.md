# 1. Why is `any` labeled a "type safety hole," and why is `unknown` the safer choice for handling unpredictable data? Explain the concept of type narrowing.

## ভূমিকা

TypeScript শেখার শুরুতে আমি অনেক সময় `any` টাইপ ব্যবহার করতাম কারণ এটা খুব সহজ মনে হতো। সেখানে যেকোনো ধরনের data এখানে রাখা যেত এবং কোনো error দিত না। কিন্তু পরে বুঝতে পারলাম, `any` ব্যবহার করলে TypeScript এর সবচেয়ে বড় সুবিধা type safety নষ্ট হয়ে যায়। এজন্য একে বলা হয় “type safety hole”।

এই সমস্যার সমাধান হিসেবে TypeScript এ আছে `unknown`, যেটা দেখতে `any` এর মতো হলেও অনেক বেশি safe এবং predictable।


---

## `any` কি?

`any` মানে হল TypeScript কোনো type checking করবে না।
 এখানে যেকোনো value রাখা যাবে, কোনো error আসবে না।

### Example:

```ts
const data: any;

data = "Hello";
data = 123;
data = true;
```

## কেন `any` safe নয়?

কারন `any` ব্যবহার করলে TypeScript এর main advantage নষ্ট হয়ে যায়। যেমন এখানে TypeScript কিছু বলবে না, কিন্তু runtime এ error হবে।

### Example:

```ts
const value: any = "Hello";

value.toUpperCase(); 
value.toFixed(); 
```

## `unknown` কি?

`unknown` হলো any থেকে better এবং safer version. এখানে সব রাখা যায়, কিন্তু directly use করা যায় না।

### Example:

```ts
const value: unknown;

value = "Hello";
value = 123; 
```

## কেন `unknown` safer?

কারন `unknown` type checking বাধ্যতামূলক করে এবং runtime error prevent করে ফলে TypeScript এর safety বজায় থাকে।


## Type Narrowing কি?

`unknown` ব্যবহার করার সময় আগে type check করতে হয়, এটাকেই type narrowing বলে।
### Example:

```ts
const value: unknown = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase()); 
}
```

## উপসংহার

একজন typeScript learner হিসেবে আমার কাছে মনে হয়:
- any = unsafe, TypeScript এর protection বন্ধ করে দেয়
- unknown = safe, type checking বাধ্যতামূলক করে

তাই real project এ any avoid করে unknown ব্যবহার করাই best হবে।
