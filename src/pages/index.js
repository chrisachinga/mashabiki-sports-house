import { useState } from "react";
import Head from "next/head";
import { Client, Databases, ID } from "appwrite";

// Initialize Appwrite client
const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Your Appwrite endpoint
  .setProject("6798994c001f693ad0dd"); // Your project ID

const databases = new Databases(client);

export default function Home() {
  const year = new Date().getFullYear();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // Store data in Appwrite
      await databases.createDocument(
        "67989982001e649b5ff5",
        "67989aaa002fe7701730",
        ID.unique(),
        {
          name,
          email,
        }
      );

      setMessage("Thank you for joining the waitlist!");
      setName("");
      setEmail("");
    } catch (error) {
      setMessage("Failed to submit. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Mashabiki Sports House</title>
    </Head>
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <main
        id="content"
        className="relative max-w-3xl px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center mx-auto size-full"
      >
        <div className="text-center py-8 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl text-[#001F94] sm:text-4xl">
            Get notified when we launch
          </h1>
          <h2 className="mt-1 sm:mt-3 text-4xl font-bold text-[#001F94] sm:text-6xl">
            <span className="bg-clip-text bg-gradient-to-tr from-[#00988A] to-[#001F94] text-transparent">
              Mashabiki Sports House
            </span>
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mt-8 space-y-4">
              <div>
                <label
                  htmlFor="hs-cover-with-gradient-form-name-1"
                  className="sr-only"
                >
                  Full name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="hs-cover-with-gradient-form-name-1"
                    className="py-3 ps-11 pe-4 block w-full bg-gray-100 border-gray-200 text-gray-900 placeholder:text-gray-400 rounded-lg text-sm focus:border-[#00988A] focus:ring-[#00988A] sm:p-4 sm:ps-11"
                    placeholder="Full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                    <svg
                      className="shrink-0 size-4 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx={12} cy={7} r={4} />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor="hs-cover-with-gradient-form-email-1"
                  className="sr-only"
                >
                  Email address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="hs-cover-with-gradient-form-email-1"
                    className="py-3 ps-11 pe-4 block w-full bg-gray-100 border-gray-200 text-gray-900 placeholder:text-gray-400 rounded-lg text-sm focus:border-[#00988A] focus:ring-[#00988A] sm:p-4 sm:ps-11"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                    <svg
                      className="shrink-0 size-4 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width={20} height={16} x={2} y={4} rx={2} />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="grid">
                <button
                  type="submit"
                  className="sm:p-4 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#00988A] text-white hover:bg-[#007F6E] focus:outline-none focus:bg-[#007F6E] disabled:opacity-50 disabled:pointer-events-none"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Join the waitlist"}
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
              {message && (
                <p className="text-sm text-[#00988A] mt-2">{message}</p>
              )}
            </div>
          </form>
        </div>
      </main>
      <footer className="absolute bottom-0 inset-x-0 text-center py-5">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500">
            © {year} Mashabiki Sports House. Crafted by{" "}
            <a
              className="text-[#00988A] font-medium hover:text-[#007F6E] focus:outline-none focus:text-[#007F6E]"
              href="https://www.chrisdevcode.co.ke/"
            >
              ChrisDevCode
            </a>
          </p>
        </div>
      </footer>
    </div>
    </>
  );
}