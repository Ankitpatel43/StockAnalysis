# Stock Analysis Website Plan

## 1. Product Goals
- Provide a single-page experience for evaluating a company across earnings surprise, supply/demand dynamics, bottleneck score, forecast growth, management guidance, and execution quality.
- Offer clear explanations, contextual metrics, and consistent scoring to help compare companies.

## 2. Information Architecture
- **Hero + Search**: Company header, ticker input, and quick summary tiles.
- **Earnings Surprise**: Historical surprises, rolling average, key drivers.
- **Supply & Demand Dynamics**: Market sizing, capacity vs. demand, pricing power.
- **Bottleneck Score**: Supply-chain constraints, lead-time risk, capacity utilization.
- **Forecast Growth**: Scenario-based projections derived from supply/demand signals.
- **Management Guidance**: Qualitative summary and quantitative deltas vs. prior guidance.
- **Execution Score**: Track record of guidance accuracy and operational outcomes.
- **Insights**: Key takeaways and risk flags.

## 3. Data Model (Phase 1 Static / Phase 2 Dynamic)
- Company profile: name, ticker, sector, summary.
- Earnings surprise: quarter, estimate, actual, surprise %.
- Supply/demand metrics: TAM, capacity, utilization, backlog, pricing trend.
- Bottleneck inputs: supplier concentration, lead time, component scarcity.
- Forecast: base/bull/bear growth rates, confidence score.
- Management guidance: latest guidance, prior guidance, deltas.
- Execution: historical promise vs. result, score trend.

## 4. UX & UI
- **KPI Tiles** for top-line summary scores.
- **Timeline cards** for earnings surprise and execution history.
- **Score gauges** for bottleneck and execution scores.
- **Scenario table** for growth forecast.
- **Callouts** for management guidance updates.

## 5. Functional Requirements
- Single-page, responsive layout.
- Data-driven rendering from a single JS data object.
- Score badge color logic (good/neutral/risk).
- Accessible labels and consistent typography.

## 6. Technical Plan
- **Frontend**: HTML + CSS + vanilla JS.
- **Data**: Local JS object (ready to swap with API later).
- **Charts**: Lightweight bars and gauges using CSS.
- **Tooling**: No build step required.

## 7. Milestones
1. **Design & Skeleton**: Build layout and components.
2. **Data Model**: Populate with mock data and scoring.
3. **Interactivity**: Simple search selector, toggle scenario.
4. **Polish**: Responsive layout, accessibility, docs.

## 8. Future Enhancements
- API integration for real market data.
- Historical charts via charting library.
- Multi-company comparison view.
- Exportable report (PDF).
