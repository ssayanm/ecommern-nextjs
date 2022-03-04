import Social from "./Social";

const CustomForm = ({ heading }) => {
  return (
    <div className="bg-white bg-opacity-95 p-6 rounded shadow  mt-48 md:mt-0">
      <h3 className="text-3xl lg:text-5xl text-pink-600 font-semibold font-display mt-4 mb-4 tracking-wide text-center md:text-left">
        Get Your Free 30 mins Discovery Call
      </h3>

      <form
        action="https://app.getresponse.com/add_subscriber.html"
        accept-charset="utf-8"
        method="post"
      >
        <input
          type="text"
          placeholder="name"
          name="name"
          aria-label="name"
          className="inputbox"
          required
        />

        <input
          type="text"
          placeholder="email"
          name="email"
          aria-label="email"
          className="inputbox"
          required
        />
        <input type="hidden" name="campaign_token" value="j2HDb" />
        <input
          type="hidden"
          name="thankyou_url"
          value="https://www.duecoaching.com/success/"
        />
        <input type="hidden" name="start_day" value="0" />

        <button type="submit" className="btnhero">
          Get it Now
        </button>
      </form>

      <Social />
    </div>
  );
};

export default CustomForm;

{
  /*
<form
        action="https://app.getresponse.com/add_subscriber.html"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        // className="validate"
        target="_blank"
        // novalidate
        method="POST"
      >
        <input
          type="text"
          placeholder="name"
          name="FNAME"
          aria-label="name"
          className="inputbox"
          id="mce-FNAME"
          required
        />

        <input
          type="email"
          placeholder="email"
          name="EMAIL"
          aria-label="email"
          className="inputbox"
          id="mce-EMAIL"
          required
        />
         <input type="hidden" name="campaign_token" value="j2HDb" />
<input type="hidden" name="start_day" value="0" />
        <button type="submit" className="btnhero">
          Get it Now
        </button>
      </form>
*/
}
