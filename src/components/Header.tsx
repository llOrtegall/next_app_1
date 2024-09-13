import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function Header() {
  return(
    <header className='border-b p-4 flex items-center justify-between'>
      <Link href='/' className='text-blue-600 font-semibold text-2xl'>Markeplace</Link>
      <nav className='flex gap-4 *:border  *:rounded *:px-2  *:py-1'>
        <button className='border-blue-600 text-blue-600 inline-flex items-center gap-1'>
          <FontAwesomeIcon icon={faPlus} className='h-4' />
          <span>Post a ad</span>
        </button>
        <button className=''>Login</button>
        <button className=''>Register</button>
      </nav>
    </header>
  )
}