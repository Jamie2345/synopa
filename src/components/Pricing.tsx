import { MinusIcon } from "@heroicons/react/16/solid";
import { CheckIcon } from "@heroicons/react/16/solid";

export default function Pricing() {
  return (
    <div className="my-24 text-center max-w-5xl">
      <div className="mx-auto mb-10 sm:max-w-lg">
        <h1 className="text-5xl font-bold sm:text-5xl">Pricing</h1>
        <p className="mt-5 text-gray-600 sm:text-lg">
          Whether you're just trying out our service or need more, we've got you
          covered.
        </p>
      </div>
      <div className="pt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="relative rounded-2xl border-2 bg-white shadow-lg border-gray-300">
          <div className="p-8">
            <div className="px-8">
              <h2 className="text-3xl font-semibold my-3">Free</h2>
              <p className="text-sm text-secondary-content">For basic usage</p>
              <p className="text-6xl font-semibold my-5">$0</p>
              <p className="text-sm text-secondary-content">Per month</p>
              <h3 className="my-8 text-md text-secondary-content">
                One summary per day included
              </h3>
            </div>
            <ul className="mt-12 space-y-4 text-md text-secondary-content">
              <li className="flex">
                <CheckIcon className="w-6 h-6 text-secondary mr-5"></CheckIcon>
                <p>Feature 1</p>
              </li>
              <li className="flex">
                <CheckIcon className="w-6 h-6 text-secondary mr-5"></CheckIcon>
                <p>Feature 1</p>
              </li>
              <li className="flex">
                <CheckIcon className="w-6 h-6 text-secondary mr-5"></CheckIcon>
                <p>Feature 1</p>
              </li>
              <li className="flex opacity-60">
                <MinusIcon className="w-6 h-6 text-secondary mr-5"></MinusIcon>
                <p>Feature 1</p>
              </li>
              <li className="flex opacity-60">
                <MinusIcon className="w-6 h-6 text-secondary mr-5"></MinusIcon>
                <p>Feature 1</p>
              </li>
            </ul>
          </div>
          <div className="border-gray-300 border-t-[1px]"></div>
          <div className="p-4">
            <a href="/register" className="btn bg-gray-300 btn-md w-full">Sign Up</a>
          </div>
        </div>
        <div className="relative rounded-2xl border-2 bg-white shadow-lg border-primary">
          <div className="absolute -top-4 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-secondary to-primary px-2 py-2 text-xs font-medium text-white">
            Upgrade now
          </div>
          <div className="p-8">
            <div className="px-8">
              <h2 className="text-3xl font-semibold my-3">Pro</h2>
              <p className="text-sm text-secondary-content">
                For more passionate learners
              </p>
              <p className="text-6xl font-semibold my-5">$8</p>
              <p className="text-sm text-secondary-content">Per month</p>
              <h3 className="my-8 text-md text-secondary-content">
                Unlimited summaries included
              </h3>
            </div>
            <ul className="mt-12 space-y-4 text-md text-secondary-content">
              <li className="flex">
                <CheckIcon className="w-6 h-6 text-secondary mr-5"></CheckIcon>
                <p>Feature 1</p>
              </li>
              <li className="flex">
                <CheckIcon className="w-6 h-6 text-secondary mr-5"></CheckIcon>
                <p>Feature 1</p>
              </li>
              <li className="flex">
                <CheckIcon className="w-6 h-6 text-secondary mr-5"></CheckIcon>
                <p>Feature 1</p>
              </li>
              <li className="flex">
                <CheckIcon className="w-6 h-6 text-secondary mr-5"></CheckIcon>
                <p>Feature 1</p>
              </li>
              <li className="flex">
                <CheckIcon className="w-6 h-6 text-secondary mr-5"></CheckIcon>
                <p>Feature 1</p>
              </li>
            </ul>
          </div>
          <div className="border-gray-300 border-t-[1px]"></div>
          <div className="p-4">
            <a href="/register" className="btn btn-primary btn-md w-full">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
}
