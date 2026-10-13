import { useState, useEffect, useCallback } from 'react';

/**
 * EDUKIDS DYNAMIC DAY & NIGHT WORLD THEME
 * Menentukan tema waktu berdasarkan jam lokal perangkat pengguna (JavaScript Date).
 * Periode:
 * - Pagi:  05.00 – 09.59
 * - Siang: 10.00 – 14.59
 * - Sore:  15.00 – 17.59
 * - Malam: 18.00 – 04.59
 */
export function getTimeTheme(date = new Date()) {
  const hour = date.getHours();

  if (hour >= 5 && hour < 10) {
    return 'morning';
  } else if (hour >= 10 && hour < 15) {
    return 'day';
  } else if (hour >= 15 && hour < 18) {
    return 'evening';
  } else {
    return 'night';
  }
}

export const TIME_THEMES = {
  morning: {
    id: 'morning',
    name: 'Pagi',
    title: 'Petualangan Pagi Segar',
    subtitle: 'Fresh Adventure',
    greeting: 'Selamat Pagi',
    badgeText: '🌅 Suasana Pagi',
    timeRange: '05.00 – 09.59',
    description: 'Langit biru lembut dengan cahaya matahari pagi yang hangat',
    ariaLabel: 'Suasana dunia EduKids: Pagi hari yang cerah dan segar',
    heroBg: 'linear-gradient(135deg, #FFFFFF 0%, #F5F9FD 100%)',
    heroBorder: '#DFEDF8',
    heroShadow: '0 6px 20px rgba(32, 87, 132, 0.06)',
    sky: {
      top: '#CDE7FD',
      mid: '#EEF6FD',
      bottom: '#FFF9ED',
      auraStop1: '#FFF4C2',
      auraStop2: '#FFEAA7',
      sunFill: '#FFF4C2',
      sunStroke: '#FFE58F',
      sunX: 85,
      sunY: 75,
      sunR: 26,
      sunAuraR: 75,
      isNight: false,
      showSun: true,
      showMoon: false,
      showStars: false,
      cloudFill: '#FFFFFF',
      cloudStroke: '#D0E7FA',
      mountDistTop: '#BDDDF4',
      mountDistBottom: '#A2CAE8',
      hillBackTop: '#89D9A6',
      hillBackBottom: '#63BF86',
      hillMidTop: '#55BF7C',
      hillMidBottom: '#3AA362',
      hillForeTop: '#41AA6B',
      hillForeBottom: '#2E8B54',
      treeTrunk: '#6B3F1D',
      pathTop: '#F5E5C9',
      pathMid: '#EBD3AA',
      pathBottom: '#DEC091',
      pathBorder: '#C29F68',
      lanternGlow: false
    }
  },
  day: {
    id: 'day',
    name: 'Siang',
    title: 'Penjelajahan Siang Cerah',
    subtitle: 'Bright Exploration',
    greeting: 'Selamat Siang',
    badgeText: '☀️ Suasana Siang',
    timeRange: '10.00 – 14.59',
    description: 'Langit biru cerah dengan bukit hijau dan sinar matahari terang',
    ariaLabel: 'Suasana dunia EduKids: Siang hari dengan langit biru terang',
    heroBg: 'linear-gradient(135deg, #FFFFFF 0%, #F0F8FF 100%)',
    heroBorder: '#D2E8F8',
    heroShadow: '0 6px 20px rgba(32, 87, 132, 0.07)',
    sky: {
      top: '#62B8F0',
      mid: '#A6DCFB',
      bottom: '#EAF6FF',
      auraStop1: '#FFFEE0',
      auraStop2: '#FFF5A5',
      sunFill: '#FFFEE0',
      sunStroke: '#FFD966',
      sunX: 95,
      sunY: 60,
      sunR: 28,
      sunAuraR: 80,
      isNight: false,
      showSun: true,
      showMoon: false,
      showStars: false,
      cloudFill: '#FFFFFF',
      cloudStroke: '#C4E3FA',
      mountDistTop: '#8EC8F2',
      mountDistBottom: '#6FB4E6',
      hillBackTop: '#78CF94',
      hillBackBottom: '#52BE7B',
      hillMidTop: '#48B86E',
      hillMidBottom: '#2F9C54',
      hillForeTop: '#379F5E',
      hillForeBottom: '#258248',
      treeTrunk: '#613718',
      pathTop: '#F4E3C4',
      pathMid: '#E7CF9E',
      pathBottom: '#D8BD8A',
      pathBorder: '#BE9A63',
      lanternGlow: false
    }
  },
  evening: {
    id: 'evening',
    name: 'Sore',
    title: 'Petualangan Senja Emas',
    subtitle: 'Golden Adventure',
    greeting: 'Selamat Sore',
    badgeText: '🌇 Suasana Sore',
    timeRange: '15.00 – 17.59',
    description: 'Langit jingga keemasan dengan semburat senja peach yang damai',
    ariaLabel: 'Suasana dunia EduKids: Sore hari bernuansa emas dan peach',
    heroBg: 'linear-gradient(135deg, #FFFFFF 0%, #FFF5ED 100%)',
    heroBorder: '#F9DFCE',
    heroShadow: '0 6px 20px rgba(180, 80, 40, 0.07)',
    sky: {
      top: '#577DA3',
      mid: '#E69974',
      bottom: '#FCE0BD',
      auraStop1: '#FFE6AC',
      auraStop2: '#FFB885',
      sunFill: '#FFD579',
      sunStroke: '#FF9E42',
      sunX: 85,
      sunY: 110,
      sunR: 25,
      sunAuraR: 70,
      isNight: false,
      showSun: true,
      showMoon: false,
      showStars: false,
      cloudFill: '#FFF0E8',
      cloudStroke: '#F6CEBF',
      mountDistTop: '#7B8DA3',
      mountDistBottom: '#8D8197',
      hillBackTop: '#9CBF74',
      hillBackBottom: '#779951',
      hillMidTop: '#688E3E',
      hillMidBottom: '#4F722B',
      hillForeTop: '#557630',
      hillForeBottom: '#3B591E',
      treeTrunk: '#542E13',
      pathTop: '#F1D0A7',
      pathMid: '#E2B480',
      pathBottom: '#CC9861',
      pathBorder: '#B6824C',
      lanternGlow: false
    }
  },
  night: {
    id: 'night',
    name: 'Malam',
    title: 'Petualangan Malam Ajaib',
    subtitle: 'Magical Night Adventure',
    greeting: 'Selamat Malam',
    badgeText: '🌙 Suasana Malam',
    timeRange: '18.00 – 04.59',
    description: 'Langit malam biru tua berbintang dengan bulan sabit dan lentera gerbang bercahaya',
    ariaLabel: 'Suasana dunia EduKids: Malam berbintang dengan lentera gerbang menyala',
    heroBg: 'linear-gradient(135deg, #FFFFFF 0%, #EEF3FA 100%)',
    heroBorder: '#CBD8EC',
    heroShadow: '0 6px 20px rgba(20, 35, 60, 0.08)',
    sky: {
      top: '#0E1A2C',
      mid: '#1A2A44',
      bottom: '#2B4163',
      auraStop1: '#FFF1BA',
      auraStop2: '#EAD186',
      sunFill: 'transparent',
      sunStroke: 'transparent',
      sunX: 85,
      sunY: 70,
      sunR: 0,
      sunAuraR: 0,
      isNight: true,
      showSun: false,
      showMoon: true,
      showStars: true,
      cloudFill: '#243750',
      cloudStroke: '#3C5272',
      mountDistTop: '#17273A',
      mountDistBottom: '#101D2C',
      hillBackTop: '#224032',
      hillBackBottom: '#173024',
      hillMidTop: '#193325',
      hillMidBottom: '#11251A',
      hillForeTop: '#13281D',
      hillForeBottom: '#0D1D14',
      treeTrunk: '#3B2110',
      pathTop: '#A59782',
      pathMid: '#8A7B66',
      pathBottom: '#6F604E',
      pathBorder: '#5E503F',
      lanternGlow: true
    }
  }
};

