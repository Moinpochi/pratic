"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  Star,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  MessageCircle,
  Scissors,
  Sparkles,
  Crown,
  Users,
} from "lucide-react"

export default function SevenStarSalon() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [activeFilter, setActiveFilter] = useState("all")

  const testimonials = [
    {
      name: "Priya S.",
      text: "The best salon experience I've ever had! My hair has never looked this good.",
      rating: 5,
    },
    {
      name: "Rohit M.",
      text: "They truly live up to the name 7 Star Salon. Luxurious ambience, flawless results.",
      rating: 5,
    },
    { name: "Neha K.", text: "Premium treatments and amazing staff. Worth every rupee.", rating: 5 },
    { name: "Amit P.", text: "Style and comfort like no other salon.", rating: 5 },
  ]

  const galleryImages = [
    { category: "bridal", src: "/bridal-hair-styling-elegant-updo.png", alt: "Bridal Hair Styling" },
    { category: "men", src: "/mens-haircut-modern-fade.png", alt: "Men's Haircut" },
    { category: "coloring", src: "/hair-coloring-balayage-highlights.png", alt: "Hair Coloring" },
    { category: "kids", src: "/kids-haircut-fun-styling.png", alt: "Kids Haircut" },
    { category: "bridal", src: "/bridal-makeup-elegant-look.png", alt: "Bridal Makeup" },
    { category: "men", src: "/mens-beard-styling-grooming.png", alt: "Men's Grooming" },
    { category: "coloring", src: "/global-hair-color-transformation.png", alt: "Global Hair Color" },
    { category: "kids", src: "/kids-fun-hair-styling-colorful.png", alt: "Kids Fun Styling" },
  ]

  const filteredImages =
    activeFilter === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeFilter)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="font-playfair text-2xl font-bold text-foreground">
              7 Star <span className="text-primary">Salon</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="font-montserrat text-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="font-montserrat text-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="font-montserrat text-foreground hover:text-primary transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="font-montserrat text-foreground hover:text-primary transition-colors"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="font-montserrat text-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>
            <Button
              onClick={() => scrollToSection("booking")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-montserrat"
            >
              Book Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center parallax"
        style={{
          backgroundImage:
            "url(/placeholder.svg?height=1080&width=1920&query=luxury hair salon interior elegant black gold)",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white fade-in">
          <h1 className="font-playfair text-6xl md:text-8xl font-bold mb-4">
            7 Star <span className="text-primary">Salon</span>
          </h1>
          <p className="font-montserrat text-xl md:text-2xl mb-8 text-balance">Where Elegance Meets Perfection</p>
          <Button
            onClick={() => scrollToSection("booking")}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-montserrat text-lg px-8 py-4 hover-glow"
          >
            Book Appointment
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="font-playfair text-4xl font-bold mb-6 text-foreground">About Us</h2>
              <p className="font-montserrat text-lg text-muted-foreground leading-relaxed mb-6">
                7 Star Salon is a luxury unisex salon delivering premium styling, treatments, and grooming in a
                sophisticated environment. Our expert stylists ensure every client looks and feels their best.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <Crown className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-montserrat font-semibold">Premium Quality</p>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-montserrat font-semibold">Expert Stylists</p>
                </div>
              </div>
            </div>
            <div className="fade-in">
              <img
                src="/luxury-salon-interior-modern-elegant-design.png"
                alt="Salon Interior"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="font-playfair text-4xl font-bold mb-4 text-foreground">Our Services</h2>
            <p className="font-montserrat text-lg text-muted-foreground">Premium treatments for every style</p>
          </div>

          <div className="grid gap-12">
            {/* Men's Services */}
            <Card className="hover-glow fade-in">
              <CardHeader className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Scissors className="w-8 h-8 text-primary mr-2" />
                  <CardTitle className="font-playfair text-2xl">Men's Services</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border border-border rounded-lg">
                    <h4 className="font-montserrat font-semibold mb-2">Classic Haircut</h4>
                    <p className="text-primary font-bold">₹499</p>
                  </div>
                  <div className="text-center p-4 border border-border rounded-lg">
                    <h4 className="font-montserrat font-semibold mb-2">Beard Trim & Styling</h4>
                    <p className="text-primary font-bold">₹299</p>
                  </div>
                  <div className="text-center p-4 border border-border rounded-lg">
                    <h4 className="font-montserrat font-semibold mb-2">Hair Coloring</h4>
                    <p className="text-primary font-bold">₹1,499</p>
                  </div>
                  <div className="text-center p-4 border border-border rounded-lg">
                    <h4 className="font-montserrat font-semibold mb-2">Hair Spa</h4>
                    <p className="text-primary font-bold">₹999</p>
                  </div>
                  <div className="text-center p-4 border border-border rounded-lg">
                    <h4 className="font-montserrat font-semibold mb-2">Keratin / Smoothening</h4>
                    <p className="text-primary font-bold">₹2,999</p>
                  </div>
                  <div className="text-center p-4 border border-border rounded-lg">
                    <h4 className="font-montserrat font-semibold mb-2">Groom Packages</h4>
                    <p className="text-primary font-bold">₹1,999</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Women's Services */}
            <Card className="hover-glow fade-in">
              <CardHeader className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Sparkles className="w-8 h-8 text-primary mr-2" />
                  <CardTitle className="font-playfair text-2xl">Women's Services</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border border-border rounded-lg">
                    <h4 className="font-montserrat font-semibold mb-2">Haircut & Styling</h4>
                    <p className="text-primary font-bold">₹799</p>
                  </div>
                  <div className="text-center p-4 border border-border rounded-lg">
                    <h4 className="font-montserrat font-semibold mb-2">Global Hair Color</h4>
                    <p className="text-primary font-bold">₹2,499</p>
                  </div>
                  <div className="text-center p-4 border border-border rounded-lg">
                    <h4 className="font-montserrat font-semibold mb-2">Highlights / Balayage</h4>
                    <p className="text-primary font-bold">₹3,499</p>
                  </div>
                  <div className="text-center p-4 border border-border rounded-lg">
                    <h4 className="font-montserrat font-semibold mb-2">Keratin / Smoothening</h4>
                    <p className="text-primary font-bold">₹4,999</p>
                  </div>
                  <div className="text-center p-4 border border-border rounded-lg">
                    <h4 className="font-montserrat font-semibold mb-2">Hair Spa & Treatment</h4>
                    <p className="text-primary font-bold">₹1,299</p>
                  </div>
                  <div className="text-center p-4 border border-border rounded-lg">
                    <h4 className="font-montserrat font-semibold mb-2">Bridal / Party Styling</h4>
                    <p className="text-primary font-bold">₹5,999</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Children's & Premium Services */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover-glow fade-in">
                <CardHeader className="text-center">
                  <CardTitle className="font-playfair text-xl">Children's Services</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-3 border border-border rounded-lg">
                    <span className="font-montserrat">Kids Haircut</span>
                    <span className="text-primary font-bold">₹399</span>
                  </div>
                  <div className="flex justify-between items-center p-3 border border-border rounded-lg">
                    <span className="font-montserrat">Fun Styling</span>
                    <span className="text-primary font-bold">₹799</span>
                  </div>
                  <div className="flex justify-between items-center p-3 border border-border rounded-lg">
                    <span className="font-montserrat">Kids Hair Spa</span>
                    <span className="text-primary font-bold">₹699</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-glow fade-in">
                <CardHeader className="text-center">
                  <CardTitle className="font-playfair text-xl">Premium Services</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-3 border border-border rounded-lg">
                    <span className="font-montserrat">Scalp Treatments</span>
                    <span className="text-primary font-bold">₹1,499</span>
                  </div>
                  <div className="flex justify-between items-center p-3 border border-border rounded-lg">
                    <span className="font-montserrat">Hair Repair Therapy</span>
                    <span className="text-primary font-bold">₹2,499</span>
                  </div>
                  <div className="flex justify-between items-center p-3 border border-border rounded-lg">
                    <span className="font-montserrat">Head Massage</span>
                    <span className="text-primary font-bold">₹799</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="font-playfair text-4xl font-bold mb-4 text-foreground">Our Work</h2>
            <p className="font-montserrat text-lg text-muted-foreground mb-8">Showcasing our artistry</p>

            <div className="flex justify-center space-x-4 mb-8">
              <Button
                variant={activeFilter === "all" ? "default" : "outline"}
                onClick={() => setActiveFilter("all")}
                className="font-montserrat"
              >
                All
              </Button>
              <Button
                variant={activeFilter === "bridal" ? "default" : "outline"}
                onClick={() => setActiveFilter("bridal")}
                className="font-montserrat"
              >
                Bridal
              </Button>
              <Button
                variant={activeFilter === "men" ? "default" : "outline"}
                onClick={() => setActiveFilter("men")}
                className="font-montserrat"
              >
                Men
              </Button>
              <Button
                variant={activeFilter === "coloring" ? "default" : "outline"}
                onClick={() => setActiveFilter("coloring")}
                className="font-montserrat"
              >
                Coloring
              </Button>
              <Button
                variant={activeFilter === "kids" ? "default" : "outline"}
                onClick={() => setActiveFilter("kids")}
                className="font-montserrat"
              >
                Kids
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div key={index} className="group cursor-pointer fade-in">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white font-montserrat text-center">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="font-playfair text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="font-montserrat text-lg text-gray-300">Real experiences from real people</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gray-900 border-primary/20 hover-glow">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-primary fill-current" />
                  ))}
                </div>
                <blockquote className="font-playfair text-2xl mb-6 text-white">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <p className="font-montserrat text-primary font-semibold">— {testimonials[currentTestimonial].name}</p>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-primary" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="font-playfair text-4xl font-bold mb-4 text-foreground">Popular Packages</h2>
            <p className="font-montserrat text-lg text-muted-foreground">Our most requested services</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-glow fade-in border-2 border-primary/20">
              <CardHeader className="text-center">
                <Badge className="mx-auto mb-4 bg-primary text-primary-foreground">Most Popular</Badge>
                <CardTitle className="font-playfair text-2xl">Bridal Package</CardTitle>
                <CardDescription className="font-montserrat">Complete bridal transformation</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-primary mb-4">₹8,999</div>
                <ul className="font-montserrat space-y-2 text-left">
                  <li>• Bridal Hair Styling</li>
                  <li>• Professional Makeup</li>
                  <li>• Hair Spa Treatment</li>
                  <li>• Trial Session Included</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-glow fade-in">
              <CardHeader className="text-center">
                <CardTitle className="font-playfair text-2xl">Men's Grooming</CardTitle>
                <CardDescription className="font-montserrat">Complete gentleman's package</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-primary mb-4">₹1,999</div>
                <ul className="font-montserrat space-y-2 text-left">
                  <li>• Premium Haircut</li>
                  <li>• Beard Styling</li>
                  <li>• Hair Spa</li>
                  <li>• Head Massage</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-glow fade-in">
              <CardHeader className="text-center">
                <CardTitle className="font-playfair text-2xl">Keratin Treatment</CardTitle>
                <CardDescription className="font-montserrat">Smooth, silky hair transformation</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-primary mb-4">₹4,999</div>
                <ul className="font-montserrat space-y-2 text-left">
                  <li>• Premium Keratin Treatment</li>
                  <li>• Hair Wash & Conditioning</li>
                  <li>• Styling & Finishing</li>
                  <li>• 6-Month Guarantee</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 fade-in">
              <h2 className="font-playfair text-4xl font-bold mb-4 text-foreground">Book Your Appointment</h2>
              <p className="font-montserrat text-lg text-muted-foreground">Experience luxury like never before</p>
            </div>

            <Card className="hover-glow fade-in">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="font-montserrat">
                        Full Name
                      </Label>
                      <Input id="name" placeholder="Enter your name" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="font-montserrat">
                        Phone Number
                      </Label>
                      <Input id="phone" placeholder="+91 99999 99999" className="mt-2" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="font-montserrat">
                      Email Address
                    </Label>
                    <Input id="email" type="email" placeholder="your@email.com" className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="service" className="font-montserrat">
                      Select Service
                    </Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Choose a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="haircut-men">Men's Haircut</SelectItem>
                        <SelectItem value="haircut-women">Women's Haircut</SelectItem>
                        <SelectItem value="coloring">Hair Coloring</SelectItem>
                        <SelectItem value="keratin">Keratin Treatment</SelectItem>
                        <SelectItem value="bridal">Bridal Package</SelectItem>
                        <SelectItem value="spa">Hair Spa</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="date" className="font-montserrat">
                        Preferred Date
                      </Label>
                      <Input id="date" type="date" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="time" className="font-montserrat">
                        Preferred Time
                      </Label>
                      <Select>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10:00">10:00 AM</SelectItem>
                          <SelectItem value="11:00">11:00 AM</SelectItem>
                          <SelectItem value="12:00">12:00 PM</SelectItem>
                          <SelectItem value="14:00">2:00 PM</SelectItem>
                          <SelectItem value="15:00">3:00 PM</SelectItem>
                          <SelectItem value="16:00">4:00 PM</SelectItem>
                          <SelectItem value="17:00">5:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="font-montserrat">
                      Special Requests
                    </Label>
                    <Textarea id="message" placeholder="Any special requests or notes..." className="mt-2" rows={4} />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-montserrat hover-glow"
                  >
                    Book Appointment
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="font-playfair text-4xl font-bold mb-4 text-foreground">Get In Touch</h2>
            <p className="font-montserrat text-lg text-muted-foreground">Visit us or reach out anytime</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="fade-in">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <div>
                    <h4 className="font-montserrat font-semibold">Phone</h4>
                    <p className="text-muted-foreground">+91 99092 28082</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <div>
                    <h4 className="font-montserrat font-semibold">Email</h4>
                    <p className="text-muted-foreground">info@7starsalon.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <div>
                    <h4 className="font-montserrat font-semibold">Address</h4>
                    <p className="text-muted-foreground">123 Luxury Street, Your City, India</p>
                  </div>
                </div>

                <div className="pt-8">
                  <h4 className="font-montserrat font-semibold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="icon" className="hover-glow bg-transparent">
                      <Instagram className="w-5 h-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="hover-glow bg-transparent">
                      <Facebook className="w-5 h-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="hover-glow bg-transparent">
                      <MessageCircle className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="fade-in">
              <div className="bg-muted rounded-lg p-4 h-96 flex items-center justify-center">
                <p className="font-montserrat text-muted-foreground">Google Maps Integration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-playfair text-2xl font-bold mb-4">
                7 Star <span className="text-primary">Salon</span>
              </h3>
              <p className="font-montserrat text-gray-300">
                Where elegance meets perfection. Experience luxury like never before.
              </p>
            </div>

            <div>
              <h4 className="font-montserrat font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection("services")}
                  className="block font-montserrat text-gray-300 hover:text-primary transition-colors"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("booking")}
                  className="block font-montserrat text-gray-300 hover:text-primary transition-colors"
                >
                  Booking
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block font-montserrat text-gray-300 hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-montserrat font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 font-montserrat text-gray-300">
                <p>+91 99092 28082</p>
                <p>info@7starsalon.com</p>
                <p>123 Luxury Street, Your City</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="font-montserrat text-gray-300">Copyright © 2025 7 Star Salon. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
