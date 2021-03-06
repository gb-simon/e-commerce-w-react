function Heading() {
  return (
    <div>
      <h1 className="mt-8 flex justify-center text-5xl">e-commerce</h1>
      <div class="bg-white">
        <header>
          <div class="container mx-auto px-6 py-3">
            <div class="flex items-center justify-between">
              <div class="hidden w-full text-gray-600 md:flex md:items-center">
                <svg
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z"
                    fill="currentColor"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z"
                    fill="currentColor"
                  />
                </svg>
                <span class="mx-1 text-sm">Argentina</span>
              </div>
              <div class="w-full text-gray-700 md:text-center text-3xl font-semibold">
                Brand
              </div>
              <div class="flex items-center justify-end w-full">
                <button class="text-gray-600 focus:outline-none mx-4 sm:mx-0"></button>

                <div class="flex sm:hidden">
                  <button
                    type="button"
                    class="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                    aria-label="toggle menu"
                  ></button>
                </div>
              </div>
            </div>
            <nav class="sm:flex sm:justify-center sm:items-center mt-4">
              <div class="flex flex-col sm:flex-row">
                <a
                  class="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
                  href="#"
                >
                  Home
                </a>
                <a
                  class="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
                  href="#"
                >
                  Shop
                </a>
                <a
                  class="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
                  href="#"
                >
                  Categories
                </a>
                <a
                  class="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
                  href="#"
                >
                  Contact
                </a>
                <a
                  class="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
                  href="#"
                >
                  About
                </a>
              </div>
            </nav>
            <div class="relative mt-6 max-w-lg mx-auto">
              <span class="absolute inset-y-0 left-0 pl-3 flex items-center"></span>

              <input
                class="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
        </header>
        <div class="mt-8">
          <form class="flex items-center justify-center">
            <input
              class="form-input w-48"
              type="text"
              placeholder="Add promocode"
            />
            <button class="ml-3 flex items-center px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              <span>Apply</span>
            </button>
          </form>
        </div>
        <a class="flex items-center justify-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
          <span>Check our products!</span>
        </a>
      </div>
    </div>
  );
}

export default Heading;
