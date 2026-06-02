import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { registeruserdata } from '../../features/AuthSlice';
import { useForm } from 'react-hook-form';

const Register = () => {
    let {
        handleSubmit,
        register,
        reset,
        formState: { errors, isValid },
    } = useForm({ mode: "onChange" });

    let navigate = useNavigate()
    let dispatch = useDispatch()

    let onsubmit = (data) => {
        dispatch(registeruserdata(data));
        // console.log(data);
        reset();
        alert("Account ban gaya.....");
        navigate("/");
    };
    return (
        <div>
            <div className="min-h-screen bg-[#050714] text-white flex flex-col justify-between font-sans selection:bg-orange-500 selection:text-white antialiased">

                {/* Main Content Container */}
                <main className="w-full max-w-7xl mx-auto px-6 py-12 md:py-20 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* Left Column: Hero Text and Features */}
                    <div className="lg:col-span-6 space-y-8 max-w-xl">
                        <div className="space-y-4">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 bg-[#1A1116] border border-[#361E24] px-4 py-1.5 rounded-full">
                                <span className="text-xs">🎬</span>
                                <span className="text-xs font-bold tracking-widest text-[#FF825C]">CINEVIEW</span>
                            </div>

                            {/* Heading */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
                                Join the Cinema<br />Community
                            </h1>

                            {/* Description */}
                            <p className="text-gray-400 text-base md:text-lg leading-relaxed font-normal">
                                Create an account and unlock a personalized movie experience like no other.
                            </p>
                        </div>

                        {/* Features List */}
                        <div className="space-y-6 pt-2">
                            {/* Feature 1 */}
                            <div className="flex items-start gap-4">
                                <div className="text-2xl mt-0.5">⭐</div>
                                <div>
                                    <h3 className="text-sm font-bold text-white tracking-wide">Personalized Recommendations</h3>
                                    <p className="text-gray-400 text-xs mt-1 leading-normal">Get movie suggestions based on your favorites and watch patterns.</p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex items-start gap-4">
                                <div className="text-2xl mt-0.5">📱</div>
                                <div>
                                    <h3 className="text-sm font-bold text-white tracking-wide">Sync Across Devices</h3>
                                    <p className="text-gray-400 text-xs mt-1 leading-normal">Access your watchlist and favorites from anywhere, anytime.</p>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="flex items-start gap-4">
                                <div className="text-2xl mt-0.5">🎁</div>
                                <div>
                                    <h3 className="text-sm font-bold text-white tracking-wide">Exclusive Features</h3>
                                    <p className="text-gray-400 text-xs mt-1 leading-normal">Enjoy advanced filters, ratings, and curated collections.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Create Account Form Box */}
                    <div className="lg:col-span-6 flex justify-center lg:justify-end">
                        <div className="w-full max-w-[460px] bg-[#0A0D22]/80 border border-slate-900 rounded-[28px] p-8 md:p-10 shadow-2xl backdrop-blur-md">

                            <div className="text-center mb-8">
                                <span className="text-[11px] font-bold tracking-[0.25em] text-[#FF9F68] uppercase block mb-2">Get Started</span>
                                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">Create Account</h2>
                                <p className="text-gray-400 text-xs mt-2 font-medium">Join thousands of movie enthusiasts</p>
                            </div>

                            {/* Form */}
                            <form onSubmit={() => { handleSubmit(onsubmit) }} className="space-y-5">
                                {/* Full Name Input */}
                                <div className="space-y-2">
                                    <label className="block text-xs font-semibold text-gray-300 tracking-wide" htmlFor="name">Full Name</label>
                                    <input
                                        {...register("name", {
                                            required: "Email is required",
                                        })}
                                        type="text"
                                        id="name"
                                        placeholder="Your name"
                                        className="w-full bg-[#121631]/60 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all"
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.name.message}
                                        </p>
                                    )}

                                </div>

                                {/* Email Address Input */}
                                <div className="space-y-2">
                                    <label className="block text-xs font-semibold text-gray-300 tracking-wide" htmlFor="email">Email Address</label>
                                    <input
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^\S+@\S+$/i,
                                                message: "Invalid email",
                                            },
                                        })}
                                        type="email"
                                        id="email"
                                        placeholder="you@example.com"
                                        className="w-full bg-[#121631]/60 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all"
                                    /> {errors.email && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>

                                {/* Password Input */}
                                <div className="space-y-2">
                                    <label className="block text-xs font-semibold text-gray-300 tracking-wide" htmlFor="password">Password</label>
                                    <input
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: {
                                                value: 8,
                                                message: "at least 8 characters",
                                            },
                                        })}
                                        type="password"
                                        id="password"
                                        placeholder="Create a strong password"
                                        className="w-full bg-[#121631]/60 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all"
                                    />{
                                        errors.password && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.password.message}
                                            </p>
                                        )
                                    }
                                </div>

                                {/* Create Account Button */}
                                <button type="submit" className="w-full bg-gradient-to-r from-[#FF5E3A] to-[#FF3D45] text-white font-bold text-sm py-3.5 rounded-full mt-2 transition-transform hover:scale-[1.01] active:scale-[0.99] duration-150 [box-shadow:0_0_15px_rgba(251,84,43,0.4)]">
                                    Create Account
                                </button>
                            </form>

                            {/* Divider */}
                            <div className="relative flex items-center my-6">
                                <div className="flex-grow border-t border-slate-800/80"></div>
                                <span className="flex-shrink mx-4 text-[10px] font-bold tracking-wider text-gray-500 uppercase">Already a member?</span>
                                <div className="flex-grow border-t border-slate-800/80"></div>
                            </div>

                            {/* Sign In Button */}
                            <button onClick={()=>{
                                navigate("/")
                            }} className="w-full bg-transparent border border-[#FF825C]/40 hover:border-[#FF825C] text-[#FF9F68] font-bold text-sm py-3.5 rounded-full transition-colors duration-200">
                                Sign In
                            </button>

                        </div>
                    </div>
                </main>

            </div>
        </div>
    )
}

export default Register