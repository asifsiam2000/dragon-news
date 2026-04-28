import Link from "next/link";



const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 px-4">
      {/* Visual Element */}
      <div className="relative mb-8">
        <h1 className="text-9xl font-black text-slate-200 tracking-tighter">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center pt-8">
          <p className="text-2xl font-bold text-slate-800 tracking-tight">
            Page Not Found
          </p>
        </div>
      </div>

      {/* Message */}
      <div className="max-w-md text-center">
        <h2 className="text-xl font-semibold text-slate-700 mb-3">
          Oops! You have drifted into the void.
        </h2>
        <p className="text-slate-500 mb-10 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
      </div>

      {/* Action Button */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          href="/" 
          className="px-10 py-4 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-all duration-200 shadow-xl shadow-slate-200 active:scale-95 text-center"
        >
          Return to Home Page
        </Link>
        
        
      </div>

      {/* Decorative dots */}
      <div className="mt-16 flex gap-2">
        <div className="w-2 h-2 rounded-full bg-slate-200"></div>
        <div className="w-2 h-2 rounded-full bg-slate-300"></div>
        <div className="w-2 h-2 rounded-full bg-slate-200"></div>
      </div>
    </div>
    );
};

export default NotFoundPage;