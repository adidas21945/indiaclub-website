export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center relative overflow-hidden -m-6">
      {/* Background image with overlay for text readability */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/diwaliboard.jpg)',
          backgroundPosition: 'center calc(100% + 40px)',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <main className="relative z-10 flex flex-col items-center justify-center py-16 px-8 text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">Welcome to India Club @ GT</h1>
        <p className="text-lg text-white/90 max-w-2xl">
          Cultural organization running events for Diwali, Holi, and more.
        </p>
      </main>
    </div>
  );
}
