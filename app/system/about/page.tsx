"use client";
import { cn } from "@/lib/utils";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Navbar from "@/components/ui/NavBar";
import HyperText from "@/components/ui/HyperText";
import Footer from "@/components/Footer";
import { testimonialAbout, serviceAbout } from "@/data";

gsap.registerPlugin(ScrollTrigger);



const AboutPage = () => {
  const aboutRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !heroRef.current ||
      !aboutRef.current ||
      !testimonialsRef.current ||
      !servicesRef.current
    )
      return;

    const animateHeroElements = (elements: NodeListOf<Element>) => {
      if (!elements || elements.length === 0) return; // Add this check
      gsap.from(elements, {
        opacity: 1,
        y: 20,
        duration: 1,
        stagger: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: elements[0].parentElement,
          start: "20% center",
          toggleActions: "play pause reverse reset",
        },
      });
    };

    animateHeroElements(heroRef.current.querySelectorAll(".animate-hero"));
    animateHeroElements(aboutRef.current.querySelectorAll(".animate-hero"));

    const animateSection = (section: HTMLElement, y: number = 50) => {
      gsap.from(section, {
        y,
        opacity: 1,
        duration: 0.1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 40%",
          toggleActions: "play none none reverse",
        },
      });
    };

    animateSection(testimonialsRef.current);
    animateSection(servicesRef.current);

    gsap.utils.toArray("section > *").forEach((elem: any) => {
      gsap.from(elem, {
        opacity: 1,
        y: 30,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: elem,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  return (
    <div className="text-black">
      <main
        style={{
          // backgroundColor: "#E1E8D6"
          backgroundColor: "#BDCED4",
        }}
      >
        <div id="smooth-wrapper" className="text-black">
          <Navbar />
          <div id="smooth-content">
            {/* Hero Section */}
            <section
              ref={heroRef}
              className="relative h-screen flex items-center justify-center overflow-hidden"
            >
              <video
                autoPlay
                loop
                muted
                className="absolute w-full h-full object-cover"
              >
                <source src="/aboutBG.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 opacity-50"></div>
              <div className="relative z-10 text-center">
                <HyperText
                  className="animate-hero text-5xl md:text-7xl font-bold mb-4"
                  text="Sangeeta Systems"
                />
                <p className="animate-hero text-xl md:text-2xl mb-8">
                  Innovative IT solutions driving global business success.
                </p>
                <button className="animate-hero bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-full transition duration-300">
                  Get Started
                </button>
              </div>
            </section>
          </div>
        </div>

        <section
          ref={aboutRef}
          className="mb-16 pt-8 px-4 md:px-8 from-gray-50 to-gray-100"
        >
          <motion.h2
            initial={{ opacity: 1, y: 50 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.5 }}
            // whileHover={{ opacity: 1  }}
            // transition={{ type: "keyframes" }}
            className="text-4xl font-bold mb-12 text-center text-gray-800"
          >
            About Our IT Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 1, y: 50 }}
            // whileInView={{ opacity: 1, y: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-20 text-center  text-black max-w-3xl mx-auto"
          >
            We deliver exceptional IT infrastructure and software services
            across India, prioritizing lasting relationships through superior
            technological guidance.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-12 max-w-6xl mx-auto">
            {["What We Do", "How We Do It"].map((title, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                className="p-8 rounded-lg shadow-lg"
                style={{
                  //  backgroundColor: "#c1c7b8"
                  // backgroundColor: "#D1DBD5",
                  backgroundColor: "#A9B9CB",
                }}
              >
                <motion.h3
                  className="text-2xl font-semibold mb-6 text-black"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {title}
                </motion.h3>
                <motion.p
                  className="text-lg text-gray-700"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {index === 0
                    ? "We deliver innovative tech services and IT consultancy for businesses of all sizes, using our expertise to tackle complex challenges and drive success."
                    : "Our partnership approach fosters collaboration and builds trust, ensuring exceptional delivery rooted in our core values and commitment to excellence."}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </section>

        <section ref={servicesRef} className=" px-4 mx-16 mb-16 md:px-8">
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceAbout.map((services, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md"
                // style={{ backgroundColor: "#c1c7b8" }}
                // style={{ backgroundColor: "#D1DBD5" }}
                style={{ backgroundColor: "#A9B9CB" }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={services.image}
                  alt={services.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {services.title}
                  </h3>
                  <p className="text-gray-900">{services.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section
          ref={testimonialsRef}
          className="mb-16 mx-16 pb-2 pt-20 px-4 md:px-8"
        >
          <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialAbout.map((testimonials, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-lg shadow-md"
                // style={{ backgroundColor: "#c1c7b8" }}
                // style={{ backgroundColor: "#D1DBD5" }}
                style={{ backgroundColor: "#A9B9CB" }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-gray-900 mb-4">
                  &ldquo;{testimonials.quote}&rdquo;
                </p>
                <p className="font-semibold">{testimonials.name}</p>
                <p className="text-sm text-gray-500">{testimonials.title}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default AboutPage;


