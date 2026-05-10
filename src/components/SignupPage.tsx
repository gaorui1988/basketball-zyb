import { ArrowLeft, MapPin, PersonStanding, Users, AlertTriangle, Plus } from 'lucide-react';
import { Activity } from '../types';
import { motion } from 'motion/react';

interface SignupPageProps {
  activity: Activity;
  onBack: () => void;
}

export default function SignupPage({ activity, onBack }: SignupPageProps) {
  return (
    <div className="min-h-screen bg-surface pb-40">
      {/* Header */}
      <header className="flex justify-between items-center w-full px-5 py-4 sticky top-0 z-50 border-b border-black/5 bg-surface/95 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-1 -ml-1 hover:bg-black/5 rounded-full transition-colors">
            <ArrowLeft size={24} className="text-on-surface" />
          </button>
          <h1 className="font-display text-2xl text-primary tracking-tighter">组一波</h1>
        </div>
        <div className="px-3 py-1.5 bg-surface-container-high rounded-full border border-black/5 shadow-sm">
          <span className="text-xs font-bold text-primary tracking-wider">1250 PTS</span>
        </div>
      </header>

      <main className="basketball-grain">
        {/* Hero Section */}
        <section className="relative h-72 w-full overflow-hidden">
          <img 
            src={activity.heroImage || 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200&auto=format&fit=crop&q=60'} 
            className="w-full h-full object-cover brightness-50" 
            alt="Court" 
          />
          <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-surface to-transparent">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-block px-2 py-1 bg-primary-container text-white font-bold text-[10px] rounded mb-2 uppercase tracking-wider"
            >
              即将开始
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-5xl text-on-surface uppercase italic leading-none"
            >
              洛克公园 - <span className="text-primary-container">旗舰馆</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg font-bold text-primary mt-2"
            >
              {activity.time}
            </motion.p>
          </div>
        </section>

        {/* Main Info Grid */}
        <div className="px-5 mt-8 grid grid-cols-1 gap-4">
          {/* Map & Location */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-surface-container rounded-2xl p-4 border border-black/5"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <MapPin size={20} className="text-primary-container" />
                地点详情
              </h3>
              <span className="text-[10px] font-bold text-secondary tracking-widest uppercase">{activity.distance || '2.4KM'}</span>
            </div>
            <div className="w-full h-40 rounded-xl overflow-hidden mb-4 border border-black/5">
              <img 
                className="w-full h-full object-cover grayscale opacity-80" 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=60" 
                alt="Map" 
              />
            </div>
            <p className="text-sm text-secondary leading-relaxed font-medium">
              {activity.address || '静安区汶水路210号, 3号场地 (室内全场)'}
            </p>
          </motion.div>

          {/* Organizer Info */}
          {activity.organizer && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-surface-container rounded-2xl p-4 border border-black/5 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <PersonStanding size={20} className="text-primary-container" />
                  组织者
                </h3>
                <div className="flex items-center gap-4">
                  <img src={activity.organizer.avatar} className="w-16 h-16 rounded-full border-2 border-primary-container object-cover shadow-md" alt="" />
                  <div>
                    <p className="text-xl font-bold">{activity.organizer.name}</p>
                    <div className="flex gap-2 mt-1">
                      <span className="px-2 py-0.5 bg-secondary-container text-secondary text-[10px] font-bold rounded uppercase tracking-wider">{activity.organizer.position}</span>
                      <span className="px-2 py-0.5 bg-tertiary-container text-white text-[10px] font-bold rounded uppercase tracking-wider">MVP x{activity.organizer.mvpCount}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-black/5">
                <p className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-1">本场规则</p>
                <p className="text-sm text-secondary font-medium italic">
                  {activity.rules || '“半场 4V4, 先到11分换人。尊重裁判，杜绝脏动作。”'}
                </p>
              </div>
            </motion.div>
          )}

          {/* Sign-up Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-surface-container rounded-2xl p-4 border border-black/5"
          >
            <div className="flex justify-between items-end mb-4">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <Users size={20} className="text-primary-container" />
                已报名人员 ({activity.joinedPlayersCount}/{activity.maxPlayersCount})
              </h3>
              <div className="w-24 h-2 bg-surface-container-highest rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-primary-container transition-all duration-500" 
                  style={{ width: `${(activity.joinedPlayersCount / activity.maxPlayersCount) * 100}%` }}
                />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {activity.players.map((player) => (
                <div key={player.id} className="flex flex-col items-center gap-1">
                  <img src={player.avatar} className="w-12 h-12 rounded-full border-2 border-primary-container/20 shadow-sm" alt="" />
                  <span className="text-[10px] font-bold text-secondary truncate w-12 text-center">{player.name}</span>
                </div>
              ))}
              {Array.from({ length: Math.min(4, activity.maxPlayersCount - activity.joinedPlayersCount) }).map((_, i) => (
                <div key={i} className="flex flex-col items-center gap-1 opacity-40">
                  <div className="w-12 h-12 rounded-full border-2 border-dashed border-secondary/30 flex items-center justify-center">
                    <Plus size={20} className="text-secondary/50" />
                  </div>
                  <span className="text-[10px] font-bold text-secondary">待定</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Penalty Notice */}
        <div className="px-5 mt-6 mb-12">
          <div className="bg-error-container/10 border border-error/20 p-4 rounded-2xl flex items-start gap-3">
            <AlertTriangle size={20} className="text-error mt-0.5 shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-error uppercase tracking-wider">诚信提示</h4>
              <p className="text-xs text-secondary font-medium mt-1 leading-relaxed">
                严禁<span className="text-error font-bold mx-1">放鸽子</span>。缺席将扣除 <span className="font-display text-sm text-error">-5 PTS</span>，累计 3 次将限制参加后续活动。
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-[88px] left-0 w-full px-5 z-40">
        <button className="w-full bg-primary-container text-white py-4 rounded-2xl font-display text-2xl uppercase tracking-[0.2em] shadow-2xl active:scale-[0.98] transition-all border-t border-white/20">
          立即报名
        </button>
      </div>
    </div>
  );
}
