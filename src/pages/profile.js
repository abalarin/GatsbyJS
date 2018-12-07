import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

// export const query = graphql`
//  query {
//      mongodbTestdbUsers(username:{ eq: "austin"}) {
//        username
//      }
//   }
// `

// console.log(data.mongodbTestdbUsers)

// export const query = graphql`
//  query {
//     allMongodbTestdbUsers {
//       edges {
//         node {
//           id
//           username
//         }
//       }
//     }
//   }
// `
// <ul>
//   <h3>Users</h3>
//   {data.allMongodbTestdbUsers.edges.map(({ node }, index) => (
//     <li>{node.username}</li>
//   ))}
// </ul>
export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div><img src="https://dogecoin.com/imgs/doge.png" alt="Smiley face"/></div>
      <p>Such wow. Very <Link to="//">React</Link>.</p>

    </Layout>
  )

}
