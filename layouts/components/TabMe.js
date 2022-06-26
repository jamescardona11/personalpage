import { InsightsSection, InsightType } from './InsightsSection'

export const TabMe = ({ frontMatter }) => {
  const { insight1, insightDesc1, insight2, insightDesc2, insight3, insightDesc3 } = frontMatter
  return (
    <>
      {' '}
      <InsightsSection type={InsightType.Insight1} title={insight1} description={insightDesc1} />
      <InsightsSection type={InsightType.Insight2} title={insight2} description={insightDesc2} />
      <InsightsSection type={InsightType.Insight3} title={insight3} description={insightDesc3} />
    </>
  )
}
