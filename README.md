# 4Dlabs Explorer V1
Independent public-data dashboard foundation for 4Dlabs.

## Run
npm install
npm run dev

## Data policy
- Only verified public metrics appear as headline values.
- Current live metrics are official Galxe snapshots in `src/data/registry.js`.
- Future network metrics already have adapter slots in `src/adapters/index.js`.
- No unofficial token/contract, invented history, inferred geography, or fake onchain data.

## Plugging future sources in
Implement a provider in `src/adapters/`, map its normalized fields to the relevant registry domain, and replace the null adapter. UI components remain source-agnostic.
