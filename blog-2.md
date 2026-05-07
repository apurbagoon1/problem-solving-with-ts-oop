# 3. How do `Generics` allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?



## ভূমিকা

TypeScript শেখার সময় আমি Generics বিষয়টা প্রথমে কঠিন মনে করেছিলাম। কিন্তু পরে বুঝলাম, Generics আসলে এমন একটা শক্তিশালী feature যেটা আমাদের একবার কোড লিখে বিভিন্ন ধরনের ডাটার জন্য ব্যবহার করতে সাহায্য করে।

এর সবচেয়ে বড় সুবিধা হলো, এটা কোডকে reusable করে এবং একই সাথে type safety বজায় রাখে।

---

## Generics কি?

`Generics` হলো এমন একটি পদ্ধতি যেখানে আমরা function বা class এমনভাবে লিখি যাতে সেটা যেকোনো ধরনের data নিয়ে কাজ করতে পারে, কিন্তু টাইপ ঠিক থাকে।

---

## Generics ছাড়া কি সমস্যা হত?

যদি আমরা `any` ব্যবহার করি তাহলে সব ধরনের data নেওয়া যায়, কিন্তু Type safety নষ্ট হয়ে যায়। এখানে যেকোনো type আসতে পারে, TypeScript কোনো error দেখায় না।


### Example

```ts
function identity(value: any) {
  return value;
}

console.log(identity("Hello"));
console.log(identity(123));
```

## Generics দিয়ে সমাধান

`Generics` ব্যবহার করলে আমরা type safe ভাবে reusable function বানাতে পারি। এখানে T হলো একটা placeholder টাইপ,
রানটাইমে সেটা আসল টাইপ হয়ে যায়।


### Example

```ts
function identity <T>(value: T): T {
  return value;
}

identity<string>("Hello");
identity<number>(123);
```

## Array এর সাথে Generics

এটি যেকোনো array এর জন্য কাজ করবে:

### Example

```ts
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

getFirstElement<number>([1, 2, 3]);
getFirstElement<string>(["a", "b", "c"]);
```

## উপসংহার

একজন নতুন typeScript learner হিসেবে আমি শিখেছি:

- `Generics` দিয়ে আমরা flexible কিন্তু safe কোড লিখতে পারি
- এটা any এর একটি ভালো বিকল্প 
- এটি code reuse এবং maintainability বাড়ায়

তাই TypeScript এ `Generics` শেখা খুবই গুরুত্বপূর্ণ।