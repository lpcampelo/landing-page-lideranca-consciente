import Image from "next/image";
import styles from "../styles/secao2.module.scss";

export const Secao2 = () => {
  return (
    <div className={styles.secao2}>
      <h4>Quem será sua professora?</h4>
      <div className={styles.container}>
        <div>
          <Image
            width="486"
            height="394"
            alt="moldura"
            src="/marcela-moldura.png"
          />
        </div>
        <div className={styles.texto}>
          <p>
            Olá! Meu nome é Marcela França, criadora do perfil
            @marcela.f.franca, e nesse curso vou te auxiliar no processo de
            desenvolvimento da liderança de sucesso! Sou{" "}
            <span style={{ fontWeight: "bold" }}>
              especialista em liderança consciente
            </span>
            , tenho mais de 1.200 alunos pelo mundo todo, e quero te ajudar a
            desenvolver a líder que vive em você, para ter mais leveza e
            praticidade na sua rotina.
          </p>
          <p>
            Eu atuei no meio jurídico corporativo desde 2012, exerci a profissão
            de advogada no Brasil e na Argentina, e em 2019 decidi realizar a
            minha transição de carreira.
          </p>
          <p>
            Morando fora do Brasil, cresci na profissão de advogada e alcancei
            diversos marcos de “felicidade” estabelecidos pela sociedade. Mas{" "}
            <span style={{ fontWeight: "bold" }}>não estava feliz </span> nesse
            padrão, logo, decidi deixar a minha zona de conforto, para buscar e
            compartilhar o que acredito e amo. Quero te propor agora:{" "}
            <span style={{ fontWeight: "bold" }}>
              saia da sua zona de conforto
            </span>
            , e busque a sua felicidade — ao invés de seguir padrões
            insuficientes!
          </p>
          <p>
            Hoje, sou{" "}
            <span style={{ fontWeight: "bold" }}>
              treinadora, professora e palestrante
            </span>
            , especializada em neurociência e psicologia cognitiva, pós-graduada
            em filosofia e autoconhecimento pela PUCRS.
          </p>
          <p>
            O que marcou a minha história foi a busca do autoconhecimento e o
            desenvolvimento da minha líder interior. Hoje, quero que você crie o
            SEU marco, na SUA história:
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.frase}>
          <p>
            O dia em que você decidiu —{" "}
            <span style={{ fontWeight: "800", color: "#3b1f5c" }}>
              conscientemente
            </span>{" "}
            — mudar a sua vida.
          </p>
        </div>
      </div>
    </div>
  );
};
