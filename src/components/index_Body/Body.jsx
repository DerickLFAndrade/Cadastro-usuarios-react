import React from 'react'
import { useState } from 'react';
import './style_Body_1.css'
export default function Index_Body () {
    
    const [nome, setNome] = useState();
    const [texto, setTexto] = useState();
    const [cep, setCep] = useState();
    const [rua, setRua] = useState();
    const [bairro, setBairro] = useState();
    const [cidade, setCidade] = useState();
    const [estado, setEstado] = useState();
    const numero = document.querySelector("#numero")
    function setNomeFunc (e) {
     setNome(e.target.value);
    }
function setCepFunc (e) {
    setCep(e.target.value);
}
    function BuscarCep () {

        const url = `https://viacep.com.br/ws/${cep}/json/`
        fetch(url).then(endereco => {
            return endereco.json();
        }).then(endereco => {
            if(endereco.logradouro) {
                setRua(`${endereco.logradouro}`);
                setBairro(`${endereco.bairro}`);
                setCidade(`${endereco.localidade}`);
                setEstado(`${endereco.uf}`);

                numero.disabled = false;
                numero.focus();
                
            }

         
           
        })
    }
  
    function PostText (e) {
        
      
       setNome("");
       
        setTexto(`${nome}`);   
    }
    return (
        <section className='body'>
            <h2 className='titulo'>Cadastro de Usuários</h2>
            <div className="cont-b">
                
                <form className='div-inps'>
                    
                    <div className="cont-usuario">
                        <input type="text" name="Nome" value={nome}  placeholder='Nome' className='inps-u' onChange={setNomeFunc} id='nome' required />
                        <input type="text" name="Idade" id="idade" placeholder='Idade' className='inps-u' id="idade" required />
                    </div>
                    <input type="text" name="Idade" id="cpf" placeholder='CPF: 000.000.000-00' className='inps-u' required />
                    
                    <br />
                    <label className='endereco'>Endereço</label>

                    <div className="buscar">
                        <input type="text" name="cep" id="cep" placeholder='CEP: 00000-000' className='inps-u' value={cep} onChange={setCepFunc} required />
                        <button  className='bot-buscar' onClick={BuscarCep}>Buscar</button>
                    </div>
                    <div className="cont-rua">
                        <input type="text" name="rua" id="rua" placeholder='Rua' className='inps-end' value={rua} disabled  />
                        <input type="text" name="numero" id="numero" placeholder='Número' className='inps-end ' disabled />
                    </div>

                    <input type="text" name="Idade" id="bairro" placeholder='Bairro' className='inps-end' value={bairro} disabled />
                    <input type="text" name="Idade" id="cidade" placeholder='Cidade' className='inps-end' value={cidade} disabled />
                    <input type="text" name="Idade" id="estado" placeholder='Estado' className='inps-end' value={estado} disabled />
                    
                     <span className="texto">{texto}</span>
                    <button onClick={PostText} className='botao'>ENVIAR</button>
                </form>
            </div>
        </section>
    );
}
  