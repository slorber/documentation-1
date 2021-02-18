import React, { useEffect, useState } from "react";
import { AutoTyper } from "./AutoTyper";
import styles from "./styles.module.css";
import clsx from "clsx";

export type Props = {
  words?: string[];
  delay?: number;
  typeSpeed?: number;
};

const HeaderTyper: React.FC<Props> = (props) => {
  const delay = props.delay || 500;
  const words = props.words || ["nothing to type", "are you sure", "really?"];
  const typeSpeed = props.typeSpeed || 100;

  const [text, setText] = useState("hello");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const autoTyper = new AutoTyper({
      delay: typeSpeed,
      textListener: (currentText) => {
        setText(currentText);
      },
      isTypingListener: (isTyping) => {
        setIsTyping(isTyping);
      },
    });

    words.forEach((word) => {
      autoTyper.type({ toType: word }).sleep({ ms: delay }).remove();
    });

    autoTyper.loop().start();

    return () => {
      autoTyper.stop();
    };
  }, []);

  return (
    <div className={styles.Container}>
      <div className={styles.Text}>{text}</div>
      <div
        className={clsx(styles.Cursor, {
          [styles.Cursor_Blink]: !isTyping,
        })}
      />
    </div>
  );
};

export default HeaderTyper;
