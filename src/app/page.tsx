"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="mediumLarge"
        sizing="mediumSizeLargeTitles"
        background="floatingGradient"
        cardStyle="soft-shadow"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Games",
          id: "games",
        },
        {
          name: "Community",
          id: "community",
        },
      ]}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C4kmKEUQIDYX1gzW6F8WkxPlcT/uploaded-1775839331625-5uswmgnw.png"
      brandName="Hàlo games"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      title="Drawing smiles on your face."
      description="We are Hàlo games, a premier Roblox development studio crafting the next generation of fashion and runway experiences for millions of players."
      testimonials={[
        {
          name: "Alex P.",
          handle: "@showoff_pro",
          testimonial: "The best runway game on Roblox ever!",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C4kmKEUQIDYX1gzW6F8WkxPlcT/uploaded-1775839331625-5uswmgnw.png",
          imageAlt: "User provided image",
        },
        {
          name: "Jamie L.",
          handle: "@fashionqueen",
          testimonial: "Can't wait for Makeup Stars to drop!",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C4kmKEUQIDYX1gzW6F8WkxPlcT/uploaded-1775839331625-ktwug3ih.png?_wi=1",
          imageAlt: "User provided image",
        },
        {
          name: "Sam R.",
          handle: "@roblox_dev",
          testimonial: "Hàlo games always delivers perfection.",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C4kmKEUQIDYX1gzW6F8WkxPlcT/uploaded-1775839331625-70df7kfk.png?_wi=1",
          imageAlt: "User provided image",
        },
        {
          name: "Taylor B.",
          handle: "@runway_king",
          testimonial: "Amazing graphics and gameplay loop.",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C4kmKEUQIDYX1gzW6F8WkxPlcT/an-ethereal-nebula-inspired-background-w-1775839360199-e44a393f.png?_wi=1",
          imageAlt: "An ethereal nebula-inspired background with subtle purple and blue gradient light rays. A clean, mod",
        },
        {
          name: "Riley M.",
          handle: "@makeup_fan",
          testimonial: "Simply the best experience I've had.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-young-man-playing-video-game-tablet_1262-4766.jpg?_wi=1",
          imageAlt: "happy gamer portrait",
        },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C4kmKEUQIDYX1gzW6F8WkxPlcT/an-ethereal-nebula-inspired-background-w-1775839360199-e44a393f.png?_wi=2"
      mediaAnimation="blur-reveal"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/cheerful-young-man-playing-video-game-tablet_1262-4766.jpg",
          alt: "Gamer avatar 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/gaming-setup-with-laptop-desk-still-life_23-2149829155.jpg",
          alt: "Gamer avatar 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/black-american-woman-holding-basketball_23-2148773333.jpg",
          alt: "Gamer avatar 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/full-shot-happy-man-winning-game_23-2149005177.jpg",
          alt: "Gamer avatar 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/side-view-friends-playing-videogame_23-2149350036.jpg",
          alt: "Gamer avatar 5",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "Fashion Forward",
        },
        {
          type: "text",
          text: "Roblox Experts",
        },
        {
          type: "text",
          text: "Runway Royalty",
        },
        {
          type: "text",
          text: "Creative Minds",
        },
        {
          type: "text",
          text: "Community First",
        },
      ]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "100K+",
          description: "Total Group Members",
        },
        {
          id: "m2",
          value: "2.5M+",
          description: "Game Visits",
        },
        {
          id: "m3",
          value: "150K+",
          description: "Total Favorites",
        },
      ]}
      title="Our Impact"
      description="The numbers behind the magic."
    />
  </div>

  <div id="games" data-section="games">
      <ProductCardTwo
      animationType="scale-rotate"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          brand: "Hàlo Games",
          name: "Show Off",
          price: "LIVE",
          rating: 5,
          reviewCount: "2.5M+ Visits",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C4kmKEUQIDYX1gzW6F8WkxPlcT/uploaded-1775839331625-ktwug3ih.png?_wi=2",
        },
        {
          id: "p2",
          brand: "Hàlo Games",
          name: "Makeup Stars",
          price: "SOON",
          rating: 0,
          reviewCount: "Coming Soon",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C4kmKEUQIDYX1gzW6F8WkxPlcT/uploaded-1775839331625-70df7kfk.png?_wi=2",
        },
        {
          id: "p3",
          brand: "Hàlo Games",
          name: "More Coming Soon",
          price: "TBA",
          rating: 0,
          reviewCount: "Stay Tuned",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C4kmKEUQIDYX1gzW6F8WkxPlcT/uploaded-1775839331625-ktwug3ih.png?_wi=3",
        },
        {
          id: "p4",
          brand: "Hàlo Games",
          name: "Stay Tuned",
          price: "TBA",
          rating: 0,
          reviewCount: "Stay Tuned",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C4kmKEUQIDYX1gzW6F8WkxPlcT/uploaded-1775839331625-70df7kfk.png?_wi=3",
        },
        {
          id: "p5",
          brand: "Hàlo Games",
          name: "More Coming Soon",
          price: "TBA",
          rating: 0,
          reviewCount: "Stay Tuned",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C4kmKEUQIDYX1gzW6F8WkxPlcT/uploaded-1775839331625-ktwug3ih.png?_wi=4",
        },
        {
          id: "p6",
          brand: "Hàlo Games",
          name: "Stay Tuned",
          price: "TBA",
          rating: 0,
          reviewCount: "Stay Tuned",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C4kmKEUQIDYX1gzW6F8WkxPlcT/uploaded-1775839331625-70df7kfk.png?_wi=4",
        },
      ]}
      title="Featured Titles"
      description="Explore our top-rated fashion and lifestyle games on Roblox."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "Alex P.",
          role: "Player",
          company: "Show Off",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-young-man-playing-video-game-tablet_1262-4766.jpg?_wi=2",
        },
        {
          id: "t2",
          name: "Jamie L.",
          role: "Player",
          company: "Show Off",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/gaming-setup-with-laptop-desk-still-life_23-2149829155.jpg",
        },
        {
          id: "t3",
          name: "Sam R.",
          role: "Player",
          company: "Show Off",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/black-american-woman-holding-basketball_23-2148773333.jpg",
        },
        {
          id: "t4",
          name: "Taylor B.",
          role: "Player",
          company: "Show Off",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-happy-man-winning-game_23-2149005177.jpg",
        },
        {
          id: "t5",
          name: "Riley M.",
          role: "Player",
          company: "Show Off",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-friends-playing-videogame_23-2149350036.jpg",
        },
      ]}
      title="Player Love"
      description="Hear what our amazing community has to say."
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C4kmKEUQIDYX1gzW6F8WkxPlcT/uploaded-1775839331625-5uswmgnw.png"
      logoText="Hàlo Games"
      copyrightText="© 2025 Hàlo Games. All Rights Reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
