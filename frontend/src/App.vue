
<template>
  <header>
    <nav>
      <RouterLink to="/">CamTrip</RouterLink>
      <RouterLink to="/">Explore</RouterLink>
      <RouterLink to="/trips">My Trips</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
}

nav {
  display: flex;
  gap: 24px;
  padding: 20px 24px;
  background: #f5f5f5;
}

nav a {
  color: #333;
  text-decoration: none;
}

nav a.router-link-active {
  font-weight: bold;
}
</style>
