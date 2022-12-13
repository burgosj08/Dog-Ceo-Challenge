import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { DogsCards } from "../../components/Dogs-cards";
import { Col, Row, Spin } from "antd";
import { DogsFilters } from "../../components/Dogs-filters";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MainLayouts } from "../../layouts/MainLayouts";

const Home = () => {
  const [dataDogs, setDataDogs] = useState([]);
  const [dataRace, setDataRace] = useState([]);

  const [filterSubRace, setfilterSubRace] = useState([]);
  const [filterRace, setfilterRace] = useState([]);

  const [hasError, setHasError] = useState(false);

  const getData = async () => {
    try {
      const { data } = await axios.get("https://dog.ceo/api/breeds/list/all");
      setDataDogs(Object.entries(data.message));
      setDataRace(Object.entries(data.message)?.map((race) => race[0]));
      setHasError(false);
    } catch (error) {
      setHasError(true);
      toast.error("🐶 Error al obtener los datos", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <MainLayouts>
      <DogsFilters
        dataRace={dataRace}
        dataDogs={dataDogs}
        setfilterSubRace={setfilterSubRace}
        setfilterRace={setfilterRace}
        filterRace={filterRace}
        filterSubRace={filterSubRace}
      />
      <br />
      <br />
      {dataDogs.length > 0 ? (
        <Fragment>
          <Row style={{ margin: "0 5%" }} align="center" gutter={[16, 16]}>
            {(filterRace?.length === 0
              ? dataRace
              : [...filterRace, ...filterSubRace]
            )?.map((element, index) => (
              <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
                <DogsCards
                  className="animate-spin"
                  element={element}
                  key={index}
                />
              </Col>
            ))}
          </Row>
        </Fragment>
      ) : (
        <div className="text-center">
          {hasError ? "No se pueden cargar los datos " : <Spin size="large" />}
        </div>
      )}
    </MainLayouts>
  );
};

export default Home;
