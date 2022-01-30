import Head from 'next/head'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useEffect } from 'react'

export default function Home() {
  const { data: session, status } = useSession()

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-black"
      style={{
        backgroundImage:
          'linear-gradient(rgb(0 0 0 / 60%), rgba(0 0 0 / 60%)), url(https://assets.nflxext.com/ffe/siteui/vlv3/8f3e38a9-1c2c-4818-99b5-2d9bdff9ad1d/a21bd7f3-5ecb-422c-b6c3-29b767631049/GB-en-20220124-popsignuptwoweeks-perspective_alpha_website_small.jpg)',
      }}
    >
      <Head>
        <title>Netflix Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex w-full justify-between px-12 py-8">
        <div>
          <svg
            height="677"
            viewBox="0.238 0.034 919.406 248.488"
            width="2500"
            xmlns="http://www.w3.org/2000/svg"
            className="w-28 h-10"
          >
            <path
              d="m870.46 118.314 49.184 130.208c-14.495-2.07-28.982-4.663-43.733-6.999l-27.707-71.945-28.468 66.006c-13.973-2.336-27.698-3.114-41.672-4.928l49.955-113.89L782.71.034h41.937l25.362 65.22L877.194.034h42.442zM749.596.034h-38.052v225.71c12.425.779 25.362 1.292 38.052 2.841zm-70.927 223.118c-34.68-2.328-69.37-4.39-104.829-5.177V.035h38.823v181.188c22.264.514 44.52 2.32 66.006 3.355zM532.417 88.305v38.822h-53.06v88.263h-38.3V.034H549.77v38.822h-70.405v49.45h53.06zM375.82 38.856v178.605c-12.946 0-26.14 0-38.83.514V38.856h-40.122V.034H416.19v38.822zM254.94 129.19c-17.08 0-37.274 0-51.769.787v57.715c22.778-1.557 45.556-3.363 68.59-4.141v37.273l-107.412 8.548V.034h107.405v38.822H203.17v52.29c15.017 0 38.052-.778 51.768-.778v38.83zM39.831 107.447V243.08c-13.965 1.557-26.398 3.371-39.593 5.442V.034h37.017L87.724 141.11V.034h38.83V232.47c-13.717 2.336-27.698 3.114-42.45 5.177z"
              fill="#e50914"
            />
          </svg>
        </div>
        <div>
          {session ? (
            <button
              className="flex items-center rounded bg-[#e50914] px-4 py-2 text-sm text-white"
              onClick={() => signOut()}
            >
              Sign out
            </button>
          ) : (
            <button
              className="flex items-center rounded bg-[#e50914] px-4 py-2 text-sm text-white"
              onClick={() => signIn()}
            >
              Sign in
            </button>
          )}
        </div>
      </header>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="max-w-lg text-5xl font-bold text-white">
          Unlimited movies, TV shows, and more.
        </h1>
        <h2 className="mt-4 mb-8 text-2xl text-white">
          Watch anywhere. Cancel anytime.
        </h2>
        <p className="text-lg text-white">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="mt-4 flex">
          <input
            placeholder="Email address"
            className="min-w-[400px] bg-white p-4"
          />
          <button
            className="flex items-center bg-red-600 px-8 text-xl text-white"
            onClick={() => signIn()}
          >
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </main>
    </div>
  )
}
