import React from 'react'
import CarolLima from '../../assets/CarolLima.png';
import IconAspas from '../../assets/IconAspas.svg';

const About = () => {
  return (
    <div className='bg-[#5B7A99] w-screen h-screen grid grid-cols-2 text-white'>
        <div className='col-span-1 w-[70%] m-auto'>
            <section>
                <span className='text-center block m-auto'>PRAZER,</span>
                <h2 className='font-[Classy_Vogue] text-center text-4xl mt-4'>CAROL LIMA</h2>
            </section>

            <section className='flex flex-col items-center justify-center gap-4 mt-9'>
                <p className='text-justify mt-4'>Especialista de Dados, com mais de 5 anos de experiência na área traduzindo o que os dados falam e tornando empresas lucrativas e estratégicas por meio de soluções de Business Intelligence e Trackeamento de Sites.</p>
                <p className='text-justify mt-4'>Minha trajetória profissional foi construída no mercado offline, onde tive a oportunidade de atuar diretamente com empresas que faturam bilhões anualmente — Banco Itaú e Banco BV — foi nesse ambiente de alta performance que desenvolvi minha expertise em análise estratégica de dados, interpretando e planejando métricas para tomada de decisão no negócio.</p>
                <p className='text-justify mt-4'>Acredito muito no potencial que a informação carrega, por este motivo carrego a missão de aculturar empresas a serem orientadas a dados, desenvolvendo soluções que sejam capazes de dar clareza e confiança sobre os próximos passos da sua organização de forma intuitiva e simples.</p>
            </section>
        </div>
        
        <div className='col-span-1 m-auto'>
            <section className='flex flex-col items-center justify-center relative w-[80%]'>
                <img src={CarolLima} className=''/>
                <p className='text-end italic  mt-11'>
                    <span className='block'>Os dados do seu negócio já falam.</span>
                    <span className='block'>Você só precisa saber ouvir.</span>
                </p>
                <i className=''>
                    <img src={IconAspas} className='absolute w-[136px] bottom-[-3%] left-[0%]'/>
                </i>
            </section>
        </div>
    </div>
    
  )
}

export default About