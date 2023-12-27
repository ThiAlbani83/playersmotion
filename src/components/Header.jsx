import NavMenu from "./NavMenu"


const Header = () => {
  return (
    <div className='flex items-center justify-between w-full padding-x padding-y bg-[#FCFCFD]'>
      <div>
        <img src="/playersmotion-logo.png" alt="logo" className="h-20 w-36" />
      </div>
      <NavMenu />
    </div>
  )
}

export default Header