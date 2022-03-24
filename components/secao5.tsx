import { useState } from "react";
import styles from "../styles/secao5.module.scss";

export const Secao5 = () => {
  const [pergunta1, setPergunta1] = useState(false);
  const [pergunta2, setPergunta2] = useState(false);
  const [pergunta3, setPergunta3] = useState(false);
  const [pergunta4, setPergunta4] = useState(false);
  const [pergunta5, setPergunta5] = useState(false);
  const [pergunta6, setPergunta6] = useState(false);
  const [pergunta7, setPergunta7] = useState(false);
  return (
    <div className={styles.secao5}>
      <h4>Perguntas Frequentes (F.A.Q)</h4>
      <div className={styles.container_principal}>
        <div className={styles.container_secundario}>
          <div className={styles.pergunta} id="pergunta1">
            <a onClick={() => setPergunta1(!pergunta1)}>
              Qual o valor do curso?
            </a>
            <p
              className={
                pergunta1 ? styles.mostrar_resposta : styles.esconder_resposta
              }
            >
              O curso tem um preço de R$ 549,00 e pode ser parcelado em até 4x
              de R$ 145,90.
            </p>
          </div>
          <div className={styles.pergunta} id="pergunta2">
            <a onClick={() => setPergunta2(!pergunta2)}>
              Esse curso vai funcionar para mim?
            </a>
            <p
              className={
                pergunta2 ? styles.mostrar_resposta : styles.esconder_resposta
              }
            >
              Se você apenas assistir às aulas e não aplicar o que aprendeu,
              provavelmente não vai funcionar. Mas, se você assistir às aulas
              com dedicação e colocar em prática os ensinamentos, é extremamente
              difícil e improvável de não ver resultados.
            </p>
          </div>
          <div className={styles.pergunta} id="pergunta3">
            <a onClick={() => setPergunta3(!pergunta3)}>
              Por quanto tempo vou ter acesso ao curso?
            </a>
            <p
              className={
                pergunta3 ? styles.mostrar_resposta : styles.esconder_resposta
              }
            >
              As aulas do curso serão ministradas pelo Zoom, e posteriormente
              serão disponibilizadas na plataforma Hotmart, para acesso dos
              alunos. Enquanto a plataforma estiver disponível, você terá acesso
              às aulas.
            </p>
          </div>
          <div className={styles.pergunta} id="pergunta4">
            <a onClick={() => setPergunta4(!pergunta4)}>
              Tenho garantia na minha compra?
            </a>
            <p
              className={
                pergunta4 ? styles.mostrar_resposta : styles.esconder_resposta
              }
            >
              Nós te disponibilizamos uma garantia de 7 dias. Se dentro desse
              período, você achar que o curso não é para você, te reembolsamos
              integralmente.
            </p>
          </div>
          <div className={styles.pergunta} id="pergunta5">
            <a onClick={() => setPergunta5(!pergunta5)}>
              Quais as formas de pagamento disponíveis?
            </a>
            <p
              className={
                pergunta5 ? styles.mostrar_resposta : styles.esconder_resposta
              }
            >
              Para não ter desculpa para fugir do autoconhecimento, você pode
              pagar o curso no cartão de débito ou crédito, em até 4x, e também
              tem disponível a opção de pagar pelo Pix, com 10% de desconto.
            </p>
          </div>
          <div className={styles.pergunta} id="pergunta6">
            <a onClick={() => setPergunta6(!pergunta6)}>
              Posso compartilhar o curso com outras pessoas?
            </a>
            <p
              className={
                pergunta6 ? styles.mostrar_resposta : styles.esconder_resposta
              }
            >
              Não, o acesso ao curso é pessoal, não podendo ser compartilhado
              com outras pessoas. Pirataria é crime.
            </p>
          </div>
          <div className={styles.pergunta} id="pergunta7">
            <a onClick={() => setPergunta7(!pergunta7)}>
              O ambiente de pagamento é seguro?
            </a>
            <p
              className={
                pergunta7 ? styles.mostrar_resposta : styles.esconder_resposta
              }
            >
              A plataforma Hotmart certifica a segurança e a proteção de seus
              dados pessoais e financeiros.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
