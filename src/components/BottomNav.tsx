import { Trophy, User, Plus, Dribbble } from 'lucide-react';
import { motion } from 'motion/react';

export type NavTab = 'activities' | 'leaderboard' | 'profile';

interface BottomNavProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
}

export default function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <>
      {/* Floating Action Button */}
      {activeTab === 'activities' && (
        <button className="fixed bottom-28 right-5 w-14 h-14 bg-primary-container text-white rounded-full shadow-[0_8px_24px_rgba(255,107,0,0.4)] flex items-center justify-center z-40 active:scale-95 transition-transform">
          <Plus size={32} />
        </button>
      )}

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-6 py-3 pb-8 bg-surface-container border-t border-black/5 shadow-lg rounded-t-3xl">
        <div 
          onClick={() => onTabChange('activities')}
          className={`flex flex-col items-center justify-center transition-all cursor-pointer ${
            activeTab === 'activities' ? 'text-primary-container font-bold scale-110' : 'text-secondary hover:text-primary-container'
          }`}
        >
          <Dribbble size={24} fill={activeTab === 'activities' ? 'currentColor' : 'none'} />
          <span className="text-[10px] font-bold mt-1 tracking-wider uppercase">活动</span>
        </div>
        
        <div 
          onClick={() => onTabChange('leaderboard')}
          className={`flex flex-col items-center justify-center transition-all cursor-pointer ${
            activeTab === 'leaderboard' ? 'text-primary-container font-bold scale-110' : 'text-secondary hover:text-primary-container'
          }`}
        >
          <Trophy size={24} fill={activeTab === 'leaderboard' ? 'currentColor' : 'none'} />
          <span className="text-[10px] font-bold mt-1 tracking-wider uppercase">排行榜</span>
        </div>
        
        <div 
          onClick={() => onTabChange('profile')}
          className={`flex flex-col items-center justify-center transition-all cursor-pointer ${
            activeTab === 'profile' ? 'text-primary-container font-bold scale-110' : 'text-secondary hover:text-primary-container'
          }`}
        >
          <User size={24} fill={activeTab === 'profile' ? 'currentColor' : 'none'} />
          <span className="text-[10px] font-bold mt-1 tracking-wider uppercase">我的</span>
        </div>
      </nav>
    </>
  );
}
