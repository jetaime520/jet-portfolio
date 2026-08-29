"use client";

import { FormEvent, useState } from 'react';

const profile = {
  name: 'JET',
};

const experience = [
  { period: '2021 — NOW', role: '系統分析師', company: '大型傳產公司', body: '負責企業內部系統的需求分析、時程規劃與程式開發，推動跨單位需求落地並維持核心系統穩定運作。', tech: ['ASP.NET', 'WinForm', 'MS SQL', 'Oracle'] },
  { period: '2018 — 2021', role: '技術組長', company: '新創民航公司', body: '參與公司草創期系統建置，負責前後端開發、系統分析與時程規劃，並管理後端工程及 UI/UX 團隊，團隊規模 5–8 人。', tech: ['Node.js', 'JavaScript', 'MySQL', 'Linux'] },
  { period: '2015 — 2018', role: '軟體工程師', company: '國際資訊服務企業', body: '面對金融業客戶進行需求訪談，將業務流程轉化為系統規格，並完成客製化系統的規劃與開發。', tech: ['ASP.NET', 'C#', 'MS SQL'] },
  { period: '2014 — 2015', role: '軟體工程師', company: '國際遊戲公司', body: '參與線上遊戲服務開發，擔任程式溝通窗口，與企劃、QA、PM 協作推進產品功能。', tech: ['PHP', 'MySQL'] },
  { period: '2011 — 2014', role: '軟體工程師', company: '大型金融機構', body: '開發銀行櫃檯與海外系統，累積高正確性、高穩定性系統的規劃、開發與部署經驗。', tech: ['Java', 'DB2', 'COBOL'] },
  { period: '2009 — 2011', role: '韌體工程師', company: '網通設備製造商', body: '開發硬體驗證與設定工具，曾與海外工程團隊協作修改產品，建立獨立交付專案的基礎。', tech: ['C', 'Linux', 'C#'] },
];

const services = [
  { no: '01', title: '後端系統開發', en: 'BACKEND DEVELOPMENT', body: '依照產品需求規劃 API、權限、資料模型與核心商業邏輯，兼顧穩定性、效能及後續維護。', tags: ['RESTful API', '系統架構', '效能優化'] },
  { no: '02', title: '全端產品實作', en: 'FULL-STACK PRODUCT', body: '從需求拆解、介面串接到正式上線，以完整產品視角把構想落實成可用的網站或內部系統。', tags: ['Web App', '前後端整合', '部署上線'] },
  { no: '03', title: '既有系統優化', en: 'SYSTEM IMPROVEMENT', body: '釐清技術債與效能瓶頸，逐步改善程式結構、資料庫查詢及第三方服務整合。', tags: ['程式重構', '資料庫', '系統整合'] },
];

