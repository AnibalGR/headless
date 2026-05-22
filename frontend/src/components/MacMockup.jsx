import { useEffect, useRef, useState } from 'react';
import './MacMockup.css'; // Extraeremos los estilos aquí

// Datos fijos de la aplicación mockup
const PATTERNS = [
  { title: 'Champion dependency', acv: '$1.1M ACV', stakes: 5, more: 20, body: 'Most pervasive risk across the group — affects 60 of 61 deals worth $1,097,684. Every win relies on a single internal advocate.' },
  { title: 'Economic buyer access', acv: '$1.1M ACV', stakes: 4, more: 19, body: 'Critical risk in 57 of 61 deals worth $1,097,684 — champions identified but Fullcast lacks direct relationships with decision-makers.' },
  { title: 'Product feature gaps', acv: '$889K ACV', stakes: 5, more: 11, body: 'Capability limitations flagged in 36 deals worth $899,400 — blocking or creating friction in over half the pipeline.' },
  { title: 'Unclear or slipping timelines', acv: '$978K ACV', stakes: 3, more: 10, body: 'Timeline risk in 34 deals worth $977,684 — over half the pipeline lacks firm decision dates.' }
];

const SUGGESTIONS = [
  { title: 'Multi-threading and stakeholder expansion', badge: 'MID CYCLE', body: 'Insufficient stakeholder coverage shows in 60 of 61 deals — most rely on a single champion through the entire cycle.' },
  { title: 'Deal cadence and momentum management', badge: 'EARLY', body: '17 deals show extended interaction gaps or inconsistent call cadence that derail forward momentum.' },
  { title: 'Follow-up execution and action item velocity', badge: 'MID', body: '22 deals show delays or missed follow-through on committed next steps — reps slowing days to weeks between commitments.' },
  { title: 'Prospect-facing discovery quality', badge: 'EARLY', body: '8 deals across 2 accounts substituted internal team meetings for dedicated prospect-facing discovery.' }
];

const DEALS = [
  { name: 'Albertsons Companies LLC', dom: 'albertsons.com', deals: 7, health: 5, c: '#1F4FB6' },
  { name: 'Ampléo Group', dom: 'ampleo.com', deals: 2, health: 4, c: '#1E9E7E' },
  { name: 'AppFolio Inc.', dom: 'appfolioinc.com', deals: 2, health: 4, c: '#0EA5E9' },
  { name: 'Attaindata', dom: 'attainoutcomes.com', deals: 2, health: 4, c: '#0E2A52' },
  { name: 'Automation Anywhere Inc.', dom: 'automationanywhere.io', deals: 1, health: 5, c: '#F2B100' },
  { name: 'Constructor Corporation', dom: 'constructor.io', deals: 2, health: 3, c: '#E75525' }
];

const COMPANIES = [
  { name: 'AffiniPay LLC', dom: 'affinipay.com', deals: 4, c: '#E75525' },
  { name: 'Albertsons Companies LLC', dom: 'albertsons.com', deals: 7, c: '#1F4FB6' },
  { name: 'Ampléo Group', dom: 'ampleo.com', deals: 3, c: '#1E9E7E' },
  { name: 'AppFolio Inc.', dom: 'appfolioinc.com', deals: 5, c: '#0EA5E9' },
  { name: 'AppsTek Corp', dom: 'appstekcorp.com', deals: 1, c: '#FB923C' },
  { name: 'AppZen, Inc.', dom: 'appzen.com', deals: 5, c: '#7A5CD2' }
];

const STAKE_COLORS = ['#1F4FB6','#E75525','#1E9E7E','#7A5CD2','#0093A4','#F2B100','#D43A6E'];

const VIEWS = [
  { key: 'patterns', url: 'app.fullcast.ai/pipeline-overview/patterns', crumb: <>Pipeline Overview <span className="fc-crumb-sep">›</span> <b>Patterns</b></> },
  { key: 'suggestions', url: 'app.fullcast.ai/pipeline-overview/suggestions', crumb: <>Pipeline Overview <span className="fc-crumb-sep">›</span> <b>Suggestions</b></> },
  { key: 'deals', url: 'app.fullcast.ai/deals', crumb: <>Records <span className="fc-crumb-sep">›</span> <b>Deals</b></> },
  { key: 'companies', url: 'app.fullcast.ai/companies', crumb: <>Records <span className="fc-crumb-sep">›</span> <b>Companies</b></> }
];

