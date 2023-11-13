import React, { useState } from "react";
import styles from "./Slider.module.css";

export const Slider = () => {
  const images = [
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/25d45014-8cc3-4c98-b02c-5a0cf3a55ddd/dcrjbvx-b5078bbf-03ff-4625-b214-35c3f9fefc4c.png/v1/fill/w_900,h_900/red_apple_on_a_transparent_background__by_prussiaart_dcrjbvx-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvMjVkNDUwMTQtOGNjMy00Yzk4LWIwMmMtNWEwY2YzYTU1ZGRkXC9kY3JqYnZ4LWI1MDc4YmJmLTAzZmYtNDYyNS1iMjE0LTM1YzNmOWZlZmM0Yy5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Y0-7z3OBNt3CbKeZrPiWJFD-4LhVF7I9iC2wADeZEAU",
    "https://www.earthytales.in/uploads/products/3x/Banana---Robusta.png?v=20231106017",
    "https://5.imimg.com/data5/EE/ER/MY-27568370/fresh-orange-500x500.png",
    "https://berryworld.imgix.net/consumerAssets/Strawberry-transparent1.png?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=822&ixlib=php-3.1.0&v=1563183127&w=800&w=800&auto=format&auto=compress",
    "https://binksberryhollow.com/wp-content/uploads/2021/12/purple-grape-1030x1030.png",
    "https://www.theproducemoms.com/wp-content/uploads/2022/01/kiwi.png",
    "https://www.mammarancia.com/wp-content/uploads/2022/10/mammarancia-selezione-mango-img-1.webp",
    "https://www.dole.com/-/media/project/dole/produce-images/fruit/pineapple_cut_web.png?rev=7b07a669415341b486c4d98d1d0e3fef&hash=947A67FA0B6FA57B38F0744DE9F2E29F",
  ];

  console.log(images);

  const [count, setCount] = useState(0);

  const next = () => {
    if (count < images.length-1) {
      setCount(count + 1);
    }
  };

  const prev = () => {
    if (count) {
      setCount(count - 1);
    }
  };

  return (
    <div className={styles.container}>
      <button onClick={prev} className={styles.button}>
        <span>&#60;</span>
      </button>
      <img className={styles.img} src={images[count]} alt="fruits" />
      <button onClick={next} className={styles.button}>
        <span>&#62;</span>
      </button>
    </div>
  );
};
