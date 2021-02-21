import React, { useState, useEffect } from "react";





const Payment = ({ room, night }) => {
  console.log(window)
  return (
    <div></div>
  )
  // const stripeToken = "pk_test_51HRFuZHt5cjb9PVzBZ6OQ7nUtwkYJ1sowlw7kcof8eKWPcKiWT7X1gt3ZjxtaOIyTaUEWXQVJBk7OAAYeMnuC8df00bUimrTLA";
  // const [stripe, setStripe] = useState(null);
  // useEffect(() => {
  //   if (window.Stripe) setStripe(window.Stripe(stripeToken));
  // }, [stripeToken]);

  // function checkout() {
  //   stripe.redirectToCheckout({
  //     lineItems: [{ price: room.stripe, quantity: night }],
  //     mode: "payment",
  //     successUrl: "http://localhost:3000/success",
  //     cancelUrl: "http://localhost:3000/canceled",
  //   });
  // }

  // return <div style={{width:'30%'}} className="btn" onClick={checkout}>Zapłać kartą</div>

}

export default Payment;