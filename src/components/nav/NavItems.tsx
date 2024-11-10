

const navItems = [
  {
    name: 'Incio',
  },
  {
    name: 'Mis proyectos',
  },
  {
    name: 'Contacto',
  }
]




export const NavItems = () => {
  return (
    <div className="flex">
      {
        navItems.map(item => (
          <div className="py-2 pr-4 pl-3" key={item.name}>
            <span className="hover:text-dark-primary dark:hover:text-primary cursor-pointer font-serif font-normal text-sm sm:text-xl">{item.name}</span>
          </div>
        ))
      }
    </div>
  )
}
