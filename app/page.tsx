"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import loulou from "@/public/DSC00365.jpg";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fadeInElements = document.querySelectorAll(".fade-in-element");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            entry.target.classList.add("opacity-100");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    fadeInElements.forEach((el) => {
      el.classList.add("opacity-0");
      observer.observe(el);
    });

    return () => {
      fadeInElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);
  return (
    <>
      <Header />

      {/* Hero Section */}

      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center pt-20 px-4 md:px-8"
      >
        <div className="container mx-auto py-24 md:py-32">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter mb-6 fade-in-element">
            Concepteur <br />& Développeur full-stack
          </h1>
          <p
            className="text-xl md:text-2xl text-muted-foreground max-w-xl fade-in-element"
            style={{ transitionDelay: "0.2s" }}
          >
            Je conçois et développe des solutions web sur mesure, épurées et
            efficaces.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-24 px-4 md:px-8 bg-secondary">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="fade-in-element">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">
                About Me
              </h2>
              <p className="mb-4 text-muted-foreground">
                Je suis développeur full-stack basé à Villeurbanne. J'ai une
                passion pour la création de solutions web élégantes et
                fonctionnelles qui répondent aux besoins des utilisateurs.
              </p>
              <p className="mb-4 text-muted-foreground">
                Mon expérience couvre une large gamme de technologies, y compris
                React, Next.js, Node.js et bien d'autres. J'aime relever des
                défis techniques et trouver des solutions innovantes pour
                améliorer l'expérience utilisateur.
              </p>
              <p className="text-muted-foreground">
                Lorsque je ne code pas, vous pourrez me trouver en train de
                vadrouiller en nature ou dans un musée !
              </p>
            </div>

            <div className="aspect-square bg-muted fade-in-element overflow-hidden">
              <Image
                src={loulou}
                alt="Louis Sanson"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-24 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="text-center fade-in-element">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
                On s'appelle ?
              </h2>
              <p className="text-muted-foreground mb-8">
                Je suis à l'écoute de nouvelles opportunités et collaborations.
                N'hésitez pas à me contacter pour discuter de vos projets ou
                simplement pour dire bonjour !
              </p>
            </div>

            <div className="border rounded-lg p-8 fade-in-element">
              <a
                href="mailto:sanson.louis@gmail.com"
                className="text-xl md:text-2xl font-medium hover:text-primary/80 block text-center transition-colors"
              >
                sanson.louis@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
