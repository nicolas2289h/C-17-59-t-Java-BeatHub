import styles from "./ClientBuy.module.css";
import Image from "next/image";
import Link from "next/link";
const ClientBuy = () => {
    return (
        <div className={styles.responseContainer}>
            <section>
                <h2 className={styles.buyTitle}>Elegí una forma de entrega</h2>
                <div className={styles.payOptionContainer}>
                    <div className={styles.optionContainer}>
                        <Image 
                            src="/" 
                            alt="imagen"
                            width={40}
                            height={40}
                        />
                        <h3 className={styles.buySubtitle}>e-mail vinculado</h3>
                        <p className={`${styles.paragraphGrey} ${styles.paddingLeft}`}>amoelbeat@gmail.com</p>
                    </div>
                    <hr className={styles.hr} />
                    <div className={styles.optionContainer}>
                        <a href="#" className={styles.paddingLeft}>Editar o elegir otro e-mail</a>
                    </div>
                </div>
                <p className={`${styles.paragraphGrey} ${styles.marginButtom}`}>Se te entregará vía e-mail un archivo .rar con el/los contenidos comprados.</p>
                <div className={styles.buttonContainer}>
                    <Link href="*" className={styles.linkPosition}><button className={styles.button}>Continuar</button></Link>

                </div>
            </section>
            <section className={styles.priceSection}>
                <h2 className={styles.buyTitle}>Resumen de compra</h2>
                <hr className={styles.hrRight} />
                <div className={styles.priceContainer}>
                    <p className={styles.paragraphGrey}>Producto</p>
                    <span className={styles.paragraphGrey}>$45,99</span>
                </div>
                <hr className={styles.hrRight} />
                <div className={styles.priceContainer}>
                    <p className={styles.paragraphGrey}>Pagás</p>
                    <span className={styles.spanPrice}>$45,99</span>
                </div>

            </section>
        </div>
    )
}

export default ClientBuy;