import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

const SignIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({});
  const [userContext, setUserContext] = useContext(UserContext);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    fetch('/api/auth/signin', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(async (response) => {
        setIsSubmitting(false);
        if (!response.ok) {
          if (response.status === 400) {
            setError('Please fill out all fields');
          } else if (response.status === 401) {
            setError('Invalid username or password');
          } else {
            setError('Something went wrong');
          }
          setTimeout(() => {
            setError('');
          }, 5000);
        } else {
          const data = await response.json();
          setUserContext((oldValues) => {
            return {
              ...oldValues,
              token: data.token,
            };
          });
        }
      })
      .catch(() => {
        setIsSubmitting(false);
        setError('Something went wrong');
        setTimeout(() => {
          setError('');
        }, 5000);
      });
  };

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
            <form onSubmit={handleSubmit}>
              {error && (
                <div
                  role="alert"
                  className="my-5">
                  <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2 flex content-between">
                    <span>Ooopsie!!</span>
                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                      <svg
                        className="fill-current h-6 w-6 text-black-500"
                        role="button"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20">
                        <title>Close</title>
                        <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                      </svg>
                    </span>
                  </div>
                  <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                    <p>{error}</p>
                  </div>
                </div>
              )}
              <div
                className="relative mb-6"
                data-te-input-wrapper-init>
                <label
                  htmlFor="username"
                  className="block text-neutral-500 mb-2 dark:text-neutral-200">
                  Username
                </label>
                <input
                  type="text"
                  className="peer block min-h-[auto] w-full rounded border border-solid border-neutral-300 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="username"
                  placeholder="Enter your Username"
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </div>

              <div className="mb-6 flex flex-col md:flex-row gap-8 items-center justify-between">
                <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="checkbox"
                    value=""
                    id="exampleCheck3"
                  />
                  <label
                    className="inline-block pl-[0.15rem] hover:cursor-pointer"
                    htmlFor="exampleCheck3">
                    Remember me
                  </label>
                </div>

                <a
                  href="#!"
                  className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">
                  Forgot password?
                </a>
              </div>
              <button
                className="mb-3 flex w-full items-center justify-center rounded bg-google px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-google-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-google-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-google-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] bg-[#4285F4]"
                role="button"
                type="submit"
                disabled={isSubmitting}
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
                {`${isSubmitting ? 'Logging In' : 'Log In'}`}
              </button>
            </form>
            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
              <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                OR
              </p>
            </div>

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
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
