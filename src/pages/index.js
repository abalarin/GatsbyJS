import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import github from "../../public/IMG_4982.png"

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default () => (
  <Layout>
    <h1>Patrick Star on Wumbo </h1>
    <div>
      <p>
      You got it set to "M" for mini, when it should be set to "W" for "wumbo".
      </p>
      <blockquote>
        <p>
          You know, I wumbo, You wumbo, He she me wumbo, wumbo, Wumboing,
          We'll have thee wumbo, Wumborama, Wumbology, The study of wumbo?
          {" "}
          <em>
            Its first grade SpongeBob!
          </em>
        </p>
      </blockquote>
    </div>
    <div>
      <img src="https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/0/0c/Wumbo.gif/revision/latest?cb=20130201021644" alt="Smiley face"/>
    </div>
    <div>
      <button class="primary-button">
        <Link to="/profile/"> Click me </Link>
      </button>
    </div>

    <div class="hr-divider">
      <h2 class="hr-divider-content hr-divider-heading">
        Experiences
      </h2>
    </div>


    <div class="row">
      <div class="col">
        <img src={github} alt="Logo" />
      </div>

      <div class="col">
        <h3> This Thing </h3>
        <p>
          You know, I wumbo, You wumbo, He she me wumbo, wumbo, Wumboing,
          We'll have thee wumbo, Wumborama, Wumbology, The study of wumbo?
        </p>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <h3> Github </h3>

        <p>
          First, we set up the component’s state with a theme property and initialized it to null. Next, we define a chooseTheme() click event handler for choosing a theme or resetting the theme.
        </p>
      </div>
      <div class="col">
        <img src={github} alt="Logo" />
      </div>
    </div>

    <div class="row">
      <div class="col">
        <img src={github} alt="Logo" />
      </div>

      <div class="col">
        <h3> The other Title</h3>
        <p>
          You know, I wumbo, You wumbo, He she me wumbo, wumbo, Wumboing,
          We'll have thee wumbo, Wumborama, Wumbology, The study of wumbo?
        </p>
      </div>
    </div>
  </Layout>
)
