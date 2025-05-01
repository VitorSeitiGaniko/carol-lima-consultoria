import React from 'react'

const Action = () => {
  return (
    <div className='bg-[#000000] w-screen h-screen flex flex-col items-center justify-center text-white'>
      <section className='w-[50%]'>
        <p className='font-extrabold'>
            <span>SÓ QUE A </span>
            <span className='text-[#BB9E7E]'>JORNADA DO LUCRO </span>
            <span>É UMA ESTRATÉGIA MUITO MAIS ROBUSTA E CAPAZ DE GERAR AINDA MAIS RESULTADOS...</span>
        </p>
      </section>

      <section className='w-[50%]'>
        <p>
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

      <section className='w-[50%]'>
        <div className='flex items-center justify-center bg-[#D9D9D9] border-none rounded-xl px-3 py-6'>
            <p className='text-black'>TENHA ACESSO A INTELIGÊNCIA QUE POUQUÍSSIMOS INFOPRODUTORES JÁ UTILIZAM PARA FATURAR CADA VEZ MAIS</p>
            <button className='border-none rounded-xl bg-[#08B52D] text-base font-bold px-4 py-3'>AGENDAR SESÃO ESTRATÉGICA</button>
        </div>
      </section>
    </div>
  )
}

export default Action