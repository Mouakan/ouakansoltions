import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadGoogleAnalytics } from './analytics';

const CONSENT_KEY = 'cookie-consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try { stored = localStorage.getItem(CONSENT_KEY); } catch { /* ignore */ }
    if (stored === 'granted') loadGoogleAnalytics();
    else if (stored === null) setVisible(true);
  }, []);

  useEffect(() => {
    const reopen = () => setVisible(true);
    window.addEventListener('open-cookie-settings', reopen);
    return () => window.removeEventListener('open-cookie-settings', reopen);
  }, []);

  const respond = (choice: 'granted' | 'denied') => {
    try { localStorage.setItem(CONSENT_KEY, choice); } catch { /* ignore */ }
    if (choice === 'granted') loadGoogleAnalytics();
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Consentement aux cookies">
      <p className="cookie-text">
        Nous utilisons Google Analytics pour mesurer l'audience de ce site. Les données ne sont envoyées qu'après votre accord.
        <Link to="/cookies" className="cookie-link"> En savoir plus</Link>
      </p>
      <div className="cookie-actions">
        <button className="btn-o cookie-btn" onClick={() => respond('denied')}>Refuser</button>
        <button className="btn-p cookie-btn" onClick={() => respond('granted')}>Accepter</button>
      </div>
    </div>
  );
}
