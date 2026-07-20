import { ShieldCheck, Zap, RotateCcw, Lock } from 'lucide-react'

const ITEMS = [
  { icon: RotateCcw, label: 'Free cancellation (24h+ before pickup)' },
  { icon: Zap, label: 'Instant confirmation by email & SMS' },
  { icon: Lock, label: 'Secure Stripe checkout' },
  { icon: ShieldCheck, label: 'Fully insured, professional drivers' },
]

/** Reassurance strip for placement next to CTAs — the decision point. */
export default function BookingReassurance({ dark = false, className = '' }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm ${dark ? 'text-white/70' : 'text-gray-500'} ${className}`}>
      {ITEMS.map(({ icon: Icon, label }) => (
        <span key={label} className="flex items-center gap-2">
          <Icon className="w-4 h-4 text-gold" />
          {label}
        </span>
      ))}
    </div>
  )
}
