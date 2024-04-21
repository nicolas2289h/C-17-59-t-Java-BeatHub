import styles from "./ClientPay.module.css";

const ClientPayOption = () => {
    return(
        <>
            <div className={styles.responseContainer}>
                <section>
                    <h1>¿Cómo querés agar?</h1>
                    {/* <h2>Con crédito o débito</h2> */}
                    <form method="post">
                        <select name="metodoDePago" id="">
                            <optgroup label="Con débito o crédito">
                                <option value="nuevaTarjetaCredito">Nueva tarjeta de crédito</option>
                                <option value="nuevaTarjetaDebito">Nueva tarjeta de débito</option>
                            </optgroup>
                            <optgroup label="Billetera Virtual">
                                <option value="paypal">Paypal</option>
                            </optgroup>
                        </select>
                        {/* <Link></Link> */}
                        <input type="submit" value="" />
                    </form>

                </section>
                <section>
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
        </>
    );
};

export default ClientPayOption;