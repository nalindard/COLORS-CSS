const color = document.querySelector(':root').style
color.setProperty('--COLORS', 170)

const setTheme = theme => (document.documentElement.className = theme)
// setTheme('dark')

const theme = window.matchMedia('(prefers-color-scheme: dark)')

window.onload = function () {
  if (theme) {
    setTheme('dark')
  } else {
    setTheme('light')
  }
}

theme.addListener(e => {
  if (e.matches) {
    setTheme('dark')
  } else {
    setTheme('light')
  }
})

// setTheme('light')
