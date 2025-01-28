import "@/styles/globals.css";
import PrelineScript from "@/utils/PrelineScript";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <PrelineScript />
    </>
  );
}
