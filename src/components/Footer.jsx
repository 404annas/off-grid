import { Facebook, Instagram, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <>
      <div className='bg-white/5 text-center py-2 text-sm flex items-center justify-between px-4'>
        <p>Developed by <a href="https://techxudo.com/" className='font-normal'>Techxudo</a></p>
        <p>Copyright &copy; 2025</p>
      </div>
      <div className="bg-white/5 text-center pb-2 text-sm flex items-center justify-center gap-2 px-4">
        <Facebook size={20} />
        <Instagram size={20} />
        <Linkedin size={20} />
      </div>
    </>
  )
}

export default Footer