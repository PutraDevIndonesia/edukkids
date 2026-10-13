import { useState, useEffect, useCallback } from 'react';
import { storageService } from '../services/storageService';

export function useEduProgress() {
  const [profile, setProfileState] = useState(() => storageService.getProfile());
  const [progress, setProgressState] = useState(() => storageService.getProgress());
  const [settings, setSettingsState] = useState(() => storageService.getSettings());
  const [history, setHistoryState] = useState(() => storageService.getHistory());

  const refreshAll = useCallback(() => {
    setProfileState(storageService.getProfile());
    setProgressState(storageService.getProgress());
    setSettingsState(storageService.getSettings());
    setHistoryState(storageService.getHistory());
  }, []);

  useEffect(() => {
    function handleStorageChange() {
      refreshAll();
    }
    window.addEventListener('edukids:storage-change', handleStorageChange);
    return () => {
      window.removeEventListener('edukids:storage-change', handleStorageChange);
    };
  }, [refreshAll]);

  const updateProfile = useCallback((newProfile) => {
    const res = storageService.saveProfile(newProfile);
    setProfileState(res);
    return res;
  }, []);

  const updateProgress = useCallback((newProgress) => {
    const res = storageService.saveProgress(newProgress);
    setProgressState(res);
    return res;
  }, []);

  const updateSettings = useCallback((newSettings) => {
    const res = storageService.saveSettings(newSettings);
    setSettingsState(res);
    return res;
  }, []);

  const recordActivity = useCallback((activity) => {
    const res = storageService.saveActivity(activity);
    setHistoryState(storageService.getHistory());
    return res;
  }, []);

  const resetAll = useCallback(() => {
    storageService.resetProgress();
    refreshAll();
  }, [refreshAll]);

  return {
    profile,
    progress,
    settings,
    history,
    updateProfile,
    updateProgress,
    updateSettings,
    recordActivity,
    resetAll,
    refreshAll
  };
}
