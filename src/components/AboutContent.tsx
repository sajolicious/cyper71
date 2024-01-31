
const AboutContent = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Pragmatic Process</h2>
        <p className="text-base text-gray-600">
          Many teams attempt to deliver a project in a single iteration. Pressured by a constantly evolving market, they
          build too fast - taking on 'technical debt', which creates future problems. At WellDev, we adopt a pragmatic
          approach, building in stages to ensure efficient and debt-free delivery. By executing reliable project
          management with agile practices, we ensure the achievement of critical milestones within time, targets, and
          budgets.
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Proactive Mindset</h2>
        <p className="text-base">
          It is common for technical teams to get stressed with issues that arise in day-to-day operations. Our software
          methodology and governance take a proactive approach by identifying potential problems and proposing workable
          fixes before they escalate. Our global talent pool of skilled engineers is passionate about opportunities to
          solve complex challenges and innovate with future-proof custom solutions.
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Transparent Partnership</h2>
        <p className="text-base">
          Whether an enterprise client or a new startup, we treat every project as our own, to symbolize a win-win
          scenario for us both. We work very hard to elevate ourselves from a service provider to a software
          development partner by placing collaboration at the heart of everything we do. Our long-term client
          partnerships worldwide rest on solid foundations of trust and radical transparency.
        </p>
      </div>
    </section>
  );
}

export default AboutContent;
