import {
  Truck,
  ArrowCounterClockwise,
  ShieldCheck,
  Headset,
  Package,
} from "@phosphor-icons/react/dist/ssr";

const ITEMS = [
  { Icon: Truck, label: "Free Shipping", sub: "Orders over $50" },
  { Icon: ArrowCounterClockwise, label: "60-Day Returns", sub: "Hassle-free" },
  { Icon: ShieldCheck, label: "Secure Checkout", sub: "256-bit SSL" },
  { Icon: Headset, label: "24/7 Support", sub: "Chat anytime" },
  { Icon: Package, label: "Ships Same Day", sub: "Order by 2pm" },
];

export function TrustBar() {
  return (
    <div className="border-y border-border bg-canvas overflow-x-auto">
      <div className="flex items-center min-w-max md:min-w-0 md:justify-around px-6 md:px-10 py-4 gap-8 md:gap-4 max-w-7xl mx-auto">
        {ITEMS.map(({ Icon, label, sub }) => (
          <div key={label} className="flex items-center gap-3 flex-shrink-0">
            <Icon size={20} weight="light" className="text-accent flex-shrink-0" />
            <div>
              <p className="text-xs font-semibold text-ink leading-none">{label}</p>
              <p className="text-[0.65rem] text-ink-muted mt-0.5">{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
