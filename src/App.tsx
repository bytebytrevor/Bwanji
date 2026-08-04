import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { MotionConfig } from 'framer-motion';
import PageLayout from '@/components/layout/PageLayout';
import HomePage from '@/pages/home/HomePage';
import PublicRelationsPage from '@/pages/what-we-do/PublicRelationsPage';
import CaseStudyDetailPage from '@/pages/work/CaseStudyDetailPage';
import StartProjectPage from '@/pages/StartProjectPage';
import WorkHubPage from '@/pages/work/WorkHubPage';
import NotFoundPage from '@/pages/NotFoundPage';
import AboutPage from '@/pages/about/AboutPage';
import BrandStrategyPage from '@/pages/what-we-do/BrandStrategy';
import CreativeContentPage from '@/pages/what-we-do/CreativeContent';
import DigitalPerformancePage from '@/pages/what-we-do/DigitalPerformance';
import ActivationExperientialPage from './pages/what-we-do/ActivationExperiential';
import AdvisoryPage from './pages/what-we-do/AdvisoryPage';
import TeamPage from './pages/team/TeamPage';
import InsightsHubPage from './pages/insights/InsightsHubPage';
import InsightDetailPage from './pages/insights/InsightDetailPage';

export default function App() {
  return (
    <HelmetProvider>
      <MotionConfig reducedMotion="user">
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Routes>
            <Route element={<PageLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/what-we-do/public-relations/" element={<PublicRelationsPage />} />
              <Route path="/what-we-do/brand-strategy/" element={<BrandStrategyPage />} />
              <Route path="/what-we-do/creative-and-content/" element={<CreativeContentPage />} />
              <Route path="/what-we-do/digital-and-perfomance/" element={<DigitalPerformancePage />} />
              <Route path="/what-we-do/activation/" element={<ActivationExperientialPage />} />
              <Route path="/what-we-do/advisory/" element={<AdvisoryPage />} />
              <Route path="/work/:slug" element={<CaseStudyDetailPage />} />
              <Route path="/work/" element={<WorkHubPage />} />
              <Route path="/insights/" element={<InsightsHubPage />} />
              <Route path="/insights/:slug/" element={<InsightDetailPage />} />
              <Route path="/start-a-project/" element={<StartProjectPage />} />
              <Route path="/about/" element={<AboutPage />} />
              <Route path="/about/team/" element={<TeamPage />} />
              
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MotionConfig>
    </HelmetProvider>
  );
}
