import React from 'react'
import './style_footer.css'
import WhatsApp from './icons-footer/whatsApp-ico.ico'
import Facebook from './icons-footer/facebook-ico.ico'
import Instagram from './icons-footer/instagram-ico.ico'
import Telefone from './icons-footer/telefone-ico.ico'


export default function Footer () {
return (
    <footer className='footer'>
       <section className="div-footer">
           <div className='cont-sl'>
               <h3>Sobre nós</h3>
                <h3 className='itens-footer'>Localização</h3>
           </div>
            
            <div className="cont-fc">
                <h3 className='itens-footer'>Fale conosco:</h3>
                <div name="faleConosco" id="faleConosco" className='faleConosco'>

                    <div className="cont-icons">
                        <img src={WhatsApp}  className='ico'/>
                        <h5 value="op1" className='ops' id='whats'>WhatsApp</h5>
                    </div>

                    <div className="cont-icons">
                        <img src={Instagram} className='ico' />
                        <h5 value="op2" id='inst'>Instagram</h5>
                    </div>

                    <div className="cont-icons">
                        <img src={Facebook} className='ico' />
                        <h5 value="op3" id='fc'>Facebook </h5>
                    </div>

                    <div className="cont-icons">
                        <img src={Telefone} className='ico'/>
                        <h5 value="op4" id='tlf'>Telefone</h5>
                    </div>
                </div>
            </div>
       </section>
        </footer>
);
}
