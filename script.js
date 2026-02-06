const data = {
  companies: [
    {
      name: "Asteria Robotics",
      ticker: "ASTR",
      sector: "Industrial Automation",
      summary:
        "Robotics platform provider with strong backlog driven by reshoring and warehouse automation.",
      kpis: [
        { label: "Earnings Surprise", value: "+6.2%", status: "good" },
        { label: "Supply/Demand Balance", value: "Tight", status: "neutral" },
        { label: "Bottleneck Score", value: "72", status: "risk" },
        { label: "Forecast Growth", value: "18%", status: "good" },
        { label: "Execution Score", value: "84", status: "good" },
      ],
      earnings: [
        { quarter: "Q4 2024", estimate: "1.18", actual: "1.26", surprise: "+6.8%" },
        { quarter: "Q1 2025", estimate: "1.21", actual: "1.28", surprise: "+5.7%" },
        { quarter: "Q2 2025", estimate: "1.24", actual: "1.33", surprise: "+7.3%" },
      ],
      earningsTrend: 78,
      supplyDemand: [
        { label: "TAM Growth", value: "12% YoY" },
        { label: "Capacity Utilization", value: "91%" },
        { label: "Backlog Coverage", value: "8.4 months" },
        { label: "Pricing Power", value: "Moderate +2%" },
      ],
      bottleneck: {
        score: 72,
        drivers: [
          "Chip lead times elevated (20+ weeks).",
          "Single-source motor supplier concentration.",
          "Factory expansion online in Q3 2025.",
        ],
      },
      forecast: [
        { scenario: "Bull", growth: "24%", confidence: "High" },
        { scenario: "Base", growth: "18%", confidence: "Medium" },
        { scenario: "Bear", growth: "9%", confidence: "Low" },
      ],
      guidance: {
        headline: "Raised FY revenue outlook by 4%.",
        deltas: [
          "Revenue guide: $2.6B → $2.7B",
          "Gross margin: 44% → 45%",
          "Capex: $320M flat",
        ],
        notes: "Management cited stronger inbound orders from logistics customers and better component availability in APAC.",
      },
      execution: {
        score: 84,
        timeline: [
          "2023: Delivered 105% of promised capacity expansion.",
          "2024: Met margin target despite logistics inflation.",
          "2025 YTD: Beat shipment target by 6%.",
        ],
      },
      insights: [
        "Demand remains ahead of supply; backlog supports near-term revenue visibility.",
        "Bottleneck risk persists due to component concentration, warranting monitoring.",
        "Management execution remains strong with consistent delivery versus guidance.",
      ],
    },
    {
      name: "Solenne Energy",
      ticker: "SLNE",
      sector: "Renewable Infrastructure",
      summary:
        "Utility-scale solar integrator with rising demand driven by grid modernization.",
      kpis: [
        { label: "Earnings Surprise", value: "+2.1%", status: "neutral" },
        { label: "Supply/Demand Balance", value: "Balanced", status: "good" },
        { label: "Bottleneck Score", value: "48", status: "good" },
        { label: "Forecast Growth", value: "14%", status: "good" },
        { label: "Execution Score", value: "76", status: "neutral" },
      ],
      earnings: [
        { quarter: "Q4 2024", estimate: "0.62", actual: "0.63", surprise: "+1.6%" },
        { quarter: "Q1 2025", estimate: "0.64", actual: "0.66", surprise: "+3.1%" },
        { quarter: "Q2 2025", estimate: "0.67", actual: "0.68", surprise: "+1.5%" },
      ],
      earningsTrend: 60,
      supplyDemand: [
        { label: "TAM Growth", value: "9% YoY" },
        { label: "Capacity Utilization", value: "82%" },
        { label: "Backlog Coverage", value: "6.1 months" },
        { label: "Pricing Power", value: "Stable" },
      ],
      bottleneck: {
        score: 48,
        drivers: [
          "Balanced supplier mix across regions.",
          "Lead times normalized to 10 weeks.",
          "Construction workforce availability improving.",
        ],
      },
      forecast: [
        { scenario: "Bull", growth: "19%", confidence: "Medium" },
        { scenario: "Base", growth: "14%", confidence: "High" },
        { scenario: "Bear", growth: "8%", confidence: "Medium" },
      ],
      guidance: {
        headline: "Maintained FY EBITDA margin target.",
        deltas: [
          "Revenue guide: $1.9B → $1.9B",
          "EBITDA margin: 18% → 18%",
          "Capex: $210M → $225M",
        ],
        notes: "Focused on disciplined bid selection and increasing storage attach rates.",
      },
      execution: {
        score: 76,
        timeline: [
          "2023: Missed installation target by 4% due to permitting delays.",
          "2024: Delivered 102% of booked pipeline.",
          "2025 YTD: On track with margin guidance.",
        ],
      },
      insights: [
        "Demand stable with healthy backlog and improved labor availability.",
        "Execution score improving as project management stabilizes.",
        "Watch capex increase as storage expansion ramps.",
      ],
    },
  ],
};

