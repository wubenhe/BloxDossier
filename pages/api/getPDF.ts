import type { NextApiRequest, NextApiResponse } from "next";
import { headlessToPDF } from "./headlessToPDF";

type Data = {};

const getPDF = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

  const path = "http://localhost:3000/";
  let data = {};
  if (req.method === 'POST') {
    data = req.body;
  }
  const pdfBuffer = await headlessToPDF({ path, data });
  res.setHeader("Content-Type", "application/pdf");
  res.send(pdfBuffer);
};

export default getPDF;
