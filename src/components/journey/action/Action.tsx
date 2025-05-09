import React from 'react'
import Form from '../../form/Form';

const Action = () => {
  const [showForm, setShowForm] = React.useState(false);
  const URL = 'https://wa.me/5511993905235?text=Tenho%20interesse%20na%20Jornada%20do%20Lucro!%20Vamos%20agendar%20a%20sess%C3%A3o%20estrat%C3%A9gica'

  return (
    <div className='xl:p-0 bg-[#000000] w-screen xl:h-screen flex flex-col items-center justify-center text-white px-8 py-12'>
      <section className='sm:w-[70%] md:w-[70%] lg:w-[50%]'>
        <p className='font-extrabold text-center'>
            <span>SÓ QUE A </span>
            <span className='text-[#BB9E7E]'>JORNADA DO LUCRO </span>
            <span>É UMA ESTRATÉGIA MUITO MAIS ROBUSTA E CAPAZ DE GERAR AINDA MAIS RESULTADOS...</span>
        </p>
      </section>

      <section className='sm:w-[70%] md:w-[70%] lg:w-[50%] mt-20'>
        <p className='text-center'>
            <span className='font-bold'>RASTREAMOS </span>
            <span>OS EVENTOS </span>
            <span className='font-bold'>MAIS VALIOSOS DA JORNADA DOS SEUS CLIENTES </span>
            <span>ENTRE SUAS PÁGINAS DO SITE, </span>
            <span className='font-bold'>TURBINANDO </span>
            <span>A PERFORMANCE DOS SEUS ANÚNCIOS ONLINE E PROPORCIONANDO </span>
            <span className='font-bold'>CLAREZA E CONFIANÇA </span>
            <span>NAS SUAS DECISÕES.</span>
        </p>
      </section>

      <section className='sm:w-[70%] md:w-[70%] lg:w-[50%] mt-16'>
        <div className='flex flex-col items-center justify-center gap-6 bg-[#D9D9D9] border-none rounded-xl py-9 px-5'>
            <p className='text-black text-center'>TENHA ACESSO A INTELIGÊNCIA QUE POUQUÍSSIMOS INFOPRODUTORES JÁ UTILIZAM PARA FATURAR CADA VEZ MAIS</p>
            <button onClick={() => setShowForm(true)} className='border-none rounded-xl bg-[#08B52D] text-base font-bold px-4 py-3 cursor-pointer'>AGENDAR SESSÃO ESTRATÉGICA</button>
        </div>
      </section>

      {showForm && (
        <Form setShowForm={setShowForm} link={URL} />
      )}
    </div>
  )
}

export default Action