export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="text-center px-4 py-8">
        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Hello World!
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Welcome to your beautiful Next.js application. This is a simple yet elegant Hello World page.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg px-6 py-3 shadow-lg border border-gray-200/50">
              <span className="text-sm font-medium text-gray-500">Built with</span>
              <div className="text-lg font-semibold text-gray-800">Next.js 15</div>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-lg px-6 py-3 shadow-lg border border-gray-200/50">
              <span className="text-sm font-medium text-gray-500">Styled with</span>
              <div className="text-lg font-semibold text-gray-800">Tailwind CSS</div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-sm text-gray-400">
          Ready to start building something amazing?
        </div>
      </div>
    </main>
  )
}