import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type ContactFormErrors = Partial<
  Record<keyof ContactFormData, string>
>;

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const field = event.target.name as keyof ContactFormData;
    const value = event.target.value;

    setFormData((currentData) => ({
      ...currentData,
      [field]: value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [field]: "",
    }));

    setSubmitted(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: ContactFormErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      nextErrors.phone = "Please enter your phone number.";
    }

    if (!formData.subject.trim()) {
      nextErrors.subject = "Please enter a subject.";
    }

    if (!formData.message.trim()) {
      nextErrors.message = "Please enter a message.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitted(false);
      return;
    }

    const subject = `Portfolio contact: ${formData.subject}`;

    const body = `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}`;

    setErrors({});
    setSubmitted(true);

    window.location.href =
      `mailto:mohammed.amin.yasiin@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="flex flex-1 flex-col items-center border-b-4 border-t-4 border-yellow-400 bg-[#013A63] py-20 text-white">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            Contact Me
          </h1>

          <p className="mt-4 text-lg sm:text-xl lg:text-2xl">
            Feel free to reach out to me via email or social media.
          </p>

          <div className="mt-6 flex flex-col items-center gap-3 text-lg md:flex-row md:justify-center md:gap-6">
            <a
              href="mailto:mohammed.amin.yasiin@gmail.com"
              className="text-yellow-300 hover:text-yellow-400 hover:underline"
            >
              Email
            </a>

            <a
              href="https://github.com/Mohammed-FE2025"
              target="_blank"
              rel="noreferrer"
              className="text-yellow-300 hover:text-yellow-400 hover:underline"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/your-linkedin-username"
              target="_blank"
              rel="noreferrer"
              className="text-yellow-300 hover:text-yellow-400 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto flex w-full max-w-2xl flex-col gap-5 rounded-xl bg-white/10 p-6 text-left"
        >
          <div>
            <label htmlFor="name" className="block font-semibold">
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              aria-invalid={Boolean(errors.name)}
              className="mt-2 w-full rounded-lg border border-black bg-yellow-200 px-4 py-3 text-[#012a4a]"
              placeholder="Your name"
            />

            {errors.name && (
              <p className="mt-1 text-sm text-red-300">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block font-semibold">
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
              className="mt-2 w-full rounded-lg border border-black bg-yellow-200 px-4 py-3 text-[#012a4a]"
              placeholder="Your email"
            />

            {errors.email && (
              <p className="mt-1 text-sm text-red-300">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block font-semibold">
              Phone
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              aria-invalid={Boolean(errors.phone)}
              className="mt-2 w-full rounded-lg border border-black bg-yellow-200 px-4 py-3 text-[#012a4a]"
              placeholder="Your phone number"
            />

            {errors.phone && (
              <p className="mt-1 text-sm text-red-300">{errors.phone}</p>
            )}
          </div>

          <div>
            <label htmlFor="subject" className="block font-semibold">
              Subject
            </label>

            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              aria-invalid={Boolean(errors.subject)}
              className="mt-2 w-full rounded-lg border border-black bg-yellow-200 px-4 py-3 text-[#012a4a]"
              placeholder="Message subject"
            />

            {errors.subject && (
              <p className="mt-1 text-sm text-red-300">{errors.subject}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block font-semibold">
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
              className="mt-2 w-full rounded-lg border border-black bg-yellow-200 px-4 py-3 text-[#012a4a]"
              placeholder="Your message"
            />

            {errors.message && (
              <p className="mt-1 text-sm text-red-300">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="rounded-full bg-yellow-400 px-6 py-3 font-semibold text-[#012a4a] hover:bg-[#012a4a] hover:text-white"
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
        className="mt-6 rounded-full bg-yellow-400 px-6 py-3 font-semibold text-[#012a4a] hover:bg-transparent hover:text-white"
      >
        Back to Home
      </Link>
    </section>
  );
};

export default Contact;