import Link from "next/link";
import { Box } from "@mui/material";

const data = ["123", "232", "343", "234", "2343", "3423", "4534", "45"];

export default function Main() {
  return (
    <Box>
      {data.map((value, index) => (
        <li key={`k-${index}`}>{value}</li>
      ))}
      <Link href={"/signup"}>회원가입</Link>
    </Box>
  );
}
