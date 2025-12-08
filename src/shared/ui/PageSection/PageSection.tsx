import styles from "./PageSection.module.scss";

export const PageSection: React.FC<{
  children: React.ReactNode;
  visible: boolean;
}> = ({ children, visible }) => {
  return (
    <section className={`${styles.section} ${visible ? styles.visible : ""}`}>
      {children}
    </section>
  );
};
