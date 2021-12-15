import React from "react";
import Duck from "../../assets/images/about/duck.jpg"

export default function() {
  return (
    <div className="about-grid">
      <div
        className="left-column"
        style={{
          background: "url(" + Duck + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam sequi temporibus error dignissimos soluta
        minus ratione? A reprehenderit tempora ratione corporis alias eveniet veniam nihil, quos amet! Aliquam, rem perspiciatis?
        Accusamus, odit aut. Reprehenderit iste quo quod. Officiis quia dolor soluta enim, repudiandae necessitatibus
        quis quos, quasi distinctio voluptatem nemo. Nihil, sunt nemo! Pariatur voluptate sequi alias tempore porro laudantium!
        Enim, laboriosam deserunt quisquam omnis quae consectetur maiores. Molestias fugiat nam consequuntur repellat
        eligendi. Deserunt inventore libero, vero minus esse, aliquam temporibus similique enim, earum blanditiis quos dolorum nesciunt consequuntur?
        Molestiae rerum nemo voluptas est! Aliquid impedit eveniet libero dolores dolore, numquam facere autem tempora
        quae expedita dolorem minima incidunt consequatur? Adipisci expedita culpa libero ex facilis aliquam ratione! Iure!
        Vitae, aliquid? Illo quae qui, voluptas iure inventore totam repellendus ratione animi delectus architecto
        dolorem hic, iusto fugiat dolor harum ipsum, omnis ut quaerat eligendi! Voluptatem quaerat exercitationem laudantium ratione!
      </div>
    </div>
  )
}
