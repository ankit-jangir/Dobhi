import React, { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button } from '../../components/ui/button'
import { Menu, X, User, MapPin, ChevronDown } from 'lucide-react'
import headerLogo from '../../assets/logo/headerlogo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLocationOpen, setIsLocationOpen] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState('Jaipur')
  const locationRef = useRef(null)

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/Service' },
    { name: 'Pricing', path: '/Pricing' },
    { name: 'How It Works', path: '/How-to-work' },
    { name: 'About', path: '/About' },
    { name: 'Contact', path: '/Contact' },
  ]

  const locations = [
    { name: 'Jaipur', state: 'Rajasthan' },
    { name: 'Delhi', state: 'Delhi' },
    { name: 'Mumbai', state: 'Maharashtra' },
    { name: 'Bangalore', state: 'Karnataka' },
    { name: 'Hyderabad', state: 'Telangana' },
    { name: 'Chennai', state: 'Tamil Nadu' },
    { name: 'Kolkata', state: 'West Bengal' },
    { name: 'Pune', state: 'Maharashtra' },
    { name: 'Ahmedabad', state: 'Gujarat' },
    { name: 'Surat', state: 'Gujarat' },
    { name: 'Lucknow', state: 'Uttar Pradesh' },
    { name: 'Kanpur', state: 'Uttar Pradesh' },
  ]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (locationRef.current && !locationRef.current.contains(event.target)) {
        setIsLocationOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLocationSelect = (location) => {
    setSelectedLocation(location)
    setIsLocationOpen(false)
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img 
              src={headerLogo} 
              alt="Dobhi Premium Laundry" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Location Selector - Desktop */}
          <div className="hidden md:block relative" ref={locationRef}>
            <button
              onClick={() => setIsLocationOpen(!isLocationOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-200"
            >
              <MapPin className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-gray-700">{selectedLocation}</span>
              <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isLocationOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Location Dropdown */}
            {isLocationOpen && (
              <div className="absolute top-full mt-2 left-0 w-64 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto z-50">
                <div className="p-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase px-3 py-2">Select Location</p>
                  {locations.map((location) => (
                    <button
                      key={location.name}
                      onClick={() => handleLocationSelect(location.name)}
                      className={`w-full text-left px-3 py-2 rounded-md hover:bg-blue-50 transition-colors ${
                        selectedLocation === location.name ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <div>
                          <p className="text-sm font-medium">{location.name}</p>
                          <p className="text-xs text-gray-500">{location.state}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

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
              {/* Mobile Location Selector */}
              <div className="pb-4 border-b border-gray-200">
                <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Location</p>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {locations.map((location) => (
                    <option key={location.name} value={location.name}>
                      {location.name}, {location.state}
                    </option>
                  ))}
                </select>
              </div>

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
