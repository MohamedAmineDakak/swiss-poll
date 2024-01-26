import { XCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import BaseLayoutUnauthorized from "../../components/layout/BaseLayoutUnauthorized";
import { forgotPassword } from "../../lib/users";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await forgotPassword(e.target.elements.email.value);

      router.push("/auth/forgot-password-email-sent");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <BaseLayoutUnauthorized title="Forgot password">
      <div className="flex min-h-screen bg-ui-gray-light">
        <div className="flex flex-col justify-center flex-1 px-4 py-12 mx-auto sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          {error && (
            <div className="absolute p-4 rounded-md top-10 bg-ui-green-50">
              <div className="flex">
                <div className="flex-shrink-0">
                  <XCircleIcon
                    className="w-5 h-5 text-ui-green-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-ui-green-800">
                    An error occurred when resetting your password
                  </h3>
                  <div className="mt-2 text-sm text-ui-green-700">
                    <p className="space-y-1 whitespace-pre-wrap">{error}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="w-full max-w-sm p-8 mx-auto bg-white rounded-xl shadow-cont lg:w-96">
            <div>
              <Image
                src="/img/snoopforms-logo.svg"
                alt="snoopForms logo"
                width={500}
                height={89}
              />
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-ui-gray-dark"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full px-3 py-2 border rounded-md shadow-sm appearance-none placeholder-ui-gray-medium border-ui-gray-medium focus:outline-none focus:ring-ui-green-500 focus:border-ui-green-500 sm:text-sm ph-no-capture"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-ui-green hover:bg-ui-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ui-green-500"
                    >
                      Send password reset email
                    </button>
                    <div className="mt-3 text-center">
                      <Link href="/auth/signin">
                        <a
                          href=""
                          className="text-xs text-ui-green hover:text-ui-green-600 block"
                        >
                          Back to login
                        </a>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayoutUnauthorized>
  );
}
