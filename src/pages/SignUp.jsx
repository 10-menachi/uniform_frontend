const SignUp = () => {
  return (
    <section className="h-screen">
      <div className="container h-full px-6 py-24">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image"
            />
          </div>
          <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
            <form>
              <div
                className="relative mb-6"
                data-te-input-wrapper-init>
                <label
                  htmlFor="fullName"
                  className="block text-neutral-500 mb-2 dark:text-neutral-200">
                  Full Name
                </label>
                <input
                  type="text"
                  className="peer block min-h-[auto] w-full rounded border border-solid border-neutral-300 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="fullName"
                  placeholder="Enter your full name"
                />
              </div>

              <div
                className="relative mb-6"
                data-te-input-wrapper-init>
                <label
                  htmlFor="emailAddress"
                  className="block text-neutral-500 mb-2 dark:text-neutral-200">
                  Email address
                </label>
                <input
                  type="text"
                  className="peer block min-h-[auto] w-full rounded border border-solid border-neutral-300 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="emailAddress"
                  placeholder="Enter your email address"
                />
              </div>

              <div
                className="relative mb-6"
                data-te-input-wrapper-init>
                <label
                  htmlFor="password"
                  className="block text-neutral-500 mb-2 dark:text-neutral-200">
                  Password
                </label>
                <input
                  type="password"
                  className="peer block min-h-[auto] w-full rounded border border-solid border-neutral-300 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>

              <div
                className="relative mb-6"
                data-te-input-wrapper-init>
                <label
                  htmlFor="confirmPassword"
                  className="block text-neutral-500 mb-2 dark:text-neutral-200">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="peer block min-h-[auto] w-full rounded border border-solid border-neutral-300 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                />
              </div>

              <div className="mb-6 flex flex-col md:flex-row gap-8 items-center justify-between"></div>

              {/* OR Divider */}
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                  OR
                </p>
              </div>

              {/* Continue with Google Button */}
              <button
                className="mb-3 flex w-full items-center justify-center rounded bg-google px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-google-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-google-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-google-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] bg-[#4285F4]"
                role="button"
                data-te-ripple-init
                data-te-ripple-color="light">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-3.5 w-3.5"
                  fill="currentColor"
                  viewBox="0 0 48 48">
                  <path
                    fill="#4285F4"
                    d="M23.34 15.67c-.44-.26-.82-.6-1.1-1.02l-2.09.02c-.95 0-1.73-.78-1.73-1.73s.78-1.73 1.73-1.73c.83 0 1.51.61 1.66 1.4h2.65c-.18-.91-.75-1.68-1.55-2.18v-2.33h-1.55v1.84c-.88.5-2 .78-3.13.78-2.4 0-4.47-1.6-5.22-3.84l-2.16.18c-1.23.11-2.37-.17-3.4-.77-.9-.54-1.62-1.25-2.09-2.08-.47-.83-.69-1.72-.65-2.63v-.01c-.04-.92.18-1.82.65-2.65.47-.83 1.19-1.54 2.09-2.08.9-.54 1.96-.81 3.05-.75 1.28.07 2.45.47 3.45 1.18 1.07.69 1.94 1.61 2.47 2.67.34.79.53 1.65.57 2.52v.01c.04.86-.12 1.72-.47 2.54-.36.82-.88 1.57-1.52 2.21v1.34h3.1c1.8-1.67 2.82-4.09 2.82-6.64 0-1.57-.4-3.08-1.11-4.38z"></path>
                </svg>
                Continue with Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
