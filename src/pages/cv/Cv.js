import React, { useRef } from 'react';

import { Form } from '@unform/web';
import { Scope } from '@unform/core';
import * as Yup from 'yup';
import { validateCPF } from "validations-br";
import api from '../../services/api';


import Header from '../../componentes/cabecalho/Header';
import Navbar from '../../componentes/navbar/Navbar';
import Footer from '../../componentes/rodape/Footer';
import Input from '../../componentes/form/Input'
import './Cv.css';



function Cv() {
  const formRef = useRef(null);

  async function handleSubmit(data, { reset })   {

    //Validação do front-end
    try {
      const schema = Yup.object().shape({
        name: Yup.string().min(3).required('* Campo Nome é obrigatório'),
        email: Yup.string().email().required('* Campo Email é obrigatório'),
        cpf: Yup.string().matches((/[^0-9]/g, '')).test(
          "is-cpf",
          "Esse CPF não é válido",
          (cpf) => validateCPF(cpf)
        ),
        date: Yup.string().required('* Campo Data de Nascimento é obrigatório'),
        status: Yup.string(),
        gender: Yup.string(),
        phone: Yup.string().required('* Campo Celular é obrigatório'),
        office: Yup.string(),
        occupation: Yup.string().required('* Campo Profissão é obrigatório'),
        cnh: Yup.string(),
        auto: Yup.string(),
        address: Yup.object().shape({
          zipcode: Yup.string().matches((/^\d{8}$/) | (/^\d{5}-\d{3}$/), '* Campo CEP obrigatório'),
          street: Yup.string().required('* Campo Logradouro é obrigatório'),
          number: Yup.string().required('* Campo Número é obrigatório'),
          complement: Yup.string(),
          district: Yup.string().required('* Campo Bairro é obrigatório'),
          state: Yup.string().required('* Campo Estado é obrigatório'),
          city: Yup.string().required('* Campo Cidade é obrigatório'),
        })        
      });

      //valida dados acima
      await schema.validate(data, {
        abortEarly: false,
      });      


      //Se validação não apresentar erros, envio de dados para o back-end
      const cpfLimpo = data.cpf.replace(/[^0-9]/g, '');
      api.post('/cadastro', {
        name: data.name,
        email: data.email,    
        cpf: cpfLimpo,
        date: data.date, 
        status: data.status,
        gender: data.gender,
        phone: data.phone,
        office: data.office,
        occupation: data.occupation,
        cnh: data.cnh,
        auto: data.auto,
        zipcode: data.address.zipcode,
        street: data.address.street,
        number: data.address.number,
        complement: data.address.complement,
        district:data.address.district,
        state: data.address.state,
        city: data.address.city
      })
        .then(function (response) {
          alert('Enviado com Sucesso');
        })
        .catch(function (error) {
          alert('Usuário já cadastro ou dados incompletos');
        });

      //apago erros e reseto o formulário
      formRef.current.setErrors({}); 
      reset()
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        })
        formRef.current.setErrors(errorMessages);
      }
    }
  }

  //Validação do cep e consumo da API
    function handleCep(ev) {
      const { value } = ev.target;
      const cep = value?.replace(/[^0-9]/g, '');

      if (cep?.length !== 8) {
        return
      }
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => response.json())
        .then((data) => {
          if (data.erro === true) {
            alert('CEP inválido')
          } else {
            formRef.current.setData({
              address: {
                street: data.logradouro,
                district: data.bairro,
                state: data.uf,
                city: data.localidade
              },          
          });
        }
      });
    }


  return (
    <div className="page-cv">
      <header className="header-cv">
        <Header />
      </header>
      <div className="main">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="container">
          <div className="textos">
            <h1 className="titulo">Preencha Seu Currículo</h1>
            <p className="text">
              Prencha seu dados para se registrar em nosso banco de talentos. Surgindo uma vaga com seu perfil, entraremos em contato.
            </p>
            <p className="text"><strong>
              É permitido apenas um envio por CPF, caso, queria atualizar seu currículo nos mande um email.
              </strong></p>
          </div>
          <div className="formulario">
            <Form className="form" ref={formRef} onSubmit={handleSubmit} >
              <fieldset className="field">
                <Input name="name" type="text" label="Nome" className="campo-name" />
                <Input name="email" type="email" label="Email" className="campo-email" />
              </fieldset>
              <fieldset className="field">
                <Input name="cpf" type="text" label="CPF" className="campo-cpf" />
                <Input name="date" type="date" label="Data de Nascimento" className="campo-date" />
              </fieldset>
              <fieldset className="field">
                <Input name="status" type="text" label="Estado Civil" className="campo-status" />
                <Input name="gender" type="text" label="Gênero" className="campo-gender" />
              </fieldset>
              <fieldset className="field">
                <Input name="phone" type="tel" label="Celular" className="campo-cel" />
                <Input name="office" type="text" label="Cargo Pretendido" className="campo-office" />
                <Input name="occupation" type="text" label="Profissão" className="campo-occupation" />
              </fieldset>
              <fieldset className="field">
                <Input name="cnh" type="text" label="Possui CNH?" className="campo-cnh" />
                <Input name="auto" type="text" label="Possui Veículo?" className="campo-auto" />
              </fieldset>
              <Scope path="address">
                <fieldset className="field">
                  <Input name="zipcode" label="CEP" onBlur={handleCep} className="campo-cep" />
                  <Input name="street" label="Logradouro" type="text" className="campo-street" />
                  <Input name="number" type="text" label="Número" className="campo-number" />
                </fieldset>
                <fieldset className="field">
                  <Input name="complement" type="text" label="Complemento" className="campo-complement" />
                  <Input name="district" type="text" label="Bairro" className="campo-district" />
                </fieldset>
                <fieldset className="field">
                  <Input name="state" type="text" label="Estado" className="campo-state" />
                  <Input name="city" type="text" label="Cidade" className="campo-city" />
                </fieldset>
              </Scope>

              <button className="botao " type="submit">Save</button>
            </Form>
          </div>
        </div>
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default Cv;
