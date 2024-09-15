import React from 'react'

function Footer() {
  return (
    <div>
       <footer className="bg-white px-5 py-12">
        <div className="container  grid grid-cols-3 lg:grid-cols-5 gap-8">
          <div>
            <h3 className="font-semibold text-gray-700 mb-4">Product & Service</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Our Product</li>
              <li>Documentation</li>
              <li>Service</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700 mb-4">Shop Now</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Consumer Product</li>
              <li>Fruits</li>
              <li>Vegetables</li>
              <li>Meat</li>
            </ul>
          </div>
          <div>
                    <h3 className="font-semibold text-gray-700 mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Contact Us</li>
              <li>Online Chat</li>
              <li>Whatsapp</li>
              <li>Telegram</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700 mb-4">Account</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>My Account</li>
              <li>Login / Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700 mb-4">About</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Company Info</li>
              <li>Farm</li>
              <li>Store</li>
              <li>Invest in us</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