export function useTimeTheme() {
  const [simulatedTheme, setSimulatedThemeState] = useState(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('edukids_sim_theme') || null;
    }
    return null;
  });

  const [activeThemeId, setActiveThemeId] = useState(() => {
    if (simulatedTheme && TIME_THEMES[simulatedTheme]) {
      return simulatedTheme;
    }
    return getTimeTheme();
  });

  useEffect(() => {
    const handleSync = () => {
      const stored = sessionStorage.getItem('edukids_sim_theme');
      if (stored && TIME_THEMES[stored]) {
        setSimulatedThemeState(stored);
        setActiveThemeId(stored);
      } else {
        setSimulatedThemeState(null);
        setActiveThemeId(getTimeTheme());
      }
    };

    window.addEventListener('edukids_theme_sync', handleSync);
    window.addEventListener('storage', handleSync);

    if (simulatedTheme && TIME_THEMES[simulatedTheme]) {
      setActiveThemeId(simulatedTheme);
    } else {
      setActiveThemeId(getTimeTheme());
    }

    const timer = setInterval(() => {
      const stored = sessionStorage.getItem('edukids_sim_theme');
      if (!stored) {
        setActiveThemeId(getTimeTheme());
      }
    }, 60000);

    return () => {
      clearInterval(timer);
      window.removeEventListener('edukids_theme_sync', handleSync);
      window.removeEventListener('storage', handleSync);
    };
  }, [simulatedTheme]);

  const setSimulatedTheme = useCallback((themeId) => {
    if (themeId && TIME_THEMES[themeId]) {
      setSimulatedThemeState(themeId);
      sessionStorage.setItem('edukids_sim_theme', themeId);
      setActiveThemeId(themeId);
    } else {
      setSimulatedThemeState(null);
      sessionStorage.removeItem('edukids_sim_theme');
      setActiveThemeId(getTimeTheme());
    }
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('edukids_theme_sync'));
    }
  }, []);

  const config = TIME_THEMES[activeThemeId] || TIME_THEMES.day;
  const isAuto = !simulatedTheme;

  return {
    themeId: activeThemeId,
    config,
    isAuto,
    setSimulatedTheme
  };
}
