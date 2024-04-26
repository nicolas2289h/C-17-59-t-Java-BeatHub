import styles from "./HitsSection.module.css"
// absolute top-[86%] left-[8%]
const HitsSection = () => {
    return (
        <>
            <figure className={styles.hitSectionContainer}>
                {/* <img src="/assets/imgs/imgHits.webp" alt="imghit" className="w-full"/> */}
                <div className="flex flex-col h-full lg:justify-center pl-3 md:pl-12">
                    <h4 className="lg:text-8xl md-text-6xl text-3xl font-bold text-black">Hits locales</h4>
                    <p className="text-black text-lg lg:text-2xl font-normal md:w-full w-[50%]">Sí, estos éxitos fueron comprados en BeatHub</p>
                </div>

            </figure>
        </>
    )

}

export default HitsSection;