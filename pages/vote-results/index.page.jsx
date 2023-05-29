import { ConnectButton } from "@rainbow-me/rainbowkit";
import * as S from "./index.styles";
import ResultChart from "./components/ResultChart";

const VoteResults = () => {
  const data = [100, 200, 300]
  const labels = ['A', 'B', 'C']
  return (
    <S.RootStyle>
      <S.Title> 투표 결과입니다 </S.Title>
      <ResultChart voteData={data} voteLabels={labels} />
    </S.RootStyle>
  );
};

export default VoteResults;
