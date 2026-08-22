const cart = [
  {
    id: 1,
    product_name: "product_1",
    qty: "2",
    price: "1500",
    discount_percentage: "6",
  },
  {
    id: 2,
    product_name: "product_2",
    qty: "1",
    price: "370",
    discount_percentage: "5",
  },
  {
    id: 3,
    product_name: "product_3",
    qty: "7",
    price: "800",
    discount_percentage: "5.5",
  },
  {
    id: 4,
    product_name: "product_4",
    qty: "3",
    price: "8750",
    discount_percentage: "9.75",
  },
];

const items = cart.map((item) => {
  const qty = Number(item.qty);
  const price = Number(item.price);
  const discountPercentage = Number(item.discount_percentage);

  const discountPerItem = price * (discountPercentage / 100);
  const priceAfterDiscount = price - discountPerItem;

  const totalBeforeDiscount = price * qty;
  const totalAfterDiscount = priceAfterDiscount * qty;

  const discountAmount = discountPerItem * qty;

  return {
    ...item,
    price_after_discount: priceAfterDiscount.toFixed(2),
    total_after_discount: totalAfterDiscount.toFixed(2),
    discount_amount: discountAmount.toFixed(2),
  };
});

const totalBeforeDiscount = cart.reduce((total, item) => {
  return total + Number(item.price) * Number(item.qty);
}, 0);

const totalAfterDiscount = items.reduce((total, item) => {
  return total + Number(item.total_after_discount);
}, 0);

const result = {
  items,
  total_before_discount: totalBeforeDiscount.toFixed(2),
  total_after_discount: totalAfterDiscount.toFixed(2),
};

console.log(result);