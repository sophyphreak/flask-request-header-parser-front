import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import './style.css'

const IndexPage = () => (
  <>
  <div className="container">
    <h2>API Project: Request Header Parser Microservice</h2>
    <h3>User Story: </h3>
    1. I can get the IP address, preferred languages (from header <code>Accept-Language</code>)<br/> and system infos (from header <code>User-Agent</code>) for my device.

    <h3>Example Usage:</h3>
    <p>
      <a href="https://flask-request-header-parser.andrew-horn-portfolio.life/api/whoami/">
        https://flask-request-header-parser.andrew-horn-portfolio.life/api/whoami/
      </a>
    </p>

    <h3>Example Output:</h3>
    <p>
      <code>{'{"ipaddress":"159.20.14.100","language":"en-US,en;q=0.5",<br>"software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"}'}</code>
    </p>
  </div>
  <div className="footer">
    <p>
      by Andrew Horn
    </p>
  </div>
</>
)

export default IndexPage
