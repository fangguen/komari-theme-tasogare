// latency tiers: green = fast, amber = medium, rose = slow; heavy packet loss degrades the tier
export const TIER_COLORS = ["#34d399", "#fbbf24", "#fb7185"];
// happy → neutral → glum, matching the tier; the same face family, eyes/brows drooping as it worsens
export const TIER_FACES = ["(≧ω≦)", "(･ω･)", "(´･ω･`)"];

export const pingTier = (ms: number, loss = 0) => {
  const byMs = ms < 100 ? 0 : ms < 200 ? 1 : 2;
  const byLoss = loss >= 50 ? 2 : loss >= 20 ? 1 : 0;
  return Math.max(byMs, byLoss);
};

export const pingColor = (ms: number, loss = 0) => TIER_COLORS[pingTier(ms, loss)];
export const pingFace = (ms: number, loss = 0) => TIER_FACES[pingTier(ms, loss)];
export const lossColor = (loss: number) =>
  loss === 0 ? undefined : loss >= 20 ? "#fb7185" : "#fbbf24";
