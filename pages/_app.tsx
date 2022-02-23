import { AppProps } from "next/app";
import "/src/styles/global.scss";

function App({ Component, pageProps }: AppProps) {
  return (
    <div className="app">
      <Component {...pageProps} />
    </div>
  );
}
export default App;
