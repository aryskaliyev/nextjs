import Link from "next/link"

const NotFound = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-xl text-gray-500">Sorry, the page you are looking for does not exist.</p>
      <p className="text-sm text-gray-500 mt-6">
        Back to our{" "}
        <Link className="text-blue-500 hover:underline" href="/">
          Home Page
        </Link>
      </p>
    </main>
  )
};

export default NotFound;