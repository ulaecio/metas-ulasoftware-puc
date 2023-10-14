import Footer from "../../components/Footer";
import { getTokenData, isAuthenticated, Tokendata } from "utils/auth";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "utils/request";
import { getAuthData } from "utils/storage";
import { springPage } from "types/vendor/springPage";
import { formatPrice } from "utils/format";
import "./styles.css";
import { Venda } from "types/sales";
import NavBarSeller from "./NavBarSeller";

type AuthData = {
  authenticated: boolean;
  tokenData?: Tokendata;
};

const Seller = () => {
  const [authData, setAuthData] = useState<AuthData>({ authenticated: false });
  const [venda, setVenda] = useState<springPage<Venda>>();

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthData({
        authenticated: true,
        tokenData: getTokenData(),
      });

      axios
        .get(`${BASE_URL}/sales`, {
          headers: { Authorization: "Bearer " + getAuthData().access_token },
        })
        .then((response) => {
          setVenda(response.data);
        });
    } else {
      setAuthData({
        authenticated: false,
      });
    }
  }, []);
  return (
    <>
      <NavBarSeller />
      <div className="div-rota container">
        <h1 className="text-secondary py-3 border-bottom">
          Resumo do Vendedor{" "}
          <span className="text-primary">{authData.tokenData?.user_name}</span>
        </h1>
        <div className="row ">
          {/*///////////////////CONTAINER RESUMO DE Vendas/////////////*/}
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Vendas</h5>
            
            <div id="accordion">
              {venda?.content.map((item) => (
                <div key={item.id} className="card m-3">
                  <h5 className="card-header bg-light text-primary text-uppercase">
                    Total faturado
                  </h5>
                  <h3 className="m-3">{item.user.name} </h3>
                  <h3 className="m-3">{formatPrice(item.value)} </h3>
                </div>
              ))}
            </div>
          </div>
          <div className="col-sm-6">
            {/*///////////////////CONTAINER METAS/////////////*/}
            <h5 className="text-center text-secondary">Meta</h5>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Seller;
