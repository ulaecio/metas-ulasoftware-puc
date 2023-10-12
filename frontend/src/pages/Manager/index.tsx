import Footer from "../../components/Footer";
import { getTokenData, isAuthenticated, Tokendata } from "utils/auth";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "utils/request";
import { getAuthData } from "utils/storage";
import { Venda } from "types/sales";
import { springPage } from "types/vendor/springPage";
import { formatPrice } from "utils/format";
import "./styles.css";
import Catalog from "pages/Catalog";
import NavbarAdm from "core/components/NavbarAdm";

type AuthData = {
  authenticated: boolean;
  tokenData?: Tokendata;
};

const Manager = () => {
  const [authData, setAuthData] = useState<AuthData>({ authenticated: false });
  const [venda, setVenda] = useState<springPage<Venda>>();

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthData({
        authenticated: true,
        tokenData: getTokenData(),
      });

      axios
        .get(`${BASE_URL}/sales${getTokenData()?.user_name}`, {
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
      <NavbarAdm />
      <div className="div-rota container">
        <h1 className="text-secondary py-3 border-bottom">
          Resumo do Gerente administrador{" "}
          <span className="text-primary">{authData.tokenData?.user_name}</span>
        </h1>
        <div className="row ">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Vendas</h5>
            
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Meta</h5>
            <Catalog />
          </div>
        </div>
        {/*///////////////////CONTAINER RESUMO DE VALORES/////////////*/}
        <div className="">
          <div className="container text-primary text-center">
            {/*////////////////////TOTAL VENDAS//////////////////////*/}

            <div className="card-body text-secondary">
              <p className="m-3">
                <strong>Nota:</strong> Os numeros aqui mostrados são referentes
                a 1(um) dia anterior ao mês atual do ano corrente.
              </p>
              <div className="d-flex flex-wrap justify-content-center">
                <div id="accordion">
                  {venda?.content.map((item) => (
                    <div key={item.id} className="card m-3">
                      <h3 className="m-3">{item.user.name} </h3>
                      <h5 className="card-header bg-light text-primary text-uppercase">
                        Total faturado
                      </h5>
                      <h3 className="m-3">{formatPrice(item.value)} </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Manager;
