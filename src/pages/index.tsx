import type { ReactNode } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { motion } from 'framer-motion';
import styles from './index.module.css';

const links = [
  { title: 'vSOP', icon: '🧭', href: '/docs/general/vsop' },
  { title: 'Air Safety Report', icon: '🛡️', href: '/docs/general/air-safety-report-asr' },
  { title: 'Alternates', icon: '🌐', href: '/docs/flight-information/alternates' },
  { title: 'Diversions/Abnormalities', icon: '⚠️', href: '/docs/flight-information/diversions-abnormalities' },
  { title: 'ETOPS', icon: '🛫', href: '/docs/flight-information/etops' },
  { title: 'Flight Dispatch', icon: '📝', href: '/docs/flight-information/flight-dispatch' },
  { title: 'Fuel Planning', icon: '⛽', href: '/docs/flight-information/fuel-planning' },
  { title: 'Manual PIREP Claims', icon: '📄', href: '/docs/flight-information/manual-pireps-claims' },
  { title: 'Contingency Routes', icon: '🗺️', href: '/docs/airspace-restrictions/contingency-routes' },
  { title: 'No-Fly Areas', icon: '🚫', href: '/docs/airspace-restrictions/no-fly-areas' },
  { title: 'Configuration', icon: '🔧', href: '/docs/aircraft-operations/configurations' },
  { title: 'Liveries', icon: '🎨', href: '/docs/aircraft-operations/liveries' },
  { title: 'Substitutions', icon: '🔄', href: '/docs/aircraft-operations/substitutions' },
  { title: 'Activity Requirements', icon: '📈', href: '/docs/general/activity-requirements' },
  { title: 'FAQ', icon: '❓', href: '/docs/general/faq' },
  { title: 'Staff Team', icon: '👨‍✈️', href: '/docs/general/staff-team' },
  { title: 'Operational Penalties', icon: '📝', href: '/docs/penalty-points-summary/operational-penalties' },
  { title: 'Communication Standards', icon: '📡', href: '/docs/professional-conduct/communication-standards' },
  { title: 'Operational Restrictions', icon: '⛔', href: '/docs/simulation-parameters/operational-restrictions' },
  { title: 'Simulation Settings', icon: '💻', href: '/docs/simulation-parameters/simulation-settings' },
  { title: 'Changelog', icon: '🗒️', href: '/docs/updates/changelog' },
  { title: 'Route Updates', icon: '🛣️', href: '/docs/updates/route-updates' },
  { title: 'Code of Conduct', icon: '🗒️', href: '/docs/general/code-of-conduct'}
];

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Heading as="h1" className={styles.title}>
          <span style={{ whiteSpace: 'nowrap', display: 'block', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            JAL&nbsp;Virtual&nbsp;Documentation
          </span>
        </Heading>
        <p className={styles.subtitle}>
          Your guide to JAL Virtual’s systems and workflows
        </p>
        <div className={styles.linksGrid}>
          {links.map((link, idx) => (
            <motion.a
              href={link.href}
              key={link.title}
              className={clsx(styles.card, 'button button--outline button--lg')}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.04 }}
              tabIndex={0}
            >
              <span className={styles.cardIcon} style={{ fontSize: '2.1rem', marginRight: 10 }}>
                {link.icon}
              </span>
              <span>
                <strong style={{ fontSize: '1.01rem', fontWeight: 600, letterSpacing: '-0.5px' }}>
                  {link.title}
                </strong>
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="JAL Virtual Documentation"
      description="Comprehensive guide to JAL Virtual operations and documentation."
    >
      <HomepageHeader />
    </Layout>
  );
}
