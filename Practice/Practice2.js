const cart = [
  { productId: 101, name: 'Laptop', price: 55000, quantity: 1, category: 'Electronics' },
  { productId: 102, name: 'Mouse', price: 700, quantity: 2, category: 'Accessories' },
  { productId: 103, name: 'Keyboard', price: 1500, quantity: 1, category: 'Accessories' },
  { productId: 104, name: 'Monitor', price: 12000, quantity: 0, category: 'Electronics' },
  { productId: 105, name: 'USB Cable', price: 300, quantity: 3, category: 'Accessories' },
  { productId: 106, name: 'Office Chair', price: 6500, quantity: 1, category: 'Furniture' }
];

const availableProducts = cart.filter(item => item.quantity > 0);

const cartDetails = availableProducts.map(
  ({ name, quantity, price, category }) => ({
    name,
    quantity,
    price,
    category,
    itemTotal: quantity * price
  })
);

const subtotal = cartDetails.reduce(
  (sum, item) => sum + item.itemTotal,
  0
);

const discount = subtotal > 50000 ? subtotal * 0.10 : 0;

const discountedAmount = subtotal - discount;

const gst = discountedAmount * 0.18;

const finalAmount = discountedAmount + gst;

const categoryTotals = cartDetails.reduce((acc, item) => {
  acc[item.category] =
    (acc[item.category] || 0) + item.itemTotal;
  return acc;
}, {});

console.log("ONLINE CART\n");

console.log("Products:");

cartDetails.forEach(item => {
  console.log(
    `${item.name} | Qty: ${item.quantity} | Price: ₹${item.price} | Total: ₹${item.itemTotal}`
  );
});

console.log("\nCategory Wise Totals:");
for (const category in categoryTotals) {
  console.log(`${category}: ₹${categoryTotals[category]}`);
}

console.log(`\nSubtotal: ₹${subtotal}`);
console.log(`Discount (10%): ₹${discount}`);
console.log(`Amount After Discount: ₹${discountedAmount}`);
console.log(`GST (18%): ₹${gst.toFixed(2)}`);
console.log(`Final Payable Amount: ₹${finalAmount.toFixed(2)}`);