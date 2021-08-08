import styled from "styled-components";
import { PolarArea } from "react-chartjs-2";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  padding: 42px;
`;

const PolarWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 500px;
  width: 500px;
`;

const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.span`
  font-size: 36px;
  font-weight: 900;
`;

const Subtitle = styled.span`
  font-size: 20px;
`;

const Paragraph = styled.span`
  font-size: 16px;
  line-height: 1.5;
`;

const Footer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Small = styled.span`
  font-size: 14px;
`;

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
  datasets: [
    {
      label: "# of Votes",
      data: [10, 20, 6, 17, 13],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
      ],
      borderWidth: 2,
    },
  ],
};

export default function Home() {
  const now = new Date().toLocaleDateString();

  return (
    <Container>
      <TitleWrapper>
        <Title>Your Scheduled Report</Title>
        <Subtitle>{now}</Subtitle>
      </TitleWrapper>
      <PolarWrapper>
        <PolarArea data={data} />
      </PolarWrapper>
      <Paragraph>
        Leverage agile frameworks to provide a robust synopsis for high level
        overviews. Iterative approaches to corporate strategy foster
        collaborative thinking to further the overall value proposition.
        Organically grow the holistic world view of disruptive innovation via
        workplace diversity and empowerment. Bring to the table win-win survival
        strategies to ensure proactive domination. At the end of the day, going
        forward, a new normal that has evolved from generation X is on the
        runway heading towards a streamlined cloud solution. User generated
        content in real-time will have multiple touchpoints for offshoring.
        Capitalize on low hanging fruit to identify a ballpark value added
        activity to beta test. Override the digital divide with additional
        clickthroughs from DevOps. Nanotechnology immersion along the
        information highway will close the loop on focusing solely on the bottom
        line.
      </Paragraph>
      <Footer>
        <Small>🗄️ Crafted with BloxDossier</Small>
      </Footer>
    </Container>
  );
}
