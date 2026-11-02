// Online Shopping Offer.

// Task: A customer gets a special offer if: - They spend ₹2,000 or more. - They are either a member OR have a coupon.

let shoppingAmount = 5000;
let isMember = false;
let hasCoupon = true;


console.log(shoppingAmount >= 2000 && (isMember || hasCoupon));