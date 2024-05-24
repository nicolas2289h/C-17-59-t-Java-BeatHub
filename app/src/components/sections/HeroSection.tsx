import HeroComponent from "./HeroElements/HeroElements";
import styles from "./HeroSection.module.css"

const HeroSection = () => {
    return (
        <>
            <figure className={styles.heroHome}>
                <div className="text-white pl-6 pt-4">
                    <h1 className=" text-5xl md:text-8xl text-white font-bold mb-5 text-center md:text-start">BeatHub</h1>
                    <HeroComponent 
                        portada="Beats únicos y originales." 
                        parrafo="Consigue el beat que te ayudará a crear tu próximo hit. Una vez que adquieras el beat sólo tú lo tendrás."
                    />
                    <HeroComponent 
                        portada="Experiencia de compra perfecta." 
                        parrafo="Sin esfuerzo. Explora tus géneros favoritos y compra con facilidad, todo dentro de una sola plataforma."
                    />                    
                    <HeroComponent 
                        portada="Licencia simple." 
                        parrafo="Los contratos no tienen por qué ser confusos. Dedica menos tiempo a rascarte la cabeza y más tiempo a grabar tu próximo golpe."
                    />  
                    <HeroComponent 
                        portada="Una comunidad que te entiende." 
                        parrafo="Somos creadores como tú. Ya sea que necesites nuestro equipo de soporte o desees colaborar con creativos con ideas afines, hay un hogar para tí."
                    />  
                </div>

            </figure>
        </>
    )
}

export default HeroSection;