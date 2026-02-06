# Stock Analysis Website Plan

## Goals
- Provide a comprehensive stock analysis website focused on earnings surprises, supply/demand dynamics, product bottlenecks, growth forecasts, and management guidance/execution history.
- Deliver a data-driven, explainable scoring system with clear provenance for each metric.
- Ensure scalable architecture for data ingestion, scoring, and front-end rendering.

## Core Features & Data Requirements
1. **Earnings Surprise**
   - Data: Actual vs. consensus EPS, revenue, and guidance deltas (quarterly/annual).
   - Outputs: Surprise % (EPS, revenue), rolling surprise streaks, volatility-adjusted surprise score.
   - Sources: Financial statements, consensus estimates, guidance transcripts.

2. **Supply/Demand Dynamics**
   - Data: Units shipped, backlog, inventory levels, pricing trends, capacity utilization, order lead times.
   - Outputs: Supply/demand imbalance index, pricing power indicator, inventory pressure score.
   - Sources: Company filings, industry datasets, channel checks, macro indicators.

3. **Bottleneck Score**
   - Data: Supply chain inputs, capacity constraints, supplier concentration, raw material availability.
   - Outputs: Bottleneck risk score (0-100), top constraint categories, trendline.
   - Sources: Management commentary, procurement/supply chain datasets, shipping/capacity data.

4. **Forecasted Growth**
   - Data: Demand proxies, pricing trends, unit economics, capacity changes, backlog growth.
   - Outputs: 1–8 quarter growth forecast range, base/bull/bear scenarios.
   - Sources: Internal models + macro/industry forecasts.

5. **Management Guidance**
   - Data: Guidance ranges for revenue, margins, EPS, capex; updates per quarter.
   - Outputs: Guidance delta tracking, accuracy over time, guidance confidence score.
   - Sources: Earnings calls, press releases, SEC filings.

6. **Management Execution Score**
   - Data: Prior promises vs. realized results, strategic milestones, product launch timing.
   - Outputs: Execution score, promise-keep ratio, milestone timeliness.
   - Sources: Historical guidance, investor presentations, product roadmaps.

## System Architecture
1. **Data Ingestion Layer**
   - Scheduled ETL jobs to pull financials, estimates, macro/industry data, and qualitative notes.
   - Normalize metrics into consistent schemas (time periods, currencies, reporting units).

2. **Scoring & Forecasting Engine**
   - Compute feature-level scores with transparent formulas.
   - Use time-series models + scenario adjustments for growth forecasting.
   - Store outputs in versioned score tables.

3. **API Layer**
   - REST or GraphQL endpoints for:
     - Company profile/overview
     - Score breakdowns (earnings surprise, supply/demand, bottleneck)
     - Forecast scenarios
     - Management guidance and execution history

4. **Front-End Application**
   - Dashboard: high-level score cards, trend charts, risk indicators.
   - Drilldowns: full metric explanations, raw data tables, and model assumptions.

5. **Observability & Governance**
   - Data lineage tracking, model versioning, and audit logs.
   - Admin dashboard for data corrections and overrides.

## UI/UX Pages
1. **Company Overview**
   - Quick stats, score summary, latest earnings highlight.
2. **Earnings Surprise**
   - Historical chart, surprise streak, estimates vs. actuals.
3. **Supply/Demand**
   - Inventory vs. demand chart, pricing power index.
4. **Bottleneck Analysis**
   - Constraint categories, timeline of constraints.
5. **Forecast Growth**
   - Scenario chart, assumptions, confidence intervals.
6. **Management Guidance & Execution**
   - Guidance vs. actual outcomes, execution score timeline.

## Implementation Phases
1. **Phase 1: MVP**
   - Core data ingestion for financials and estimates.
   - Earnings surprise scoring + basic UI.

2. **Phase 2: Supply/Demand & Bottleneck**
   - Add supply chain data sources.
   - Implement supply/demand and bottleneck scoring.

3. **Phase 3: Forecasting & Guidance**
   - Add forecasting engine and scenario outputs.
   - Guidance tracking and execution score.

4. **Phase 4: Production Hardening**
   - Observability, admin tools, access control.
   - Performance and scalability improvements.

## Suggested Tech Stack
- **Backend**: Python (FastAPI) or Node (NestJS)
- **Data Processing**: Python (Pandas, NumPy), Airflow or Dagster for ETL
- **Database**: Postgres + TimescaleDB, Redis for caching
- **Frontend**: React + TypeScript (Next.js) with charting (ECharts/Plotly)
- **Infra**: Docker + Kubernetes, CI/CD (GitHub Actions)

## Risk Mitigation
- Validate data quality with anomaly detection and manual review flags.
- Use explainable scoring for user trust.
- Maintain clear documentation of data sources and assumptions.

## Next Steps
- Confirm data sources and access.
- Align scoring formulas with domain experts.
- Prototype the earnings surprise dashboard and iterate with stakeholder feedback.
