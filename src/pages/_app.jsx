import store from "@/redux/store";
import { Provider } from "react-redux";
import ReactModal from "react-modal";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss';
import 'slick-carousel/slick/slick.css';
import 'swiper/css/bundle';
import 'react-modal-video/scss/modal-video.scss';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/toast-overrides.scss';
import '../styles/tailwind.css';
// import { GoogleOAuthProvider } from "@react-oauth/google";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

if (typeof window !== "undefined") {
  ReactModal.setAppElement("body");
}

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div id="root">
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}
