import { MapPin, Calendar, CreditCard } from 'lucide-react';
import { Activity } from '../types';
import { motion } from 'motion/react';

interface ActivityCardProps {
  activity: Activity;
}

export default function ActivityCard({ activity }: ActivityCardProps) {
  const isFull = activity.joinedPlayersCount >= activity.maxPlayersCount;
  const isEnded = activity.status === 'ended';
  const progress = (activity.joinedPlayersCount / activity.maxPlayersCount) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-surface-container rounded-xl overflow-hidden border border-black/5 relative shadow-sm hover:shadow-md transition-shadow cursor-pointer"
    >
      {activity.status === 'registering' && (
        <div className="absolute top-0 left-0 w-1 h-full bg-primary-container" />
      )}
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-bold mb-1">{activity.title}</h3>
            <div className="flex items-center gap-1 text-secondary text-xs">
              <MapPin size={14} />
              <span>{activity.location}</span>
            </div>
          </div>
          
          <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase border ${
            activity.status === 'registering' 
              ? 'bg-primary-container/20 text-primary-container border-primary-container/30'
              : activity.status === 'upcoming'
              ? 'bg-secondary-container/50 text-secondary border-black/5'
              : 'bg-black/10 text-secondary border-black/5'
          }`}>
            {activity.status === 'registering' ? '报名中' : activity.status === 'upcoming' ? '即将开始' : '已结束'}
          </span>
        </div>

        {isEnded && activity.matchResult ? (
          <div className="flex items-center justify-between bg-surface-container-low p-4 rounded-xl border border-black/5 mb-2">
            <div className="flex items-center gap-3">
              <img src={activity.matchResult.teamAAvatar} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="" />
              <span className="font-display text-2xl text-primary-container">
                {activity.matchResult.teamAScore} - {activity.matchResult.teamBScore}
              </span>
              <img src={activity.matchResult.teamBAvatar} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="" />
            </div>
            <span className="text-[10px] font-bold text-secondary uppercase tracking-widest text-right leading-tight">完赛<br />分数</span>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="flex items-center gap-2 bg-surface-container-low p-2 rounded-lg">
              <Calendar size={18} className="text-secondary" />
              <div className="flex flex-col">
                <span className="text-[10px] text-secondary font-bold uppercase tracking-wider">时间</span>
                <span className="text-sm font-bold">{activity.time}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 bg-surface-container-low p-2 rounded-lg">
              <CreditCard size={18} className="text-secondary" />
              <div className="flex flex-col">
                <span className="text-[10px] text-secondary font-bold uppercase tracking-wider">费用</span>
                <span className="text-sm font-bold">{activity.cost}</span>
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex -space-x-2">
            {activity.players.map((player) => (
              <img
                key={player.id}
                src={player.avatar}
                alt={player.name}
                className="w-8 h-8 rounded-full border-2 border-surface-container object-cover"
              />
            ))}
            {activity.joinedPlayersCount > activity.players.length && (
              <div className="w-8 h-8 rounded-full bg-surface-container-highest border-2 border-surface-container flex items-center justify-center text-[10px] font-bold text-secondary">
                +{activity.joinedPlayersCount - activity.players.length}
              </div>
            )}
          </div>

          <div className="flex flex-col items-end">
            <div className="flex items-center gap-1 mb-1">
              <span className="font-display text-2xl text-primary-container">{activity.joinedPlayersCount}</span>
              <span className="text-secondary text-sm">/ {activity.maxPlayersCount}</span>
            </div>
            <div className="w-24 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-500 ${isFull ? 'bg-primary-container' : 'bg-gradient-to-r from-primary to-primary-container'}`}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
