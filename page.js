import HeroSection from './components/home/HeroSection'
import FeaturedProducts from './components/home/FeaturedProducts'
import CategorySection from './components/home/CategorySection'
import PromoSection from './components/home/PromoSection'
import TestimonialSection from './components/home/TestimonialSection'
import NewsletterSignup from './components/common/NewsletterSignup'

export default function Home() {
  return (
    <div className="animate-fade-in">
      <HeroSection />
      
      <div className="container-custom py-16">
        <CategorySection />
      </div>
      
      <div className="bg-gray-50 py-16">
        <div className="container-custom">
          <h2 className="section-title text-center mb-10">Featured Products</h2>
          <FeaturedProducts />
        </div>
      </div>
      
      <div className="container-custom py-16">
        <PromoSection />
      </div>
      
      <div className="bg-gray-50 py-16">
        <div className="container-custom">
          <h2 className="section-title text-center mb-10">What Our Customers Say</h2>
          <TestimonialSection />
        </div>
      </div>
      
      <div className="container-custom py-16">
        <NewsletterSignup />
      </div>
    </div>
  )
} 