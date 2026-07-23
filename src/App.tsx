import { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Bot, Zap, BarChart3, Monitor, Link2, GraduationCap, Handshake, Search, Target, Wrench, Rocket, RefreshCw, Globe, Lock, FileText, Ban, Key, RotateCcw, Video, Phone, MessageCircle, AlertTriangle, PenLine, Star, Sparkles, Database, Mic } from 'lucide-react';
import { SiClaude, SiGooglegemini, SiSupabase, SiN8n, SiMake, SiZapier, SiPython, SiReact, SiVercel, SiAirtable, SiLangchain, SiElevenlabs } from '@icons-pack/react-simple-icons';
import { MentionsLegales, PolitiqueConfidentialite, CGV, Cookies } from './Legal';
import CookieConsent from './CookieConsent';
import './index.css';

/* ═══ CONFIG — à personnaliser (voir README) ═══ */
const CONFIG = {
  // Web3Forms — collez votre access key (gratuite sur web3forms.com)
  WEB3FORMS_KEY: 'd6f5451e-6b04-415e-9149-88f5a4c2f21a',
  FORM_ENDPOINT: 'https://api.web3forms.com/submit',
  EMAIL: 'ouakan.solutions@gmail.com',
};

/* ═══ Avatar SVG ═══ */
function Avatar({ skin, hair, hairStyle, shirt, glasses, size = 54 }: { skin: string; hair: string; hairStyle: 'short' | 'long' | 'bun' | 'curly' | 'side' | 'bald'; shirt: string; glasses?: boolean; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <path d="M18 100 Q18 74 50 74 Q82 74 82 100 Z" fill={shirt} />
      <rect x="43" y="60" width="14" height="16" rx="6" fill={skin} />
      <circle cx="50" cy="42" r="21" fill={skin} />
      {hairStyle === 'short' && <path d="M29 40 Q29 19 50 19 Q71 19 71 40 Q68 26 50 26 Q32 26 29 40 Z" fill={hair} />}
      {hairStyle === 'side' && <path d="M29 42 Q28 18 52 19 Q72 20 71 40 Q70 28 56 25 Q44 23 38 30 Q31 34 29 42 Z" fill={hair} />}
      {hairStyle === 'long' && <path d="M27 62 Q25 20 50 20 Q75 20 73 62 L66 62 Q70 34 50 30 Q30 34 34 62 Z" fill={hair} />}
      {hairStyle === 'bun' && (<><circle cx="50" cy="16" r="8" fill={hair} /><path d="M29 40 Q29 20 50 20 Q71 20 71 40 Q68 27 50 26 Q32 27 29 40 Z" fill={hair} /></>)}
      {hairStyle === 'curly' && (<><circle cx="34" cy="27" r="8" fill={hair} /><circle cx="46" cy="21" r="9" fill={hair} /><circle cx="59" cy="22" r="8" fill={hair} /><circle cx="68" cy="30" r="7" fill={hair} /></>)}
      {hairStyle === 'bald' && <path d="M31 34 Q34 22 50 21 Q66 22 69 34 Q60 28 50 28 Q40 28 31 34 Z" fill={hair} opacity=".35" />}
      <circle cx="42.5" cy="42" r="2.4" fill="#1E2433" />
      <circle cx="57.5" cy="42" r="2.4" fill="#1E2433" />
      {glasses && (<g stroke="#2B3346" strokeWidth="2" fill="none"><circle cx="42.5" cy="42" r="6.5" /><circle cx="57.5" cy="42" r="6.5" /><line x1="49" y1="42" x2="51" y2="42" /></g>)}
      <path d="M43 51 Q50 56 57 51" stroke="#1E2433" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <circle cx="37" cy="48" r="3" fill="#FF9D8A" opacity=".35" />
      <circle cx="63" cy="48" r="3" fill="#FF9D8A" opacity=".35" />
    </svg>
  );
}

/* ═══ NAV ═══ */
function Nav() {
  const [scr, setScr] = useState(false);
  const [mo, setMo] = useState(false);
  useEffect(() => { const f = () => setScr(window.scrollY > 24); window.addEventListener('scroll', f); return () => window.removeEventListener('scroll', f); }, []);
  const links = [['Agents IA', 'agents'], ['Services', 'services'], ['Méthode', 'methode'], ['Réalisations', 'realisations'], ['FAQ', 'faq']];
  const go = (id: string) => { setMo(false); setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 10); };
  return (
    <nav className={scr ? 'scr' : ''} style={!scr ? { background: 'transparent' } : {}}>
      <div className="nav-in">
        <a href="#" className="logo">
          <div className="logo-ic"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div>
          <span className="logo-tx" style={!scr ? { color: '#fff' } : {}}>Ouakan<b> Solutions</b></span>
        </a>
        <div className="nav-lk">
          {links.map(([l, id]) => <button key={id} className="nav-a" style={!scr ? { color: 'rgba(255,255,255,.75)' } : {}} onClick={() => go(id)}>{l}</button>)}
        </div>
        <div className="nav-r">
          <button className="btn-p nav-cta" onClick={() => go('rdv')}>Prendre rendez-vous</button>
          <button className="burger" style={!scr ? { background: 'rgba(255,255,255,.08)', borderColor: 'rgba(255,255,255,.2)', color: '#fff' } : {}} onClick={() => setMo(v => !v)} aria-label="Menu">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">{mo ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></> : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>}</svg>
          </button>
        </div>
      </div>
      {mo && (
        <div className="mmenu">
          {links.map(([l, id]) => <button key={id} className="mlink" onClick={() => go(id)}>{l}</button>)}
          <button className="btn-p mcta" onClick={() => go('rdv')}>Prendre rendez-vous →</button>
        </div>
      )}
    </nav>
  );
}

