import Icone from '../../assets/JLForm.svg';
import IconeClose from '../../assets/iconClose.svg';

const Form = ({setShowForm, link}) => {
  function formatNumber(value) {
    if (!value) return "";
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value;
  }

  function handleKeyUp(event) {
    const input = event.target;
    input.value = formatNumber(input.value);
  }

  return (
    <div>
      <div className='fixed h-screen w-full top-0 left-0 bg-black/30 z-10'></div>

      <div className='fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20'>
        <div className='bg-[#FFFFFF] sm:w-[420px] w-[320px] rounded-xl flex flex-col items-center justify-center text-black py-8 px-6 relative'>
          <i className='absolute top-4 right-4 cursor-pointer' onClick={() => setShowForm(false)}>
            <img src={IconeClose} />
          </i>
          <section className='flex justify-center items-center gap-2'>
            <i>
              <img src={Icone} className='h-[95px] w-[75px]'/>
            </i>
            <h1 className='w-[50%] font-[Classy_Vogue] text-4xl leading-[46px] pl-2 border-l-black border-l-1'>Jornada do Lucro</h1>
          </section>

          <section className='mt-8'>
            <p className='sm:text-left text-center'>Preencha o formulário para agendarmos uma sessão estratégica e entender a sua Jornada do Lucro</p>
          </section>

          <form action="https://api.staticforms.xyz/submit" method="POST" className='flex flex-col items-center justify-center gap-4 mt-8 w-[100%]'>
            <input type="hidden" name="Produto" value="Contato - Jornada do Lucro" />
            <input type="text" name="Nome" id="name" placeholder='* Nome' required className='outline-none border-none rounded-sm bg-[#D9D9D9] w-[100%] px-4 py-2' />
            <input type="text" name="Email" id="email" placeholder='* Seu Email' required className='outline-none border-none rounded-sm bg-[#D9D9D9] w-[100%] px-4 py-2' />
            <input type="text" name="Whatsapp" id="whatsapp" placeholder='* Whatsapp com DDD' required onKeyUp={handleKeyUp} className='outline-none border-none rounded-sm bg-[#D9D9D9] w-[100%] px-4 py-2' />

            {/* <!-- Required: Your Static Forms API key --> */}
            <input type="hidden" name="apiKey" value="sf_hcm4d9cbnkg56ghk47lf4h8h" />

            {/* <!-- Enable reply-to functionality --> */}
            <input type="hidden" name="replyTo" value="vitorseitiganiko@gmail.com" />

            {/* <!-- Optional redirect URLs --> */}
            <input type="hidden" name="redirectTo" value={link} />

            <button type="submit" className='cursor-pointer border-none rounded-xl bg-[#813F1D] text-base font-bold text-white px-4 py-3 w-[100%]'>AGENDAR</button>
          </form>
        </div>
      </div>
    </div>


    












    
  )
}

export default Form