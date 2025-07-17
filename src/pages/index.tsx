import type { ReactNode } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { motion } from 'framer-motion';
import styles from './index.module.css';

const links = [
  { title: 'vSOP', icon: '🧭', href: '/docs/vsop' },
  { title: 'Features', icon: '⚙️', href: '/docs/features' },
  { title: 'Jalv EFB', icon: '📱', href: '/docs/jalv-efb' },
  { title: 'Air Safety Report', icon: '🛡️', href: '/docs/air-safety-report' },
  { title: 'Alternates', icon: '🌐', href: '/docs/alternates' },
  { title: 'Diversions/Abnormalities', icon: '⚠️', href: '/docs/diversions-abnormalities' },
  { title: 'ETOPS', icon: '🛫', href: '/docs/etops' },
  { title: 'Flight Dispatch', icon: '📝', href: '/docs/flight-dispatch' },
  { title: 'Fuel Planning', icon: '⛽', href: '/docs/fuel-planning' },
  { title: 'Manual PIREP Claims', icon: '📄', href: '/docs/manual-pirep-claims' },
  { title: 'Contingency Routes', icon: '🗺️', href: '/docs/contingency-routes' },
  { title: 'No-Fly Areas', icon: '🚫', href: '/docs/no-fly-areas' },
  { title: 'Configuration', icon: '🔧', href: '/docs/configuration' },
  { title: 'Liveries', icon: '🎨', href: '/docs/liveries' },
  { title: 'Substitutions', icon: '🔄', href: '/docs/substitutions' },
  { title: 'Activity Requirements', icon: '📈', href: '/docs/activity-requirements' },
  { title: 'FAQ', icon: '❓', href: '/docs/faq' },
  { title: 'Staff Team', icon: '👨‍✈️', href: '/docs/staff-team' },
  { title: 'Operational Penalties', icon: '📝', href: '/docs/operational-penalties' },
  { title: 'Communication Standards', icon: '📡', href: '/docs/communication-standards' },
  { title: 'Operational Restrictions', icon: '⛔', href: '/docs/operational-restrictions' },
  { title: 'Simulation Settings', icon: '💻', href: '/docs/simulation-settings' },
  { title: 'Changelog', icon: '🗒️', href: '/docs/changelog' },
  { title: 'Route Updates', icon: '🛣️', href: '/docs/route-updates' },
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