/* ═══ HERO ═══ */
function Hero() {
  return (
    <header className="hero">
      <div className="hero-grid-bg" />
      <div className="hero-glow" />
      <div className="container hero-in">
        <span className="kick">Agence IA & Automatisation</span>
        <h1 className="hero-h1">Vos tâches répétitives, confiées à des <span className="hl">agents IA sur mesure</span></h1>
        <p className="hero-p">Nous automatisons ce qui vous fait perdre du temps. Vos équipes se concentrent sur ce qui compte vraiment.</p>
        <div className="hero-cta">
          <button className="btn-p" style={{ fontSize: 16, padding: '15px 30px' }} onClick={() => document.getElementById('rdv')?.scrollIntoView({ behavior: 'smooth' })}>
            Obtenir mon audit gratuit
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
          <button className="btn-o" style={{ fontSize: 16, padding: '14px 30px' }} onClick={() => document.getElementById('agents')?.scrollIntoView({ behavior: 'smooth' })}>Découvrir les agents IA</button>
        </div>
        <div className="hero-proof">
          {[['-70%', 'de temps sur les tâches répétitives'], ['15h+', 'gagnées par semaine et par équipe'], ['48h', 'pour un premier prototype'], ['100%', 'Conforme RGPD']].map(([n, l]) => (
            <div key={l} className="proof-i"><div className="proof-n">{n}</div><div className="proof-l">{l}</div></div>
          ))}
        </div>
      </div>
    </header>
  );
}

