import { useSession, signIn, signOut } from 'next-auth/react';

import About from "../components/about";


export default function Home() {
  return <About/>;
}