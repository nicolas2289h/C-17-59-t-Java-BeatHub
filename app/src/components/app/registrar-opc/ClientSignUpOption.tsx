import Link from "next/link";
import RegisterComponent from "./registerComponent/RegisterComponent";

const ClientSignUpOption = () => {
    return (
        <section className="w-[80%] mx-auto bg-black text-black m-20">
            <Link href='/registrar'>
                <RegisterComponent title='Artista'/>
            </Link>
            <Link href='/registrar'>
                <RegisterComponent title='Productor'/>
            </Link>
        </section>
    )
}

export default ClientSignUpOption;