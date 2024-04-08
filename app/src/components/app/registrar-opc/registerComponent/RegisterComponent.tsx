interface Props {
    title: string;
}


const RegisterComponent = ({ title }: Props) => {
    return (
        <div className='bg-zinc-300 grid grid-cols-5 gap-4 mb-11'>
            <figure className="w-[100%] h-[100%] min-h-350 bg-gray-500 col-span-2">

            </figure>
            <div className="col-span-3">
                <h3 className="my-5">{title}</h3>
                <ul>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li className="mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                </ul>
            </div>
        </div>
    )
}

export default RegisterComponent;