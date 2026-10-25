const cart = [
  {
    id: 1,
    product_name: "product1",
    quanity: "2",
    price: "1500",
    discount_percentage: "6",
  },
  {
    id: 2,
    product_name: "product2",
    quanity: "1",
    price: "370",
    discount_percentage: "5",
  },
  {
    id: 3,
    product_name: "product3",
    quanity: "7",
    price: "800",
    discount_percentage: "5.5",
  },
  {
    id: 4,
    product_name: "product4",
    quanity: "3",
    price: "8750",
    discount_percentage: "9.75",
  },
];

// map goes through every product
// and returns a new object with the calculated values
const items = cart.map((item) => {
  // Convert string values into numbers
  const qnty = Number(item.quanity);
  const price = Number(item.price);
  const discountPercentage = Number(item.discount_percentage);

  // Calculate the discount for ONE product
  const discountAmount = price * (discountPercentage / 100);

  // Calculate the price of ONE product after discount
  const priceAfterDiscount = price - discountAmount;

  // Calculate total price before discount based on quantity
  const totalBeforeDiscount = price * qnty;

  // Calculate total price after discount based on quantity
  const totalAfterDiscount = priceAfterDiscount * qnty;

  // Return a new object with the original data
  // plus the calculated values
  return {
    id: item.id,
    product_name: item.product_name,
    quanity: item.quanity,
    price: item.price,
    price_after_discount: priceAfterDiscount.toFixed(2),
    total_after_discount: totalAfterDiscount.toFixed(2),
    discount_amount: (discountAmount * qnty).toFixed(2),
    total_before_discount: totalBeforeDiscount.toFixed(2)
  };
});

// reduce adds all item totals together
const totalBeforeDiscount = items.reduce(
  (total, item) => total + Number(item.total_before_discount),
  0
);

// reduce adds all discounted totals together
const totalAfterDiscount = items.reduce(
  (total, item) => total + Number(item.total_after_discount),
  0
);

// Create the final object in the expected format
const result = {
  items,
  total_before_discount: totalBeforeDiscount.toFixed(2),
  total_after_discount: totalAfterDiscount.toFixed(2)
};

console.log(result);