interface Props {
    portada: string;
    parrafo: string;
}

const HeroComponent = ({ portada, parrafo }: Props) => {
    return (
        <>
            <div className="flex gap-4 pb-3">
                <img src="/assets/icons/icons-tilde.png" alt="tilde-img" className="flex-none w-5 h-5 relative top-1 left-2"/>
                <div className="flex-initial w-[35%] ">
                    <h3 className="text-white text-base font-bold">{portada}</h3>
                    <p className="text-sm font-normal">{parrafo}</p>
                </div>
            </div>
        </>
    )
}

export default HeroComponent;