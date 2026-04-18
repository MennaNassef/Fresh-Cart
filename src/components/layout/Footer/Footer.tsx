"use client"
import { cn } from '@/lib/utils'
import { FeatureBar2 } from '../Home/FeatureBar'
export default function Footer() {
  
  return (
    <div>
      <FeatureBar2/>
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center bg-white rounded-md w-fit px-4 py-2">
              <img src="/freshcart-logo.49f1b44d.png" alt=""/>
            </div>
            <p className="text-gray-400">FreshCart is your one-stop destination for quality products. From fashion to electronics, we bring you the best brands at competitive prices with a seamless shopping experience.</p>
            <div className="space-y-4 mb-10">
              <a href="#" className="flex items-center gap-2 text-[#99A1AF] hover:text-[#22C55E] text-[16px] transition">
                <svg data-prefix="fas" data-icon="phone" className="w-4 h-4 svg-inline--fa fa-phone text-primary-500" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="#22C55E" d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z" /></svg>
                <span>+1 (800) 123-4567</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-[#99A1AF] hover:text-[#22C55E] text-[16px] transition">
                <svg data-prefix="fas" data-icon="envelope" className="w-4 h-4 svg-inline--fa fa-envelope text-primary-500" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="#22C55E" d="M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z" /></svg>
                <span>support@freshcart.com</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-[#99A1AF] hover:text-[#22C55E] text-[16px] transition">
                <svg data-prefix="fas" data-icon="location-dot" className="w-4 h-4 svg-inline--fa fa-location-dot text-primary-500 mt-0.5" role="img" viewBox="0 0 384 512" aria-hidden="true"><path fill="#22C55E" d="M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" /></svg>
                <span>123 Commerce Street, New York, NY 10001</span>
              </a>
            </div>
            <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 bg-[#1E2939] bg-opacity-10 flex items-center justify-center rounded-full text-[#99A1AF] transition-transform hover:-translate-y-1 hover:bg-[#22C55E] hover:text-white">
                <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 5.02 3.66 9.19 8.44 9.93v-7.02H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.74 8.45-4.91 8.45-9.93z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-[#1E2939] bg-opacity-10 flex items-center justify-center rounded-full text-[#99A1AF] transition-transform hover:-translate-y-1 hover:bg-[#22C55E] hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-[#1E2939] bg-opacity-10 flex items-center justify-center rounded-full text-[#99A1AF] transition-transform hover:-translate-y-1 hover:bg-[#22C55E] hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-[#1E2939] bg-opacity-10 flex items-center justify-center rounded-full text-[#99A1AF] transition-transform hover:-translate-y-1 hover:bg-[#22C55E] hover:text-white">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23.5 6.2a2.9 2.9 0 0 0-2-2C19.8 3.7 12 3.7 12 3.7s-7.8 0-9.5.5a2.9 2.9 0 0 0-2 2A30.3 30.3 0 0 0 0 12a30.3 30.3 0 0 0 .5 5.8 2.9 2.9 0 0 0 2 2c1.7.5 9.5.5 9.5.5s7.8 0 9.5-.5a2.9 2.9 0 0 0 2-2A30.3 30.3 0 0 0 24 12a30.3 30.3 0 0 0-.5-5.8zM9.8 15.5v-7l6.2 3.5-6.2 3.5z"/>
                  </svg>
                </a>
            </div>
          </div>
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Shop</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">All Products</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Categories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Brands</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Electronics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Men's Fashion</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Women's Fashion</a></li>
            </ul>
          </div>
          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Account</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">My Account</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Order History</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Wishlist</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Shopping Cart</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Sign In</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Create Account</a></li>
            </ul>
          </div>
          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Shipping Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Returns & Refunds</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Track Order</a></li>
            </ul>
          </div>
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2026 FreshCart. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="flex items-center gap-2 text-gray-500 hover:text-white text-sm transition">
              <svg data-prefix="fas" data-icon="credit-card" className="w-4 h-4 svg-inline--fa fa-credit-card" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M0 128l0 32 512 0 0-32c0-35.3-28.7-64-64-64L64 64C28.7 64 0 92.7 0 128zm0 80L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-176-512 0zM64 360c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24zm144 0c0-13.3 10.7-24 24-24l64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0c-13.3 0-24-10.7-24-24z" /></svg>
              <span>Visa</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-gray-500 hover:text-white text-sm transition">
              <svg data-prefix="fas" data-icon="credit-card" className="w-4 h-4 svg-inline--fa fa-credit-card" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M0 128l0 32 512 0 0-32c0-35.3-28.7-64-64-64L64 64C28.7 64 0 92.7 0 128zm0 80L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-176-512 0zM64 360c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24zm144 0c0-13.3 10.7-24 24-24l64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0c-13.3 0-24-10.7-24-24z" /></svg>
              <span>Mastercard</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-gray-500 hover:text-white text-sm transition">
              <svg data-prefix="fas" data-icon="credit-card" className="w-4 h-4 svg-inline--fa fa-credit-card" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M0 128l0 32 512 0 0-32c0-35.3-28.7-64-64-64L64 64C28.7 64 0 92.7 0 128zm0 80L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-176-512 0zM64 360c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24zm144 0c0-13.3 10.7-24 24-24l64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0c-13.3 0-24-10.7-24-24z" /></svg>
              <span>PayPal</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
    </div>

  )
}
