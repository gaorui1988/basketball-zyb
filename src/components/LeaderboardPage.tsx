import { Star, Trophy } from 'lucide-react';
import { MOCK_LEADERBOARD } from '../constants';
import { motion } from 'motion/react';

export default function LeaderboardPage() {
  const topThree = MOCK_LEADERBOARD.slice(0, 3);
  const rest = MOCK_LEADERBOARD.slice(3);

  return (
    <div className="min-h-screen bg-surface pb-40">
      {/* Header */}
      <header className="bg-surface/95 backdrop-blur-md border-b border-black/5 sticky top-0 z-50 flex justify-between items-center w-full px-5 py-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-container shadow-sm">
            <img 
              alt="User" 
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZsANlmkDCqQIhgjzRdnR1isRPuU6B33edMCWJE8tDG3eJWfQN4NqEfj5kgLC7vHfM5XE9vJCrmeItahbhnk1ibAJXho54ttO-7bYGjkzY0j9WKeXDF-IFhTzQSv8sY4WDw7DalFmqNLvXR1z2DsezmSz9NH2AH9ea99gdXnPkGoPXzqwYsEItvz19353rwit9Q0De935Npu2EHhzAhElAi1VWnImldh9Pv0dpX-ImPdsoFG0CayO5uEUVNd0qGWh74wrDNskgURv8" 
            />
          </div>
          <h1 className="font-display text-2xl text-primary tracking-tight">积分排行榜</h1>
        </div>
        <div className="flex items-center gap-1 bg-surface-container-high px-3 py-1.5 rounded-full border border-black/5">
          <Star size={14} className="text-primary-container fill-primary-container" />
          <span className="text-xs font-bold text-on-surface">1250 PTS</span>
        </div>
      </header>

      <main className="px-5">
        {/* Podium Section */}
        <section className="mt-8 mb-10 grid grid-cols-3 items-end gap-3 pt-8">
          {/* Rank 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="relative mb-2">
              <div className="w-16 h-16 rounded-full border-4 border-gray-300 overflow-hidden shadow-sm">
                <img src={topThree[1].avatar} className="w-full h-full object-cover" alt="" />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gray-400 text-white px-2 py-0.5 rounded-full font-display text-xs">2</div>
            </div>
            <span className="font-bold text-xs text-center truncate w-full">{topThree[1].name}</span>
            <span className="text-[10px] font-bold text-primary-container uppercase">{topThree[1].pts} PTS</span>
          </motion.div>

          {/* Rank 1 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1.1 }}
            className="flex flex-col items-center -translate-y-4"
          >
            <div className="relative mb-2">
              <Trophy size={32} className="absolute -top-8 left-1/2 -translate-x-1/2 text-primary-container fill-primary-container/20" />
              <div className="w-20 h-20 rounded-full border-4 border-primary-container overflow-hidden shadow-[0_0_20px_rgba(255,107,0,0.3)]">
                <img src={topThree[0].avatar} className="w-full h-full object-cover" alt="" />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary-container text-white px-3 py-1 rounded-full font-display text-base">1</div>
            </div>
            <span className="font-bold text-sm text-center truncate w-full text-primary">{topThree[0].name}</span>
            <span className="text-[10px] font-bold text-primary uppercase">{topThree[0].pts} PTS</span>
          </motion.div>

          {/* Rank 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="relative mb-2">
              <div className="w-16 h-16 rounded-full border-4 border-amber-600/50 overflow-hidden shadow-sm">
                <img src={topThree[2].avatar} className="w-full h-full object-cover" alt="" />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-amber-700 text-white px-2 py-0.5 rounded-full font-display text-xs">3</div>
            </div>
            <span className="font-bold text-xs text-center truncate w-full">{topThree[2].name}</span>
            <span className="text-[10px] font-bold text-primary-container uppercase">{topThree[2].pts} PTS</span>
          </motion.div>
        </section>

        {/* Ranking List */}
        <div className="space-y-3">
          {rest.map((entry, idx) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              className={`flex items-center p-4 rounded-xl border transition-all ${
                entry.isCurrentUser 
                  ? 'bg-primary-container/10 border-primary-container/30 ring-2 ring-primary-container/20' 
                  : 'bg-surface-container border-black/5 hover:border-black/10'
              }`}
            >
              <span className={`font-display text-2xl w-8 ${entry.isCurrentUser ? 'text-primary-container' : 'text-secondary/50'}`}>
                {entry.rank}
              </span>
              <div className={`w-10 h-10 rounded-full overflow-hidden mr-4 shadow-sm ${entry.isCurrentUser ? 'border-2 border-primary-container' : ''}`}>
                <img src={entry.avatar} className="w-full h-full object-cover" alt="" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className={`font-bold ${entry.isCurrentUser ? 'text-primary' : ''}`}>{entry.name}</p>
                  {entry.isCurrentUser && (
                    <span className="bg-primary-container text-white text-[8px] px-1 rounded font-bold uppercase tracking-tighter">你</span>
                  )}
                </div>
                <p className="text-[10px] text-secondary font-bold uppercase tracking-wider">MVP x{entry.mvpCount}</p>
              </div>
              <div className="text-right">
                <p className={`font-display text-xl leading-none ${entry.isCurrentUser ? 'text-primary' : 'text-primary-container'}`}>
                  {entry.pts}
                </p>
                <p className="text-[8px] font-bold text-secondary uppercase tracking-widest">积分</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Sticky User Row (Mobile) */}
      <div className="fixed bottom-24 left-0 w-full px-5 z-40 md:hidden pointer-events-none">
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="bg-primary-container text-white flex justify-between items-center px-6 py-3 rounded-full shadow-2xl border border-white/20 pointer-events-auto"
        >
          <div className="flex items-center gap-4">
            <span className="font-display text-xl">6</span>
            <div className="w-8 h-8 rounded-full border border-white overflow-hidden shadow-inner">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDk31HSs6PSWifgknXC-qFqBmKxPc5aqvwn5BVHJHhgy44-J2bd00ZwP2xPNOFvLevT21k76wZ3_LNSu-a_nMDxU0L8ZQ2q3WU7jutxWDOlYIiaYIj2vOPGN2_rPLofLTxDIw-tX7WYNZ3jr8eYezXn9eYkuF9lzBMnyXBLejj9bPAGSP9E5jvIpREhhspRS5bk1hDN1bt9OvzNLzhS2WWTM4M2gVqTUNyPrGo3cLO9KI_O8wcF7BKoIq9S7r_I8bzK_iqu69YHjulg" className="w-full h-full object-cover" alt="" />
            </div>
            <span className="font-bold text-sm tracking-tight">你的当前排名</span>
          </div>
          <div className="text-right">
            <span className="font-display text-xl">1250</span>
            <span className="text-[10px] font-bold opacity-80 ml-1 uppercase">积分</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
