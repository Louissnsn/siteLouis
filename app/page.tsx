"use client";
import Image from "next/image";
import loulou from "@/public/DSC00365.jpeg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import FadeInWhenVisible from "./components/FadeInWhenVisible";

const projets = [
  {
    id: 1,
    title: "Site Syncope",
    category: "Site vitrine",
    imageUrl:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1000&auto=format&fit=crop",
    link: "https://lasyncope.fr",
  },
  {
    id: 2,
    title: "Emploi avenir",
    category: "Application web",
    imageUrl:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1000&auto=format&fit=crop",
    link: "https://lasyncope.fr",
  },
  {
    id: 3,
    title: "Globe Spinner",
    category: "Application mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1000&auto=format&fit=crop",
    link: "https://lasyncope.fr",
  },
  {
    id: 4,
    title: "Site Balla Force",
    category: "Site vitrine",
    imageUrl:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1000&auto=format&fit=crop",
    link: "https://lasyncope.fr",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center pt-20 px-4 md:px-8"
        style={{
          backgroundImage: `url('/ballaForcePaysage.jpg')`,
          backgroundSize: "cover",
        }}
      >
        <div className="container mx-auto py-24 md:py-32">
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
                Quelques projets sur lesquels j'ai récemment travaillé !
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
                  Je suis développeur full-stack basé à Villeurbanne. J'ai une
                  passion pour la création de solutions web élégantes et
                  fonctionnelles qui répondent aux besoins des utilisateurs.
                </p>
                <p className="mb-4 text-muted-foreground">
                  Mon expérience couvre une large gamme de technologies, y
                  compris React, Next.js, Node.js et bien d'autres. J'aime
                  relever des défis techniques et trouver des solutions
                  innovantes pour améliorer l'expérience utilisateur.
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
                On s'appelle ?
              </h2>
              <p className="text-muted-foreground">
                Je suis à l'écoute de nouvelles opportunités et collaborations.
                N'hésitez pas à me contacter pour discuter de vos projets ou
                simplement pour dire bonjour !
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
