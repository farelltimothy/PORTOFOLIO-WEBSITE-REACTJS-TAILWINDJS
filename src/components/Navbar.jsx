import { useState, useEffect } from 'react';

const Navbar = () => {

    const [active, setActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setActive(true);
            } else {
                setActive(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return <div className="Navbar py-7 flex flex-col md:flex-row items-center justify-between gap-4">
  <div className="logo w-full md:w-auto text-center md:text-left">
    <h1 className="text-3xl font-bold p-1 md:bg-transparent md:text-white">
      Portofolio
    </h1>
  </div>
    <ul className={`menu flex item-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0 -top-10 opacity-0 md:opacity-100 bg-white/30 backdrop-blur-md p-4 
        rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all md: transition all md: transition-none ${active ? "top-0 opacity-100" : "-top-10 opacity-0"} transition-all duration-300 z-40`}>
        <li>
            <a href="#beranda" className="sm:text-lg text-base font-medium">Beranda</a>
        </li>
        <li>
            <a href="#tentang" className="sm:text-lg text-base font-medium" >Tentang</a>
        </li>
        <li>
            <a href="#proyek" className="sm:text-lg text-base font-medium">Proyek</a>
        </li>
        <li>
            <a href="#kontak" className="sm:text-lg text-base font-medium">Kontak</a>
        </li>
    </ul>
    
  </div>;
  
};

export default Navbar;