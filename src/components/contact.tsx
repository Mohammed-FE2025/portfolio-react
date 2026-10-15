import { Link } from "react-router-dom";
import { useState } from "react";

const Contact = () => {

  const [submitted, setSubmitted] = useState(false);

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  const subject = `Portfolio contact from ${name}`;
  const body = `Name: ${name}
Email: ${email}

Message:
${message}`;

  window.location.href =
    `mailto:mohammed.amin.yasiin@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  setSubmitted(true);
};
  return (
    <section className="flex flex-1 items-center bg-[#013A63] text-white py-20 flex-col border-b-4 border-yellow-400 border-t-4 border-yellow-400 ">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            Contact Me
          </h1>
          <p className="mt-4 text-lg sm:text-xl lg:text-2xl">
            Feel free to reach out to me via email or social media.
          </p>
        </div>
        <form
  onSubmit={handleSubmit}
  className="mt-10 mx-auto flex w-full max-w-2xl flex-col gap-5 rounded-xl bg-white/10 p-6 text-left"
>
  <div>
    <label htmlFor="name" className="block font-semibold">
      Name
    </label>
    <input
      id="name"
      name="name"
      type="text"
      required
      className="mt-2 w-full rounded-lg px-4 py-3 text-[#012a4a] bg-yellow-200 border border-black" 
      placeholder="Your name"
    />
  </div>

  <div>
    <label htmlFor="email" className="block font-semibold">
      Email
    </label>
    <input
      id="email"
      name="email"
      type="email"
      required
      className="mt-2 w-full rounded-lg px-4 py-3 text-[#012a4a] bg-yellow-200 border border-black"
      placeholder="Your email"
    />
  </div>

  <div>
    <label htmlFor="message" className="block font-semibold">
      Message
    </label>
    <textarea
      id="message"
      name="message"
      rows={6}
      required
      className="mt-2 w-full rounded-lg px-4 py-3 text-[#012a4a] bg-yellow-200 border border-black"
    />
  </div>

  <button
    type="submit"
    className="rounded-full bg-gray-400 px-6 py-3 font-semibold text-[#012a4a] hover:bg-[#012a4a] hover:text-white"
  >
    Send Message
  </button>

  {submitted && (
    <p className="text-center text-yellow-300">
      Your email app should now be opening.
    </p>
  )}
</form>
      </div>
      <Link
        to="/"
        className="mt-6 rounded-full bg-yellow-400 px-6 py-3 font-semibold text-[#012a4a] hover:bg-[transparent] hover:text-white "
      >
        Back to Home
      </Link>
    </section>
  );
};

export default Contact;