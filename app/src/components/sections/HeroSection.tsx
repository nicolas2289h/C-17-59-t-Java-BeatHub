import HeroComponent from "./HeroElements/HeroElements";
import styles from "./HeroSection.module.css"

const HeroSection = () => {
    return (
        <>
            <figure className={styles.heroHome}>
                <div className="text-white pl-6 pt-4">
                    <h1 className="text-8xl text-white font-bold mb-5">BeatHub</h1>
                    <HeroComponent 
                        portada="Beats únicos y originales." 
                        parrafo="Consigue el beat que te ayudaran a crear tu próximo hit. Una vez que adquieras el beat solo tu lo tendrás."
                    />
                    <HeroComponent 
                        portada="Experiencia de compra perfecta." 
                        parrafo="Sin esfuerzo. Explore sus géneros favoritos y compre con facilidad, todo dentro de una sola plataforma."
                    />                    
                    <HeroComponent 
                        portada="Licencia simple." 
                        parrafo="Los contratos no tienen por qué ser confusos. Dedica menos tiempo a rascarte la cabeza y más tiempo a grabar tu próximo golpe."
                    />  
                    <HeroComponent 
                        portada="Una comunidad que te entiende." 
                        parrafo="Somos creadores como tú. Ya sea que necesite nuestro equipo de soporte o desee colaborar con creativos con ideas afines, hay un hogar para usted."
                    />  
                </div>

            </figure>
        </>
    )
}

export default HeroSection;