'use client'

import Mec from '@/assets/mec.svg'
import Image from 'next/image'
import { HeaderOne } from '@/components/Header'
import { loginUser } from '@/api/login';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { hasCookie } from 'cookies-next';

export default function Home() {
  const router = useRouter();

  if (hasCookie('login') == true) {
    router.push("/menu")
  }

  return (
    <main>
      <HeaderOne />
      <div className='w-full fixed inset-0 flex flex-col justify-center items-center'>
        <div className='w-36 h-36 rounded-md mb-7'>
          <Image className='w-full h-full rounded-md'
            src={Mec}
            alt="Mec"
          />
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-4xl mb-5'>LOGIN</h1>
          <form onSubmit={loginUser}  className='flex flex-col justify-center items-center'>
            <input type="text" placeholder='Email:' className='bg-[#D9D9D9] mb-5 w-full h-11 rounded-lg shadow-mdshadow-[#07070763] border-0 py-1.5 pl-7 pr-20 text-black font-medium ring-inset ring-gray-300 placeholder:text-[#000000a1] placeholder:font-medium sm:text-sm sm:leading-6 placeholder="0.00"'/>
            <input required type="password" placeholder='Senha:' className='bg-[#D9D9D9] mb-5 w-full h-11 rounded-lg shadow-mdshadow-[#07070763] border-0 py-1.5 pl-7 pr-20 text-black  font-medium ring-inset ring-gray-300 placeholder:text-[#000000a1] placeholder:font-medium sm:text-sm sm:leading-6" placeholder="0.00"' />
            <input required type="submit" value="Entrar" className='bg-[#D9D9D9] rounded-lg shadow-md shadow-[#07070763] flex justify-center text-center items-center w-32 h-11 hover:shadow-inner cursor-pointer'/>
          </form>
          <div className=' mt-5'>
            <span>Não possui cadastro? </span>
            <Link href='cadastro' className=' text-green-700 hover:underline'>Clique Aqui!</Link>
          </div>
        </div>
      </div>
    </main>

  )
}
