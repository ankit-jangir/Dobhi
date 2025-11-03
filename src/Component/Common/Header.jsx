import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button } from '../../components/ui/button'
import { Menu, X, User } from 'lucide-react'
import headerLogo from '../../assets/logo/headerlogo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/Service' },
    { name: 'Pricing', path: '/Pricing' },
    { name: 'How It Works', path: '/How-to-work' },
    { name: 'About', path: '/About' },
    { name: 'Contact', path: '/Contact' },
  ]

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={headerLogo} 
              alt="Dobhi Premium Laundry" 
              className="h-30 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-blue-500 ${
                    isActive ? 'text-gray-900' : 'text-gray-600'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-4">
            <User className="w-5 h-5 text-gray-600 " />
            <Link to="/login" className="text-sm font-medium text-gray-600 hover:text-blue-500 transition-colors">
              Login
            </Link>
            <Link to="/signup">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors hover:text-blue-500 ${
                      isActive ? 'text-gray-900' : 'text-gray-600'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <Link to="/login" className="flex-1">
                  <Button variant="outline" className="w-full">
                    Login
                  </Button>
                </Link>
                <Link to="/signup" className="flex-1">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
