import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import "/src/styles/global.scss";

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <div className="app">
        <Component {...pageProps} />
      </div>
    </RecoilRoot>
  );
}
export default App;
