import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-foreground/5 dark:bg-foreground/10">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-400 mb-4">Oops! Page non trouvée</p>
        <Link href="/" className="text-blue-500 hover:text-blue-700 ">
          Retour à la maison
        </Link>
      </div>
    </div>
  );
}
