import video from '../assets/hero.mp4'
import logo from '../assets/logo.png'
import hero from '../assets/hero.jpeg'


const HeroSection = () => {
    return (
        <section className="flex relative h-screen items-center justify-center">
            <div className="absolute inset-0 f-full w-full overflow-hidden -z-20">
                <video src={video} className='h-full w-full object-cover' muted autoPlay playsInline poster={hero}>
                </video>
            </div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-70% to-black"></div>
            <div className="relative z-20 flex h-screen flex-col justify-end pb-20">
                <img src={logo} alt="logo" className='w-full p-4'/>
                <p className="p-4 text-lg tracking-tigher text-white">
                    Paris
                </p>
            </div>
        </section>
    )
}

export default HeroSection