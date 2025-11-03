import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Checkbox } from '../../components/ui/checkbox'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../components/ui/form'
import { Mail, Lock, Eye, EyeOff, ArrowLeft } from 'lucide-react'
import headerLogo from '../../assets/logo/headerlogo.png'
import toast, { Toaster } from 'react-hot-toast'

const formSchema = z.object({
  email: z.string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Please enter a valid email address' }),
  password: z.string()
    .min(6, { message: 'Password must be at least 6 characters' })
    .max(50, { message: 'Password must not exceed 50 characters' }),
  remember: z.boolean().optional(),
})

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const navigate = useNavigate()

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
  })

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=1200&q=80',
      title: 'Ready to save 3 more hours this week?',
      description: 'Dobhi picks up, cleans, and delivers your clothes to your door.'
    },
    {
      image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=1200&q=80',
      title: 'Dobhi is eco-friendly',
      description: 'Save water, save electricity, eliminate harmful chemicals.'
    },
    {
      image: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=1200&q=80',
      title: 'Quality care for your clothes',
      description: 'Expert cleaning with eco-friendly products for the best results.'
    },
    {
      image: 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=1200&q=80',
      title: 'Convenient doorstep service',
      description: 'Save time with our easy pickup and delivery service.'
    },
    {
      image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=1200&q=80',
      title: 'Trusted by thousands',
      description: 'Join our happy customers enjoying hassle-free laundry.'
    },
    {
      image: 'https://images.unsplash.com/photo-1489274495757-95c7c837b101?w=1200&q=80',
      title: '24-48 hour turnaround',
      description: 'Fast service without compromising on quality.'
    },
    {
      image: 'https://www.artsyltech.com/img/webp/how-real-time-order-tracking-works.webp',
      title: 'Real-time order tracking',
      description: 'Know exactly where your laundry is at all times.'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const onSubmit = (data) => {
    toast.loading('Signing in...')
    setTimeout(() => {
      toast.dismiss()
      toast.success('Successfully logged in!')
      console.log('Login submitted:', data)
    }, 1500)
  }

  return (
    <div className="h-screen flex flex-col lg:flex-row overflow-hidden">
      <Toaster position="top-center" />
      
      {/* Hero Section - Mobile & Tablet Only */}
      <div className="lg:hidden relative h-56 sm:h-64 w-full flex-shrink-0 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-600 rounded-b-[2.5rem] shadow-xl">
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center pt-4">
          {/* Logo */}
          <Link to="/" className="inline-flex mb-4 sm:mb-5">
            <img 
              src={headerLogo} 
              alt="Dobhi Premium Laundry" 
              className="h-10 sm:h-12 w-auto brightness-0 invert"
            />
          </Link>
          
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3 leading-tight">
            Welcome Back!
          </h2>
          <p className="text-sm sm:text-base text-white/90 font-medium max-w-sm px-4">
            Sign in to access your Dobhi account and continue enjoying our services.
          </p>
        </div>
      </div>
      
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-start justify-center px-4 py-0 sm:px-6 md:px-8 lg:p-8 bg-gradient-to-br from-gray-50 to-white overflow-y-auto flex-1 scrollbar-hide">
        <div className="w-full max-w-md lg:mt-0 -mt-12 sm:-mt-16 md:-mt-20 lg:py-8 pb-8">
          <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-7 md:p-8 border border-gray-100">
            {/* Logo */}
            <Link to="/" className="inline-flex mb-3 sm:mb-4">
              <img 
                src={headerLogo} 
                alt="Dobhi Premium Laundry" 
                className="h-7 sm:h-8 md:h-10 lg:h-12 w-auto"
              />
            </Link>

            {/* Heading */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-500 mb-1.5 sm:mb-2">
              Welcome Back!
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-5 md:mb-6 lg:mb-8">Sign in to continue to Dobhi</p>

            {/* Login Form */}
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2.5 sm:space-y-3 md:space-y-4">
                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs sm:text-sm font-semibold text-blue-500">Email Address</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-2.5 sm:left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400 z-10" />
                          <Input
                            placeholder="you@example.com"
                            {...field}
                            className="pl-9 sm:pl-10 py-2 sm:py-2.5 bg-blue-50 border-blue-200 focus:ring-blue-500 text-gray-900 text-sm"
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                {/* Password Field */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs sm:text-sm font-semibold text-blue-500">Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Lock className="absolute left-2.5 sm:left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400 z-10" />
                          <Input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter your password"
                            {...field}
                            className="pl-9 sm:pl-10 pr-10 sm:pr-12 py-2 sm:py-2.5 bg-blue-50 border-blue-200 focus:ring-blue-500 text-gray-900 text-sm"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-2.5 sm:right-3 top-1/2 transform -translate-y-1/2 text-blue-400 hover:text-blue-600 z-10"
                          >
                            {showPassword ? <EyeOff className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between pt-1">
                  <FormField
                    control={form.control}
                    name="remember"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="border-blue-300 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                          />
                        </FormControl>
                        <FormLabel className="text-xs text-gray-600 font-normal cursor-pointer">
                          Remember me
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                  <Link to="/forgot-password" className="text-xs text-blue-500 hover:text-blue-600 font-semibold">
                    Forgot Password?
                  </Link>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 sm:py-2.5 text-sm font-semibold h-9 sm:h-10 rounded-lg mt-2 sm:mt-3"
                >
                  Sign In
                </Button>
              </form>
            </Form>

            {/* Sign Up Link */}
            <div className="text-center mt-3 sm:mt-4">
              <p className="text-gray-600 text-xs sm:text-sm">
                Don't have an account?{' '}
                <Link to="/signup" className="text-blue-500 font-semibold hover:text-blue-600">
                  Sign up
                </Link>
              </p>
            </div>

            {/* Back to Home Link */}
            <div className="text-center mt-2 sm:mt-3">
              <Link to="/" className="inline-flex items-center gap-1 text-blue-500 hover:text-blue-600 text-xs sm:text-sm font-medium transition-colors">
                <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Image Slider */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12 lg:p-16">
                <div className="text-center max-w-2xl px-4">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.8)'}}>
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl lg:text-2xl text-white font-medium" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.8)'}}>
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Dots */}
        <div className="absolute bottom-6 md:bottom-8 lg:bottom-12 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/60 w-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Login
