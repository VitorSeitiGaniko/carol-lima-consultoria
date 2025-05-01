import React from 'react'
import Icone from '../../assets/JL.svg';

function Welcome() {
  return (
    <div className='bg-[#000000] w-screen h-screen flex flex-col items-center justify-center text-white grid grid-cols-5'>
      <div className='col-span-3 flex flex-col justify-items-center items-end'>
        <section className='flex justify-items-center items-center gap-2 w-[70%] '>
          <i>
            <img src={Icone} className='h-[95px] w-[75px]'/>
          </i>
          <h1 className='w-[33%] font-[Classy_Vogue] text-4xl leading-[46px] pl-2 border-l-white border-l-1'>Jornada do Lucro</h1>
        </section>

        <section className='w-[70%] mt-9'>
          <p className='text-4xl'>
            <span className='font-bold'>aumente </span>
            <span>suas </span> 
            <span className='font-bold'>conversões </span>
            <span>em até </span>
            <span className='font-bold'>30% rastreando </span>
            <span>cada passo da </span>
            <span className='font-bold'>jornada </span>
            <span>do seu cliente</span>
          </p>
        </section>

        <section className='w-[70%] mt-7'>
          <p className='text-xl font-bold'>Pare de vender no escuro. </p>
          <p className='text-xl'>Descubra exatamente de onde vêm suas vendas e aumente suas conversões com um sistema de rastreamento profissional.</p>
        </section>

        <section className='w-[70%] mt-9'>
          <button className='border-none rounded-xl bg-[#08B52D] text-base font-bold px-4 py-3'>QUERO AUMENTAR MINHAS CONVERSÕES</button>
        </section>
      </div>

      <div className='col-span-2'>
        <span className='block font-[Classy_Vogue] text-[198px] text-[#813F1D]/25'>Jornada</span>
        <span className='block font-[Classy_Vogue] text-[198px] text-[#813F1D]/25'>Lucro</span>
      </div>
    </div>
  )
}

export default Welcome