const tickerSelect = document.getElementById("ticker");
const kpiGrid = document.getElementById("kpis");
const companySummary = document.getElementById("company-summary");
const earningsSection = document.getElementById("earnings");
const supplyDemandSection = document.getElementById("supply-demand");
const bottleneckSection = document.getElementById("bottleneck");
const forecastSection = document.getElementById("forecast");
const guidanceSection = document.getElementById("guidance");
const executionSection = document.getElementById("execution");
const insightsList = document.getElementById("insights");

const badgeClass = (status) => {
  if (status === "good") return "good";
  if (status === "risk") return "risk";
  return "neutral";
};

const render = (company) => {
  companySummary.innerHTML = `
    <strong>${company.name} (${company.ticker})</strong><br />
    <span>${company.sector}</span><br />
    ${company.summary}
  `;

  kpiGrid.innerHTML = company.kpis
    .map(
      (kpi) => `
        <div class="kpi">
          <h3>${kpi.label}</h3>
          <div class="value">${kpi.value}</div>
          <span class="badge ${badgeClass(kpi.status)}">${kpi.status.toUpperCase()}</span>
        </div>
      `,
    )
    .join("");

  earningsSection.innerHTML = `
    <div class="bar"><span style="width:${company.earningsTrend}%"></span></div>
    ${company.earnings
      .map(
        (row) => `
          <div class="earnings-row">
            <span>${row.quarter}</span>
            <span>Est: ${row.estimate}</span>
            <span>Actual: ${row.actual}</span>
            <strong>${row.surprise}</strong>
          </div>
        `,
      )
      .join("")}
  `;

  supplyDemandSection.innerHTML = `
    <div class="metric-grid">
      ${company.supplyDemand
        .map(
          (metric) => `
            <div class="metric">
              <span>${metric.label}</span>
              <strong>${metric.value}</strong>
            </div>
          `,
        )
        .join("")}
    </div>
  `;

  bottleneckSection.innerHTML = `
    <div class="gauge">
      <div class="gauge-circle" style="--gauge:${company.bottleneck.score}deg">${
        company.bottleneck.score
      }</div>
      <div>
        ${company.bottleneck.drivers.map((item) => `<p>${item}</p>`).join("")}
      </div>
    </div>
  `;

  forecastSection.innerHTML = `
    <table class="scenario-table">
      <thead>
        <tr>
          <th>Scenario</th>
          <th>Growth</th>
          <th>Confidence</th>
        </tr>
      </thead>
      <tbody>
        ${company.forecast
          .map(
            (row) => `
              <tr>
                <td>${row.scenario}</td>
                <td>${row.growth}</td>
                <td>${row.confidence}</td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;

  guidanceSection.innerHTML = `
    <div class="callout">
      <strong>${company.guidance.headline}</strong>
      <p>${company.guidance.notes}</p>
    </div>
    ${company.guidance.deltas
      .map((delta) => `<div class="metric"><span>${delta}</span></div>`)
      .join("")}
  `;

  executionSection.innerHTML = `
    <div class="gauge">
      <div class="gauge-circle" style="--gauge:${company.execution.score}deg">${
        company.execution.score
      }</div>
      <div class="timeline">
        ${company.execution.timeline
          .map((item) => `<div class="timeline-item">${item}</div>`)
          .join("")}
      </div>
    </div>
  `;

  insightsList.innerHTML = company.insights
    .map((item) => `<li>${item}</li>`)
    .join("");
};

const init = () => {
  data.companies.forEach((company, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = `${company.name} (${company.ticker})`;
    tickerSelect.appendChild(option);
  });

  tickerSelect.addEventListener("change", (event) => {
    const company = data.companies[Number(event.target.value)];
    render(company);
  });

  render(data.companies[0]);
};

init();
