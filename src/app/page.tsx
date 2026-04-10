"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';

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
              { name: "Home", id: "hero" },
              { name: "Games", id: "games" },
            ]}
            logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C4kmKEUQIDYX1gzW6F8WkxPlcT/uploaded-1775839331625-5uswmgnw.png"
            brandName="Hàlo games"
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroSplitTestimonial
            useInvertedBackground={false}
            background={{ variant: "gradient-bars" }}
            title="Drawing smiles on your face."
            description="We are Hàlo games, a premier Roblox development studio crafting the next generation of fashion and runway experiences for millions of players."
            testimonials={[]}
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C4kmKEUQIDYX1gzW6F8WkxPlcT/an-ethereal-nebula-inspired-background-w-1775839360199-e44a393f.png?_wi=2"
            mediaAnimation="blur-reveal"
            avatars={[]}
            marqueeItems={[
              { type: "text", text: "Fashion Forward" },
              { type: "text", text: "Roblox Experts" },
              { type: "text", text: "Runway Royalty" },
              { type: "text", text: "Creative Minds" },
              { type: "text", text: "Community First" },
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
              { id: "m2", value: "2.5M+", description: "Game Visits" },
              { id: "m3", value: "150K+", description: "Total Favorites" },
            ]}
            title="Our Impact"
            description="Join millions of players in our growing ecosystem."
          />
        </div>

        <div id="games" data-section="games">
          <ProductCardTwo
            animationType="scale-rotate"
            textboxLayout="split"
            gridVariant="three-columns-all-equal-width"
            useInvertedBackground={false}
            products={[
              { id: "p1", brand: "Hàlo Games", name: "Show Off", price: "PLAY NOW", rating: 5, reviewCount: "100K+", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C4kmKEUQIDYX1gzW6F8WkxPlcT/uploaded-1775840542642-wj1d5ikj.png", onProductClick: () => window.open('https://www.roblox.com/games/123456789/Show-Off', '_blank') },
              { id: "p2", brand: "Hàlo Games", name: "Makeup Stars", price: "COMING SOON", rating: 0, reviewCount: "", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C4kmKEUQIDYX1gzW6F8WkxPlcT/uploaded-1775840553260-wf2ajfs8.png" },
              { id: "p3", brand: "Hàlo Games", name: "Everfrost Couture", price: "COMING SOON", rating: 0, reviewCount: "", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C4kmKEUQIDYX1gzW6F8WkxPlcT/uploaded-1775840669143-6zgtu89k.png" },
            ]}
            title="Featured Titles"
            description="Explore our upcoming and live fashion titles."
            uniformGridCustomHeightClasses="min-h-[600px]"
          />
        </div>

        <div id="socialProof" data-section="socialProof">
          <SocialProofOne
            textboxLayout="default"
            useInvertedBackground={false}
            names={["Roblox", "Community", "Fashion"]}
            title="Join our community"
            description="We are a growing community of players and creators."
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
