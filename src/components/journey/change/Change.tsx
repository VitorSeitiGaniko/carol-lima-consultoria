import React from 'react'
import IconAffirmative from '../../../assets/iconAffirmative.svg';
import IconNegative from '../../../assets/iconNegative.svg';

const Change = () => {
  return (
    <div className='bg-[#BB9E7E] w-screen flex flex-col items-center justify-center text-white py-12'>
      <h2 className='flex flex-col items-center'>
        <span className='font-[Classy_Vogue] text-4xl'>HOJE O CENÁRIO MUDOU</span>
        <span className='text-3xl'>E ESTÁ CUSTANDO CARO...</span>
      </h2>

      <hr className='border-t border-white w-[30%] my-4' />

      <section className='grid grid-cols-[40px_1fr] border border-white rounded-xl w-[44%] py-8 px-4 mt-14'>
        <i className=''>
          <img src={IconNegative} className='h-[24px] w-[24px]'/>
        </i>
        <div className='flex flex-col gap-3'>
          <p className='font-bold'>Ponto cego nos dados</p>
          <p className='font-medium'>Os bloqueios de rastreamento (IOS 14, Chrome 2024) estão cegando os algoritmos de anúncios.</p>
          <p className='font-medium'>Resultado? CPL nas alturas e ROI no chão.</p>
        </div>
      </section>

      <section className='grid grid-cols-[40px_1fr] border border-white rounded-xl w-[44%] py-8 px-4 mt-5'>
        <i className=''>
          <img src={IconNegative} className='h-[24px] w-[24px]'/>
        </i>
        <div className='flex flex-col gap-3'>
          <p className='font-bold'>Método antigo ficou obsoleto </p>
          <p className='font-medium'>A maioria ainda depende de Pixels, mas eles não entregam mais os dados certos.</p>
          <p className='font-medium'>Quem continuar assim, não vai acompanhar o mercado..</p>
        </div>
      </section>

      <section className='grid grid-cols-[40px_1fr] border border-white rounded-xl w-[44%] py-8 px-4 mt-5'>
        <i className=''>
          <img src={IconAffirmative} className='h-[24px] w-[24px]'/>
        </i>
        <div className='flex flex-col gap-3'>
          <p className='font-bold'>Quem domina dados, domina o jogo</p>
          <p className='font-medium'>A Jornada do Lucro rastreia toda a jornada do lead e alimenta os algoritmos com dados ricos e confiáveis.</p>
          <p className='font-medium'>Resultado? CPL nas alturas e ROI no chão.</p>
        </div>
      </section>

      <section className='mt-14'>
        <p>O próprio Facebook atestou aumento de performance em quem implementa o básico da API de conversões:</p>
      </section>

      <section className='grid grid-cols-2 gap-12 bg-[#1C2B33] border-none rounded-xl w-[44%] py-8 px-8 mt-8'>
      <div className='flex flex-col gap-4'>
          <p className='font-bold text-4xl'>13%</p>
          <p className='font-bold'>Menor custo por resultado</p>
          <p className='font-medium text-xs'>Os anunciantes que configuram a API de Conversões juntamente com o pixel tiveram, em média, uma redução de 13% no custo por resultado.</p>
        </div>
        <div className='flex flex-col gap-3'>
          <p className='font-bold text-4xl'>19%</p>
          <p className='font-medium'>mais eventos de compras</p>
          <p className='font-medium text-xs'>Os anunciantes globais grandes que configuram a Api de Conversões juntamente com o pixel tiveram, em média, 19% mais eventos de compra atribuídos.</p>
        </div>
      </section>
    </div>
  )
}

export default Change