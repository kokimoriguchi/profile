const Contact = () => {
  return (
    <div id="Contact">
      <div className="mb-10 md:mb-16">
        <h1 className="text-focus-in text-black-800 text-4xl font-bold sm:text-5xl md:text-6xl text-center mr-auto pt-4 pb-4">
          Contact
        </h1>

        <p className="mx-auto m-auto max-w-screen-md text-center text-gray-500 md:text-lg">
          if you ask me
        </p>
      </div>
      <form className="mx-auto max-w-screen-md gap-4">
        <div className="">
          <p className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
            Name
          </p>
          <input
            className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring hover:opacity-75"
            type="text"
            name="your-name"
          />
        </div>
        <div className="">
          <p className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
            Email
          </p>
          <input
            className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring hover:opacity-75"
            type="email"
            name="your-email"
          />
        </div>
        <div className="">
          <p className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
            Message
          </p>
          <textarea
            className="h-48 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring hover:opacity-75"
            type="text"
            name="message"
          ></textarea>
        </div>
        <input
          className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
          type="submit"
        ></input>
      </form>
    </div>
  );
};
export default Contact;
