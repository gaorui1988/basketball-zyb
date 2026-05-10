import { useState } from 'react';
import Header from './components/Header';
import BottomNav, { NavTab } from './components/BottomNav';
import ActivityCard from './components/ActivityCard';
import MatchDetails from './components/MatchDetails';
import SignupPage from './components/SignupPage';
import LeaderboardPage from './components/LeaderboardPage';
import ProfilePage from './components/ProfilePage';
import { MOCK_ACTIVITIES } from './constants';
import { Activity } from './types';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'all' | 'mine'>('all');
  const [navTab, setNavTab] = useState<NavTab>('activities');
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  if (selectedActivity) {
    if (selectedActivity.status === 'ended') {
      return (
        <MatchDetails 
          activity={selectedActivity} 
          onBack={() => setSelectedActivity(null)} 
        />
      );
    }
    return (
      <SignupPage 
        activity={selectedActivity} 
        onBack={() => setSelectedActivity(null)} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-surface">
      <AnimatePresence mode="wait">
        {navTab === 'activities' ? (
          <motion.div
            key="activities"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="pb-32"
          >
            <Header />
            <main className="px-5 pt-6">
              {/* Filter Tabs */}
              <div className="flex gap-6 mb-6">
                <button 
                  onClick={() => setActiveTab('all')}
                  className={`relative pb-2 px-1 font-bold text-xl transition-colors ${
                    activeTab === 'all' ? 'text-on-surface' : 'text-secondary/60'
                  }`}
                >
                  全部活动
                  {activeTab === 'all' && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 w-full h-[3px] bg-primary-container rounded-full" 
                    />
                  )}
                </button>
                
                <button 
                  onClick={() => setActiveTab('mine')}
                  className={`relative pb-2 px-1 font-bold text-xl transition-colors ${
                    activeTab === 'mine' ? 'text-on-surface' : 'text-secondary/60'
                  }`}
                >
                  我的报名
                  {activeTab === 'mine' && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 w-full h-[3px] bg-primary-container rounded-full" 
                    />
                  )}
                </button>
              </div>

              {/* Activity List */}
              <div className="space-y-4">
                <AnimatePresence mode="popLayout">
                  {MOCK_ACTIVITIES
                    .filter(a => activeTab === 'all' || a.id === '4') // Simulate 'mine' for the demo match
                    .map((activity) => (
                      <div key={activity.id} onClick={() => setSelectedActivity(activity)}>
                        <ActivityCard activity={activity} />
                      </div>
                    ))}
                </AnimatePresence>
              </div>
            </main>
          </motion.div>
        ) : navTab === 'leaderboard' ? (
          <motion.div
            key="leaderboard"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <LeaderboardPage />
          </motion.div>
        ) : (
          <motion.div
            key="profile"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
          >
            <ProfilePage />
          </motion.div>
        )}
      </AnimatePresence>

      <BottomNav activeTab={navTab} onTabChange={setNavTab} />
    </div>
  );
}
