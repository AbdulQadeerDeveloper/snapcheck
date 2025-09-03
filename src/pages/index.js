// src/pages/index.js
import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/sections/HeroSection';
import BenefitsSection from '../components/sections/BenefitsSection';
import Frame10000 from '../components/sections/Frame10000';
import WorkingProcess from '../components/sections/WorkingProcess';
import PricingComponent from '../components/sections/PricingComponent';
import Testimonials from '../components/sections/Testimonials';
import Faq from '../components/sections/Faq';
import Hero from '../components/sections/Hero';
import Footer from '../components/sections/Footer';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>SnapCheck - Best Way to Manage Your Employees Easily</title>
        <meta
          name="description"
          content="Save everyone time by harnessing your team's collective knowledge into easy-to-find information."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        {/* Hero Section */}
        <HeroSection />

        {/* Frame10000 Section */}
        <Frame10000 />

        {/* Benefits Section */}
        <BenefitsSection />

        {/* WorkingProcess Section */}
        <WorkingProcess />

        {/* PricingComponent Section */}
        <PricingComponent />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Faq Section */}
        <Faq />

        {/* Hero Section */}
        <Hero />

        {/* Footer Section */}
        <Footer />
      </Layout>
    </>
  );
};

export default HomePage;