import styles from "./ClientBuy.module.css";
import Image from "next/image";
import Link from "next/link";
const ClientBuy = () => {
  const {
    responseContainer,
    buyTitle,
    payOptionContainer,
    optionContainer,
    buySubtitle,
    paragraphGrey,
    paddingLeft,
    hr,
    buttonContainer,
    linkPosition,
    button,
    priceSection,
    hrRight,
    priceContainer,
    spanPrice,
    marginButtom,
  } = styles;
  return (
    <div className={responseContainer}>
      <section>
        <h2 className={buyTitle}>Elegí una forma de entrega</h2>
        <div className={payOptionContainer}>
          <div className={optionContainer}>
            <Image src="/" alt="imagen" width={40} height={40} />
            <h3 className={buySubtitle}>e-mail vinculado</h3>
            <p className={`${paragraphGrey} ${paddingLeft}`}>
              amoelbeat@gmail.com
            </p>
          </div>
          <hr className={hr} />
          <div className={optionContainer}>
            <a href="#" className={paddingLeft}>
              Editar o elegir otro e-mail
            </a>
          </div>
        </div>
        <p className={`${paragraphGrey} ${marginButtom}`}>
          Se te entregará vía e-mail un archivo .rar con el/los contenidos
          comprados.
        </p>
        <div className={buttonContainer}>
          <Link href="*" className={linkPosition}>
            <button className={button}>Continuar</button>
          </Link>
        </div>
      </section>
      <section className={priceSection}>
        <h2 className={buyTitle}>Resumen de compra</h2>
        <hr className={hrRight} />
        <div className={priceContainer}>
          <p className={paragraphGrey}>Producto</p>
          <span className={paragraphGrey}>$45,99</span>
        </div>
        <hr className={hrRight} />
        <div className={priceContainer}>
          <p className={paragraphGrey}>Pagás</p>
          <span className={spanPrice}>$45,99</span>
        </div>
      </section>
    </div>
  );
};

export default ClientBuy;
