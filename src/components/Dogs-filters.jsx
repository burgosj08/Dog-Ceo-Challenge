import React from "react";
import { Button, Col, Row, Select } from "antd";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const DogsFilters = ({
  dataRace,
  dataDogs,
  setfilterSubRace,
  setfilterRace,
  filterRace,
  filterSubRace,
}) => {
  const options = filterRace?.map((race) => ({
    label: race,
    options: dataDogs
      ?.find((subrace) => subrace[0] === race)[1]
      ?.map((subrace) => ({
        label: subrace,
        value: `${race}/${subrace}`,
      })),
  }));

  const handleRemoveFilters = () => {
    setfilterRace([]);
    setfilterSubRace([]);
    toast.success("🐶 Filtros eliminados correctamente", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <Row gutter={[16, 16]} style={{ margin: "0 5%" }}>
      <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 10 }}>
        <Select
          lebel="Seleccione raza"
          mode="multiple"
          allowClear
          style={{
            width: "100%",
          }}
          placeholder="Selecciona una raza"
          onChange={(e) => setfilterRace(e)}
          value={filterRace}
          disabled={dataDogs?.length === 0}
        >
          {dataRace?.map((race, index) => (
            <Select.Option key={index} value={race}>
              {race}
            </Select.Option>
          ))}
        </Select>
      </Col>
      <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 10 }}>
        <Select
          allowClear
          mode="multiple"
          style={{
            width: "100%",
          }}
          options={options}
          onChange={(e) => {
            setfilterSubRace(e);
          }}
          value={filterSubRace}
          placeholder="Selecciona una sub-raza"
          disabled={filterRace?.length === 0}
        />
      </Col>
      <Col xs={{ span: 24 }} lg={{ span: 4 }}>
        <Button
          style={{
            width: "100%",
          }}
          disabled={filterRace?.length === 0}
          onClick={handleRemoveFilters}
        >
          Remover filtros
        </Button>
      </Col>
    </Row>
    // </Row>
    // </div>
  );
};
