import React, { useState } from "react";
import PageTitle from "../components/PageTitle";

const Pesquisa = () => {
  const [form, setForm] = useState({
    Nome: "",
    Email: "",
    Whatsapp: "",
    Nota: 0,
  });
  const [success, setSuccess] = useState(false);
  const [retorno, setRetorno] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((old) => ({
      ...old,
      [name]: value,
    }));
  };

  const save = async () => {
    try {
      const response = await fetch("/api/save", {
        method: "POST",
        body: JSON.stringify(form),
      });
      const data = await response.json();
      setSuccess(true);
      setRetorno(data);
    } catch (error) {}
  };

  return (
    <section
      className="text-gray-700 body-font relative"
      style={{ backgroundColor: "#6C2A6A" }}
    >
      <PageTitle title="Pesquisa" />
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Pesquisa
          </h1>
          {success && (
            <p className="text-sm text-white">
              Obrigado por sua contribuição e/ou crítica.
            </p>
          )}
        </div>
        {!success && (
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full">
                <input
                  className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-purple-500 text-base px-4 py-2"
                  placeholder="Nome"
                  type="text"
                  name="Nome"
                  onChange={onChange}
                  value={form.Nome}
                />
              </div>
              <div className="p-2 w-1/2">
                <input
                  className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-purple-500 text-base px-4 py-2"
                  placeholder="Email"
                  type="email"
                  name="Email"
                  onChange={onChange}
                  value={form.Email}
                />
              </div>
              <div className="p-2 w-1/2">
                <input
                  className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-purple-500 text-base px-4 py-2"
                  placeholder="Whatsapp"
                  type="text"
                  name="Whatsapp"
                  onChange={onChange}
                  value={form.Whatsapp}
                />
              </div>
              <div className="p-2 w-full flex text-center">
                <p className="text-white self-center">Nota:</p>
                {[0, 1, 2, 3, 4, 5].map((nota) => (
                  <label className="text-white block w-1/6">
                    {nota}
                    <br />
                    <input
                      type="radio"
                      name="Nota"
                      value={nota}
                      onChange={onChange}
                    />
                  </label>
                ))}
              </div>
              <div className="p-2 w-full">
                <button
                  className="flex mx-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg"
                  onClick={save}
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        )}
        {success && retorno.showCoupon && (
          <div
            className="bg-teal-100 border-t-4 text-center border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
            role="alert"
          >
            <div>
              <p className="font-bold">{retorno.Promo}</p>
              <p className="font-bold text-2xl">Cupom: {retorno.Cupom}</p>
              <p className="italic">
                Tire print ou foto desta tela e apresente ao Garçom
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Pesquisa;
