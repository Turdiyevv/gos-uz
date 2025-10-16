export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center p-4 bg-white shadow">
      <h1 className="text-xl font-bold">GOS.UZ</h1>
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li><a href="#about">Biz haqimizda</a></li>
        <li><a href="#services">Xizmatlar</a></li>
        <li><a href="#contact">Bog‘lanish</a></li>
      </ul>
    </nav>
  )
}
