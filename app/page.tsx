export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6">
          Health Tracking Tool
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
          Is Your Gym Membership<br />Actually Worth It?
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Log every gym visit, track your cost per session, and see exactly how your membership stacks up against home workout alternatives.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-lg transition-colors"
        >
          Start Tracking — $7/mo
        </a>
        <p className="text-sm text-[#8b949e] mt-3">Cancel anytime. No contracts.</p>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-14 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📅</div>
            <h3 className="font-semibold text-white mb-1">Log Visits</h3>
            <p className="text-sm text-[#8b949e]">One-tap check-ins to record every gym session effortlessly.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">💰</div>
            <h3 className="font-semibold text-white mb-1">Cost Per Visit</h3>
            <p className="text-sm text-[#8b949e]">See your real cost per session update live as you log visits.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🏠</div>
            <h3 className="font-semibold text-white mb-1">ROI Comparison</h3>
            <p className="text-sm text-[#8b949e]">Compare gym costs to home workout alternatives side by side.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$7</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited visit logging",
              "Live cost-per-visit dashboard",
              "Home workout ROI comparison",
              "Monthly & yearly summaries",
              "Data export (CSV)"
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
          <p className="text-xs text-[#8b949e] mt-3">Secure checkout via Lemon Squeezy</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does the ROI calculation work?</h3>
            <p className="text-sm text-[#8b949e]">We divide your monthly membership cost by the number of visits you log. As you visit more, your cost per session drops. We also compare this to the estimated cost of equivalent home workouts so you can make an informed decision.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-sm text-[#8b949e]">Yes, absolutely. You can cancel at any time from your account settings. There are no long-term contracts or cancellation fees. Your data remains accessible until the end of your billing period.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What gym memberships does this support?</h3>
            <p className="text-sm text-[#8b949e]">Any gym, any price. You manually enter your monthly membership cost and we handle the math. Whether you pay $10/mo or $150/mo, the tracker works the same way.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-sm text-[#8b949e] border-t border-[#30363d] pt-8">
        <p>© {new Date().getFullYear()} Gym Membership ROI Tracker. All rights reserved.</p>
      </footer>
    </main>
  );
}
