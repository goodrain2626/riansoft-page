"use client";
import Link from 'next/link';

interface NavItem {
  label: string;
  link?: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { label: "홈", link: "/"},
  { label: "소개", link: "/about" },
  { label: "서비스", link: "/service" },
  { label: "포트폴리오", link: "/portfolio" },
  {
    label: "홍보", link: "/promotion",
    children: [
      { label: "공지", link: "#" },
      { label: "뉴스", link: "#" },
      { label: "수상", link: "#" },
      { label: "IR", link: "#" }
    ]
  },
  { label: "문의", link: "/contact" }
];

const Navbar = () => {
  return (
    <nav className='flex w-screen justify-between items-center p-5'>
      <div className="text-3xl font-extrabold ml-10">
        <Link href={"/"}>LOGO</Link></div>
      <div className='flex items-center gap-10'>
        {navItems.map((item, index) => (
          <div key={index} className='flex flex-col group relative'>
            <Link href={item.link || "#"} className='group transition-all'>
              {item.label}
            </Link>
            {item.children ? (
              <div className='absolute top-full left-1/2 -translate-x-1/2 min-w-max py-2 px-5 gap-2 rounded-3xl hidden bg-blue-600 text-white shadow-lg group-hover:flex items-center transition-all whitespace-nowrap text-center duration-1000'>
                {item.children.map((child, childIndex) => (
                  <Link key={childIndex} href={child.link || "#"} className='hover:text-white hover:font-semibold'>
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : null}
            <div className='bg-transparent h-1 w-2 rounded-md group-hover:w-full group-hover:bg-blue-600 group-hover:scale-x-125 transition-all duration-300'
                 style={{visibility: item.children ? 'hidden' : 'visible'}}>
            </div>
          </div>
        ))}
      </div>
      <div />
    </nav>
  );
};

export default Navbar;
