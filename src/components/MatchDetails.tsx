import { ArrowLeft, Medal, Info, Star } from 'lucide-react';
import { Activity } from '../types';
import { motion } from 'motion/react';

interface MatchDetailsProps {
  activity: Activity;
  onBack: () => void;
}

export default function MatchDetails({ activity, onBack }: MatchDetailsProps) {
  const result = activity.matchResult;
  const participants = activity.participants || [];

  if (!result) return null;

  return (
    <div className="min-h-screen bg-surface pb-32">
      {/* Header */}
      <header className="flex justify-between items-center w-full px-5 py-4 sticky top-0 z-50 border-b border-black/5 bg-surface/95 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-1 -ml-1 hover:bg-black/5 rounded-full transition-colors">
            <ArrowLeft size={24} className="text-on-surface" />
          </button>
          <h1 className="font-display text-2xl text-primary tracking-tighter">组一波</h1>
        </div>
        
        <div className="px-3 py-1.5 bg-surface-container-high rounded-full border border-black/5">
          <span className="text-xs font-bold text-primary tracking-wider">1250 PTS</span>
        </div>
      </header>

      <main className="court-texture">
        {/* Match Summary Hero */}
        <section className="px-5 pt-6 pb-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative overflow-hidden rounded-2xl bg-surface-container-high shadow-inner border border-black/5 p-6"
          >
            <div className="flex justify-between items-start mb-6">
              <span className="px-3 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold rounded-full uppercase tracking-wider">比赛结束</span>
              <div className="text-right">
                <p className="text-[10px] font-bold text-secondary uppercase tracking-widest">{result.courtNo}</p>
                <p className="text-xl font-bold">{activity.title}</p>
              </div>
            </div>

            <div className="flex items-center justify-around py-4">
              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 rounded-full border-4 border-primary-container/20 overflow-hidden bg-white shadow-sm">
                  <img src={result.teamAAvatar} className="w-full h-full object-cover" alt="Team A" />
                </div>
                <span className="font-display text-xl">A 队</span>
              </div>

              <div className="flex flex-col items-center">
                <span className="font-display text-5xl text-primary-container tracking-wider">
                  {result.teamAScore} - {result.teamBScore}
                </span>
                <span className="text-[10px] font-bold text-secondary tracking-widest mt-1">完赛比分</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 rounded-full border-4 border-black/5 overflow-hidden bg-white shadow-sm">
                  <img src={result.teamBAvatar} className="w-full h-full object-cover" alt="Team B" />
                </div>
                <span className="font-display text-xl text-secondary">B 队</span>
              </div>
            </div>

            {/* Points Notice */}
            <div className="mt-6 flex items-center gap-3 p-3 bg-primary-container/10 border border-primary-container/20 rounded-xl">
              <Medal size={20} className="text-primary-container fill-primary-container/20" />
              <p className="text-sm text-primary font-medium">
                好球！你因为参加本次活动获得了 <strong className="font-bold underline decoration-primary-container/50">+5 积分</strong>。
              </p>
            </div>
          </motion.div>
        </section>

        {/* MVP Voting Section */}
        <section className="px-5 mt-4">
          <div className="mb-4 flex justify-between items-end">
            <div>
              <h2 className="font-display text-3xl tracking-tight uppercase">投票选出 MVP</h2>
              <p className="text-sm text-secondary font-medium">谁统治了今天的球场？</p>
            </div>
            <Star size={24} className="text-primary-container fill-primary-container" />
          </div>

          <div className="space-y-3">
            {participants.map((player, idx) => (
              <motion.div
                key={player.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${
                  player.isCurrentUser 
                    ? 'bg-surface-container-low opacity-60 border-black/5 italic' 
                    : 'bg-surface-container border-black/5 hover:border-primary-container/30 group'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img src={player.avatar} className="w-12 h-12 rounded-full bg-surface-container-highest object-cover" alt={player.name} />
                    {player.position && (
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-tertiary-container rounded-full flex items-center justify-center border-2 border-surface">
                        <span className="text-[10px] font-bold text-white">{player.position}</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="font-bold text-lg leading-tight">{player.name}</p>
                    <p className="text-[10px] font-bold text-secondary tracking-wider uppercase">
                      {player.stats.pts} 得分 • {player.stats.ast} 助攻 • {player.stats.reb} 篮板
                    </p>
                  </div>
                </div>

                {player.isCurrentUser ? (
                  <span className="text-[10px] font-bold text-secondary px-4 uppercase tracking-widest">自己</span>
                ) : (
                  <button className="px-6 py-2 bg-primary-container text-white font-display text-sm rounded-xl uppercase tracking-wider active:scale-95 transition-transform shadow-sm">
                    投票
                  </button>
                )}
              </motion.div>
            ))}
          </div>

          {/* Info Notice */}
          <div className="mt-8 p-6 bg-surface-container-lowest/50 border-2 border-dashed border-black/5 rounded-3xl text-center">
            <Info size={32} className="text-secondary/30 mx-auto mb-3" />
            <p className="text-sm text-secondary font-medium max-w-[260px] mx-auto leading-relaxed">
              如果没有人投票，本次比赛将不会选出 MVP。每一票对排行榜都很重要！
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
