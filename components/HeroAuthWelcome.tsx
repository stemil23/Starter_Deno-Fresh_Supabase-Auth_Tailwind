export default function HeroAuthWelcome() {
  return (
    <section className="text-gray-800">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Secure Authentication
            <span className="sm:block">with Deno Fresh & Supabase</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Create robust and secure authenticated user sessions using the power of Deno Fresh and Supabase Auth. Streamline your development process and enhance user experience with our modern authentication solution.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded border border-green-500 bg-green-500 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-green-500 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="#"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded border border-teal-500 px-12 py-3 text-sm font-medium text-teal-500 hover:bg-teal-500 hover:text-white focus:outline-none focus:ring active:bg-teal-600 sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
