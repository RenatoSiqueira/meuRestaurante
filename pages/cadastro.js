import React, { useState } from "react";
import PageTitle from "../components/PageTitle";

const Cadastro = () => {
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    preco: "",
    imagem: "",
    descricao: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((old) => ({
      ...old,
      [name]: value,
    }));
  };

  const save = async () => {
    try {
      const response = await fetch("/api/post-new", {
        method: "POST",
        body: JSON.stringify(form),
      });
      await response.json();
      setSuccess(true);
      setForm({
        nome: "",
        preco: "",
        imagem: "",
        descricao: "",
      });
    } catch (error) { }
  };

  return (
    <section className="body-font relative">
      <PageTitle title="Cadastro de Novo Prato" />
      <div className="container px-5 py-4 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font">
            Cadastrar Novo Prato
          </h1>
          {success && (
            <p className="text-sm mt-4">Prato Inserido com Sucesso</p>
          )}
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-full">
              <input
                className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-purple-500 text-base px-4 py-2"
                placeholder="Nome do Prato"
                type="text"
                name="nome"
                onChange={onChange}
                value={form.nome}
              />
            </div>
            <div className="p-2 w-1/2">
              <input
                className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-purple-500 text-base px-4 py-2"
                placeholder="Preço"
                type="text"
                name="preco"
                onChange={onChange}
                value={form.preco}
              />
            </div>
            <div className="p-2 w-1/2">
              <input
                className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-purple-500 text-base px-4 py-2"
                placeholder="Url da Imagem"
                type="text"
                name="imagem"
                onChange={onChange}
                value={form.imagem}
              />
            </div>
            <div className="p-2 w-full">
              <textarea
                className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-purple-500 text-base px-4 py-2"
                placeholder="Descrição"
                type="text"
                name="descricao"
                onChange={onChange}
                value={form.descricao}
              />
            </div>
            <div className="p-2 w-full">
              <button
                className="flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg"
                onClick={save}
              >
                Salvar Prato
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cadastro;
