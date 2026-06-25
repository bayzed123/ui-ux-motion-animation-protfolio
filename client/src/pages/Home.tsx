import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-6">
      <main className="text-center max-w-3xl">
        <h1 className="text-5xl font-bold tracking-tight mb-4">
          Sayad Md Bayezid Hosan
        </h1>
        <h2 className="text-2xl text-muted-foreground mb-8">
          Agency Founder & Technical Consultant
        </h2>
        
        <p className="text-lg mb-8 leading-relaxed">
          Welcome to my digital portfolio. I specialize in full-stack web development, digital marketing ecosystems, and providing technical solutions for modern businesses.
        </p>

        <div className="flex gap-4 justify-center">
          <Button variant="default" size="lg">
            View My Work
          </Button>
          <Button variant="outline" size="lg">
            Contact Me
          </Button>
        </div>
      </main>
    </div>
  );
}