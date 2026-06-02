import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Login Successful");
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5 border-b border-gray-800">
        <div className="flex items-center gap-3 bg-gradient-to-r from-orange-500 to-pink-500 px-5 py-3 rounded-full">
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center font-bold">
            CV
          </div>
          <h1 className="font-bold text-2xl tracking-widest">CINEVIEW</h1>
        </div>

        <div className="hidden md:flex gap-10">
          <a href="/">Home</a>
          <a href="/">Favorites</a>
          <a href="/">Profile</a>
        </div>

        <div className="flex gap-4">
          <button className="w-12 h-12 rounded-full border border-gray-700">
            🔍
          </button>

          <button className="px-6 py-2 border border-orange-500 rounded-full">
            Sign In
          </button>

          <button className="px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-[90%] mx-auto mt-6 rounded-[40px] border border-gray-800 bg-[#03081f] p-16">
        <div className="inline-block border border-orange-700 rounded-full px-8 py-3 text-orange-400 tracking-[5px] mb-8">
          FEATURED TOP TRENDING
        </div>

        <h1 className="text-6xl md:text-8xl font-extrabold leading-tight">
          CINEMATIC STORIES,
          <br />
          LIVE NOW
        </h1>

        <p className="mt-8 text-gray-300 text-lg max-w-3xl">
          Explore the latest blockbusters, save favorites, and watch trailers
          in a cinematic experience.
        </p>

        <div className="flex gap-5 mt-10">
          <button className="bg-gray-800 px-8 py-4 rounded-full">
            ▶ Watch Trailer
          </button>

          <button className="bg-gray-900 px-8 py-4 rounded-full">
            Sign in to save
          </button>
        </div>
      </section>

      {/* Trending */}
      <section className="w-[90%] mx-auto mt-16">
        <div className="flex justify-between">
          <div>
            <h2 className="text-4xl font-bold">Trending This Week</h2>
            <p className="text-gray-400">
              Browse the movies people are watching around the globe.
            </p>
          </div>

          <span className="text-gray-500">Updated daily</span>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((movie) => (
            <div
              key={movie}
              className="h-64 rounded-3xl bg-gray-900 border border-gray-800 flex items-center justify-center"
            >
              Movie {movie}
            </div>
          ))}
        </div>
      </section>

      {/* Popular Picks */}
      <section className="w-[90%] mx-auto mt-16">
        <h2 className="text-4xl font-bold">Popular Picks</h2>
        <p className="text-gray-400">
          Catch up with today's most popular titles.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[5, 6, 7, 8].map((movie) => (
            <div
              key={movie}
              className="h-64 rounded-3xl bg-gray-900 border border-gray-800 flex items-center justify-center"
            >
              Movie {movie}
            </div>
          ))}
        </div>
      </section>

      {/* Login Form using React Hook Form
      <section className="w-[90%] mx-auto mt-20 pb-20">
        <div className="max-w-md mx-auto bg-gray-900 p-8 rounded-3xl border border-gray-800">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Login Form
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
              })}
              className="w-full p-4 rounded-xl bg-gray-800 mb-2"
            />

            {errors.email && (
              <p className="text-red-500 text-sm mb-4">
                {errors.email.message}
              </p>
            )}

            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
              })}
              className="w-full p-4 rounded-xl bg-gray-800 mb-2"
            />

            {errors.password && (
              <p className="text-red-500 text-sm mb-4">
                {errors.password.message}
              </p>
            )}

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 font-semibold"
            >
              Login
            </button>
          </form>
        </div>
      </section> */}
    </div>
  );
};

export default App;