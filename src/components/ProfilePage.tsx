import { History, ChevronRight, Settings, Star, Dribbble, Award, AlertTriangle } from 'lucide-react';
import { motion } from 'motion/react';
import { PointAction } from '../types';

const MOCK_HISTORY: PointAction[] = [
  {
    id: 'h1',
    matchName: '东海岸经典赛',
    reason: '全场 MVP',
    points: 5,
    type: 'plus'
  },
  {
    id: 'h2',
    matchName: '周六灌篮之夜',
    reason: '迟到扣分',
    points: 5,
    type: 'minus'
  }
];

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-surface pb-40">
      {/* Header */}
      <header className="flex justify-between items-center w-full px-5 py-4 sticky top-0 z-50 border-b border-black/5 bg-surface/95 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-highest border-2 border-primary-container shadow-sm">
            <img 
              alt="User" 
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgizM9toDHYAxBiM6x7ADROoKITXpnrYrw4NPElYG7l8Gx-giaAhvwlBoN1K4Bvw_PbzpqYF0JtebstrdpnYVsuwq6bPaP-UoQ90reCI4l35tbJ0rWnpnNfZbDDS9Y6XXy9bF16U0C1TBkpMTNd6xNJNo1t5EnzLID-dHFuLqFcORloGuVv0yE8ZC5OGZn6gHUlyzhKLXX1LYl5mtywy1ASaIxEQtD3vYVweDt88kGh_hz8v2FY2X6ACyID6JuQIJEJYbRsRqiHfX0" 
            />
          </div>
          <h1 className="font-display text-3xl text-primary tracking-tighter uppercase">组一波</h1>
        </div>
        <div className="flex items-center gap-1 bg-surface-container-high px-3 py-1.5 rounded-full border border-black/5">
          <Star size={14} className="text-primary-container fill-primary-container" />
          <span className="text-xs font-bold text-on-surface">1250 PTS</span>
        </div>
      </header>

      <main className="px-5 py-6 space-y-8">
        {/* User Profile Header Section */}
        <section className="space-y-2">
          <div className="flex items-end justify-between">
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="font-display text-4xl text-on-surface uppercase leading-none"
              >
                科比铁粉24
              </motion.h2>
              <p className="text-sm text-secondary font-medium mt-1">2023年7月加入 • 前锋</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-1">本场积分</p>
              <motion.p 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="font-display text-6xl text-primary-container leading-none"
              >
                20
              </motion.p>
            </div>
          </div>
        </section>

        {/* Flaking Stats Card */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-surface-container rounded-2xl p-4 border border-black/5 relative overflow-hidden shadow-sm"
        >
          <div className="absolute top-4 right-4 text-error">
            <AlertTriangle size={20} />
          </div>
          <h3 className="text-lg font-bold text-on-surface mb-4">缺席统计</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">当前状态: 1/3 次</span>
              <span className="text-[10px] font-bold text-error uppercase tracking-widest">警告</span>
            </div>
            <div className="w-full bg-surface-container-highest rounded-full h-2 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-error to-primary-container transition-all duration-1000" 
                style={{ width: '33.33%' }}
              />
            </div>
            <div className="mt-6 flex flex-col gap-1 p-4 bg-error-container/5 rounded-xl border-l-4 border-error">
              <p className="text-sm text-secondary font-medium italic leading-relaxed">
                "再缺席 2 次，下次活动你就要请全队喝水了！"
              </p>
            </div>
          </div>
        </motion.section>

        {/* Points History & Bento Stats */}
        <div className="grid grid-cols-1 gap-6">
          {/* Points History Card */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-surface-container rounded-2xl p-4 border border-black/5 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-4">
              <History size={20} className="text-primary-container" />
              <h3 className="text-lg font-bold text-on-surface">积分历史</h3>
            </div>
            <ul className="space-y-4">
              {MOCK_HISTORY.map((action, idx) => (
                <li 
                  key={action.id} 
                  className={`flex justify-between items-center pb-4 ${idx !== MOCK_HISTORY.length - 1 ? 'border-b border-black/5' : ''}`}
                >
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-on-surface">{action.matchName}</span>
                    <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">{action.reason}</span>
                  </div>
                  <span className={`font-display text-2xl ${action.type === 'plus' ? 'text-primary' : 'text-error'}`}>
                    {action.type === 'plus' ? '+' : '-'}{action.points}
                  </span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Quick Links / Bento Actions */}
          <section className="grid grid-cols-1 gap-4">
            {[
              { icon: Dribbble, label: '我的活动', color: 'text-primary-container', bg: 'bg-primary-container/10' },
              { icon: Award, label: '我的 MVP', color: 'text-tertiary-container', bg: 'bg-tertiary-container/10' },
              { icon: Settings, label: '设置', color: 'text-secondary', bg: 'bg-secondary-container/10' }
            ].map((item, idx) => (
              <motion.a 
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                href="#" 
                className="bg-surface-container hover:bg-surface-container-high transition-all rounded-2xl p-4 border border-black/5 flex items-center justify-between group shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className={`${item.bg} p-2.5 rounded-xl transition-colors group-hover:bg-white`}>
                    <item.icon size={20} className={item.color} />
                  </div>
                  <span className="text-lg font-bold text-on-surface">{item.label}</span>
                </div>
                <ChevronRight size={20} className="text-secondary/40 group-hover:text-primary-container group-hover:translate-x-1 transition-all" />
              </motion.a>
            ))}
          </section>
        </div>

        {/* Logout / Secondary Action */}
        <button className="w-full py-4 rounded-2xl border-2 border-black/5 text-secondary font-bold text-xs uppercase tracking-[0.2em] hover:bg-black/5 transition-all mt-8">
          退出登录
        </button>
      </main>
    </div>
  );
}