/* ═══ AVANT/APRÈS ═══ */
function BeforeAfter() {
  return (
    <section className="sec sec-dark">
      <div className="container">
        <div className="sec-head">
          <span className="kick">Le déclic</span>
          <h2 className="h-sec">Ce que vos équipes vivent aujourd'hui. Ce qu'elles pourraient vivre demain.</h2>
        </div>
        <div className="ba-grid">
          <div className="ba-col ba-before">
            <span className="ba-tag">✋ Avant — tout à la main</span>
            <div className="ba-title">Des journées mangées par la répétition</div>
            <div className="ba-list">
              {['Des données ressaisies plusieurs fois entre différents outils', 'Des rapports refaits manuellement chaque semaine ou chaque mois', 'Des relances et suivis oubliés, des opportunités perdues', 'Des documents traités et classés un par un', 'Les mêmes demandes traitées encore et encore', 'Des erreurs humaines qui coûtent cher à corriger'].map(t => <div key={t} className="ba-item"><span className="ba-ic">❌</span>{t}</div>)}
            </div>
            <div className="ba-result">⏱ Résultat : 15 à 20h perdues / semaine / personne</div>
          </div>
          <div className="ba-vs fd">VS</div>
          <div className="ba-col ba-after">
            <span className="ba-tag">⚡ Après — avec Ouakan Solutions</span>
            <div className="ba-title">Des agents IA qui travaillent pour vous, 24h/24</div>
            <div className="ba-list">
              {['Vos données circulent seules entre vos outils, sans erreur', 'Vos rapports se génèrent automatiquement, toujours à jour', 'Chaque relance part au bon moment, sans y penser', 'Vos documents sont lus, triés et classés par IA', 'Les demandes récurrentes sont traitées instantanément', 'Vos équipes se concentrent sur la valeur, pas la saisie'].map(t => <div key={t} className="ba-item"><span className="ba-ic">✅</span>{t}</div>)}
            </div>
            <div className="ba-result">🚀 Résultat : ROI mesurable dès le 1er mois</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══ AGENTS ═══ */
const AGENTS = [
  { name: 'Pierre', role: 'Chasseur immobilier', ac: '#5B84FF', av: { skin: '#F0C29B', hair: '#4A3728', hairStyle: 'short' as const, shirt: '#2E5CFF' }, tasks: ['Scan des annonces en continu', 'Qualification automatique des leads', 'Relances acquéreurs personnalisées'] },
  { name: 'Emma', role: "Assistante emails d'un manager automobile", ac: '#00C2E0', av: { skin: '#FADCBC', hair: '#B4622D', hairStyle: 'long' as const, shirt: '#00A8C4' }, tasks: ['Tri et priorisation automatique des messages', 'Réponses pré-rédigées aux demandes récurrentes', "Extraction des tâches vers l'agenda"] },
  { name: 'Marc', role: 'Sourcing LinkedIn pour un service RH', ac: '#3DDBA5', av: { skin: '#E8B48C', hair: '#2B2B2B', hairStyle: 'side' as const, shirt: '#0BB07B', glasses: true }, tasks: ['Ciblage de profils selon critères de poste', 'Séquences de messages personnalisés', 'Relances automatiques programmées'] },
  { name: 'Sofia', role: "Marketing digital d'une boutique e-commerce", ac: '#F59E0B', av: { skin: '#D9A066', hair: '#1F1A17', hairStyle: 'bun' as const, shirt: '#E8890C' }, tasks: ['Planification des campagnes multi-canaux', 'Génération de visuels et contenus publicitaires', 'Analyse des performances et recommandations'] },
  { name: 'Lucas', role: "Community manager d'un restaurant italien", ac: '#A78BFA', av: { skin: '#F0C29B', hair: '#6B4E2E', hairStyle: 'curly' as const, shirt: '#7C5CE0' }, tasks: ['Création de contenus (plats du jour, événements)', 'Programmation des publications', 'Réponses automatiques aux commentaires'] },
  { name: 'Nadia', role: "Support client d'une agence de tourisme", ac: '#3DDBA5', av: { skin: '#C68B59', hair: '#12100E', hairStyle: 'long' as const, shirt: '#0BB07B' }, tasks: ['Réponses instantanées aux questions fréquentes', 'Escalade automatique des cas complexes', 'Suivi de la satisfaction post-échange'] },
  { name: 'Hugo', role: 'Analyste NVH (bruit & vibration) automobile', ac: '#5B84FF', av: { skin: '#FADCBC', hair: '#8A8A8A', hairStyle: 'bald' as const, shirt: '#3D6BFF', glasses: true }, tasks: ['Analyse automatique des relevés vibratoires et acoustiques', "Détection des anomalies sur bancs d'essai", 'Génération des rapports de mesure'] },
  { name: 'Inès', role: "Rédaction & publication de blog pour un cabinet d'avocats", ac: '#F59E0B', av: { skin: '#E8B48C', hair: '#3D2817', hairStyle: 'bun' as const, shirt: '#DB7A0B' }, tasks: ['Génération d\'articles optimisés SEO', 'Planification et publication automatique', 'Suggestions de sujets selon les tendances'] },
];
function Agents() {
  return (
    <section id="agents" className="sec sec-dark">
      <div className="container">
        <div className="sec-head">
          <span className="kick">Nos agents IA</span>
          <h2 className="h-sec">Des agents IA que nous avons créés pour d'autres entreprises</h2>
          <p className="sub">Voici quelques exemples concrets d'agents développés sur mesure pour nos clients. Le vôtre sera unique : conçu pour vos processus, vos outils et vos règles métier.</p>
          <p className="sec-disclaimer">Exemples représentatifs de missions type, à titre d'illustration — profils illustratifs.</p>
        </div>
        <div className="agents-grid">
          {AGENTS.map(a => (
            <div key={a.name} className="agent-card" style={{ ['--ac' as string]: a.ac }}>
              <div className="agent-top">
                <div className="agent-av" style={{ background: `${a.ac}18`, border: `1px solid ${a.ac}40` }}><Avatar {...a.av} size={54} /></div>
                <div><div className="agent-name">{a.name}</div><div className="agent-role">{a.role}</div></div>
              </div>
              <div className="agent-tasks">{a.tasks.map(t => <div key={t} className="agent-task">{t}</div>)}</div>
            </div>
          ))}
          <div className="agent-card agent-cta">
            <div className="agent-cta-plus">+</div>
            <div className="agent-name" style={{ fontSize: 19, marginBottom: 10 }}>Votre agent IA sur mesure</div>
            <p className="agent-desc" style={{ marginBottom: 22 }}>Décrivez-nous vos tâches répétitives — on conçoit l'agent qui les prend en charge.</p>
            <button className="btn-p" style={{ width: '100%' }} onClick={() => document.getElementById('rdv')?.scrollIntoView({ behavior: 'smooth' })}>Obtenir mon audit gratuit</button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══ RÉALISATIONS ═══ */
const PROJECTS = [
  { t: 'SONAR', d: "Outil d'aide au diagnostic : face à un défaut, il retrouve des cas similaires déjà résolus et guide vers la solution appliquée à l'époque.", tags: ['IA', 'RAG', 'Acoustique'] },
  { t: 'SalonPilot', d: "Application de gestion pour salons : planning, encaissement, suivi des indicateurs de performance.", tags: ['React', 'SaaS', 'KPI'] },
  { t: "Suivi d'étalonnage", d: "Application de gestion métrologique : suivi des échéances, rappels automatiques, gestion des prestataires.", tags: ['Automatisation', 'Métrologie'] },
  { t: 'Plateforme de gestion — centre de formation football', d: "Application métier complète : gestion des catégories et des droits par éducateur, portail simplifié pour les parents, organisation du covoiturage entre familles.", tags: ['React', 'Application métier', 'Multi-profils'] },
];
function Realisations() {
  const doubled = [...PROJECTS, ...PROJECTS];
  return (
    <section id="realisations" className="sec sec-dark testi-sec">
      <div className="container">
        <div className="sec-head">
          <span className="kick">Réalisations</span>
          <h2 className="h-sec">Des outils qui tournent déjà en production</h2>
          <p className="sub">Quelques applications et automatisations livrées, au-delà des exemples d'agents IA présentés plus haut.</p>
        </div>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {doubled.map((p, i) => (
            <div key={i} className="card svc-card marquee-item">
              <h3 className="svc-t">{p.t}</h3>
              <p className="svc-d">{p.d}</p>
              <div className="svc-tags">{p.tags.map(tag => <span key={tag} className="svc-tag">{tag}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ SERVICES ═══ */
const SERVICES = [
  { ic: Bot, t: 'Agents IA sur mesure', d: "Des collaborateurs virtuels conçus pour vos processus : emails, prospection, documents, veille, support client.", tags: ['Agents autonomes', 'IA générative', 'Sur mesure'] },
  { ic: Zap, t: 'Automatisation de workflows', d: "Vos outils connectés entre eux, vos tâches répétitives éliminées. Sans changer vos logiciels existants.", tags: ['n8n', 'Make', 'API'] },
  { ic: BarChart3, t: 'Data & reporting', d: "Vos données consolidées, fiabilisées et transformées en tableaux de bord clairs, actualisés automatiquement.", tags: ['Consolidation', 'Dashboards', 'Reporting auto'] },
  { ic: Monitor, t: 'Applications & outils métier', d: "Sites web, plateformes SaaS et applications internes modernes, pensés pour vos équipes et vos clients.", tags: ['Web', 'SaaS', 'Apps métier'] },
  { ic: Link2, t: 'Intégration CRM / ERP', d: "Synchronisation de vos données entre CRM, ERP, emails et tableurs. Une seule source de vérité.", tags: ['CRM', 'ERP', 'Synchronisation'] },
  { ic: GraduationCap, t: 'Transition IA & conseil', d: "Audit de maturité, feuille de route IA, formation de vos équipes et accompagnement continu.", tags: ['Audit', 'Formation', 'Accompagnement'] },
];
function Services() {
  return (
    <section id="services" className="sec">
      <div className="container">
        <div className="sec-head">
          <span className="kick">Nos services</span>
          <h2 className="h-sec">Automatisation, agents IA, data, applications métier & conseil</h2>
          <p className="sub">Un seul partenaire pour identifier, concevoir, déployer et faire vivre vos solutions intelligentes.</p>
        </div>
        <div className="svc-grid">
          {SERVICES.map(s => (
            <div key={s.t} className="card svc-card real-card">
              <div className="svc-ic"><s.ic size={22} strokeWidth={2} /></div>
              <h3 className="svc-t">{s.t}</h3>
              <p className="svc-d">{s.d}</p>
              <div className="svc-tags">{s.tags.map(t => <span key={t} className="svc-tag">{t}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ MÉTHODE ═══ */
const STEPS = [
  [Handshake, 'Visite & écoute', "Sur site ou en visio : on observe vos équipes travailler et on identifie les irritants du quotidien."],
  [Search, 'Audit des processus', "Cartographie de vos tâches répétitives, chiffrage du temps perdu et des gains potentiels."],
  [Target, 'Priorisation ROI', "On sélectionne ensemble les automatisations au meilleur rapport impact / effort."],
  [Wrench, 'Conception sur mesure', "Développement de vos agents IA et automatisations, avec démos régulières et prototype sous 48h."],
  [Rocket, 'Déploiement & formation', "Mise en production sécurisée et formation de vos équipes pour une adoption totale."],
  [RefreshCw, 'Suivi & amélioration continue', "Maintenance, monitoring des performances et évolutions au fil de vos besoins."],
] as const;
function Methode() {
  return (
    <section id="methode" className="sec sec-dark">
      <div className="container">
        <div className="sec-head">
          <span className="kick">Notre méthode</span>
          <h2 className="h-sec">Un accompagnement de bout en bout, pas juste un outil livré</h2>
        </div>
        <div className="proc-wrap">
          {STEPS.map(([Ic, t, d], i) => (
            <div key={t} className="card proc-card">
              <span className="proc-n fd">{String(i + 1).padStart(2, '0')}</span>
              <div className="proc-ic"><Ic size={21} strokeWidth={2} /></div>
              <h3 className="proc-t">{t}</h3>
              <p className="proc-d">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ TÉMOIGNAGES ═══ */
const TESTIS = [
  ['MD', 'Marie D.', 'Directrice, agence immobilière', "Le suivi de nos leads est enfin automatisé. +35% de conversion en 6 semaines, et mon équipe respire."],
  ['YB', 'Yassine B.', 'Manager, concession automobile', "Mes emails clients et fournisseurs sont triés avant même que j'arrive au bureau. Je ne perds plus rien dans le flot quotidien."],
  ['CR', 'Camille R.', 'Responsable RH, PME industrielle', "Le sourcing LinkedIn qui me prenait des heures chaque semaine tourne maintenant tout seul. Mes shortlists sont prêtes le lundi matin."],
  ['GM', 'Giulia M.', 'Gérante, restaurant italien', "Nos réseaux sociaux étaient à l'abandon. Aujourd'hui les publications et les réponses aux avis se font seules, et ça se voit sur les réservations."],
  ['JP', 'Julien P.', 'Fondateur, boutique e-commerce', "Mes campagnes sont planifiées et mes visuels générés automatiquement. +18% de trafic en 2 mois."],
  ['NF', 'Nicolas F.', 'Ingénieur, équipementier automobile', "SONAR retrouve en quelques secondes des cas similaires à nos défauts vibratoires. Ce qui prenait une demi-journée d'analyse se fait maintenant instantanément."],
  ['SL', 'Sophie L.', 'Gérante, institut de beauté', "SalonPilot gère nos plannings et notre encaissement au quotidien. Plus aucun créneau perdu, +22% de CA."],
  ['AD', 'Antoine D.', 'Responsable, centre de formation sportif', "La plateforme gère les catégories, les droits des éducateurs et le covoiturage entre familles. Un vrai gain de temps pour toute l'équipe."],
];
function Testimonials() {
  const doubled = [...TESTIS, ...TESTIS];
  return (
    <section className="sec testi-sec">
      <div className="container">
        <div className="sec-head">
          <span className="kick">Ils nous font confiance</span>
          <h2 className="h-sec">Des résultats concrets, mesurés</h2>
          <p className="sec-disclaimer">Exemples représentatifs des résultats obtenus sur nos missions.</p>
        </div>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {doubled.map(([av, n, r, q], i) => (
            <div key={i} className="card testi-c real-card marquee-item">
              <div className="testi-stars">{Array.from({ length: 5 }).map((_, si) => <Star key={si} size={14} fill="currentColor" strokeWidth={0} />)}</div>
              <p className="testi-q">"{q}"</p>
              <div className="testi-a"><div className="testi-av">{av}</div><div><div className="testi-n">{n}</div><div className="testi-r">{r}</div></div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ SÉCURITÉ ═══ */
function Security() {
  return (
    <section className="sec">
      <div className="container">
        <div className="sec-head">
          <span className="kick"><Lock size={12} /> Sécurité & confidentialité</span>
          <h2 className="h-sec">Vos données sont votre patrimoine. On les traite comme tel.</h2>
          <p className="sub">La confiance est la base de chaque mission. Voici nos engagements, sans exception.</p>
        </div>
        <div className="secu-grid">
          {([[Globe, 'Conformité RGPD stricte', "Vos données sont traitées conformément au RGPD, avec des prestataires soumis à des garanties contractuelles reconnues."], [Lock, 'Chiffrement systématique', "Données chiffrées en transit et au repos. Accès restreints et tracés."], [FileText, 'NDA dès le premier échange', "Un accord de confidentialité signé avant même de voir vos fichiers."], [Ban, 'Zéro revente, zéro partage', "Vos données ne servent jamais à entraîner des modèles ni à quoi que ce soit d'autre."], [Key, 'Vous restez propriétaire', "Code, automatisations et données : tout vous appartient à 100% en fin de mission."], [RotateCcw, 'Réversibilité garantie', "Documentation complète livrée. Vous reprenez la main librement, quand vous voulez."]] as const).map(([Ic, t, d], i) => (
            <div key={i} className="secu-card"><div className="secu-ic"><Ic size={22} strokeWidth={2} /></div><div className="secu-t">{t}</div><div className="secu-d">{d}</div></div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ STACK TECHNIQUE ═══ */
const STACK = [
  ['Modèles / LLM', [['GPT', Sparkles], ['Claude', SiClaude], ['Gemini', SiGooglegemini]]],
  ['RAG & bases vectorielles', [['Supabase (pgvector)', SiSupabase], ['Chroma', Database]]],
  ['Orchestration & automatisation', [['n8n', SiN8n], ['Make', SiMake], ['Zapier', SiZapier]]],
  ['Développement & déploiement', [['Python', SiPython], ['React', SiReact], ['Vercel', SiVercel], ['Airtable', SiAirtable]]],
  ['Frameworks agents', [['LangChain', SiLangchain], ['Assistants API', Bot]]],
  ['Voix & transcription', [['ElevenLabs', SiElevenlabs], ['Whisper', Mic]]],
] as const;
function Stack() {
  return (
    <section id="stack" className="sec sec-dark">
      <div className="container">
        <div className="sec-head">
          <span className="kick">Environnement & outils IA</span>
          <h2 className="h-sec">Des outils reconnus, pas une boîte noire</h2>
          <p className="sub">Le choix des outils s'adapte à chaque projet — voici les briques que nous utilisons le plus souvent.</p>
        </div>
        <div className="stack-wrap">
          {STACK.map(([cat, tools]) => (
            <div key={cat} className="card stack-card">
              <div className="stack-cat-t">{cat}</div>
              <div className="stack-chips">
                {tools.map(([name, Icon]) => (
                  <div key={name} className="stack-chip"><Icon size={16} /><span>{name}</span></div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="stack-tech"><b>Techniques</b> — RAG (génération augmentée par récupération), function calling, prompt engineering, traitement de documents, intégrations API (REST, webhooks), connexion CRM / ERP.</p>
        <p className="stack-more">Et bien d'autres outils selon les besoins spécifiques de chaque projet — cette liste évolue en continu.</p>
      </div>
    </section>
  );
}

/* ═══ FAQ ═══ */
const FAQS = [
  ["Combien coûte une mission d'automatisation ?", "Chaque projet est chiffré après l'audit gratuit. Vous connaissez toujours le prix exact avant de vous engager, et le ROI estimé avec."],
  ["Devons-nous changer nos logiciels actuels ?", "Non. Nous nous branchons sur vos outils existants. L'objectif est d'automatiser autour de ce que vos équipes connaissent déjà."],
  ["Traitez-vous aussi les petites missions ciblées ?", "Oui, absolument. Une automatisation ponctuelle, un fichier à fiabiliser, un rapport à automatiser : nous prenons aussi les missions courtes, avec la même rigueur."],
  ["Que deviennent nos données confidentielles ?", "Elles restent les vôtres. NDA signé avant toute mission, traitement conforme au RGPD via des prestataires sous garanties contractuelles, et aucune donnée n'est utilisée pour autre chose que votre projet."],
  ["En combien de temps voit-on les premiers résultats ?", "Un prototype fonctionnel est présenté sous 48h à 2 semaines selon la complexité. Les automatisations simples sont en production en moins de 15 jours."],
  ["Et si l'automatisation tombe en panne ?", "Chaque livraison inclut une garantie de 30 jours sur la correction des bugs bloquants. Au-delà, un contrat de maintenance optionnel peut prendre le relais pour un suivi continu, et la documentation complète vous garantit une totale réversibilité."],
  ["Formez-vous nos équipes ?", "Oui, c'est inclus dans chaque déploiement. Vos équipes sont formées à l'utilisation et un support reste disponible ensuite."],
];
function FAQ() {
  const [o, setO] = useState<number | null>(null);
  return (
    <section id="faq" className="sec">
      <div className="container">
        <div className="sec-head"><span className="kick">FAQ</span><h2 className="h-sec">Vos questions, nos réponses</h2></div>
        <div className="faq-wrap">
          {FAQS.map(([q, a], i) => (
            <div key={i} className="faq-i">
              <button className="faq-q" onClick={() => setO(o === i ? null : i)}><span>{q}</span><span className="faq-x" style={{ transform: o === i ? 'rotate(45deg)' : 'none' }}>+</span></button>
              <div className="faq-a" style={{ maxHeight: o === i ? 240 : 0, opacity: o === i ? 1 : 0 }}><p>{a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ RDV ═══ */
function genDays() {
  const days: { label: string; day: string }[] = [];
  const d = new Date(); d.setDate(d.getDate() + 1);
  const names = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
  const months = ['jan', 'fév', 'mar', 'avr', 'mai', 'juin', 'juil', 'août', 'sep', 'oct', 'nov', 'déc'];
  while (days.length < 10) { const wd = d.getDay(); if (wd !== 0 && wd !== 6) days.push({ label: `${d.getDate()} ${months[d.getMonth()]}`, day: names[wd] }); d.setDate(d.getDate() + 1); }
  return days;
}
const SLOTS = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'];
function RDV() {
  const days = useRef(genDays()).current;
  const [step, setStep] = useState(1);
  const [selDay, setSelDay] = useState<number | null>(null);
  const [selSlot, setSelSlot] = useState<string | null>(null);
  const [mode, setMode] = useState<'visio' | 'tel'>('visio');
  const [f, setF] = useState({ name: '', email: '', phone: '', company: '', need: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [err, setErr] = useState('');
  const ch = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setF(p => ({ ...p, [e.target.name]: e.target.value }));
  const canNext1 = selDay !== null && selSlot !== null;
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim());
  const canSend = f.name.trim().length > 1 && emailOk && f.phone.trim().length > 5 && !sending;
  const submit = async () => {
    if (!canSend) return;
    setSending(true); setErr('');
    const d = days[selDay!];
    const payload = { access_key: CONFIG.WEB3FORMS_KEY, subject: `Nouveau RDV — ${f.name} (${d.day} ${d.label} ${selSlot})`, from_name: 'Site Ouakan Solutions', Nom: f.name.trim(), Email: f.email.trim(), Telephone: f.phone.trim(), Entreprise: f.company.trim() || '—', Besoin: f.need || '—', Message: f.message.trim() || '—', Creneau: `${d.day} ${d.label} à ${selSlot}`, Format: mode === 'visio' ? 'Visioconférence' : 'Appel téléphonique' };
    try {
      const r = await fetch(CONFIG.FORM_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(payload) });
      if (!r.ok) throw new Error();
      setSent(true);
    } catch { setErr(`Envoi impossible pour le moment. Écrivez-nous directement à ${CONFIG.EMAIL}`); }
    finally { setSending(false); }
  };
  return (
    <section id="rdv" className="sec sec-dark">
      <div className="container">
        <div className="sec-head"><span className="kick">Rendez-vous</span><h2 className="h-sec">Réservez votre audit gratuit</h2><p className="sub">30 minutes en visio ou par téléphone. Vous repartez avec des pistes concrètes — que vous travailliez avec nous ou non.</p></div>
        <div className="rdv-box">
          {sent ? (
            <div style={{ textAlign: 'center', padding: '48px 20px' }}>
              <div style={{ fontSize: 52, marginBottom: 16 }}>🗓️</div>
              <h3 className="fd" style={{ fontSize: 22, fontWeight: 700, marginBottom: 10, color: '#0B1220' }}>Demande de rendez-vous envoyée !</h3>
              <p style={{ color: 'var(--muted)', fontSize: 15, maxWidth: 440, margin: '0 auto' }}><b style={{ color: 'var(--ink)' }}>{days[selDay!]?.day} {days[selDay!]?.label} à {selSlot}</b> en {mode === 'visio' ? 'visioconférence' : 'appel téléphonique'}.<br /><br />Vous recevrez une confirmation par email sous quelques heures.</p>
            </div>
          ) : (<>
            <div className="rdv-steps">
              {['Date & créneau', 'Vos coordonnées'].map((s, i) => (<div key={s} className={`rdv-step ${step === i + 1 ? 'act' : ''} ${step > i + 1 ? 'done' : ''}`}><span className="rdv-step-n">{step > i + 1 ? '✓' : i + 1}</span>{s}</div>))}
            </div>
            {step === 1 && (<div>
              <div className="rdv-lbl">Format du rendez-vous</div>
              <div className="rdv-modes">
                <button className={`rdv-mode ${mode === 'visio' ? 'sel' : ''}`} onClick={() => setMode('visio')}><Video size={20} /><div><div style={{ fontWeight: 600, fontSize: 14 }}>Visioconférence</div><div style={{ fontSize: 12, color: 'var(--muted)' }}>Lien envoyé par email</div></div></button>
                <button className={`rdv-mode ${mode === 'tel' ? 'sel' : ''}`} onClick={() => setMode('tel')}><Phone size={20} /><div><div style={{ fontWeight: 600, fontSize: 14 }}>Appel téléphonique</div><div style={{ fontSize: 12, color: 'var(--muted)' }}>On vous appelle</div></div></button>
              </div>
              <div className="rdv-lbl">Choisissez une date</div>
              <div className="rdv-days">{days.map((d, i) => (<button key={i} className={`rdv-day ${selDay === i ? 'sel' : ''}`} onClick={() => { setSelDay(i); setSelSlot(null); }}><span className="rdv-day-n">{d.day}</span><span className="rdv-day-d">{d.label}</span></button>))}</div>
              {selDay !== null && (<><div className="rdv-lbl">Choisissez un créneau</div><div className="rdv-slots">{SLOTS.map(s => <button key={s} className={`rdv-slot ${selSlot === s ? 'sel' : ''}`} onClick={() => setSelSlot(s)}>{s}</button>)}</div></>)}
              <button className="btn-p" style={{ width: '100%', marginTop: 24, padding: 15, opacity: canNext1 ? 1 : .45, cursor: canNext1 ? 'pointer' : 'not-allowed' }} disabled={!canNext1} onClick={() => setStep(2)}>Continuer →</button>
            </div>)}
            {step === 2 && (<div className="f-in">
              <div className="rdv-recap">🗓️ <b>{days[selDay!]?.day} {days[selDay!]?.label} à {selSlot}</b> · {mode === 'visio' ? <span className="rdv-recap-mode"><Video size={14} /> Visio</span> : <span className="rdv-recap-mode"><Phone size={14} /> Appel</span>}<button onClick={() => setStep(1)} style={{ marginLeft: 'auto', background: 'none', border: 'none', color: 'var(--blue)', cursor: 'pointer', fontSize: 13, fontWeight: 600 }}>Modifier</button></div>
              <div className="f-row">
                <div><label htmlFor="rdv-name" className="sr-only">Nom et prénom</label><input id="rdv-name" className="f-i" name="name" placeholder="Nom & prénom *" value={f.name} onChange={ch} /></div>
                <div><label htmlFor="rdv-email" className="sr-only">Email professionnel</label><input id="rdv-email" className="f-i" name="email" type="email" placeholder="Email professionnel *" value={f.email} onChange={ch} /></div>
              </div>
              <div className="f-row">
                <div><label htmlFor="rdv-phone" className="sr-only">Téléphone</label><input id="rdv-phone" className="f-i" name="phone" type="tel" placeholder="Téléphone *" value={f.phone} onChange={ch} /></div>
                <div><label htmlFor="rdv-company" className="sr-only">Entreprise (optionnel)</label><input id="rdv-company" className="f-i" name="company" placeholder="Entreprise (optionnel)" value={f.company} onChange={ch} /></div>
              </div>
              <label htmlFor="rdv-need" className="sr-only">Votre besoin principal</label>
              <select id="rdv-need" className="f-i" name="need" value={f.need} onChange={ch}><option value="">Votre besoin principal</option><option>Automatiser des tâches répétitives</option><option>Agent IA sur mesure</option><option>Data & reporting</option><option>Site web / application</option><option>Intégration CRM / ERP</option><option>Je ne sais pas encore — audit d'abord</option></select>
              <label htmlFor="rdv-message" className="sr-only">Décrivez votre situation (optionnel)</label>
              <textarea id="rdv-message" className="f-i f-ta" name="message" rows={3} placeholder="Décrivez votre situation (optionnel)" value={f.message} onChange={ch} />
              {err && <div className="f-err"><AlertTriangle size={15} /> {err}</div>}
              <button className="btn-p" style={{ width: '100%', padding: 15, fontSize: 15.5, opacity: canSend ? 1 : .45, cursor: canSend ? 'pointer' : 'not-allowed' }} disabled={!canSend} onClick={submit}>{sending ? 'Envoi en cours…' : 'Confirmer mon rendez-vous →'}</button>
              <p className="f-note">Sans engagement · Confirmation par email · NDA sur demande · RGPD conforme</p>
            </div>)}
          </>)}
        </div>
      </div>
    </section>
  );
}

/* ═══ FOOTER ═══ */
function Footer() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <footer className="foot">
      <div className="container">
        <div className="foot-g">
          <div>
            <a href="#" className="logo foot-logo"><div className="logo-ic"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div><span className="logo-tx" style={{ color: '#fff' }}>Ouakan<b style={{ color: '#7C9AFF' }}> Solutions</b></span></a>
            <p className="foot-about">Agence IA & Automatisation. Nous transformons vos tâches répétitives en processus intelligents.</p>
            <a href="mailto:ouakan.solutions@gmail.com" className="foot-mail">ouakan.solutions@gmail.com</a>
          </div>
          <div><div className="foot-ct">Services</div>{[['Agents IA sur mesure', 'agents'], ['Automatisation', 'services'], ['Data & reporting', 'services'], ['Applications métier', 'services']].map(([l, id]) => <button key={l} className="foot-l" onClick={() => go(id)}>{l}</button>)}</div>
          <div><div className="foot-ct">Entreprise</div>{[['Notre méthode', 'methode'], ['FAQ', 'faq'], ['Prendre rendez-vous', 'rdv']].map(([l, id]) => <button key={l} className="foot-l" onClick={() => go(id)}>{l}</button>)}</div>
          <div>
            <div className="foot-ct">Légal</div>
            <Link to="/mentions-legales" className="foot-l">Mentions légales</Link>
            <Link to="/politique-confidentialite" className="foot-l">Politique de confidentialité</Link>
            <Link to="/cgv" className="foot-l">CGV</Link>
            <Link to="/cookies" className="foot-l">Cookies</Link>
            <button className="foot-l" onClick={() => window.dispatchEvent(new Event('open-cookie-settings'))}>Gérer les cookies</button>
          </div>
        </div>
        <div className="foot-b"><p>© 2025 Ouakan Solutions — SIRET 106 204 662 00014</p><p>Conforme RGPD</p></div>
      </div>
    </footer>
  );
}

/* ═══ ASSISTANT GUIDÉ — qualifie le lead & l'envoie par mail ═══ */
const A_SUBJECTS = [[Search, 'Audit de mon entreprise'], [Bot, 'Agent IA sur mesure'], [Zap, 'Automatisation de tâches'], [Monitor, 'Création de site ou application'], [BarChart3, 'Data & reporting'], [Link2, 'Intégration CRM / ERP'], [PenLine, 'Autre (à préciser)']] as const;
const A_TEAM = ['Juste moi / indépendant', '2 à 10', '11 à 50', '50+'];
const A_URGENCY = ['Dès que possible', 'Sous 1 mois', 'Dans 1 à 3 mois', 'Je me renseigne'];
const A_FORMAT = ['Visioconférence', 'Appel téléphonique'];
function aDays() {
  const out: { label: string; day: string }[] = [];
  const d = new Date(); d.setDate(d.getDate() + 1);
  const nm = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']; const mo = ['jan', 'fév', 'mar', 'avr', 'mai', 'juin', 'juil', 'août', 'sep', 'oct', 'nov', 'déc'];
  while (out.length < 6) { const w = d.getDay(); if (w !== 0 && w !== 6) out.push({ label: `${d.getDate()} ${mo[d.getMonth()]}`, day: nm[w] }); d.setDate(d.getDate() + 1); }
  return out;
}
const A_SLOTS = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'];
const TOTAL_STEPS = 11;
interface BMsg { from: 'bot' | 'user'; text: string }

function Assistant() {
  const [open, setOpen] = useState(false);
  const [pulse, setPulse] = useState(true);
  const [step, setStep] = useState(0);
  const [msgs, setMsgs] = useState<BMsg[]>([{ from: 'bot', text: "Bonjour 👋 Je vais vous poser quelques questions rapides pour préparer votre projet. Moins d'une minute, et vous pouvez passer les questions facultatives." }]);
  const [data, setData] = useState<Record<string, string>>({});
  const [text, setText] = useState('');
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [err, setErr] = useState('');
  const days = useRef(aDays()).current;
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll vers le bas à chaque nouveau message
  useEffect(() => {
    if (open) { setPulse(false); const el = scrollRef.current; if (el) el.scrollTop = el.scrollHeight; }
  }, [open, msgs, step]);
  // Focus auto sur les champs texte
  useEffect(() => { if (open && [2, 5, 6, 7, 8].includes(step)) setTimeout(() => inputRef.current?.focus(), 120); }, [open, step]);

  const push = (from: 'bot' | 'user', t: string) => setMsgs(m => [...m, { from, text: t }]);
  const PROMPTS: Record<number, string> = {
    1: "Quel est le sujet de votre demande ?",
    2: "En quelques mots, décrivez votre besoin. (facultatif)",
    3: "Quelle est la taille de votre équipe ?",
    4: "Pour quand souhaitez-vous démarrer ?",
    5: "Comment vous appelez-vous ? (prénom et nom)",
    6: "Le nom de votre entreprise ? (facultatif)",
    7: "Votre email professionnel ?",
    8: "Votre numéro de téléphone ?",
    9: "Sous quel format préférez-vous échanger ?",
    10: "Choisissez un jour qui vous arrange :",
    11: "Et un créneau horaire :",
  };
  const nextTo = (s: number) => { setStep(s); if (PROMPTS[s]) setTimeout(() => push('bot', PROMPTS[s]), 220); };
  const start = () => { push('bot', PROMPTS[1]); setStep(1); };
  const pick = (field: string, value: string, next: number) => { setData(d => ({ ...d, [field]: value })); push('user', value); nextTo(next); };
  const submitText = (field: string, next: number) => { const v = text.trim(); if (!v) return; setData(d => ({ ...d, [field]: v })); push('user', v); setText(''); nextTo(next); };
  const skip = (next: number) => { push('user', '⏭ Passer'); setText(''); nextTo(next); };
  const emailOk = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e);

  const finish = async (slot: string) => {
    const fd: Record<string, string> = { ...data, Slot: slot }; push('user', slot); setData(fd); setSending(true); setErr('');
    const payload = { access_key: CONFIG.WEB3FORMS_KEY, subject: `🔥 Nouveau lead — ${fd.Sujet || 'Demande'} — ${fd.Nom || ''}`, from_name: 'Assistant Ouakan Solutions', Sujet: fd.Sujet || '—', Besoin: fd.Besoin || '—', 'Taille équipe': fd.Equipe || '—', 'Échéance': fd.Urgence || '—', Nom: fd.Nom || '—', Entreprise: fd.Entreprise || '—', Email: fd.Email || '—', 'Téléphone': fd.Tel || '—', Format: fd.Format || '—', 'RDV souhaité': `${fd.Jour} à ${slot}` };
    try { const r = await fetch(CONFIG.FORM_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(payload) }); if (!r.ok) throw new Error(); setDone(true); push('bot', `Merci ${(fd.Nom || '').split(' ')[0]} ! 🎉 Votre demande est bien envoyée. Nous confirmons votre rendez-vous par email très vite.`); }
    catch { setErr(`Envoi impossible. Écrivez-nous à ${CONFIG.EMAIL}`); }
    finally { setSending(false); }
  };
  const restart = () => { setStep(0); setMsgs([{ from: 'bot', text: "On recommence 👍" }]); setData({}); setText(''); setDone(false); setErr(''); };

  const progress = step > 0 && !done ? Math.round((step / TOTAL_STEPS) * 100) : done ? 100 : 0;

  return (
    <div className="asst-root">
      {open && (
        <div className="asst-win">
          {/* header */}
          <div className="asst-head">
            <div className="asst-avatar"><MessageCircle size={19} /></div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="fd asst-title">Assistant Ouakan Solutions</div>
              <div className="asst-status"><span className="asst-dot" />Préparez votre projet en 1 min</div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Fermer" className="asst-close">×</button>
          </div>
          {/* progress bar */}
          {step > 0 && <div className="asst-prog"><div className="asst-prog-bar" style={{ width: `${progress}%` }} /></div>}

          {/* messages (scrollable) */}
          <div className="asst-msgs" ref={scrollRef} role="log" aria-live="polite">
            {msgs.map((m, i) => (
              <div key={i} className={`asst-row ${m.from}`}>
                <div className={`asst-bubble ${m.from}`}>{m.text}</div>
              </div>
            ))}
            {err && <div className="f-err" style={{ fontSize: 13 }}><AlertTriangle size={14} /> {err}</div>}
          </div>

          {/* interaction zone (fixe, ne scrolle pas avec les messages) */}
          <div className="asst-zone">
            {step === 0 && !done && <button className="btn-p" style={{ width: '100%' }} onClick={start}>Démarrer →</button>}
            {step === 1 && <div className="chip-wrap">{A_SUBJECTS.map(([Ic, k]) => <button key={k} className="chip" onClick={() => pick('Sujet', k, 2)}><Ic size={15} /> {k}</button>)}</div>}
            {step === 2 && <div className="asst-field">
              <button className="asst-skip" onClick={() => skip(3)}>Passer cette étape →</button>
              <div className="chat-input-row"><input ref={inputRef} className="chat-in" aria-label="Votre besoin" value={text} onChange={e => setText(e.target.value)} onKeyDown={e => e.key === 'Enter' && text.trim() && submitText('Besoin', 3)} placeholder="Votre besoin…" /><button className="chat-send" style={{ opacity: text.trim() ? 1 : .4 }} disabled={!text.trim()} onClick={() => submitText('Besoin', 3)} aria-label="Envoyer">→</button></div>
            </div>}
            {step === 3 && <div className="chip-wrap">{A_TEAM.map(t => <button key={t} className="chip" onClick={() => pick('Equipe', t, 4)}>{t}</button>)}</div>}
            {step === 4 && <div className="chip-wrap">{A_URGENCY.map(u => <button key={u} className="chip" onClick={() => pick('Urgence', u, 5)}>{u}</button>)}</div>}
            {step === 5 && <div className="asst-field">
              <div className="chat-input-row"><input ref={inputRef} className="chat-in" aria-label="Prénom et nom" value={text} onChange={e => setText(e.target.value)} onKeyDown={e => e.key === 'Enter' && text.trim().length > 1 && submitText('Nom', 6)} placeholder="Prénom et nom" /><button className="chat-send" style={{ opacity: text.trim().length > 1 ? 1 : .4 }} disabled={text.trim().length <= 1} onClick={() => submitText('Nom', 6)} aria-label="Envoyer">→</button></div>
              <div className="asst-req">Requis pour préparer votre rendez-vous</div>
            </div>}
            {step === 6 && <div className="asst-field">
              <button className="asst-skip" onClick={() => skip(7)}>Passer cette étape →</button>
              <div className="chat-input-row"><input ref={inputRef} className="chat-in" aria-label="Nom de l'entreprise" value={text} onChange={e => setText(e.target.value)} onKeyDown={e => e.key === 'Enter' && text.trim() && submitText('Entreprise', 7)} placeholder="Nom de l'entreprise…" /><button className="chat-send" style={{ opacity: text.trim() ? 1 : .4 }} disabled={!text.trim()} onClick={() => submitText('Entreprise', 7)} aria-label="Envoyer">→</button></div>
            </div>}
            {step === 7 && <div className="asst-field">
              <div className="chat-input-row"><input ref={inputRef} className="chat-in" type="email" inputMode="email" aria-label="Email professionnel" value={text} onChange={e => setText(e.target.value)} onKeyDown={e => e.key === 'Enter' && emailOk(text.trim()) && submitText('Email', 8)} placeholder="email@entreprise.fr" /><button className="chat-send" style={{ opacity: emailOk(text.trim()) ? 1 : .4 }} disabled={!emailOk(text.trim())} onClick={() => submitText('Email', 8)} aria-label="Envoyer">→</button></div>
              <div className="asst-req">Nous y enverrons la confirmation</div>
            </div>}
            {step === 8 && <div className="asst-field">
              <div className="chat-input-row"><input ref={inputRef} className="chat-in" type="tel" inputMode="tel" aria-label="Numéro de téléphone" value={text} onChange={e => setText(e.target.value)} onKeyDown={e => e.key === 'Enter' && text.trim().length > 5 && submitText('Tel', 9)} placeholder="06 12 34 56 78" /><button className="chat-send" style={{ opacity: text.trim().length > 5 ? 1 : .4 }} disabled={text.trim().length <= 5} onClick={() => submitText('Tel', 9)} aria-label="Envoyer">→</button></div>
              <div className="asst-req">Requis pour vous joindre</div>
            </div>}
            {step === 9 && <div className="chip-wrap">{A_FORMAT.map(fm => <button key={fm} className="chip" onClick={() => pick('Format', fm, 10)}>{fm === 'Visioconférence' ? <Video size={15} /> : <Phone size={15} />} {fm}</button>)}</div>}
            {step === 10 && <div className="chip-wrap">{days.map(d => <button key={d.label} className="chip" onClick={() => pick('Jour', `${d.day} ${d.label}`, 11)}>{d.day} {d.label}</button>)}</div>}
            {step === 11 && !done && <div className="chip-grid">{A_SLOTS.map(s => <button key={s} className="chip chip-sm" disabled={sending} onClick={() => finish(s)}>{s}</button>)}</div>}
            {done && <button className="btn-o" style={{ width: '100%' }} onClick={restart}>Nouvelle demande</button>}
            {sending && <p className="asst-sending">Envoi en cours…</p>}
          </div>
        </div>
      )}
      <button onClick={() => setOpen(v => !v)} aria-label={open ? "Fermer l'assistant" : "Ouvrir l'assistant"} aria-expanded={open} className="asst-fab" style={{ transform: open ? 'rotate(90deg)' : 'none' }}>
        {pulse && !open && <span className="asst-ring" />}
        {open ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg> : <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>}
      </button>
    </div>
  );
}

/* ═══ CTA STICKY MOBILE ═══ */
function MobileCTA() {
  return (
    <div className="mobile-cta">
      <button className="btn-p" style={{ width: '100%' }} onClick={() => document.getElementById('rdv')?.scrollIntoView({ behavior: 'smooth' })}>
        Prendre rendez-vous →
      </button>
    </div>
  );
}

/* ═══ APP ═══ */
function Home() {
  return (<><Nav /><Hero /><BeforeAfter /><Testimonials /><Agents /><Services /><Methode /><Security /><Realisations /><Stack /><FAQ /><RDV /><Footer /><Assistant /><MobileCTA /></>);
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
        <Route path="/cgv" element={<CGV />} />
        <Route path="/cookies" element={<Cookies />} />
      </Routes>
      <CookieConsent />
    </BrowserRouter>
  );
}
