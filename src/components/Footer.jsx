import { Facebook, Instagram, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <>
      <div className='bg-white/5 text-center py-2 text-sm flex flex-col gap-2 sm:flex-row items-center justify-between px-4'>
        <p>Developed by <a href="https://techxudo.com/" target="_blank" className='font-normal'>Techxudo</a></p>
        <div className="flex items-center gap-2">
          <Facebook size={20} className="cursor-pointer"/>
          <Instagram size={20} className="cursor-pointer"/>
          <Linkedin size={20} className="cursor-pointer"/>
        </div>
        <p>Copyright &copy; 2025</p>
      </div>
    </>
  )
}

export default Footer
