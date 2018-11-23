import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default ( ) => (
  <Layout>
    <h1>Patrick Star on Leedle</h1>
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
            It's first grade SpongeBob!
          </em>
        </p>
      </blockquote>
    </div>

    <div>
      <div><img src="https://thumbs.gfycat.com/AnyRemarkableIndianpalmsquirrel-size_restricted.gif" alt="Smiley face"/></div>
      <button class="primary-button">
      <Link to="/profile/"> Click me </Link>
      </button>
    </div>
  </Layout>
)
