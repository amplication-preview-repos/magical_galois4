import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { HospitalList } from "./hospital/HospitalList";
import { HospitalCreate } from "./hospital/HospitalCreate";
import { HospitalEdit } from "./hospital/HospitalEdit";
import { HospitalShow } from "./hospital/HospitalShow";
import { ServiceList } from "./service/ServiceList";
import { ServiceCreate } from "./service/ServiceCreate";
import { ServiceEdit } from "./service/ServiceEdit";
import { ServiceShow } from "./service/ServiceShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"HospitalService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Hospital"
          list={HospitalList}
          edit={HospitalEdit}
          create={HospitalCreate}
          show={HospitalShow}
        />
        <Resource
          name="Service"
          list={ServiceList}
          edit={ServiceEdit}
          create={ServiceCreate}
          show={ServiceShow}
        />
      </Admin>
    </div>
  );
};

export default App;
