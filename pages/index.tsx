import styled from "styled-components";
import { PolarArea } from "react-chartjs-2";
import { GetServerSideProps } from "next";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 42px;
  gap: 16px;
`;

const PolarWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 500px;
  width: 500px;
  margin: 48px 0;
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
  margin-top: 48px;
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

type Props = {
  placeholder: {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
};

const Home = ({ placeholder }: Props) => {
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
      <Paragraph>{placeholder.body}</Paragraph>
      <Paragraph>{placeholder.body}</Paragraph>
      <Paragraph>{placeholder.body}</Paragraph>
      <Footer>
        <Small>🗄️ Crafted with BloxDossier</Small>
      </Footer>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const number = Math.floor(Math.random() * 100);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${number}`
  );
  const placeholder: Props = await res.json();
  return {
    props: {
      placeholder,
    },
  };
};

export default Home;
