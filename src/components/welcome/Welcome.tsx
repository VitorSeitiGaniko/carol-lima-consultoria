import React from 'react'
import Icone from '../../assets/JL.svg';
import Form from '../form/Form';

function Welcome() {
  const [showForm, setShowForm] = React.useState(false);
  const URL = 'https://wa.me/5511993905235?text=Ol%C3%A1!%20Quero%20aumentar%20minhas%20convers%C3%B5es!'

  return (
    <div className='sm:grid sm:grid-cols-5 sm:p-0 bg-[#000000] w-screen sm:h-screen flex flex-col items-center justify-center text-white px-8 py-12'>
      <div className='sm:col-span-3 flex flex-col justify-center items-end'>
        <section className='sm:w-[70%] sm:justify-start flex justify-center items-center gap-2'>
          <i>
            <img src={Icone} className='h-[95px] w-[75px]'/>
          </i>
          <h1 className='w-[50%] font-[Classy_Vogue] text-4xl leading-[46px] pl-2 border-l-white border-l-1'>Jornada do Lucro</h1>
        </section>

        <section className='sm:w-[70%] mt-9'>
          <p className='sm:text-left text-center text-4xl'>
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

        <section className='sm:w-[70%] mt-7'>
          <p className='sm:text-left text-center text-xl font-bold'>Pare de vender no escuro. </p>
          <p className='sm:text-left text-center text-xl'>Descubra exatamente de onde vêm suas vendas e aumente suas conversões com um sistema de rastreamento profissional.</p>
        </section>

        <section className='sm:w-[70%] sm:mx-0 mt-9 mx-auto'>
          <button onClick={() => setShowForm(true)} className='border-none rounded-xl bg-[#08B52D] text-base font-bold px-4 py-3 cursor-pointer'>QUERO AUMENTAR MINHAS CONVERSÕES</button>
        </section>
      </div>

      <div className='hidden sm:block sm:col-span-2'>
        <span className='block font-[Classy_Vogue] text-[198px] text-[#813F1D]/25'>Jornada</span>
        <span className='block font-[Classy_Vogue] text-[198px] text-[#813F1D]/25'>Lucro</span>
      </div>

      {showForm && (
        <Form setShowForm={setShowForm} link={URL} />
      )}
    </div>
  )
}

export default Welcome