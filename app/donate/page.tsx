import type { Metadata } from 'next';
import DonateClient from './DonateClient';

export const metadata: Metadata = {
  title: 'Donate',
  description:
    'Support SOWERS Ministry. Your gift trains pastors, cares for orphans and widows, and plants churches across India.',
};

export default function DonatePage() {
  return <DonateClient />;
}
