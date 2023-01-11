import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Home.module.css";
const About = () => {
  const [value, setValue] = useState("");
  const onChangeInput = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <div className={styles.main}>
        <h1>About Page</h1>
        <p>
          아래 input에 작성한 값
          <br />: {value}
        </p>
        <input type="text" onChange={onChangeInput} />
        <Link className={styles.link} href="/">
          Main 페이지로 이동
        </Link>
      </div>
    </>
  );
};

export default About;
<>
  <h1>about페이지입니다.</h1>
</>;