const process = [
  ['01', '需求對焦', '釐清目標、使用情境與交付範圍'],
  ['02', '提案規劃', '拆解功能、時程與技術方案'],
  ['03', '迭代開發', '定期同步進度，讓成果持續可見'],
  ['04', '驗收上線', '完成測試、部署與必要文件'],
];

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);
  const [formMessage, setFormMessage] = useState('');

  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormMessage('表單介面已完成；啟用安全寄信服務後即可從這裡直接寄出。');
  }

  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="回到首頁"><span className="brand-mark">J</span><span>{profile.name} / DEV</span></a>
        <div className="nav-links"><a href="#about">關於我</a><a href="#services">服務項目</a><a href="#experience">經歷</a><a className="nav-cta" href="#contact">開始聊聊 <span>↗</span></a></div>
      </nav>

      <section className="hero shell" id="top">
        <div className="eyebrow"><span /> AVAILABLE FOR FREELANCE</div>
        <h1>把複雜的需求，<br />寫成<span>可靠的產品。</span></h1>
        <div className="hero-bottom"><p>我是 Jet，擁有 15 年以上軟體開發與系統分析經驗。可承接全端專案，主攻後端工程，專注打造穩定、可維護的數位產品。</p><a className="primary-button" href="#contact">討論你的專案 <span>→</span></a></div>
        <div className="signal" aria-hidden="true"><span className="signal-label">BUILDING SYSTEMS<br />THAT LAST</span><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="core">01</div></div>
      </section>

      <section className="stack-strip" id="about"><div className="shell stack-grid">
        <article><span>01</span><div><small>BACKEND FIRST</small><strong>API · 資料庫 · 系統整合</strong></div></article>
        <article><span>02</span><div><small>FULL STACK</small><strong>從需求梳理到產品上線</strong></div></article>
        <article><span>03</span><div><small>COLLABORATION</small><strong>透明溝通 · 穩定交付</strong></div></article>
      </div></section>

      <section className="about shell section-space">
        <div><p className="section-kicker">關於我 / ABOUT</p><div className="availability"><span /> 可承接新專案</div></div>
        <div className="about-copy"><h2>寫程式是手段，<br />解決問題才是目的。</h2><p>我以後端開發為核心，也能獨立完成前後端整合。歷經金融、民航、遊戲、製造與企業資訊服務等產業，熟悉從需求訪談、系統分析、時程規劃到正式交付的完整流程；也具備團隊管理及跨部門溝通經驗。</p></div>
      </section>

      <section className="services section-space" id="services"><div className="shell">
        <div className="section-head"><p className="section-kicker">服務項目 / SERVICES</p><h2>能替你的專案<br />完成什麼？</h2></div>
        <div className="service-list">{services.map((service) => <article key={service.no} className="service-card"><div className="service-no">{service.no}</div><div><small>{service.en}</small><h3>{service.title}</h3></div><p>{service.body}</p><div className="tags">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div>
      </div></section>

      <section className="tech shell section-space">
        <div className="section-head"><p className="section-kicker">技術能力 / TECH STACK</p><h2>熟悉工具，<br />依需求選擇。</h2></div>
        <div className="tech-board"><div className="tech-note"><span>BACKEND FIRST</span><h3>跨語言、跨產業的實戰經驗</h3><p>能依據既有系統與產品需求選擇技術，熟悉企業應用、API、資料庫設計及前後端整合。</p><div className="skill-groups"><div><small>LANGUAGES</small><strong>C# · PHP · Node.js · Python</strong></div><div><small>FRAMEWORKS</small><strong>.NET Framework · MVC · .NET Core · Express · Django</strong></div><div><small>DATABASES</small><strong>Oracle · MS SQL Server · PostgreSQL · MySQL</strong></div></div></div><div className="code-window"><div className="window-bar"><i/><i/><i/></div><pre><code>{`const jet = {\n  focus: "Backend",\n  experience: "15+ years",\n  capability: "Full-stack",\n  strengths: [\n    "System Analysis",\n    "Architecture",\n    "Cross-team Collaboration"\n  ],\n  status: "Available"\n};`}</code></pre></div></div>
      </section>

      <section className="experience" id="experience"><div className="shell section-space">
        <div className="section-head"><p className="section-kicker">工作經歷 / EXPERIENCE</p><h2>經驗不只列年份，<br />更要說明創造的價值。</h2></div>
        <div className="timeline">{experience.map(item => <article key={item.period}><div className="timeline-period">{item.period}</div><div><small>{item.company}</small><h3>{item.role}</h3></div><p>{item.body}</p><div className="tags">{item.tech.map(tech => <span key={tech}>{tech}</span>)}</div></article>)}</div>
      </div></section>

      <section className="process shell section-space"><div className="section-head"><p className="section-kicker">合作流程 / PROCESS</p><h2>清楚的節奏，<br />讓合作沒有黑盒子。</h2></div><div className="process-grid">{process.map(item => <article key={item[0]}><span>{item[0]}</span><h3>{item[1]}</h3><p>{item[2]}</p></article>)}</div></section>

      <section className="contact" id="contact"><div className="shell contact-inner"><p className="section-kicker">CONTACT / LET’S BUILD</p><h2>你的下一個想法，<br /><span>我們一起讓它上線。</span></h2><p className="contact-lead">歡迎告訴我你的專案背景、預計功能與期望時程，我將盡快與您聯絡。</p><div className="contact-actions"><a className="contact-button line" href="https://line.me/ti/p/~jetaime520" target="_blank" rel="noreferrer"><small>QUICK CHAT</small><strong>LINE 直接對話</strong><span>↗</span></a><button className="contact-button email" type="button" onClick={() => setContactOpen(true)}><small>PRIVATE MESSAGE</small><strong>開啟站內寄信表單</strong><span>↗</span></button></div><footer><span>© {new Date().getFullYear()} {profile.name}. ALL RIGHTS RESERVED.</span><a href="#top">BACK TO TOP ↑</a></footer></div></section>

      <div className="floating-contact" aria-label="快速聯絡"><a href="https://line.me/ti/p/~jetaime520" target="_blank" rel="noreferrer" className="float-button float-line"><span>LINE</span><strong>對話</strong></a><button type="button" className="float-button float-mail" onClick={() => setContactOpen(true)}><span>MAIL</span><strong>寄信</strong></button></div>

      {contactOpen && <div className="modal-backdrop" role="presentation" onMouseDown={() => setContactOpen(false)}><section className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-title" onMouseDown={event => event.stopPropagation()}><button className="modal-close" type="button" aria-label="關閉寄信視窗" onClick={() => setContactOpen(false)}>×</button><p className="section-kicker">PRIVATE MESSAGE</p><h2 id="contact-title">傳訊息給 Jet</h2><p>你的聯絡資料只會用於回覆本次專案詢問。</p><form onSubmit={submitContact}><label>你的稱呼<input name="name" required autoComplete="name" /></label><label>回覆 Email<input name="replyEmail" type="email" required autoComplete="email" /></label><label>專案需求<textarea name="message" rows={6} required placeholder="請簡述專案類型、預計功能與期望時程" /></label><button type="submit">送出訊息 <span>→</span></button>{formMessage && <output>{formMessage}</output>}</form></section></div>}
    </main>
  );
}
