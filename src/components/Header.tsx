import { Star } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full px-5 py-4 sticky top-0 z-50 border-b border-black/5 bg-surface/95 backdrop-blur-md">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-highest border border-black/5 shadow-inner">
          <img 
            alt="User Profile" 
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqvdmRV64H3MT45rcs0f5jyseIpyPtkg8grbzShk9BeWeboEVVACX8D4XwR_emEqtBU13QOMY0muC1RQoI49ixsWRULmzy5ENckkmasp1IXjgGPzVdn3QqM5NIVkKzMcdBXyExMe5D6Rim9t9d3Q2hcvn7WksgFLQp_Nv81-cvR6ay57H_MiM2oF8AsiGoRUs8ZBytCEbmqPeYR1xODbgfj6fyJU-McnpvPn0oINIGsrhYzVCmyxqEC0Onu4m6NpRFj6a7SZHG-sHk" 
          />
        </div>
        <h1 className="font-display text-3xl text-primary tracking-tighter uppercase">组一波</h1>
      </div>
      
      <div className="px-3 py-1.5 bg-surface-container-high rounded-lg flex items-center gap-1.5 shadow-sm border border-black/5">
        <Star size={18} className="text-primary-container fill-primary-container" />
        <span className="text-xs font-bold text-primary-container tracking-wider">1250 积分</span>
      </div>
    </header>
  );
}
