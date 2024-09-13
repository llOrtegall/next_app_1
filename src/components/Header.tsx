'use client'

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signIn, signOut } from 'next-auth/react';
import { Session } from 'next-auth';
import Link from 'next/link';
import Image from 'next/image';

export default function Header({ session }: { session: Session }) {
  return (
    <header className='border-b p-4 flex items-center justify-between'>
      <Link href='/' className='text-blue-600 font-semibold text-2xl'>Markeplace</Link>
      <nav className='flex gap-4 *:rounded *:py-1'>
        <button className='border border-blue-600 text-blue-600 inline-flex items-center gap-1 px-2 mr-2'>
          <FontAwesomeIcon icon={faPlus} className='h-4' />
          <span>Post a ad</span>
        </button>
        <span className='border-r'></span>
        {
          !session?.user && (
            <>
              <button className='border-0 text-gray-600'>Sign up</button>
              <button className='bg-blue-600 text-white boder-0 px-6'
                onClick={() => signIn('google')}>Login</button>
            </>
          )
        }
        {
          session?.user && (
            <>
              <Image src={session.user.image} alt='avatar' width={80} height={80}/>
            </>
            // <button className='ml-4 bg-red-600 text-white boder-0 px-6'
            //   onClick={() => signOut()}
            // >Logout</button>
          )
        }

      </nav>
    </header>
  )
}