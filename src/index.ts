import { Product } from "./product";

const product = new Product(
  1,
  "圖像 Angular 開發入門 第二版",
  "博碩文化",
  500,
  true,
  new Date(2024, 3, 10),
  undefined
);
console.log(product);

let productId: number;
productId = 1;
console.log("Product Id = " + productId);

const productName = "圖像 Angular 開發入門 第二版";
console.log("Product Name = " + productName);

let isShow = true;
console.log("Is Show = " + isShow);

let createDate = new Date();
console.log("Create Date", createDate);

let modifyDate: Date | undefined = undefined;
console.log("Modify Date", modifyDate);

console.log(product);
console.table(product);
