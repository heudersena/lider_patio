import React, { useEffect, useState } from "react"
import { toast } from 'react-toastify';
import Theme from "../Theme"
import api from "../../services/api"
import { useAuth } from "../../context/auth";

export default function Home() {
  const [dataAbastecimento, setDataAbastecimento] = useState();
  const [horario, setHorario] = useState();
  const [autorizacao, setAutorizacao] = useState();
  const [placa, setPlaca] = useState();
  const [unidade, setUnidade] = useState();
  const [km, setKm] = useState();
  const [litros, setLitros] = useState();
  const [valor, setValor] = useState();

  const { logount } = useAuth();


  const handleRelatorios = async () => {
    const response = await api.post("/control/create", {
      data_abastecimento: dataAbastecimento,
      horario: horario,
      numero_abastecimento: autorizacao,
      placa: placa,
      unidade: unidade,
      km: km,
      litros: litros,
      valor: valor
    });
    if (response.data.jwt) {
        return logount();
    }
    if (!response.data.err) {
      toast.success(response.data.message);
      setDataAbastecimento("")
      setHorario("")
      setAutorizacao("")
      setPlaca("")
      setUnidade("")
      setKm("")
      setLitros("")
      setValor("")
    } else {
      toast.error(response.data.message)
    }
  }



  return (
    <Theme>

      <div style={{ paddingTop: "4.0rem" }} >
        <div className="row justify-content-center">
          <div className="col-md-9">
            <div className="card">
              <div className="card-header"> <h4>FORMULÁRIO DE CADASTRO</h4> </div>
              <div className="card-body">

                <div className="row">
                  <div className="col-sm">
                    {/*  */}
                    <div className="form-group row">
                      <label className="col-md-12 col-form-label">DATA DO ABASTECIMENTO:</label>
                      <div className="col-md-12">
                        <input
                          type="date"
                          className="form-control"
                          value={dataAbastecimento}
                          onChange={e => setDataAbastecimento(e.target.value)}
                        />
                      </div>
                    </div>
                    {/*  */}
                  </div>
                  <div className="col-sm">
                    {/*  */}
                    <div className="form-group row">
                      <label className="col-md-4 col-form-label">HORÁRIO:</label>
                      <div className="col-md-12">
                        <input
                          type="time"
                          className="form-control"
                          value={horario}
                          onChange={e => setHorario(e.target.value)}
                        />
                      </div>
                    </div>
                    {/*  */}
                  </div>
                </div>




                {/*  */}
                <div className="form-group row">
                  <label className="col-md-6 col-form-label">Nº AUTORIZAÇÃO DO ABASTECIMENTO:</label>
                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      value={autorizacao}
                      onChange={e => setAutorizacao(e.target.value)}
                    />
                  </div>
                </div>
                {/*  */}



                <div className="row">
                  <div className="col-sm">
                    {/*  */}
                    <div className="form-group row">
                      <label className="col-md-6 col-form-label">PLACA:</label>
                      <div className="col-md-12">
                        <input
                          type="text"
                          className="form-control"
                          value={placa}
                          onChange={e => setPlaca(e.target.value)}
                        />
                      </div>
                    </div>
                    {/*  */}
                  </div>
                  <div className="col-sm">
                    {/*  */}
                    <div className="form-group row">
                      <label className="col-md-6 col-form-label">UNIDADE:</label>
                      <div className="col-md-12">
                        <input
                          type="number"
                          className="form-control"
                          value={unidade}
                          onChange={e => setUnidade(e.target.value)}
                        />
                      </div>
                    </div>
                    {/*  */}
                  </div>
                  <div className="col-sm">
                    {/*  */}
                    <div className="form-group row">
                      <label className="col-md-6 col-form-label">KM:</label>
                      <div className="col-md-12">
                        <input
                          type="number"
                          className="form-control"
                          value={km}
                          onChange={e => setKm(e.target.value)}
                        />
                      </div>
                    </div>
                    {/*  */}
                  </div>
                </div>


                {/*  */}
                {/*  */}
                <div className="row">
                  <div className="col-sm">
                    {/*  */}
                    <div className="form-group row">
                      <label className="col-md-12 col-form-label">LITROS ABASTECIDO:</label>
                      <div className="col-md-12">
                        <input
                          type="number"
                          className="form-control"
                          value={litros}
                          onChange={e => setLitros(e.target.value)}
                        />
                      </div>
                    </div>
                    {/*  */}
                  </div>
                  <div className="col-sm">
                    {/*  */}
                    <div className="form-group row">
                      <label className="col-md-4 col-form-label">VALOR:</label>
                      <div className="col-md-12">
                        <input
                          type="number"
                          className="form-control"
                          value={valor}
                          onChange={e => setValor(e.target.value)}
                        />
                      </div>
                    </div>
                    {/*  */}
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-md-12" style={{ flexDirection: "row-reverse", display: "flex" }}>
                    <button onClick={handleRelatorios} className="btn btn-success">CADASTRAR</button>
                  </div>
                </div>







              </div>
            </div>
          </div>
        </div>
      </div>

    </Theme>
  )
}

