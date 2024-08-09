import theme from "~/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";

export const metadata = {
  title: "VictualsHub",
  description:
    "VictualsHub là một nền tảng để người dùng chia sẻ, đánh giá, nhận xét các công thức đồ ăn, thức uống.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CssVarsProvider theme={theme} defaultMode="system">
          <CssBaseline />
          {children}
        </CssVarsProvider>
      </body>
    </html>
  );
}
