import type { NextApiRequest, NextApiResponse } from "next";
import { headlessToPDF } from "./headlessToPDF";

type Data = {};

const getPDF = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const pdfBuffer = await headlessToPDF({ path: "http://localhost:3000/" });
  res.setHeader("Content-Type", "application/pdf");
  res.send(pdfBuffer);
};

export default getPDF;
