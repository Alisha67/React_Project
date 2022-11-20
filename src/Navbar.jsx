import React from 'react'

const Navbar = () => {
  return (
<>
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"> <span class="square"></span> <span className='name'> Maya Nelson</span>/ PROJECT MANAGER  </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav  mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">About Me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Resume</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Project</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>

    </div>
  </div>
</nav>
</>
  )
}

export default Navbar
