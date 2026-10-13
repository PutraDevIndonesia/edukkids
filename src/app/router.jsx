import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from '../components/layout/AppLayout';
import { HomePage } from '../pages/HomePage';
import { WorldMapPage } from '../pages/WorldMapPage';
import { QuizCatalogPage } from '../pages/QuizCatalogPage';
import { QuizPlayPage } from '../pages/QuizPlayPage';
import { GamesCatalogPage } from '../pages/GamesCatalogPage';
import { GamePlayPage } from '../pages/GamePlayPage';
import { AchievementsPage } from '../pages/AchievementsPage';
import { LeaderboardPage } from '../pages/LeaderboardPage';
import { ProfilePage } from '../pages/ProfilePage';
import { ProgressPage } from '../pages/ProgressPage';
import { SettingsPage } from '../pages/SettingsPage';
import { NotFoundPage } from '../pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'peta',
        element: <WorldMapPage />
      },
      {
        path: 'kuis',
        element: <QuizCatalogPage />
      },
      {
        path: 'kuis/:quizId',
        element: <QuizPlayPage />
      },
      {
        path: 'game',
        element: <GamesCatalogPage />
      },
      {
        path: 'game/:gameId',
        element: <GamePlayPage />
      },
      {
        path: 'pencapaian',
        element: <AchievementsPage />
      },
      {
        path: 'peringkat',
        element: <LeaderboardPage />
      },
      {
        path: 'profil',
        element: <ProfilePage />
      },
      {
        path: 'progres',
        element: <ProgressPage />
      },
      {
        path: 'pengaturan',
        element: <SettingsPage />
      },
      {
        path: '*',
        element: <NotFoundPage />
      }
    ]
  }
]);
