import React, { useState } from "react";

import CustomPaymentInput from "./CustomPaymentInput";
// import StripeTestCards from "./StripeTestCards";

import getStripe from "../utils/get-stripejs";
import { fetchPostJSON } from "../utils/api-helpers";
import { formatAmountForDisplay } from "../utils/stripe-helpers";
import * as config from "../config";

const DonateForm = () => {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    customPayment: Math.round(config.MAX_AMOUNT / config.AMOUNT_STEP),
  });

  const handleInputChange = (e) =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Create a Checkout Session.
    const response = await fetchPostJSON("/api/checkout_sessions", {
      amount: input.customPayment,
    });

    if (response.statusCode === 500) {
      console.error(response.message);
      return;
    }

    // Redirect to Checkout.
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      // Make the id field from the Checkout Session creation API response
      // available to this file, so you can provide it as parameter here
      // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
      sessionId: response.id,
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    console.log(error.message);
    setLoading(false);
  };

  return (
    <div className="flex flex-wrap justify-center text-center mt-10">
      <form onSubmit={handleSubmit}>
        <CustomPaymentInput
          className="inputcheckbox"
          name={"customPayment"}
          value={input.customPayment}
          min={config.MIN_AMOUNT}
          max={config.MAX_AMOUNT}
          step={config.AMOUNT_STEP}
          currency={config.CURRENCY}
          onChange={handleInputChange}
        />
        <button className="btnpink" type="submit" disabled={loading}>
          Pay {formatAmountForDisplay(input.customPayment, config.CURRENCY)}
        </button>
      </form>
      {/* <StripeTestCards />*/}
    </div>
  );
};

export default DonateForm;
