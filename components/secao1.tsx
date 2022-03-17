import Image from "next/image";
import { useState } from "react";
import styles from "../styles/secao1.module.scss";

export const Secao1 = () => {
  const [click, setClick] = useState(false);
  return (
    <div className={styles.secao1}>
      <h4>Liderança Consciente: caminho para o novo mundo!</h4>
      <div className={styles.container_principal}>
        <div className={styles.container_texto}>
          <p>
            O mercado mudou seu foco. Hoje, além de expertise, o
            autoconhecimento e a liderança são ferramentas fundamentais de um
            bom profissional. Por isso, quero te{" "}
            <span style={{ color: "#F5DD01", fontWeight: 600 }}>
              mostrar o caminho e as ferramentas{" "}
            </span>
            que eu utilizei para me desenvolver e melhorar a minha vida, e como
            você vai aplicar isso de maneira prática, no seu dia-a-dia,{" "}
            <span style={{ color: "#F5DD01", fontWeight: 600 }}>
              para transformar sua rotina.
            </span>
          </p>
          <p>
            Para entrar nessa jornada de transformação,{" "}
            <span style={{ color: "#F5DD01", fontWeight: 600 }}>
              clique aqui{" "}
            </span>
            e garanta o seu acesso:
          </p>
          <button onClick={() => click} type="submit">
            Quero liderar e me desenvolver!
          </button>
        </div>
        <div className={styles.container_video}>          
        </div>
      </div>
    </div>
  );
};
