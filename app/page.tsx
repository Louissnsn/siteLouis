"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import loulou from "@/public/DSC00365.jpeg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import FadeInWhenVisible from "./components/FadeInWhenVisible";
import { useIsMobile } from "./hooks/useIsMobile";

const projets = [
  {
    id: 1,
    title: "Site Syncope",
    category: "Site vitrine",
    imageUrl: "/images/syncope.png",
    link: "https://lasyncope.fr",
  },

    {
    id: 2,
    title: "Compagnie Datura",
    category: "Site vitrine",
    imageUrl: "/images/datura.jpg",
    link: "https://cie-datura.vercel.app",
  },

  {
    id: 3,
    title: "Ménage Conciergerie",
    category: "Application web",
    imageUrl: "/images/particulier.webp",
    link: "https://menage-conciergerie.fr",
  },

  {
    id: 4,
    title: "Globe Spinner",
    category: "Application mobile",
    imageUrl: "/images/globe.svg",
    link: "https://github.com/Louissnsn/globe-spinner-frontend",
  },
];

export default function Home() {
  const isMobile = useIsMobile();
  const { scrollY } = useScroll();

  // Image scale + losange effect
  const scale = useTransform(scrollY, [0, 300], [1, 0.85]);
  const clipPath = useTransform(
    scrollY,
    [0, 300, 600],
    [
      "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", // rectangle
      "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)", // losange
      "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)", // reste figé
    ]
  );

  if (isMobile === undefined) return null;

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-4 md:px-8 relative">
        {isMobile ? (
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url('/lissitzky.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ) : (
          <motion.div
            className="absolute inset-0 z-0 origin-center"
            style={{
              backgroundImage: `url('/lissitzky.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              clipPath,
              scale,
            }}
          />
        )}

        <div className="z-10 container mx-auto py-24 md:py-32">
          <FadeInWhenVisible>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter mb-6">
              Concepteur <br />& Développeur full-stack
            </h1>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.3}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl">
              Je conçois et développe des solutions web sur mesure, épurées et
              efficaces.
            </p>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-12 md:py-24 px-4 md:px-8">
        <div className="container mx-auto">
          <FadeInWhenVisible>
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
                Projets sélectionnés
              </h2>
              <p className="text-muted-foreground">
                Quelques projets sur lesquels j&apos;ai récemment travaillé !
              </p>
            </div>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projets.map((project, index) => (
              <FadeInWhenVisible key={project.id} delay={index * 0.1}>
                <ProjectCard
                  title={project.title}
                  category={project.category}
                  imageUrl={project.imageUrl}
                  link={project.link}
                />
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-24 px-4 md:px-8 bg-secondary">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeInWhenVisible>
              <div>
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">
                  A propos de moi
                </h2>
                <p className="mb-4 text-muted-foreground">
                  Je suis développeur full-stack basé à Villeurbanne. J&apos;ai
                  une passion pour la création de solutions web élégantes et
                  fonctionnelles qui répondent aux besoins des utilisateurs.
                </p>
                <p className="mb-4 text-muted-foreground">
                  Mon expérience couvre une large gamme de technologies, y
                  compris React, Next.js, Node.js et bien d&apos;autres.
                  J&apos;aime relever des défis techniques et trouver des
                  solutions innovantes pour améliorer l&apos;expérience
                  utilisateur.
                </p>
                <p className="text-muted-foreground">
                  Lorsque je ne code pas, vous pourrez me trouver en train de
                  vadrouiller en nature ou dans un musée !
                </p>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <div className="aspect-square bg-muted overflow-hidden">
                <Image
                  src={loulou}
                  alt="Louis Sanson"
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-24 px-4 md:px-8">
        <div className="container mx-auto">
          <FadeInWhenVisible>
            <div className="max-w-2xl mx-auto text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
                On s&apos;appelle ?
              </h2>
              <p className="text-muted-foreground">
                Je suis à l&apos;écoute de nouvelles opportunités et
                collaborations. N&apos;hésitez pas à me contacter pour discuter
                de vos projets ou simplement pour dire bonjour !
              </p>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.1}>
            <div className="border rounded-lg p-8">
              <a
                href="mailto:sanson.louis@gmail.com"
                className="text-xl md:text-2xl font-medium hover:text-primary/80 block text-center transition-colors"
              >
                sanson.louis@gmail.com
              </a>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      <Footer />
    </>
  );
}
