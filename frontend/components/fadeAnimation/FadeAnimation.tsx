import { motion } from "framer-motion";
interface Props {
  children: JSX.Element;
}
const FadeAnimation = ({ children }: Props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      variants={{
        visible: { opacity: 1, y: 0, marginTop: "0" },
        hidden: { opacity: 0, y: "-100px", marginTop: "200px" },
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeAnimation;
