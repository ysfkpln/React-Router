import { Fragment } from "react"
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  return(
    <Fragment>
        <MainNavigation />
        <main>
            <h1>Bir Hata Olustu!</h1>
            <p>Bu Sayfa Bulunamadi!</p>
        </main>
    </Fragment>
  )
}
export default ErrorPage;