// Helper functions for rendering
const healthCol = (h) => h >= 4 ? 'var(--fc-teal)' : h >= 3 ? '#F2B100' : '#D43A6E';
const StakeDots = ({ stakes, more }) => (
  <div className="fc-pat-stake">
    {Array.from({ length: stakes }).map((_, i) => (
      <div key={i} className="fc-pat-dot" style={{ background: STAKE_COLORS[i % STAKE_COLORS.length] }} />
    ))}
    {more > 0 && <div className="fc-pat-more">+{more}</div>}
  </div>
);

const Tools = () => (
  <div className="fc-tools">
    <div className="fc-tool"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="5" /><path d="M11 11l3 3" /></svg>Search</div>
    <div className="fc-tool"><svg viewBox="0 0 16 16"><path d="M2 4h12M4 8h8M6 12h4" /></svg>Filters</div>
    <div className="fc-tool"><svg viewBox="0 0 16 16"><path d="M3 6l3-3 3 3M6 3v10" /></svg>Sort</div>
  </div>
);

export default function MacMockup() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [fadingUrl, setFadingUrl] = useState(false);
  
  const cursorRef = useRef(null);
  const screenRef = useRef(null);
  const railRefs = useRef({});

  const activeView = VIEWS[activeIdx];

  // Logic for the animation cycle
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let isMounted = true;
    let localIdx = 0;
    
    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const cycle = async () => {
      while (isMounted) {
        await wait(2100);
        if (!isMounted) break;
        
        const nextIdx = (localIdx + 1) % VIEWS.length;
        const nextView = VIEWS[nextIdx];
        
        // 1. Move Cursor
        if (cursorRef.current) {
          const left = 25; // 64px rail width / 2 - 7px offset
          const positions = {
            patterns: 79,     // Computed icon center offsets
            suggestions: 135,
            deals: 191,
            companies: 247
          };
          const top = positions[nextView.key] || 79;
          
          cursorRef.current.style.opacity = '1';
          cursorRef.current.style.top = `${top}px`;
          cursorRef.current.style.left = `${left}px`;
          
          await wait(360);
          if (!isMounted) break;
          
          // 2. Pulse Cursor
          if (cursorRef.current.animate) {
            cursorRef.current.animate(
              [{ transform: 'scale(1)' }, { transform: 'scale(.78)' }, { transform: 'scale(1)' }],
              { duration: 120, easing: 'ease-out' }
            );
          }
          await wait(90);
        }

        if (!isMounted) break;

        // 3. Type URL with fade
        setFadingUrl(true);
        await wait(110);
        if (!isMounted) break;
        
        localIdx = nextIdx;
        setActiveIdx(nextIdx);
        setFadingUrl(false);
      }
    };

    cycle();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="fc-wrap">
      <div className="fc-chrome">
        <div className="fc-dots">
          <span className="fc-red"></span>
          <span className="fc-yellow"></span>
          <span className="fc-green"></span>
        </div>
        <div className={`fc-urlbar ${fadingUrl ? 'fc-url-fading' : ''}`}>
          {activeView.url}
        </div>
      </div>

      <div className="fc-screen" ref={screenRef}>
        <div className="fc-rail">
          <div className="fc-rail-logo" title="Fullcast">
            <svg viewBox="0 0 24 24">
              <path d="M12 3 A9 9 0 1 1 3 12" fill="none" stroke="#E75525" strokeWidth="3.4" strokeLinecap="round" />
              <circle cx="12" cy="12" r="2.2" fill="#E75525" />
            </svg>
          </div>
          {VIEWS.map(v => (
            <div 
              key={v.key}
              ref={el => railRefs.current[v.key] = el}
              className={`fc-rail-icon ${activeView.key === v.key ? 'fc-rail-active' : ''}`}
            >
              {v.key === 'patterns' && <svg viewBox="0 0 24 24"><path d="M4 18l5-9 4 6 7-11" /></svg>}
              {v.key === 'suggestions' && <svg viewBox="0 0 24 24"><path d="M9 21h6M10 24h4M12 3a7 7 0 0 0-4 12c1 1 2 2 2 4h4c0-2 1-3 2-4a7 7 0 0 0-4-12z" /></svg>}
              {v.key === 'deals' && <svg viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="14" rx="2" /><path d="M3 10h18M8 6V4M16 6V4" /></svg>}
              {v.key === 'companies' && <svg viewBox="0 0 24 24"><path d="M3 21V8l6-4 6 4v13M9 21v-6h6v6" /></svg>}
            </div>
          ))}
          <div className="fc-rail-spacer"></div>
          <div className="fc-rail-avatar">DM</div>
        </div>

        <div className="fc-app">
          <div className="fc-topbar">
            <div className="fc-crumb">{activeView.crumb}</div>
            <div className="fc-mini-stats">
              <div className="fc-mini" style={{ '--c': '#E75525' }}>$1.7M<span className="fc-mini-trend">↑</span></div>
              <div className="fc-mini" style={{ '--c': '#00B0C4' }}>1.44x</div>
              <div className="fc-mini" style={{ '--c': '#29C4A9' }}>61</div>
            </div>
          </div>

          <div className="fc-content">
            {VIEWS.map((v, i) => (
              <div key={v.key} className={`fc-view ${activeIdx === i ? 'fc-view-active' : ''}`}>
                
                {/* Patterns View */}
                {v.key === 'patterns' && (
                  <>
                    <div className="fc-h-eyebrow">PIPELINE / Q4 FY26</div>
                    <div className="fc-h-title"><h1>Systemic Pipeline Patterns</h1></div>
                    <div className="fc-h-sub">Recurring trends affecting multiple deals.</div>
                    <div className="fc-patterns-list">
                      {PATTERNS.map((p, pIdx) => (
                        <div key={pIdx} className={`fc-pat-card ${pIdx === 1 ? 'fc-pat-active' : ''}`}>
                          <div className="fc-pat-head">
                            <div className="fc-pat-titlewrap">
                              <div className="fc-pat-title">{p.title}</div>
                              <StakeDots stakes={p.stakes} more={p.more} />
                            </div>
                            <div className="fc-pat-acv">{p.acv}</div>
                          </div>
                          <div className="fc-pat-body">{p.body}</div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* Suggestions View */}
                {v.key === 'suggestions' && (
                  <>
                    <div className="fc-h-title"><h1>Suggestions</h1></div>
                    <div className="fc-h-sub">A curated set of coaching themes we see most across the entire deal cycle.</div>
                    <div className="fc-sug-eyebrow">COACHING THEMES</div>
                    <div className="fc-sug-list">
                      {SUGGESTIONS.map((s, sIdx) => (
                        <div key={sIdx} className="fc-sug-card">
                          <div className="fc-sug-head">
                            <div className="fc-sug-title">{s.title}</div>
                            <div className="fc-sug-badge">{s.badge}</div>
                          </div>
                          <div className="fc-sug-body">{s.body}</div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* Deals View */}
                {v.key === 'deals' && (
                  <>
                    <div className="fc-h-title"><h1>Deals</h1><span className="fc-count-pill">63</span></div>
                    <div className="fc-h-sub">All active deals across your pipeline.</div>
                    <Tools />
                    <div className="fc-tbl-head"><span></span><span>Account</span><span>Health</span></div>
                    <div className="fc-tbl-rows">
                      {DEALS.map((d, dIdx) => (
                        <div key={dIdx} className={`fc-tbl-row ${dIdx === 1 ? 'fc-row-active' : ''}`}>
                          <span className="fc-chev">▸</span>
                          <div className="fc-avatar" style={{ '--c': d.c }}>{d.name.charAt(0).toUpperCase()}</div>
                          <div className="fc-co">
                            <div className="fc-co-row">
                              <div className="fc-co-name">{d.name}</div>
                              <span className="fc-deals-pill">{d.deals} deals</span>
                            </div>
                            <div className="fc-co-meta">{d.dom}</div>
                          </div>
                          <div className={`fc-health fc-h${d.health}`} style={{ '--c': healthCol(d.health) }}>
                            <span /><span /><span /><span /><span />
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* Companies View */}
                {v.key === 'companies' && (
                  <>
                    <div className="fc-h-title"><h1>Companies</h1><span className="fc-count-pill">74</span></div>
                    <div className="fc-h-sub">Customer accounts and their active deals across your pipeline.</div>
                    <Tools />
                    <div className="fc-tbl-rows" style={{ marginTop: '10px' }}>
                      {COMPANIES.map((d, dIdx) => (
                        <div key={dIdx} className="fc-tbl-row fc-row-companies">
                          <span className="fc-chev">▸</span>
                          <div className="fc-avatar" style={{ '--c': d.c }}>{d.name.charAt(0).toUpperCase()}</div>
                          <div className="fc-co">
                            <div className="fc-co-row">
                              <div className="fc-co-name">{d.name}</div>
                              <span className="fc-deals-pill">{d.deals} deals</span>
                            </div>
                            <div className="fc-co-meta">{d.dom}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Cursor SVG */}
        <svg ref={cursorRef} className="fc-cursor" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M2 1.5 L2 13 L5.2 10 L7.6 14.6 L9.4 13.7 L7 9.2 L11.5 9.2 Z" fill="#ffffff" stroke="#0E1B2C" strokeWidth="1" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}
